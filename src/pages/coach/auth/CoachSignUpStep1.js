import { Formik } from "formik";
import { coachPaths } from "../../../routes/coach";
import { step1Schema } from "../../../utils/schema";
import AuthLayout from "../../../layouts/AuthLayout";
import { getFormData, updateFormData } from "../../../utils/pip";
import ErrorMessage from "../../../components/form/ErrorMessage";
import useAppNavigate from "../../../components/hooks/useAppNavigate";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

const CoachSignUpStep1 = () => {
  const { goTo, goBack } = useAppNavigate();
  const savedData = getFormData().step1;

  const handleStep1 = (values) => {
    updateFormData("step1", values);
    goTo(coachPaths.CoachSignUpStep2);
  };

  return (
    <AuthLayout>
      <div class="col-xxl-7 col-xl-6 col-lg-7 mb-4 mb-lg-0 mx-auto pe-0">
        <div class="ct_signup_right_content px-3 ct_custom_scroll pe-5 ">
          <div class="ct_back_top_btn">
            <a class="mb-0 ct_darkblue_text" onClick={(e) => goBack(e)}>
              <i class="fa-solid fa-arrow-left"></i>
            </a>
          </div>
          <div class="ct_signup_logo ct_mb_60">
            <img src="../assets/img/Nuvio_logo.png" alt="" />
          </div>
          <div class="mt-0 text-center">
            <h2 class="ct_fs_32  mb-0">
              Hi! Begin Coaching with <span class="ct_yellow_text">Nuvio</span>
            </h2>
          </div>
          <Formik
            initialValues={savedData}
            validationSchema={step1Schema}
            onSubmit={(values, actions) => {
              handleStep1(values);
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
              setFieldError,
            }) => (
              <form onSubmit={handleSubmit} class="mt-5">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group mb-4">
                      <label for="" class="mb-2 d-block ct_darkblue_text">
                        Full Name
                      </label>
                      <input
                        type="text"
                        class="form-control ct_input"
                        placeholder="Full Name"
                        id="full_name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values?.full_name}
                      />
                      <ErrorMessage
                        errors={errors}
                        touched={touched}
                        fieldName="full_name"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
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
                    <div class="form-group mb-4">
                      <label for="" class="mb-2 d-block ct_darkblue_text">
                        Phone Number{" "}
                      </label>
                      <PhoneInput
                        id="phone_number"
                        className="form-control ct_input ct_input_grey_border_1 ct_border_radius_5 ct_h_44"
                        defaultCountry="IN"
                        value={values?.phone_number}
                        onChange={(val) => {
                          const safeVal = val ?? "";
                          if (
                            typeof safeVal === "string" &&
                            safeVal.length > 2 &&
                            isValidPhoneNumber(safeVal)
                          ) {
                            setFieldValue("phone_number", safeVal);
                          } else if (!isValidPhoneNumber(safeVal)) {
                            setFieldError(
                              "phone_number",
                              "Please enter valid phone number"
                            );
                            setFieldValue("phone_number", safeVal);
                          }
                        }}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        errors={errors}
                        touched={touched}
                        fieldName="phone_number"
                      />
                    </div>
                  </div>
                </div>

                <div class="text-center mt-2">
                  <button
                    type="submit"
                    // onClick={(e) => goTo(e, coachPaths.CoachSignUpStep2)}
                    onClick={handleSubmit}
                    class="ct_yellow_btn w-75 mx-auto"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}
          </Formik>
          <div class=" text-center mt-3 ct_darkblue_text">
            Already have an account?{" "}
            <a
              onClick={(e) => goTo(e, coachPaths.Login)}
              class="ct_orange_text"
            >
              Sign In
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

export default CoachSignUpStep1;
