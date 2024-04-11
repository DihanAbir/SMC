import React from 'react'

const SpinBtn = ({ handleSpinClick, email }) => {
  return (
    <div className="flex justify-center mt-[100px]">
      <button
        onClick={handleSpinClick}
        disabled={!email} // Disable button if email is empty
        className={`text-base bg-white w-[203px] py-[14px] px-[10px] font-bold rounded-lg ${
          email ? "text-[#DC6EFB]" : "text-gray-400"
        } ${email ? "bg-white" : "bg-slate-200"}`}>
        Spin
      </button>
    </div>
  );
};

export default SpinBtn