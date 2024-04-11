import React from "react";

export const Login = () => {
  return (
    <div className="main_layout home">
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-white pb-10">Login</h2>
        <div className="login_info pb-5">
          <div className="email_input pb-5">
            <label htmlFor="" className="text-lg font-normal text-white block">
              Email
            </label>
            <input
              type="email"
              className="outline-none py-[10px] pl-[16px] pr-[5px] rounded-lg bg-white "
              placeholder="demo@email.com"
            />
          </div>

          <div className="password_input">
            <label htmlFor="" className="text-lg font-normal text-white block">
              Password
            </label>
            <input
              type="password"
              className="outline-none py-[10px] pl-[16px] pr-[5px] rounded-lg bg-white "
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button className="py-2 px-3 w-[150px] bg-white text-sm font-medium text-[#BB341F] rounded inline-block">
          Login
        </button>
      </div>
    </div>
  );
};
