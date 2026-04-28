import React, { useContext } from 'react'
import { FormContext } from '../context/ContextForm'
import { useNavigate } from 'react-router-dom'

const Reviw = () => {
  const navigate =useNavigate()

  const {formData,setFormData} = useContext(FormContext)


const {
  name = "",
  email = "",
  phone = "",
  city = "",
  country = "",
  code = "",
  card = "",
  expiry = "",
  cvv = ""
} = formData || {};
const submitHandler = (e) => {
  e.preventDefault();

  try {
    console.log("SUBMIT CLICKED");

    if (!name.trim()) return alert("please enter name");
    if (!email.trim()) return alert("please enter email");
    if (!phone.startsWith("03") || phone.length !== 11)
      return alert("invalid phone");
    if (!city.trim()) return alert("enter city");
    if (!country.trim()) return alert("enter country");
    if (code.length < 4 || code.length > 6)
      return alert("invalid code");

    const cardDigits = card.replace(/\s/g, "");
    if (cardDigits.length !== 16)
      return alert("invalid card");

    const month = parseInt(expiry.slice(0, 2));
    if (month < 1 || month > 12)
      return alert("invalid expiry");

    if (cvv.length < 3 || cvv.length > 4)
      return alert("invalid cvv");

    console.log("ADDING USER...");

    // 🔥 LOCAL STORAGE SAVE
    const userData = {
      name,
      email,
      phone,
      country,
      city,
      code,
      card,
      expiry,
      cvv,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    console.log("SAVED TO LOCALSTORAGE");

    navigate("/result");

  } catch (error) {
    console.error("SUBMIT ERROR:", error);
  }
};
 return (
  <div className="min-h-screen flex items-center justify-center bg-[#181D23] px-4 py-10">

    <div className="w-full max-w-3xl bg-[#212733] text-gray-300 shadow-md rounded-2xl p-5 sm:p-8">

      <h1 className="text-xl font-bold text-white sm:text-2xl">
        Last Step
      </h1>

      <h1 className="mt-3 text-lg font-semibold text-gray-400 sm:mt-5 sm:text-xl">
        Review Your Data
      </h1>

      <form onSubmit={submitHandler} className="mt-6 space-y-6">

        {/* Personal Info */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div>
            <label className="text-gray-400">Name</label>
            <input className="w-full mt-1 px-3 py-2 bg-[#212733] border border-gray-600 rounded-md"
              value={name} readOnly />
          </div>

          <div>
            <label className="text-gray-400">Email</label>
            <input className="w-full mt-1 px-3 py-2 bg-[#212733] border border-gray-600 rounded-md"
              value={email} readOnly />
          </div>

          <div>
            <label className="text-gray-400">Phone</label>
            <input className="w-full mt-1 px-3 py-2 bg-[#212733] border border-gray-600 rounded-md"
              value={phone} readOnly />
          </div>

        </div>

        {/* Address */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div>
            <label className="text-gray-400">Country</label>
            <input className="w-full mt-1 px-3 py-2 bg-[#212733] border border-gray-600 rounded-md"
              value={country} readOnly />
          </div>

          <div>
            <label className="text-gray-400">City</label>
            <input className="w-full mt-1 px-3 py-2 bg-[#212733] border border-gray-600 rounded-md"
              value={city} readOnly />
          </div>

          <div>
            <label className="text-gray-400">Zip Code</label>
            <input className="w-full mt-1 px-3 py-2 bg-[#212733] border border-gray-600 rounded-md"
              value={code} readOnly />
          </div>

        </div>

        {/* Payment */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div className="sm:col-span-2">
            <label className="text-gray-400">Card Number</label>
            <input className="w-full mt-1 px-3 py-2 bg-[#212733] border border-gray-600 rounded-md"
              value={card} readOnly />
          </div>

          <div>
            <label className="text-gray-400">Expiry</label>
            <input className="w-full mt-1 px-3 py-2 bg-[#212733] border border-gray-600 rounded-md"
              value={expiry} readOnly />
          </div>

          <div>
            <label className="text-gray-400">CVV</label>
            <input className="w-full mt-1 px-3 py-2 bg-[#212733] border border-gray-600 rounded-md"
              value={cvv} readOnly />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-between">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full px-5 py-2 text-black bg-gray-300 rounded-md sm:w-auto"
          >
            Back
          </button>

          <button
            type="submit"
            className="w-full px-5 py-2 text-white transition bg-yellow-600 rounded-md sm:w-auto hover:bg-yellow-700"
          >
            Submit
          </button>

        </div>

      </form>

    </div>
  </div>
)
}

export default Reviw
