import Home from "../../pages/coach";
import AboutUs from "../../pages/coach/auth/AboutUs";
import CoachSignUpStep1 from "../../pages/coach/auth/CoachSignUpStep1";
import CoachSignUpStep2 from "../../pages/coach/auth/CoachSignUpStep2";
import CoachSignUpStep3 from "../../pages/coach/auth/CoachSignUpStep3";
import ContactUs from "../../pages/coach/auth/ContactUs";
import CoachDashboard from "../../pages/coach/Dashboard";
import Subscription from "../../pages/coach/subscription";
import Webinar from "../../pages/coach/webinar";
import TakeChance from "../../pages/coach/webinar/take-a-chance";
import { ApplyBecomeCoach } from "../../pages/common/ApplyBecomeCoach";
import { BecomeCoach } from "../../pages/common/BecomeCoach";
import { FindCoach } from "../../pages/common/FindCoach";
import ForgotPassword from "../../pages/common/ForgotPassword";
import Login from "../../pages/common/Login";
import OTP from "../../pages/common/OTP";
import ResetPassword from "../../pages/common/ResetPassword";
import Signup from "../../pages/common/Signup";

export const coachPaths = {
  Signup: "/sign-up",
  CoachSignUpStep1: "/coach-sign-up-step-1",
  CoachSignUpStep2: "/coach-sign-up-step-2",
  CoachSignUpStep3: "/coach-sign-up-step-3",
  OTP: "/otp",
  ResetPassword: "/reset-password",
  Login: "/login",
  ForgotPassword: "/forgot-password",
  Webinar: "/",
  ContactUs: "/contact-us",
  AboutUs: "/about-us",
  BecomeCoach: "/become-a-coach",
  ApplyBecomeCoach: "/apply-become-a-coach",
  FindCoach: "/find-a-coach",
  CoachSubscription: '/coach-subscription',
  CoachDashboard: '/dashboard'
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
    name: "Subscription",
    path: coachPaths?.CoachSubscription,
    element: <Subscription />,
    isPrivate: true,
  },
  {
    name: "Coach Dashboard",
    path: coachPaths?.CoachDashboard,
    element: <CoachDashboard />,
    isPrivate: true
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
    name: "Signup",
    path: coachPaths.Signup,
    element: <Signup />,
    isPrivate: false,
  },
  {
    name: "Login",
    path: coachPaths.Login,
    element: <Login />,
    isPrivate: false,
  },
  {
    name: "ForgotPassword",
    path: coachPaths.ForgotPassword,
    element: <ForgotPassword />,
    isPrivate: false,
  },
  {
    name: "OTP",
    path: coachPaths.OTP,
    element: <OTP />,
    isPrivate: false,
  },
  {
    name: "CoachSignUpStep1",
    path: coachPaths.CoachSignUpStep1,
    element: <CoachSignUpStep1 />,
    isPrivate: false,
  },
  {
    name: "CoachSignUpStep2",
    path: coachPaths.CoachSignUpStep2,
    element: <CoachSignUpStep2 />,
    isPrivate: false,
  },
  {
    name: "CoachSignUpStep3",
    path: coachPaths.CoachSignUpStep3,
    element: <CoachSignUpStep3 />,
    isPrivate: false,
  },
  {
    name: "ResetPassword",
    path: coachPaths.ResetPassword,
    element: <ResetPassword />,
    isPrivate: false,
  },
  {
    name: "BecomeCoach",
    path: coachPaths.BecomeCoach,
    element: <BecomeCoach />,
    isPrivate: false,
  },
  {
    name: "ApplyBecomeCoach",
    path: coachPaths.ApplyBecomeCoach,
    element: <ApplyBecomeCoach />,
    isPrivate: false,
  },
  {
    name: "FindCoach",
    path: coachPaths.FindCoach,
    element: <FindCoach />,
    isPrivate: false,
  },
  //  {
  //   name: "TakeChance",
  //   path: coachPaths.TakeChance,
  //   element: <TakeChance />,
  //   isPrivate: false,
  // },
];
