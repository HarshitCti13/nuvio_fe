import Home from "../../pages/coach";
import AboutUs from "../../pages/coach/auth/AboutUs";
import ContactUs from "../../pages/coach/auth/ContactUs";
import Webinar from "../../pages/coach/webinar";
import TakeChance from "../../pages/coach/webinar/take-a-chance";

export const coachPaths = {
  // Home:"/coach",
  Webinar: "/",
  ContactUs: "/contact-us",
  AboutUs: "/about-us",
  // TakeChance:"/coach/take-a-chance",
};

export const AllCoachRoutes = [
  {
    name: "Home",
    path: coachPaths.Home,
    element: <Home />,
    isPrivate: false,
  },
  {
    name: "Webinar",
    path: coachPaths.Webinar,
    element: <Webinar />,
    isPrivate: false,
  },
  {
    name: "ContactUs",
    path: coachPaths.ContactUs,
    element: <ContactUs />,
    isPrivate: false,
  },
   {
    name: "ContactUs",
    path: coachPaths.AboutUs,
    element: <AboutUs />,
    isPrivate: false,
  },
  //  {
  //   name: "TakeChance",
  //   path: coachPaths.TakeChance,
  //   element: <TakeChance />,
  //   isPrivate: false,
  // },
];
