import ReactConfetti from "react-confetti";
import { Link } from "react-router-dom";
import cuponImages from "../../assets/tenpercentcopon.svg";
import { useAppSelector } from "../../redux/hooks";
const SelecetedPrize = ({ own }) => {
  const { data: restaurant } = useAppSelector((state) => state.restaurants);

  return (
    <div className="selected-prize-container">
      <ReactConfetti className="max-w-[385px] w-full mx-auto" />
      <div className="selected-prize text-center ">
        <div className="titleWin flex flex-col justify-center items-center h-screen">
          {/* CONGRATULATIONS!!! <br /> YOU HAVE WON <br /> {selectedPrize} !!! */}
          <img
            className="max-w-[300px] w-full mb-[68px]"
            src={cuponImages}
            alt="cupon-images"
          />
          <div className="congo_item mb-8">
            <h2 className="text-2xl font-semibold text-white pb-2">
              Congratulations!
            </h2>
            <p className="text-lg font-normal text-white">
              You have own the ‘{own}’
            </p>
          </div>
          <div className="text_to_copy relative mb-10">
            <input
              type="text"
              className="outline-none py-[10px] pl-[16px] pr-[5px] rounded-lg bg-white "
              placeholder="PQWECFGT98"
            />
            <button className="copy bg-[#DC6EFB] px-[14px] py-[5px] text-lg font-normal text-white rounded absolute top-1/2 -translate-y-1/2 right-[5px]">
              Copy
            </button>
          </div>

          <Link
            to={`/${restaurant?.id}`}
            className="text-base font-semibold text-white"
          >
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelecetedPrize;
