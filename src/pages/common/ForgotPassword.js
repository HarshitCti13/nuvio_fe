import { Formik } from "formik";
import Loader from "../../components/loader";
import { coachPaths } from "../../routes/coach";
import AuthLayout from "../../layouts/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordSchema } from "../../utils/schema";
import ErrorMessage from "../../components/form/ErrorMessage";
import useAppNavigate from "../../components/hooks/useAppNavigate";
import { authForgotPassword } from "../../redux/features/coach/actions/authAction";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { goTo } = useAppNavigate();
  
  const { isLoading } = useSelector((state) => state.coach.auth);

  const initialValues = {
    email: "",
  };

  const handleSubmitEmail = (values) => {
    const callback = (response) => {
      if (response.success) {
        navigate(coachPaths.OTP,{state:{data:{code:response?.data,...values}}});
      }
    };
    dispatch(authForgotPassword({ payload: values, callback }));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthLayout>
      <div class="col-xxl-7 col-xl-7 col-lg-7 mb-4 mb-lg-0 mx-auto pe-0">
        <div class="ct_signup_right_content px-3 ct_custom_scroll">
          <div class="ct_signup_logo ct_mb_60">
            <img src="../assets/img/Nuvio_logo.png" alt="" />
          </div>
          <div class="mt-0 text-center">
            <h2 class="ct_fs_32  mb-2 ct_darkblue_text">Forgot Password</h2>
            <p
              class="mb-0 ct_darkblue_text mx-auto text-start"
              style={{ maxWidth: "450px" }}
            >
              No worries, we'll send you instructions to reset your password
              shortly
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={forgotPasswordSchema}
            onSubmit={(values, actions) => {
              handleSubmitEmail(values);
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
              <form onSubmit={handleSubmit} class="mt-4">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group mb-4">
                      <label for="" class="mb-2 d-block ct_darkblue_text">
                        {" "}
                        Email
                      </label>
                      <input
                        type="text"
                        class="form-control ct_input"
                        placeholder="Email"
                        id="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values?.email}
                      />
                      <ErrorMessage
                        errors={errors}
                        touched={touched}
                        fieldName="email"
                      />
                    </div>
                  </div>
                </div>

                <div class="text-center mt-2">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    class="ct_yellow_btn w-75 mx-auto"
                  >
                    Reset Password{" "}
                  </a>
                </div>
              </form>
            )}
          </Formik>
          <div class="ct_back_login_text text-center mt-4">
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

export default ForgotPassword;
