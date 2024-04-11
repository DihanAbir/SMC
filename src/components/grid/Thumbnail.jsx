import { Link } from "react-router-dom";
import { useCreateAnalyticMutation } from "../../redux/features/analytics/analyticApi";

const Thumbnail = ({ item, restaurantId }) => {
  const [createAnalytic] = useCreateAnalyticMutation();

  const btn =
    item?.type === "delightful_dining"
      ? {
          text: item.button_title || "Get Food",
          link: item?.link,
          anotherTab: true,
        }
      : item?.type === "spin_the_wheel"
      ? {
          text: item.button_title || "Get Free Meal",
          link: `/${restaurantId}/spintowin`,
          anotherTab: false,
        }
      : item?.type === "rate_your_experience"
      ? {
          text: item.button_title || "Give Feedback",
          link: `/${restaurantId}/rating`,
          anotherTab: false,
        }
      : item?.type === "competition_2_4_6"
      ? {
          text: item.button_title || "Get Prizes",
          link: `/${restaurantId}/competition`,
          anotherTab: false,
        }
      : null;

  return (
    <div className="menu_lish_slider_wrapper block mr-5">
      <div
        className="menu_list_item w-[271px] bg-cover p-3 bg-no-repeat flex items-center justify-between rounded-2xl"
        style={{
          backgroundImage: `url(${item?.background_image})`,
        }}
      >
        <div className="item_left">
          <h4 className="text-xl text-white font-bold pb-3">{item?.title}</h4>
          {btn && (
            <>
              {btn.anotherTab ? (
                <a
                  href={btn.link}
                  target="_blank"
                  className="py-2 px-3 bg-white text-xs font-medium text-[#BB341F] rounded inline-block"
                  onClick={async () => {
                    await createAnalytic({
                      data: {
                        value: "clicked",
                        type: "thumbnail",
                        key: item.type,
                        restaurantId: restaurantId,
                      },
                    }).unwrap();
                  }}
                >
                  {btn.text}
                </a>
              ) : (
                <Link
                  to={btn.link}
                  state={{ thumbnail: item }}
                  className="py-2 px-3 bg-white text-xs font-medium text-[#BB341F] rounded inline-block"
                  onClick={async () => {
                    await createAnalytic({
                      data: {
                        value: "clicked",
                        type: "thumbnail",
                        key: item.type,
                        restaurantId: restaurantId,
                      },
                    }).unwrap();
                  }}
                >
                  {btn.text}
                </Link>
              )}
            </>
          )}
        </div>
        <div className="item_right flex-shrink-0">
          <div className="food_img">
            <img
              src={item?.banner_image}
              alt="food-img"
              className="w-[120px] h-[120px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
