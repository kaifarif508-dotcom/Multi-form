import React, { useContext } from "react";
import { FormContext } from "../context/ContextForm";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { formData } = useContext(FormContext);

  // 🔥 fallback from localStorage
  const data =
    Object.keys(formData || {}).length > 0
      ? formData
      : JSON.parse(localStorage.getItem("userData")) || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181D23] px-4 py-10">

      <div className="w-full max-w-2xl bg-[#212733] text-white rounded-2xl shadow-lg p-6 sm:p-8">

        <h1 className="mb-6 text-2xl font-bold text-center sm:text-3xl">
          User Information
        </h1>

        <div className="space-y-3 text-sm sm:text-base">

          <p><span className="font-semibold text-green-400">Name:</span> {data.name}</p>
          <p><span className="font-semibold text-green-400">Email:</span> {data.email}</p>
          <p><span className="font-semibold text-green-400">Phone:</span> {data.phone}</p>

          <hr className="my-3 border-gray-600" />

          <p><span className="font-semibold text-green-400">Country:</span> {data.country}</p>
          <p><span className="font-semibold text-green-400">City:</span> {data.city}</p>
          <p><span className="font-semibold text-green-400">Zip Code:</span> {data.code}</p>

          <hr className="my-3 border-gray-600" />

          <p>
            <span className="font-semibold text-green-400">Card:</span>{" "}
            **** **** **** {data.card?.slice(-4)}
          </p>

          <p><span className="font-semibold text-green-400">Expiry:</span> {data.expiry}</p>

          <p><span className="font-semibold text-green-400">CVV:</span> ***</p>

        </div>

        <button
          className="w-full px-4 py-2 mt-6 transition bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => navigate("/")}
        >
          Back Home
        </button>

      </div>
    </div>
  );
};

export default Result;