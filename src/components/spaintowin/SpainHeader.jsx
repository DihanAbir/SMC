import React from "react";
import { useLocation } from "react-router-dom";

const SpainHeader = ({ emailRegex, setEmail, isChecked, handleChecked }) => {
  const { state } = useLocation();

  return (
    <div className="spintowheel_header text-center p-5">
      <h4 className="text-white text-3xl font-bold mb-2">SpainToWin</h4>
      <p className="text-base font-normal text-[#F3F4F6] mb-5">
        Enter your email to spin the wheel <br /> and see what you can win!
      </p>
      <input
        className="outline-none p-4 bg-[#ffffff6e] rounded-lg text-[#ffffffd4] placeholder:text-[#ffffffd4] mb-3"
        type="email"
        placeholder="Enter your Email"
        onChange={(e) => {
          const { value } = e.target;
          if (value === "" || emailRegex.test(value)) {
            setEmail(value);
          }
        }}
      />

      <div className="text-center">
        <label
          htmlFor="mark"
          className="flex justify-center gap-2 items-center cursor-pointer"
        >
          <div className="ml-1 bg-white p-1 rounded">
            {isChecked ? (
              <svg
                onClick={handleChecked}
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                className=""
              >
                <path
                  d="M12.1666 3.5L5.74992 9.91667L2.83325 7"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <div onClick={handleChecked} className="w-[15px] h-[14px]"></div>
            )}
          </div>
          <span
            className="text-base text-[#E3E3E3] font-normal"
            onClick={handleChecked}
          >
            I agree to the{" "}
            <a
              href={state?.thumbnail?.terms_link}
              target="_blank"
              className="hover:underline"
            >
              Terms & Condition
            </a>
          </span>
        </label>
      </div>
    </div>
  );
};

export default SpainHeader;
