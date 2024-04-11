import { Link } from "react-router-dom";
import DiscountIcon from "../assets/discount-icon.svg";
import DiscountIconRight from "../assets/discount-right-arrow.svg";
import GreatImg from "../assets/great-icon.svg";
import { useAppSelector } from "../redux/hooks";

const Great = () => {
  const { data: restaurant } = useAppSelector((state) => state.restaurants);

  return (
    <div className="flex flex-col justify-between h-screen pt-[100px] pb-[63px]">
      <div className="great_icon text-center">
        <div className="flex justify-center mb-5">
          <img src={GreatImg} alt="great-icon" />
        </div>
        <h2 className="text-2xl text-[#200E32] font-bold mb-2">Great!</h2>
        <p className="text-[#200e32cc] font-normal text-base mb-5">
          Thank you for giving us feedback
        </p>
        <Link
          to={`/${restaurant.id}`}
          className="block bg-[#DC6EFB] text-base font-bold text-white py-[14px] rounded-lg text-center w-[283px] mx-auto"
        >
          Go to home page
        </Link>
      </div>

      <div className="discount flex justify-center gap-4">
        <div className="discount_icon">
          <img src={DiscountIcon} alt="discount-icon" />
        </div>
        <div className="discount_text">
          <h4 className="text-[#DC6EFB] text-2xl font-semibold">
            10% Discount
          </h4>
          <p className="text-base font-normal text-[#DC6EFB] flex items-center gap-4">
            On next visit{" "}
            <img src={DiscountIconRight} alt="discount-right-arrow" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Great;
