import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useCreateAnalyticMutation } from "../../../redux/features/analytics/analyticApi";
import { useAppSelector } from "../../../redux/hooks";

const HeroWrapper = () => {
  const [isSliding, setIsSliding] = useState(false);
  const { data: restaurant } = useAppSelector((state) => state.restaurants);
  const [createAnalytic] = useCreateAnalyticMutation();

  const settingsTwo = {
    className: "slider variable-width",
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,

    beforeChange: () => {
      setIsSliding(true);
    },

    afterChange: () => {
      setIsSliding(false);
    },
  };

  const handleClick = (event, url) => {
    if (isSliding) {
      event.preventDefault();
    }
  };

  return (
    <div className="hero_wrapper px-5 py-[14px]">
      <div className="hero_top mb-2 relative">
        <img
          className="w-full h-[216px] rounded-2xl"
          src={restaurant?.theme_settings?.banner_image}
          alt="hero-img"
        />
        <p className="text-xl font-semibold text-white absolute bottom-3 left-6">
          {restaurant?.city}
        </p>
      </div>

      <div className="hero_location mb-2">
        <h4 className="text-2xl font-bold text-white">
          {restaurant?.restaurant_name}
        </h4>
      </div>

      <div className="hero_social">
        <Slider {...settingsTwo}>
          {restaurant?.social_media?.map((smIcon, index) =>
            smIcon.social_link === "#" || smIcon.social_link === "" ? (
              <button
                key={index}
                onClick={(e) => {
                  handleClick(e, smIcon.social_link);
                }}
                className={`${
                  smIcon.social_link === "#" || smIcon.social_link === ""
                    ? "cursor-not-allowed grayscale"
                    : "grayscale-0"
                } outline-none`}
                style={{ width: 70 }}
              >
                <img src={smIcon.platform_image} alt={`${smIcon.platform}`} />
              </button>
            ) : (
              <Link
                target="_blank"
                key={index}
                to={smIcon.social_link}
                onClick={async (e) => {
                  handleClick(e, smIcon.social_link);

                  await createAnalytic({
                    data: {
                      value: "clicked",
                      type: "social",
                      key: smIcon.platform,
                      restaurantId: restaurant._id,
                    },
                  }).unwrap();
                }}
                className={`${
                  smIcon.social_link === "#" || smIcon.social_link === ""
                    ? "cursor-not-allowed grayscale"
                    : "grayscale-0"
                } outline-none`}
                style={{ width: 70 }}
              >
                <img src={smIcon.platform_image} alt={`${smIcon.platform}`} />
              </Link>
            )
          )}
        </Slider>

        <h1 className="block text-center bg-whie_16 backdrop-blur-2xl py-2 mt-2 rounded-lg text-white text-base font-medium">
          Powered by Smart menu coin
        </h1>
      </div>
    </div>
  );
};

export default HeroWrapper;
