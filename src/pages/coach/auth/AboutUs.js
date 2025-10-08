import { useEffect } from "react";
import HeroAbout from "../../../components/pages/coach/aboutus/HeroAbout";
import OurMission from "../../../components/pages/coach/aboutus/OurMission";
import OurStory from "../../../components/pages/coach/aboutus/OurStory";
import CoachLayout from "../../../layouts/CoachLayout";
import Offer from "../../../components/pages/coach/aboutus/Offer";
import People from "../../../components/pages/coach/aboutus/People";
import Build from "../../../components/pages/coach/aboutus/Build";

const AboutUs = () => {
   const user = { name: "About Us", role: "coach" };

useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}, []);

  return (
    <CoachLayout user={user}>
    <HeroAbout/>
    <OurStory/>
    <OurMission/>
    <Offer/>
    <People/>
    <Build/>
    </CoachLayout>
  );
};

export default AboutUs;
