import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HeroWrapper from "../components/home/herowrapper/HeroWrapper";
import MenuList from "../components/home/menulist/MenuList";

const Home = () => {
  return (
    <div className="flex flex-col justify-between h-screen overflow-x-hidden">
      <HeroWrapper />
      <MenuList />
    </div>
  );
};

export default Home;
