import { useState } from "react";
import Slider from "react-slick";
import { useAppSelector } from "../../../redux/hooks";
import Thumbnail from "../../grid/Thumbnail";

const MenuList = () => {
  const { data: restaurant } = useAppSelector((state) => state.restaurants);
  const [isSliding, setIsSliding] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    variableWidth: true,
    pauseOnHover: true,
    speed: 500,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: () => {
      setIsSliding(true);
    },
    afterChange: () => {
      setIsSliding(false);
    },
  };

  return (
    <div
      className="slider_item_wrapper bottom_card !bg-cover"
      style={{
        background: `url(${restaurant?.theme_settings?.bottom_tab_color})`,
      }}
    >
      {restaurant?.theme_settings?.cards?.map((i, index) => {
        return (
          <div key={index}>
            <div className="slider_item pb-3">
              <h3 className="text-lg font-semibold text-[#333] pb-2">
                {i?.title}
              </h3>
              <Slider {...settings}>
                {i?.thumbnails?.map((item, index) => (
                  <Thumbnail
                    key={index}
                    item={item}
                    restaurantId={restaurant._id}
                  />
                ))}
              </Slider>
            </div>
          </div>
        );
      })}

      {/* <Link
        to={"/login"}
        className="py-[14px] px-2 rounded-lg border border-[#E98CBA] block text-base font-bold text-[#E98CBA] text-center"
        style={{
          borderColor: `${restaurant?.theme_settings?.btn_color}`,
          color: `${restaurant?.theme_settings?.btn_color}`,
        }}
      >
        Administrator Login
      </Link> */}
    </div>
  );
};

export default MenuList;
