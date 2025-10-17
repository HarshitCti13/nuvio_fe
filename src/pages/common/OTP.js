import { useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import Loader from "../../components/loader";
import { coachPaths } from "../../routes/coach";
import AuthLayout from "../../layouts/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useAppNavigate from "../../components/hooks/useAppNavigate";
import { shareOtp } from "../../redux/features/coach/actions/authAction";

const OTP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { goTo } = useAppNavigate();
  const [otp, setOtp] = useState("");
  const dbCode = location?.state?.data.code || "";
  const email = location?.state?.data.email || "";
  const { isLoading } = useSelector((state) => state.coach.auth);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      const callback = (response) => {
        if (response.success) {
          navigate(coachPaths.ResetPassword, {
            state: { data: { code: dbCode, email } },
          });
        }
      };

      dispatch(shareOtp({ payload: { email, otp }, callback }));
    } else {
      toast.error("Please enter the full OTP");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthLayout>
      <div class="col-xxl-8 col-xl-7 col-lg-7 mb-4 mb-lg-0 mx-auto pe-0">
        <div class="ct_signup_right_content px-3 ct_custom_scroll pe-5">
          <div class="ct_signup_logo ct_mb_30">
            <img src="../assets/img/Nuvio_logo.png" alt="" />
          </div>
          <div class="mt-0 text-center">
            <h2 class="ct_fs_32  mb-2 ct_darkblue_text">Password Reset</h2>
            <p
              class="mb-0 ct_darkblue_text mx-auto"
              style={{ maxWidth: "434px" }}
            >
              Code sent to johnpeter@gmail.com. Check your inbox and enter it
              below to reset your password.
            </p>
          </div>
          <form action="" class="mt-4">
            <div class="row">
              <div class="col-md-12">
                <div class="ct_otp_input">
                  {/* <div>
                    <input type="number" class="form-control ct_input" />
                  </div>
                  <div>
                    <input type="number" class="form-control ct_input" />
                  </div>
                  <div>
                    <input type="number" class="form-control ct_input" />
                  </div>
                  <div>
                    <input type="number" class="form-control ct_input" />
                  </div> */}
                  <OtpInput
                    class="form-control ct_input"
                    inputType="number"
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
              </div>
            </div>

            <div class="text-center mt-4">
              <a
                onClick={(e) => handleSendOtp(e)}
                class="ct_yellow_btn w-75 mx-auto"
              >
                Continue{" "}
              </a>
            </div>
            <p class="mb-0 text-center mt-3">
              Didn’t receive the email?{" "}
              <a class="ct_orange_text">
                {" "}
                Click to resend
              </a>
            </p>
          </form>
          <div class="ct_back_login_text text-center mt-3">
            <a
              onClick={(e) => goTo(e, coachPaths.Login)}
              class="mb-0 ct_darkblue_text"
            >
              <i class="fa-solid fa-arrow-left"></i> Back to Log In
            </a>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OTP;
