import { Formik } from "formik";
import { useState } from "react";
import Eye from "../../../components/form/Eye";
import Loader from "../../../components/loader";
import AuthLayout from "../../../layouts/AuthLayout";
import { signInSchema } from "../../../utils/schema";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../../components/form/ErrorMessage";
import useAppNavigate from "../../../components/hooks/useAppNavigate";
import { authSignin } from "../../../redux/features/admin/actions/authAction";
import { adminPaths } from "../../../routes/admin";

const Login = () => {
  const dispatch = useDispatch();
  const { goTo } = useAppNavigate();
  const [isEye, setIsEye] = useState(false);
  const { isLoading } = useSelector((state) => state.admin.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values) => {
    const callback = (response) => {
      if (response.success) {
        goTo(adminPaths?.Users);
      }
    };
    dispatch(authSignin({ payload: values, callback }));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <AuthLayout>
      <div class="col-xxl-8 col-xl-7 col-lg-7 mb-4 mb-lg-0 mx-auto pe-0">
        <div class="ct_signup_right_content px-3 ct_custom_scroll">
          <div class="ct_signup_logo mb-3">
            <img src="../assets/img/Nuvio_logo.png" alt="" />
          </div>
          <div class="mt-0 text-center">
            <h2 class="ct_fs_24 ct_fw_600 mb-0 ct_darkblue_text">
              Welcome Back!
            </h2>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values, actions) => {
              handleLogin(values);
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
                  <div class="col-md-12">
                    <div class="form-group mb-3">
                      <label for="" class="mb-2 d-block ct_darkblue_text">
                        Password
                      </label>
                      <div class="position-relative">
                        <input
                          type={isEye ? "text" : "password"}
                          id="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values?.password}
                          class="form-control ct_input pe-5"
                          placeholder="Password"
                        />
                        {/* <i class="fa-solid fa-eye ct_show_eye"></i> */}
                        <Eye isEye={isEye} onClick={() => setIsEye(!isEye)} />
                      </div>
                      <ErrorMessage
                        errors={errors}
                        touched={touched}
                        fieldName="password"
                      />
                    </div>
                  </div>
                  <div class="text-end">
                    <a
                      onClick={(e) => goTo(e)}
                      class="ct_yellow_text"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div class="text-center mt-4">
                  <a class="ct_yellow_btn w-100" onClick={handleSubmit}>
                    Log In
                  </a>
                </div>
              </form>
            )}
          </Formik>
          <div class=" text-center mt-3 ct_darkblue_text">
            Don’t have an account?{" "}
            <a
              onClick={(e) => goTo(e)}
              class="ct_orange_text"
            >
              {" "}
              Sign Up
            </a>
          </div>
          <div class="ct_or_overlay_text mt-3">
            <p class="mb-0">Or</p>
          </div>
          <div class="d-flex align-items-center justify-content-center gap-3 mt-3 flex-wrap">
            <button class="ct_grey_btn">
              <img src="../assets/img/devicon_google.png" alt="" />
              Sign up with Google
            </button>
            <button class="ct_grey_btn">
              <img src="../assets/img/apple.png" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
