import FoodImg2 from "../assets/dessart.png";
import FoodBg2 from "../assets/dessertBg.svg";
import FbImg from "../assets/fb.svg";
import FeedBackBg from "../assets/feedbackbg.svg";
import FeedBackImg from "../assets/feedbackimg.png";
import FoodBg from "../assets/food-menu-bg.svg";
import FoodBgTwo from "../assets/food-menu-bg2.svg";
import FoodImg from "../assets/food1.png";
import InstaImg from "../assets/instagram.svg";
import PrizeBg from "../assets/prizebg.svg";
import PrizeImg from "../assets/prizeimg.png";
import SnapChatImg from "../assets/snapchat.svg";
import Spinner from "../assets/spinner.png";
import TiktokImg from "../assets/telegram.svg";
import YoutubeImg from "../assets/youtube.svg";

export const socialMediaIcon = [
  {
    id: 0,
    iconName: "facebook",
    icon: FbImg,
    url: "https://www.facebook.com",
  },
  {
    id: 1,
    iconName: "instagram",
    icon: InstaImg,
    url: "https://www.instagram.com",
  },
  {
    id: 2,
    iconName: "tiktok",
    icon: TiktokImg,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    iconName: "youtube",
    icon: YoutubeImg,
    url: "#",
  },
  {
    id: 4,
    iconName: "snapchat",
    icon: SnapChatImg,
    url: "#",
  },
  {
    id: 5,
    iconName: "facebook",
    icon: FbImg,
    url: "https://www.facebook.com",
  },
  {
    id: 6,
    iconName: "instagram",
    icon: InstaImg,
    url: "https://www.instagram.com",
  },
  {
    id: 7,
    iconName: "tiktok",
    icon: TiktokImg,
    url: "https://www.instagram.com",
  },
  {
    id: 8,
    iconName: "youtube",
    icon: YoutubeImg,
    url: "#",
  },
  {
    id: 9,
    iconName: "snapchat",
    icon: SnapChatImg,
    url: "#",
  },
];

export const sliderItem = [
  {
    sliderBg: FoodBg,
    sliderTitle: "Delightful Dining",
    sliderLinkUrl: "#",
    sliderLinkTitle: "Get Food",
    sliderImg: FoodImg,
    isRating: false,
  },
  {
    sliderBg: FoodBg2,
    sliderTitle: "Delightful Dining",
    sliderLinkTitle: "Get Food",
    sliderImg: FoodImg2,
    isRating: false,
  },
];

export const sliderItem2 = [
  {
    sliderBg: FoodBgTwo,
    sliderTitle: "Spin The Wheel",
    sliderLinkUrl: "/spintowin",
    sliderLinkTitle: "Get Free Meal",
    sliderImg: Spinner,
    isRating: false,
  },
  {
    sliderBg: FeedBackBg,
    sliderTitle: "Rate Your Experience",
    sliderLinkTitle: "Give Feedback",
    sliderLinkUrl: "/rating",
    sliderImg: FeedBackImg,
    isRating: true,
  },
  {
    sliderBg: PrizeBg,
    sliderTitle: "Unlock Free Prizes",
    sliderLinkUrl: "/competition#",
    sliderLinkTitle: "Get Prizes",
    sliderImg: PrizeImg,
    isRating: false,
  },
];

export const cards = [
  {
    title: "Welcome to Our Restaurant",
    thumbnails: [
      {
        type: "delightful_dining",
        banner_image:
          "/src/assets/admin_panel/thumbnails/banner/thumbnail_banner_1.png",
        background_image:
          "/src/assets/admin_panel/thumbnails/bg/thumbnail_1.png",
        title: "Delightful Dining",
        link: "https://www.foodpanda.com.bd/restaurant/t5wi/new-kolapata-restaurant",
      },
      {
        type: "delightful_dining",
        banner_image:
          "/src/assets/admin_panel/thumbnails/banner/thumbnail_banner_2.png",
        background_image:
          "/src/assets/admin_panel/thumbnails/bg/thumbnail_2.png",
        title: "Delightful Dining",
        link: "https://www.foodpanda.com.bd/restaurant/t5wi/new-kolapata-restaurant",
      },
    ],
  },
  {
    title: "Welcome to Our Restaurant",
    thumbnails: [
      {
        type: "spin_the_wheel",
        banner_image:
          "/src/assets/admin_panel/thumbnails/banner/thumbnail_banner_3.png",
        background_image:
          "/src/assets/admin_panel/thumbnails/bg/thumbnail_3.png",
        title: "Spin The Wheel",
      },
      {
        type: "rate_your_experience",
        banner_image:
          "/src/assets/admin_panel/thumbnails/banner/thumbnail_banner_4.png",
        background_image:
          "/src/assets/admin_panel/thumbnails/bg/thumbnail_4.png",
        title: "Rate Your Experience",
      },
      {
        type: "competition_2_4_6",
        banner_image:
          "/src/assets/admin_panel/thumbnails/banner/thumbnail_banner_5.png",
        background_image:
          "/src/assets/admin_panel/thumbnails/bg/thumbnail_5.png",
        title: "Unlock Free Prizes",
      },
    ],
  },
];
