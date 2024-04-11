import { useState } from "react";
import { Link } from "react-router-dom";
import ClapImage from "../assets/competitionclamp.png";
import CompetitionForm from "../components/competition/CompetitionForm";
import HeroWrapper from "../components/home/herowrapper/HeroWrapper";
import { useAppSelector } from "../redux/hooks";

const Competition = () => {
  const { data: restaurant } = useAppSelector((state) => state.restaurants);
  const [changeScreen, setChangeScreen] = useState(false);
  const handleEnterWinBtn = () => {
    setChangeScreen(!changeScreen);
  };

  return (
    <div className="flex flex-col justify-between h-screen overflow-x-hidden">
      {changeScreen ? (
        <>
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="clap_img mb-8">
              <img src={ClapImage} alt="clap-image" />
            </div>
            <div className="text text-center pb-4">
              <p className="text-white text-2xl font-semibold mb-2">
                Thank you for entering competition!
              </p>
              <p className="text-white text-lg font-normal">
                We will let you know if you have own!
              </p>
            </div>

            <Link
              to={`/${restaurant.id}`}
              className="block bg-white w-[200px] font-semibold text-purple-800 text-center py-3 rounded-xl"
            >
              Go Home
            </Link>
          </div>
        </>
      ) : (
        <>
          <HeroWrapper />
          <CompetitionForm handleEnterWinBtn={handleEnterWinBtn} />
        </>
      )}
    </div>
  );
};

export default Competition;
