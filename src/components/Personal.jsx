import React, { useContext } from 'react'
import { FormContext } from '../context/ContextForm'
import { useNavigate } from 'react-router-dom'

const Personal = () => {
  const navigate = useNavigate()

  const { formData = {}, setFormData } = useContext(FormContext)

  const { name , email, phone  } = formData

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("please enter name");
      return;
    }

    if (!email.trim()) {
      alert("please enter email");
      return;
    }

    if (!/^(03)[0-9]{9}$/.test(phone)) {
      alert("please enter valid phone");
      return;
    }

    navigate("/address");
  }

 return (
  <div className='min-h-screen flex items-center justify-center bg-[#1b202a] px-4 py-10'>

    <div className='w-full max-w-xl bg-[#212733] text-gray-300 shadow-lg rounded-2xl p-5 sm:p-8'>

      <h1 className='text-xl font-semibold text-white sm:text-2xl'>
        Step-1
      </h1>

      <h1 className='mt-4 text-lg font-semibold text-gray-400 sm:mt-6 sm:text-xl'>
        Personal Information
      </h1>

      <form onSubmit={SubmitHandler} className='mt-6 space-y-4 sm:space-y-5'>

        <input
          className='w-full px-3 py-2 sm:py-3 text-base sm:text-lg border border-gray-500 bg-[#212733] outline-none text-gray-300 rounded-md focus:border-blue-500 transition'
          placeholder='Name'
          value={name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          className='w-full px-3 py-2 sm:py-3 text-base sm:text-lg border border-gray-500 bg-[#212733] outline-none text-gray-300 rounded-md focus:border-blue-500 transition'
          placeholder='Email'
          value={email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          className='w-full px-3 py-2 sm:py-3 text-base sm:text-lg border border-gray-500 bg-[#212733] outline-none text-gray-300 rounded-md focus:border-blue-500 transition'
          placeholder='Phone'
          maxLength={11}
          value={phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 11);
            setFormData({ ...formData, phone: value });
          }}
        />

        <button
          type='submit'
          className='w-full px-6 py-2 text-white transition bg-blue-500 rounded-md sm:w-auto hover:bg-blue-600'
        >
          Next
        </button>

      </form>

    </div>
  </div>
)
}

export default Personal