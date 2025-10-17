import { useState } from "react";
import { Formik } from "formik";
import Eye from "../../components/form/Eye";
import Loader from "../../components/loader";
import { coachPaths } from "../../routes/coach";
import AuthLayout from "../../layouts/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordSchema } from "../../utils/schema";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/form/ErrorMessage";
import useAppNavigate from "../../components/hooks/useAppNavigate";
import { setPassword } from "../../redux/features/coach/actions/authAction";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { goTo } = useAppNavigate();
  const [isEye1, setIsEye1] = useState(false);
  const [isEye2, setIsEye2] = useState(false);
  const forgot_code = location?.state?.data.code || "";
  const { isLoading } = useSelector((state) => state.coach.auth);
  const initialValues = {
    newPassword: "",
    confirm_password: "",
  };

  const handleChangePassword = (values) => {
    const callback = (response) => {
      if (response.success) {
        navigate(coachPaths?.Login);
      }
    };
    const data = {
     newPassword: values?.newPassword,
      forgot_code,
    };
    dispatch(setPassword({ payload: data, callback }));
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
            <h2 class="ct_fs_32  mb-2 ct_darkblue_text">Set New Password</h2>
            <p class="mb-0 ct_darkblue_text">
              Enter your new password below. Make sure it’s strong and unique to
              keep your account secure.
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={resetPasswordSchema}
            onSubmit={(values, actions) => {
              handleChangePassword(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <form action="" class="mt-5">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group mb-3">
                      <label for="" class="mb-2 d-block ct_darkblue_text">
                        Password
                      </label>
                      <div class="position-relative">
                        <input
                          class="form-control ct_input pe-5"
                          placeholder="Password"
                          type={isEye1 ? "text" : "password"}
                          id="newPassword"
                          value={values.newPassword}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <Eye
                          isEye={isEye1}
                          onClick={() => setIsEye1(!isEye1)}
                        />
                        {/* <i class="fa-solid fa-eye ct_show_eye"></i> */}
                      </div>
                      <ErrorMessage
                        errors={errors}
                        touched={touched}
                        fieldName="newPassword"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-3">
                      <label for="" class="mb-2 d-block ct_darkblue_text">
                        Confirm Password
                      </label>
                      <div class="position-relative">
                        <input
                          class="form-control ct_input pe-5"
                          placeholder="Confirm password"
                          type={isEye2 ? "text" : "password"}
                          id="confirm_password"
                          value={values?.confirm_password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <Eye
                          isEye={isEye2}
                          onClick={() => setIsEye2(!isEye2)}
                        />
                      </div>
                      <ErrorMessage
                        errors={errors}
                        touched={touched}
                        fieldName="confirm_password"
                      />
                    </div>
                  </div>
                </div>

                <div class="text-center mt-2">
                  <a
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    class="ct_yellow_btn w-75 mx-auto"
                  >
                    Reset Password{" "}
                  </a>
                </div>
              </form>
            )}
          </Formik>
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

export default ResetPassword;
