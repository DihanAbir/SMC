import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import CloseModalIcon from "../../../assets/closemodal-icon.svg";
import StarEmpty from "../../../assets/star-empty.svg";
import StarFull from "../../../assets/star-full.svg";
import { useCreateReviewMutation } from "../../../redux/features/reviews/reviewApi";
import { useAppSelector } from "../../../redux/hooks";

const StarRating = () => {
  const [createReview] = useCreateReviewMutation();
  const { data: restaurant } = useAppSelector((state) => state.restaurants);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const [isSubmitEnabled, setSubmitEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpecialModalOpen, setIsSpecialModalOpen] = useState(false);

  useEffect(() => {
    setSubmitEnabled(rating >= 1 && rating <= 4 && description);
  }, [rating, description]);

  const handleChange = (rate) => {
    setRating(rate);
    if (rate === 5) {
      setIsSpecialModalOpen((prev) => !prev);
    }
  };

  const handleSubmit = async () => {
    const res = await createReview({
      data: {
        rating,
        description,
        restaurant: restaurant._id,
      },
    }).unwrap();

    if (res.success) {
      navigate(`/${restaurant.id}/great`);
    }
  };

  if (!state?.thumbnail && state?.thumbnaul !== "rate_your_experience") {
    return <Navigate to={`/${restaurant.id}`} />;
  }

  return (
    <div className="bottom_card">
      <h2 className="text-[#1C1028] text-2xl font-bold text-center pb-2">
        Rate Us
      </h2>

      <p className="text-base font-normal text-center text-[#200e32d9] pb-10">
        How would you describe your <br /> overall experience with our <br />{" "}
        service today?
      </p>

      <div className="flex justify-center mb-5">
        <Rating
          onChange={handleChange}
          initialRating={rating}
          emptySymbol={
            <img src={StarEmpty} className="icon mx-1" alt="empty star" />
          }
          fullSymbol={
            <img src={StarFull} className="icon mx-1" alt="full star" />
          }
        />
      </div>

      <div className="ratingButton">
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen((prev) => !prev)}
            className={`${
              rating >= 1 && rating <= 4 ? "text-[#C74EE9] mb-4" : "hidden"
            }`}
          >
            Write note
          </button>
        </div>
        <button
          className={`block text-center bg-[#DC6EFB] w-full py-3 rounded-lg text-white text-base font-bold ${
            isSubmitEnabled ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isSubmitEnabled}
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal flex justify-center items-center fixed bottom-0 left-0 w-full h-full bg-[#75757557] z-10">
          <div className="modal-content">
            <div className="bg-white relative bottom-[-150px] left-[50%] -translate-x-2/4 max-w-[325px] w-full py-[32px] px-[24px] rounded-2xl">
              <span
                className="close cursor-pointer absolute right-0 top-[-30px] bg-red-500 w-6 text-center rounded-full text-white"
                onClick={() => setIsModalOpen((prev) => !prev)}
              >
                <img src={CloseModalIcon} alt="closeicon" />
              </span>
              <h2 className="text-center text-2xl font-medium text-[#090F24] pb-6">
                What could we have <br /> better?
              </h2>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-[100px] border border-[#ce387b33] rounded-lg outline-none py-[10px] px-3 mb-6 placeholder:text-sm placeholder:font-normal"
                placeholder="Please provide us your feedback..."
              />
              <button
                disabled={!isSubmitEnabled}
                onClick={handleSubmit}
                className={`bg-[#DC6EFB] block text-center w-full py-3 rounded-lg text-white text-base font-bold ${
                  isSubmitEnabled ? "" : "opacity-50 cursor-not-allowed"
                } `}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {isSpecialModalOpen && (
        <div className="modal flex justify-center items-center fixed bottom-0 left-0 w-full h-full bg-[#75757557] z-10">
          <div className="modal-content">
            <div className="bg-white absolute bottom-[80px] left-[50%] -translate-x-2/4 max-w-[325px] w-full py-[32px] px-[24px] rounded-2xl">
              <h2 className="text-center text-2xl font-medium text-[#090F24] pb-6">
                Please could you kindly <br /> leave us a Google <br /> Review
              </h2>

              <button
                onClick={() => {
                  window.open(state?.thumbnail?.google_review_url, "_blank");
                  navigate(`/${restaurant.id}/great`);
                }}
                className={`bg-[#DC6EFB] w-full py-3 rounded-lg text-white text-base font-bold mb-3`}
              >
                Review
              </button>
              <button
                onClick={() => setIsSpecialModalOpen((prev) => !prev)}
                className={`border border-[#DC6EFB] w-full py-3 rounded-lg text-[#DC6EFB] text-base font-bold `}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarRating;
