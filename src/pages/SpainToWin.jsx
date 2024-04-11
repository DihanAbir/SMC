import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import BackBtn from "../components/spaintowin/BackBtn";
import SelecetedPrize from "../components/spaintowin/SelecetedPrize";
import SpainHeader from "../components/spaintowin/SpainHeader";
import SpainToWheel from "../components/spaintowin/SpainToWheel";
import SpinBtn from "../components/spaintowin/SpinBtn";
import { useCreateAnalyticMutation } from "../redux/features/analytics/analyticApi";
import { useAppSelector } from "../redux/hooks";

const SpainToWin = () => {
  const { data: restaurant } = useAppSelector((state) => state.restaurants);
  const { state } = useLocation();
  const [createAnalytic] = useCreateAnalyticMutation();
  const [isChecked, setIsChecked] = useState(false);
  const [spinCompleted, setSpinCompleted] = useState(false);
  const [showWheel, setShowWheel] = useState(true);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [hasSpin, setHasSpin] = useState(false);
  const [email, setEmail] = useState("");
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const [showControls, setShowControls] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  useEffect(() => {
    const startCountdown = () => {
      setShowCountdown(true);
      const timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        setShowCountdown(false);
        handleSpinClick();
      }, 3000);
    };

    if (hasSpin && !spinCompleted) {
      startCountdown();
    }
  }, [hasSpin, spinCompleted]);

  const handleBack = () => {
    Option;
    navigate(-1);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleSpinClick = async () => {
    // console.log(state.thumbnail.wheel_rows);
    if (!mustSpin && email) {
      const newPrizeNumber = Math.floor(
        Math.random() * state.thumbnail.wheel_rows.length
      );
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setHasSpin(true);
      setSpinCompleted(false);
      setShowControls(false); // Hide controls when spinning starts

      await createAnalytic({
        data: {
          value: "clicked",
          type: "spin",
          key: state.thumbnail.wheel_rows[newPrizeNumber],
          restaurantId: restaurant._id,
        },
      }).unwrap();
    }
  };

  if (!state?.thumbnail && state?.thumbnaul !== "spin_the_wheel") {
    return <Navigate to={`/${restaurant.id}`} />;
  }

  return (
    <>
      {spinCompleted && prizeNumber ? (
        <SelecetedPrize own={state.thumbnail.wheel_rows[prizeNumber]} />
      ) : (
        <>
          {showControls ? (
            <>
              <BackBtn handleBack={handleBack} />
              <SpainHeader
                emailRegex={emailRegex}
                setEmail={setEmail}
                isChecked={isChecked}
                handleChecked={handleChecked}
              />
            </>
          ) : (
            <div className="pt-[100px] pb-[84px] flex justify-center">
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-2xl font-semibold text-white mb-4">
                  Count In
                </h4>
                <p className="w-[63px] h-[63px] bg-[#ffffff4b] text-white flex justify-center items-center rounded-full">
                  {countdown}
                </p>
              </div>
            </div>
          )}
        </>
      )}
      {showWheel && !spinCompleted && (
        <>
          <SpainToWheel
            mustSpin={mustSpin}
            prizeNumber={prizeNumber}
            data={state?.thumbnail?.wheel_rows?.map((i, index) => ({
              option: i,
              style: {
                backgroundColor: index % 2 === 0 ? "white" : "red",
                textColor: "black",
              },
            }))}
            setMustSpin={setMustSpin}
            setSpinCompleted={setSpinCompleted}
          />
          {showControls && (
            <SpinBtn handleSpinClick={handleSpinClick} email={email} />
          )}
        </>
      )}
    </>
  );
};

export default SpainToWin;
