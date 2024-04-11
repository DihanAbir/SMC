/* eslint-disable react/prop-types */
import { useState } from "react";

import { useLocation } from "react-router-dom";
import { useCreateCompetitionsMutation } from "../../redux/features/competitions/competitionApi";
import { useAppSelector } from "../../redux/hooks";

const CompetitionForm = ({ handleEnterWinBtn }) => {
  const { state } = useLocation();
  const { data: restaurant } = useAppSelector((state) => state.restaurants);
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const [createCompetition] = useCreateCompetitionsMutation();

  const handleEnterToWin = async () => {
    const res = await createCompetition({
      data: {
        name,
        email,
        mobile: phoneNumber,
        restaurant: restaurant._id,
      },
    }).unwrap();

    if (res?.success) {
      handleEnterWinBtn();
    }
  };

  return (
    <div className="bottom_card">
      <input
        className="border border-[#dc6efb33] w-full py-4 px-3 outline-none rounded-lg text-[#200e3280] text-sm font-normal mb-[14px]"
        type="text"
        placeholder="Esther Howard"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border border-[#dc6efb33] w-full py-4 px-3 outline-none rounded-lg text-[#200e3280] text-sm font-normal mb-[14px]"
        type="email"
        placeholder="example@rmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border border-[#dc6efb33] w-full py-4 px-3 outline-none rounded-lg text-[#200e3280] text-sm font-normal mb-5"
        type="number"
        placeholder="+44 7911 123456"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <div className="text-center pb-10">
        <label
          htmlFor="mark"
          className="flex justify-center gap-2 items-center cursor-pointer"
        >
          <div
            className="ml-1 bg-[#DC6EFB] p-[2px] rounded"
            style={{
              backgroundColor: `${restaurant?.theme_settings?.btn_color}`,
            }}
          >
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
            className="text-base text-[#200e3280] font-normal"
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

      <div className="win_btn text-center">
        <button
          onClick={handleEnterToWin}
          className="text-base font-bold text-white bg-[#DC6EFB] py-[14px] w-[268px] rounded-lg disabled:bg-opacity-50 disabled:cursor-not-allowed"
          style={{
            background: `${`${restaurant?.theme_settings?.btn_color}`}`,
          }}
          disabled={!(name && email && phoneNumber && isChecked)}
        >
          Enter to win
        </button>
      </div>
    </div>
  );
};

export default CompetitionForm;
