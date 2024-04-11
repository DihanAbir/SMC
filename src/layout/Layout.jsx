import { Outlet, useLocation, useParams } from "react-router-dom";
// import competitionBg from "../assets/competitionbg.svg";
import { useEffect, useState } from "react";
import spinWheelBg from "../assets/spinwheelbg.svg";
import { setRestaurant } from "../redux/features/restaurants/restaurantSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Layout = () => {
  const path = useLocation();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data: restaurant } = useAppSelector((state) => state.restaurants);
  const [notFound, setNotFound] = useState(true);

  // useEffect(() => {
  //   fetch(`https://unizz-data-server.vercel.app/listings/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (Object.keys(data).length !== 0) {
  //         dispatch(setRestaurant(data));
  //         setNotFound(false);
  //       }
  //     });
  // }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/v1/restaurants/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data).length !== 0) {
          dispatch(setRestaurant(data.data));
          setNotFound(false);
        }
      });
  }, [id]);

  if (notFound) return <div></div>;

  const bgImage = path.pathname.endsWith("great")
    ? "#fff"
    : path.pathname.endsWith("spintowin")
    ? `url(${spinWheelBg})`
    : `url(${restaurant?.theme_settings?.theme_color})`;

  return (
    <div
      className="main_layout !bg-cover"
      style={{
        background: `${bgImage}`,
      }}
    >
      <Outlet />
    </div>
  );
};

export default Layout;

// spintowin
