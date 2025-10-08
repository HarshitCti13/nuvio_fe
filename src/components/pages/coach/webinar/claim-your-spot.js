import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Loader from "../../../loader";
import { useDispatch, useSelector } from "react-redux";
import { registerSchema } from "../../../../utils/schema";
import ErrorMessage from "../../../form/ErrorMessage";
import { registerToday } from "../../../../redux/features/coach/actions/authAction";
import { useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ClaimYourSpot = ({
  isOpen,
  setClose,
  isSuccessModal,
  setIsSuccessModal,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roles = [
    "Business Owner",
    "Marketing Manager",
    "Sales Professional",
    "Consultant",
    "Freelancer",
    "Student",
    "Other",
  ];

  const { isLoading } = useSelector((state) => state?.coach?.auth);
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    role: "",
    linkedin_url: "",
    source: "",
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "relative";
    };
  }, [isOpen]);

  const handleFormSubmit = (values) => {
    console.log(values);
    const callback = (response) => {
      if (response.success) {
        // navigate(coachPaths?.Webinar);
        setClose(false);
        setIsSuccessModal(true);
      }
    };

    dispatch(registerToday({ payload: values, callback }));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div
        class="modal fade modal-xl d-block show ct_modal_scroll "
        id="ct_claim_your_spot"
        tabindex="-1"
        aria-labelledby="ct_claim_your_spotLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <button
                type="button"
                onClick={() => {
                  setClose(false);
                }}
                class="btn-close ct_close_position_right12"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <section class="ct_signup_main py-3 pb-lg-5 ">
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-xxl-5 col-xl-5 col-lg-5 mb-4 mb-lg-0 d-none d-lg-block">
                      <div class="ct_signup_left_img">
                        <img src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/Rectangle_4179344.png" alt="" />
                      </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-7 mb-4 mb-lg-0 mx-auto pe-0">
                      <div class="ct_signup_right_content bg-transparent ct_px_100_new px-3 ct_custom_scroll">
                        <div class="ct_signup_logo mb-3">
                          <img src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/Nuvio_logo.png" alt="" />
                        </div>
                        <div class="mt-0 text-center">
                          <h2 class="ct_fs_24 ct_fw_600 mb-2">
                            You're almost In! 🙌
                          </h2>
                          <p class="mb-0 ct_orange_text">
                            You've just taken the first step toward turning your
                            skills into real influence, income, and impact.
                          </p>
                        </div>
                        <Formik
                          initialValues={initialValues}
                          validationSchema={registerSchema}
                          onSubmit={(values, actions) => {
                            handleFormSubmit(values);
                          }}
                        >
                          {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldError,
                            setFieldValue,
                          }) => (
                            <form class="mt-4">
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="form-group mb-3">
                                    <label
                                      for=""
                                      class="mb-2 d-block ct_darkblue_text"
                                    >
                                      First Name
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control ct_input ct_h_35"
                                      placeholder="First name"
                                      id="first_name"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values?.first_name}
                                    />
                                    <ErrorMessage
                                      errors={errors}
                                      touched={touched}
                                      fieldName="first_name"
                                    />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group mb-3">
                                    <label
                                      for=""
                                      class="mb-2 d-block ct_darkblue_text"
                                    >
                                      Last Name
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control ct_input ct_h_35"
                                      placeholder="Last name"
                                      id="last_name"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values?.last_name}
                                    />
                                    <ErrorMessage
                                      errors={errors}
                                      touched={touched}
                                      fieldName="last_name"
                                    />
                                  </div>
                                </div>

                                <div class="col-md-6">
                                  <div class="form-group mb-3">
                                    <label
                                      for=""
                                      class="mb-2 d-block ct_darkblue_text"
                                    >
                                      Email
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control ct_input ct_h_35"
                                      placeholder="Email"
                                      id="email"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values?.email}
                                    />
                                    <ErrorMessage
                                      errors={errors}
                                      touched={touched}
                                      fieldName="email"
                                    />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group mb-3">
                                    <label
                                      for=""
                                      class="mb-2 d-block ct_darkblue_text"
                                    >
                                      LinkedIn Profile
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control ct_input ct_h_35"
                                      placeholder="LinkedIn profile"
                                      id="linkedin_url"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values?.linkedin_url}
                                    />
                                    <ErrorMessage
                                      errors={errors}
                                      touched={touched}
                                      fieldName="linkedin_url"
                                    />
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group mb-3">
                                    <label
                                      for=""
                                      class="mb-2 d-block ct_darkblue_text"
                                    >
                                      Phone Number
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
                                          setFieldValue(
                                            "phone_number",
                                            safeVal
                                          );
                                        } else if (
                                          !isValidPhoneNumber(safeVal)
                                        ) {
                                          setFieldError(
                                            "phone_number",
                                            "Please enter valid phone number"
                                          );
                                          setFieldValue(
                                            "phone_number",
                                            safeVal
                                          );
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

                                <div class="col-md-12">
                                  <div class="form-group mb-3">
                                    <label
                                      for=""
                                      class="mb-2 d-block ct_darkblue_text"
                                    >
                                      What best describes your current
                                      role?(Select one)
                                    </label>
                                    <select
                                      class="form-control ct_input ct_h_35"
                                      name="role"
                                      value={values?.role}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    >
                                      <option value={""}>
                                        Select current role
                                      </option>
                                      {roles?.map((item, ind) => (
                                        <option value={item}>{item}</option>
                                      ))}
                                    </select>
                                    <ErrorMessage
                                      errors={errors}
                                      touched={touched}
                                      fieldName="role"
                                    />
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group mb-3">
                                    <label
                                      for=""
                                      class="mb-2 d-block ct_darkblue_text"
                                    >
                                      How did you hear about NUVIO's webinar?
                                    </label>
                                    <div>
                                      <div class="ct_radio-container">
                                        {[
                                          "Word of mouth",
                                          "Social Media",
                                          "Others",
                                        ].map((option, idx) => (
                                          <div
                                            class="ct_radio-wrapper"
                                            key={idx}
                                          >
                                            <label class="ct_radio-button">
                                              <input
                                                type="radio"
                                                id="option1"
                                                name="source"
                                                value={option}
                                                checked={
                                                  values?.source === option
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                              />
                                              <span class="ct_radio-checkmark"></span>
                                            </label>
                                            <p class="mb-0">{option}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <ErrorMessage
                                      errors={errors}
                                      touched={touched}
                                      fieldName="source"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="text-center mt-3">
                                <a
                                  href=""
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit();
                                  }}
                                  class="ct_yellow_btn w-100"
                                  //   data-bs-toggle="modal"
                                  //   data-bs-target="#ct_submit_modal"
                                >
                                  Register Today
                                </a>
                              </div>
                            </form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClaimYourSpot;
