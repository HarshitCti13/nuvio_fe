import { adminPaths } from "../routes/admin";
import { coachPaths } from "../routes/coach";
import { useLocation, useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const imageSRC = {
    [coachPaths.Signup]: "assets/img/signup_img.png",
    [coachPaths.Login]: "assets/img/login_coach.png",
    [coachPaths.CoachSignUpStep1]: "assets/img/coach_signup_img.png",
    [coachPaths.CoachSignUpStep2]: "assets/img/coach_step_1_img.png",
    [coachPaths.CoachSignUpStep3]: "assets/img/coach_step_33_img.png",
    [coachPaths.ResetPassword]: "assets/img/login_coach.png",
    [coachPaths.ForgotPassword]: "assets/img/forgot_password_img_left.png",
    [coachPaths.OTP]: "../assets/img/girl_laptop_1.png",
    [adminPaths.Login]: "../assets/img/login_coach.png",
  };
  return (
    <>
      <section class="ct_signup_main py-3">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xxl-4 col-xl-5 col-lg-5 mb-4 mb-lg-0 d-none d-lg-block">
              <div class="ct_signup_left_img">
                <img src={imageSRC[pathname]} alt="" />
              </div>
            </div>

            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
