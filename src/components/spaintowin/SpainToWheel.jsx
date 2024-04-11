import React from "react";
import { Wheel } from "react-custom-roulette";
import BottomBg from "../../assets/bottm_bg.svg";
import WheelBG from "../../assets/wheel_bg.svg";
import WheelPin from "../../assets/wheelpin.png";

const SpainToWheel = ({
  mustSpin,
  prizeNumber,
  data,
  setMustSpin,
  setSpinCompleted,
}) => {
  return (
    <div className="flex justify-center max-w-[320px] w-full mx-auto relative mt-10">
      <Wheel
        style={{ width: "320px", height: "320px" }}
        outerBorderWidth={0}
        innerBorderWidth={0}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        spinDuration={0.3}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          setSpinCompleted(true);
        }}
      />

      <div className="wheel_ping">
        <img
          className="absolute left-1/2 -translate-x-1/2 z-10"
          src={WheelPin}
          alt="wheel-pin"
        />
      </div>
      <div className="wheel_bg">
        <img
          className="w-[288px] absolute left-[16px] top-[-50px] z-[1]"
          src={WheelBG}
          alt="bg"
        />
      </div>
      <div className="wheel_bottom">
        <img
          className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 "
          src={BottomBg}
          alt=""
        />
      </div>
    </div>
  );
};

export default SpainToWheel;
