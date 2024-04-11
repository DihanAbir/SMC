import { useLocation } from "react-router-dom";
import StarRating from "../components/rating/startrating/StarRating";
import HeroWrapper from "./../components/home/herowrapper/HeroWrapper";
const Rating = () => {
  const { state } = useLocation();

  console.log(state);
  return (
    <div className="flex flex-col justify-between h-screen">
      <HeroWrapper />
      <StarRating />
    </div>
  );
};

export default Rating;
