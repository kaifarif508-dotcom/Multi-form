import React, { useContext} from "react";
import { FormContext } from "../context/ContextForm";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate =useNavigate()
  const {formData,setFormData} = useContext(FormContext)
  const {city,country,code} = formData

  const submitHandler = (e) => {
    e.preventDefault();

    if (!country.trim()) {
      alert("Please enter country");
      return;
    }

    if (!city.trim()) {
      alert("Please enter city");
      return;
    }

    if (!code.trim()) {
      alert("Please enter zip code");
      return;
    }

    if (code.length < 4 || code.length > 6) {
      alert("Invalid zip code (4-6 digits required)");
      return;
    }

    
    navigate("/Cvv")
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-[#181D23] px-4 py-10">

    <div className="w-full max-w-xl bg-[#212733] shadow-md text-gray-300 rounded-2xl p-5 sm:p-8">

      <h1 className="text-xl font-semibold text-white sm:text-2xl">
        Step-2
      </h1>

      <h1 className="mt-3 text-lg font-semibold text-gray-400 sm:mt-5 sm:text-xl">
        Address
      </h1>

      <form onSubmit={submitHandler} className="mt-6 space-y-5">

        {/* Country */}
        <div className="flex flex-col gap-1">
          <label className="text-base text-gray-400 sm:text-lg">
            Country
          </label>
          <input
            className="w-full px-3 py-2 sm:py-3 text-base sm:text-lg border border-gray-600 bg-[#212733] outline-none rounded-md text-gray-200 focus:border-blue-500"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          />
        </div>

        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="text-base text-gray-400 sm:text-lg">
            City
          </label>
          <input
            className="w-full px-3 py-2 sm:py-3 text-base sm:text-lg border border-gray-600 bg-[#212733] outline-none rounded-md text-gray-200 focus:border-blue-500"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
          />
        </div>

        {/* Zip Code */}
        <div className="flex flex-col gap-1">
          <label className="text-base text-gray-400 sm:text-lg">
            Zip Code
          </label>
          <input
            className="w-full px-3 py-2 sm:py-3 text-base sm:text-lg border border-gray-600 bg-[#212733] outline-none rounded-md text-gray-200 focus:border-blue-500"
            type="text"
            placeholder="Code"
            value={code}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 6);
              setFormData({ ...formData, code: value });
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full px-5 py-2 text-black bg-gray-300 rounded-md sm:w-auto"
          >
            Back
          </button>

          <button
            type="submit"
            className="w-full px-5 py-2 text-white transition bg-blue-500 rounded-md sm:w-auto hover:bg-blue-600"
          >
            Next
          </button>

        </div>

      </form>

    </div>
  </div>
)
};

export default Address;