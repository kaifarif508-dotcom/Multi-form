import React, { useContext } from "react";
import { FormContext } from "../context/ContextForm";
import { useNavigate } from "react-router-dom";

const CVV = () => {
  const {formData,setFormData} = useContext(FormContext)
  const {card,expiry,cvv} = (formData)
   const navigate = useNavigate()
  

  const submitHandler = (e) => {
    e.preventDefault();

    // Card validation (16 digits check, spaces ignore karke)
    const cardDigits = card.replace(/\s/g, "");
    if (cardDigits.length !== 16) {
      alert("Invalid card number");
      return;
    }

    // Expiry validation (MM/YY format)
    if (expiry.length !== 5) {
      alert("Invalid expiry (MM/YY)");
      return;
    }
    

    const month = parseInt(expiry.slice(0, 2));
    if (month < 1 || month > 12) {
      alert("Invalid expiry month");
      return;
    }

    // CVV validation
    if (cvv.length < 3 || cvv.length > 4) {
      alert("Invalid CVV");
      return;
    }

    
    navigate("/review")
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-[#181D23] px-4 py-10">

    <div className="w-full max-w-xl bg-[#212733] text-gray-300 shadow-md rounded-2xl p-5 sm:p-8">

      <h1 className="text-xl font-semibold text-white sm:text-2xl">
        Step-3
      </h1>

      <h1 className="mt-3 text-lg font-semibold text-gray-400 sm:mt-5 sm:text-xl">
        Payment
      </h1>

      <form onSubmit={submitHandler} className="mt-6 space-y-5">

        {/* Card Number */}
        <div className="flex flex-col gap-1">
          <label className="text-base text-gray-400 sm:text-lg">
            Card Number
          </label>
          <input
            className="w-full px-3 py-2 sm:py-3 text-base sm:text-lg border border-gray-600 bg-[#212733] outline-none rounded-md text-gray-200 focus:border-blue-500"
            type="text"
            placeholder="4234 3453 3566 2243"
            maxLength={19}
            value={card}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 16);
              const formatted = value.replace(/(.{4})/g, "$1 ").trim();
              setFormData({ ...formData, card: formatted });
            }}
          />
        </div>

        {/* Expiry + CVV */}
        <div className="flex flex-col gap-4 sm:flex-row">

          {/* Expiry */}
          <div className="flex flex-col w-full gap-1">
            <label className="text-base text-gray-400 sm:text-lg">
              Expiry
            </label>
            <input
              className="w-full px-3 py-2 sm:py-3 text-base sm:text-lg border border-gray-600 bg-[#212733] outline-none rounded-md text-gray-200 focus:border-blue-500"
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              value={expiry}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "").slice(0, 4);

                if (value.length >= 3) {
                  value = value.slice(0, 2) + "/" + value.slice(2);
                }

                setFormData({ ...formData, expiry: value });
              }}
            />
          </div>

          {/* CVV */}
          <div className="flex flex-col w-full gap-1">
            <label className="text-base text-gray-400 sm:text-lg">
              CVV
            </label>
            <input
              className="w-full px-3 py-2 sm:py-3 text-base sm:text-lg border border-gray-600 bg-[#212733] outline-none rounded-md text-gray-200 focus:border-blue-500"
              type="password"
              placeholder="123"
              inputMode="numeric"
              maxLength={4}
              value={cvv}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 4);
                setFormData({ ...formData, cvv: value });
              }}
            />
          </div>

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

export default CVV;