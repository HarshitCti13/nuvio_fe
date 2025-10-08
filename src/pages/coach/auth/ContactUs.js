import { Formik } from "formik";
import Loader from "../../../components/loader";
import PhoneInput from "react-phone-number-input";
import { coachPaths } from "../../../routes/coach";
import CoachLayout from "../../../layouts/CoachLayout";
import { useDispatch, useSelector } from "react-redux";
import { contactUsSchema } from "../../../utils/schema";
import { isValidPhoneNumber } from "react-phone-number-input";
import ErrorMessage from "../../../components/form/ErrorMessage";
import useAppNavigate from "../../../components/hooks/useAppNavigate";
import { contactUs } from "../../../redux/features/coach/actions/authAction";
import { useEffect } from "react";

const ContactUs = () => {
  const { goTo } = useAppNavigate();
  const dispatch = useDispatch();

  const user = { name: "Contact Us", role: "coach" };
  const { isLoading } = useSelector((state) => state?.coach?.auth);

  const inquiryOptions = [
    "General Inquiry",
    "Partnership Opportunity",
    "Request for a Quote",
    "Talent Application / Freelance Inquiry",
    "Hiring or Recruitment Services",
    "Collaboration or Event Proposal",
    "Media or Press Inquiry",
    "Technical Support / Website Issue",
    "Feedback or Suggestion",
    "Other",
  ];
  const initialValues = {
    full_name: "",
    email: "",
    phone_number: "+91",
    address: "",
    subject: "",
    message: "",
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleFormSubmit = (values) => {
    console.log(values);
    const callback = (response) => {
      if (response.success) {
        console.log({ response });
        if (response?.data?.success) {
          goTo(coachPaths?.Webinar);
        }
      }
    };

    dispatch(contactUs({ payload: values, callback }));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <CoachLayout user={user}>
      <section class="ct_contact_banner_bg">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="ct_contact_left_banner_cnt">
                <h2 class="ct_fs-24 ct_fw_600 mb-3">Contact Us</h2>
                <p>
                  Have a question, proposal, or just want to say hello? We’d
                  love to hear from you.
                </p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={contactUsSchema}
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
                    <form action="">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group mb-4">
                            <label for="" class="d-block mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              placeholder="Full name"
                              class="form-control ct_input"
                              id="full_name"
                              onChange={handleChange}
                              onBlur={handleBlur}
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
                            <label for="" class="d-block mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              placeholder="Email address"
                              class="form-control ct_input"
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
                          <div class="form-group mb-4">
                            <label for="" class="d-block mb-2">
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
                        <div class="col-md-6">
                          <div class="form-group mb-4">
                            <label for="" class="d-block mb-2">
                              Address
                            </label>
                            <input
                              type="text"
                              placeholder="Address"
                              class="form-control ct_input"
                              id="address"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.address}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="address"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          {/* <div class="form-group mb-4">
                            <label for="" class="d-block mb-2">
                              What’s this about?
                            </label>
                            <input
                              type="text"
                              placeholder="eg. General Inquiry"
                              class="form-control ct_input"
                              id="subject"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.subject}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="subject"
                            />
                          </div> */}
                          <div class="form-group mb-4">
                            <label for="" class="mb-2 d-block ct_darkblue_text">
                              What’s this about?
                            </label>
                            <select
                              class="form-control ct_input "
                              name="subject"
                              value={values?.subject}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="">Select an option</option>
                              {inquiryOptions?.map((item, ind) => (
                                <option value={item}>{item}</option>
                              ))}
                            </select>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="subject"
                            />
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group mb-4">
                            <label for="" class="d-block mb-2">
                              Message
                            </label>
                            <textarea
                              class="form-control ct_input h-auto"
                              rows="4"
                              id="message"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.message}
                            ></textarea>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="message"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={handleSubmit}
                          class="ct_yellow_btn ct_sky_blue_btn px-5"
                        >
                          {" "}
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="ct_contact_right_img text-end">
                <img
                  src="https://nuvio-fe.onrender.com/nuvio/assets/img/contact_banner_right_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ct_py_100 ct_px_40">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div
              class="col-lg-7 col-md-6 mb-4 mb-md-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_about_cnt">
                <h2 class="mb-4 ct_fs_24 ct_fw_600">
                  We’re More Than Just Support
                </h2>

                <p>
                  Whether you’re launching a new idea, scaling a team, or
                  looking for expert help, Nuvio brings together coaching,
                  services, talent, and funding to move you forward - all in one
                  place. You can even start with a{" "}
                  <span class="ct_sky_blue_text">14- day free trial</span> to
                  explore the platform and see how it fits your goals.
                </p>
              </div>
            </div>
            <div
              class="col-lg-5 col-md-6 mb-4 mb-md-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="ct_about_img">
                <img
                  src="https://nuvio-fe.onrender.com/nuvio/assets/img/supporrt_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ct_pb_100 ct_px_40">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="ct_dark_blue_bg">
                <h4 class="ct_fs_24 ct_fw_500 text-center text-white">
                  We’d Love to Hear From You
                </h4>
                <p class="text-center text-white mb-0">
                  Or just reach out manually to <br />{" "}
                  <a
                    href="hello@nuvio.com"
                    target="_blank"
                    class="ct_yellow_text "
                  >
                    hello@nuvio.com
                  </a>
                </p>

                <div class="container pt-5">
                  <div class="row">
                    <div
                      class="col-lg-4 mb-4 mb-lg-0"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                      <div class="ct_react_out_card">
                        <div class="ct_react_out_icon">
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.1141 11.0026H10.7807C10.5918 11.0026 10.4336 10.9386 10.3061 10.8106C10.1785 10.6826 10.1145 10.5244 10.1141 10.3359C10.1136 10.1475 10.1776 9.98927 10.3061 9.86127C10.4345 9.73327 10.5927 9.66927 10.7807 9.66927H12.1141V8.33594C12.1141 8.14705 12.1781 7.98883 12.3061 7.86127C12.4341 7.73372 12.5923 7.66971 12.7807 7.66927C12.9692 7.66883 13.1276 7.73283 13.2561 7.86127C13.3845 7.98972 13.4483 8.14794 13.4474 8.33594V9.66927H14.7807C14.9696 9.66927 15.1281 9.73327 15.2561 9.86127C15.3841 9.98927 15.4478 10.1475 15.4474 10.3359C15.447 10.5244 15.383 10.6828 15.2554 10.8113C15.1278 10.9397 14.9696 11.0035 14.7807 11.0026H13.4474V12.3359C13.4474 12.5248 13.3834 12.6833 13.2554 12.8113C13.1274 12.9393 12.9692 13.003 12.7807 13.0026C12.5923 13.0022 12.4341 12.9382 12.3061 12.8106C12.1781 12.683 12.1141 12.5248 12.1141 12.3359V11.0026ZM2.11406 11.0026C1.92517 11.0026 1.76695 10.9386 1.6394 10.8106C1.51184 10.6826 1.44784 10.5244 1.4474 10.3359V7.0026H1.33073C1.11962 7.0026 0.947396 6.92194 0.814062 6.7606C0.680729 6.59927 0.636285 6.41327 0.680729 6.2026L1.3474 2.86927C1.38073 2.71372 1.45851 2.58594 1.58073 2.48594C1.70295 2.38594 1.84184 2.33594 1.9974 2.33594H10.8974C11.053 2.33594 11.1918 2.38594 11.3141 2.48594C11.4363 2.58594 11.5141 2.71372 11.5474 2.86927L12.2141 6.2026C12.2585 6.41371 12.2141 6.59994 12.0807 6.76127C11.9474 6.9226 11.7752 7.00305 11.5641 7.0026H11.4474V8.33594C11.4474 8.52483 11.3834 8.68327 11.2554 8.81127C11.1274 8.93927 10.9692 9.00305 10.7807 9.0026C10.5923 9.00216 10.4341 8.93816 10.3061 8.8106C10.1781 8.68305 10.1141 8.52483 10.1141 8.33594V7.0026H7.4474V10.3359C7.4474 10.5248 7.3834 10.6833 7.2554 10.8113C7.1274 10.9393 6.96917 11.003 6.78073 11.0026H2.11406ZM2.78073 9.66927H6.11406V7.0026H2.78073V9.66927ZM2.11406 1.66927C1.92517 1.66927 1.76695 1.60527 1.6394 1.47727C1.51184 1.34927 1.44784 1.19105 1.4474 1.0026C1.44695 0.81416 1.51095 0.655938 1.6394 0.527938C1.76784 0.399938 1.92606 0.335938 2.11406 0.335938H10.7807C10.9696 0.335938 11.1281 0.399938 11.2561 0.527938C11.3841 0.655938 11.4478 0.81416 11.4474 1.0026C11.447 1.19105 11.383 1.34949 11.2554 1.47794C11.1278 1.60638 10.9696 1.67016 10.7807 1.66927H2.11406Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div class="text-center mt-3">
                          <h5 class="ct_fs_20 text-white">Email Support</h5>
                          <p class="mb-0 text-white">
                            Our team can respond in real time
                          </p>
                          <div class="mt-3">
                            <a
                              href="mailto:hello@gmail.com"
                              class="ct_yellow_text"
                            >
                              hello@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-lg-4 mb-4 mb-lg-0"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                      <div class="ct_react_out_card">
                        <div class="ct_react_out_icon">
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.1141 11.0026H10.7807C10.5918 11.0026 10.4336 10.9386 10.3061 10.8106C10.1785 10.6826 10.1145 10.5244 10.1141 10.3359C10.1136 10.1475 10.1776 9.98927 10.3061 9.86127C10.4345 9.73327 10.5927 9.66927 10.7807 9.66927H12.1141V8.33594C12.1141 8.14705 12.1781 7.98883 12.3061 7.86127C12.4341 7.73372 12.5923 7.66971 12.7807 7.66927C12.9692 7.66883 13.1276 7.73283 13.2561 7.86127C13.3845 7.98972 13.4483 8.14794 13.4474 8.33594V9.66927H14.7807C14.9696 9.66927 15.1281 9.73327 15.2561 9.86127C15.3841 9.98927 15.4478 10.1475 15.4474 10.3359C15.447 10.5244 15.383 10.6828 15.2554 10.8113C15.1278 10.9397 14.9696 11.0035 14.7807 11.0026H13.4474V12.3359C13.4474 12.5248 13.3834 12.6833 13.2554 12.8113C13.1274 12.9393 12.9692 13.003 12.7807 13.0026C12.5923 13.0022 12.4341 12.9382 12.3061 12.8106C12.1781 12.683 12.1141 12.5248 12.1141 12.3359V11.0026ZM2.11406 11.0026C1.92517 11.0026 1.76695 10.9386 1.6394 10.8106C1.51184 10.6826 1.44784 10.5244 1.4474 10.3359V7.0026H1.33073C1.11962 7.0026 0.947396 6.92194 0.814062 6.7606C0.680729 6.59927 0.636285 6.41327 0.680729 6.2026L1.3474 2.86927C1.38073 2.71372 1.45851 2.58594 1.58073 2.48594C1.70295 2.38594 1.84184 2.33594 1.9974 2.33594H10.8974C11.053 2.33594 11.1918 2.38594 11.3141 2.48594C11.4363 2.58594 11.5141 2.71372 11.5474 2.86927L12.2141 6.2026C12.2585 6.41371 12.2141 6.59994 12.0807 6.76127C11.9474 6.9226 11.7752 7.00305 11.5641 7.0026H11.4474V8.33594C11.4474 8.52483 11.3834 8.68327 11.2554 8.81127C11.1274 8.93927 10.9692 9.00305 10.7807 9.0026C10.5923 9.00216 10.4341 8.93816 10.3061 8.8106C10.1781 8.68305 10.1141 8.52483 10.1141 8.33594V7.0026H7.4474V10.3359C7.4474 10.5248 7.3834 10.6833 7.2554 10.8113C7.1274 10.9393 6.96917 11.003 6.78073 11.0026H2.11406ZM2.78073 9.66927H6.11406V7.0026H2.78073V9.66927ZM2.11406 1.66927C1.92517 1.66927 1.76695 1.60527 1.6394 1.47727C1.51184 1.34927 1.44784 1.19105 1.4474 1.0026C1.44695 0.81416 1.51095 0.655938 1.6394 0.527938C1.76784 0.399938 1.92606 0.335938 2.11406 0.335938H10.7807C10.9696 0.335938 11.1281 0.399938 11.2561 0.527938C11.3841 0.655938 11.4478 0.81416 11.4474 1.0026C11.447 1.19105 11.383 1.34949 11.2554 1.47794C11.1278 1.60638 10.9696 1.67016 10.7807 1.66927H2.11406Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div class="text-center mt-3">
                          <h5 class="ct_fs_20 text-white">Visit Our Office</h5>
                          <p class="mb-0 text-white">
                            Visit our location in real life
                          </p>
                          <div class="mt-3">
                            <a class="ct_yellow_text">
                              306, Fake Street, France
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-lg-4 mb-4 mb-lg-0"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                      <div class="ct_react_out_card">
                        <div class="ct_react_out_icon">
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.1141 11.0026H10.7807C10.5918 11.0026 10.4336 10.9386 10.3061 10.8106C10.1785 10.6826 10.1145 10.5244 10.1141 10.3359C10.1136 10.1475 10.1776 9.98927 10.3061 9.86127C10.4345 9.73327 10.5927 9.66927 10.7807 9.66927H12.1141V8.33594C12.1141 8.14705 12.1781 7.98883 12.3061 7.86127C12.4341 7.73372 12.5923 7.66971 12.7807 7.66927C12.9692 7.66883 13.1276 7.73283 13.2561 7.86127C13.3845 7.98972 13.4483 8.14794 13.4474 8.33594V9.66927H14.7807C14.9696 9.66927 15.1281 9.73327 15.2561 9.86127C15.3841 9.98927 15.4478 10.1475 15.4474 10.3359C15.447 10.5244 15.383 10.6828 15.2554 10.8113C15.1278 10.9397 14.9696 11.0035 14.7807 11.0026H13.4474V12.3359C13.4474 12.5248 13.3834 12.6833 13.2554 12.8113C13.1274 12.9393 12.9692 13.003 12.7807 13.0026C12.5923 13.0022 12.4341 12.9382 12.3061 12.8106C12.1781 12.683 12.1141 12.5248 12.1141 12.3359V11.0026ZM2.11406 11.0026C1.92517 11.0026 1.76695 10.9386 1.6394 10.8106C1.51184 10.6826 1.44784 10.5244 1.4474 10.3359V7.0026H1.33073C1.11962 7.0026 0.947396 6.92194 0.814062 6.7606C0.680729 6.59927 0.636285 6.41327 0.680729 6.2026L1.3474 2.86927C1.38073 2.71372 1.45851 2.58594 1.58073 2.48594C1.70295 2.38594 1.84184 2.33594 1.9974 2.33594H10.8974C11.053 2.33594 11.1918 2.38594 11.3141 2.48594C11.4363 2.58594 11.5141 2.71372 11.5474 2.86927L12.2141 6.2026C12.2585 6.41371 12.2141 6.59994 12.0807 6.76127C11.9474 6.9226 11.7752 7.00305 11.5641 7.0026H11.4474V8.33594C11.4474 8.52483 11.3834 8.68327 11.2554 8.81127C11.1274 8.93927 10.9692 9.00305 10.7807 9.0026C10.5923 9.00216 10.4341 8.93816 10.3061 8.8106C10.1781 8.68305 10.1141 8.52483 10.1141 8.33594V7.0026H7.4474V10.3359C7.4474 10.5248 7.3834 10.6833 7.2554 10.8113C7.1274 10.9393 6.96917 11.003 6.78073 11.0026H2.11406ZM2.78073 9.66927H6.11406V7.0026H2.78073V9.66927ZM2.11406 1.66927C1.92517 1.66927 1.76695 1.60527 1.6394 1.47727C1.51184 1.34927 1.44784 1.19105 1.4474 1.0026C1.44695 0.81416 1.51095 0.655938 1.6394 0.527938C1.76784 0.399938 1.92606 0.335938 2.11406 0.335938H10.7807C10.9696 0.335938 11.1281 0.399938 11.2561 0.527938C11.3841 0.655938 11.4478 0.81416 11.4474 1.0026C11.447 1.19105 11.383 1.34949 11.2554 1.47794C11.1278 1.60638 10.9696 1.67016 10.7807 1.66927H2.11406Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div class="text-center mt-3">
                          <h5 class="ct_fs_20 text-white">Call Us Directly</h5>
                          <p class="mb-0 text-white">
                            Available during working hours
                          </p>
                          <div class="mt-3">
                            <a href="tel:+123-4567-789" class="ct_yellow_text">
                              +123-4567-789
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ct_pb_100 ct_px_40 pt-0">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div
              class="col-lg-4 col-md-6 mb-4 mb-md-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_about_img">
                <img
                  src="https://nuvio-fe.onrender.com/nuvio/assets/img/faq_img_left.png"
                  class="ct_img_h_617"
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-lg-8 col-md-6 mb-4 mb-md-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="ct_about_cnt">
                <h2 class="mb-4 ct_fs_24 ">Frequently asked questions</h2>

                <div class="ct_faq_question_main">
                  <div class="accordion" id="faq_accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="faq_one">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefaq_one"
                          aria-expanded="false"
                          aria-controls="collapsefaq_one"
                        >
                          Where is NUVIO based?
                        </button>
                      </h2>
                      <div
                        id="collapsefaq_one"
                        class="accordion-collapse collapse"
                        aria-labelledby="faq_one"
                        data-bs-parent="#faq_accordionExample"
                      >
                        <div class="accordion-body">
                          <p class="ct_fs_16 mb-3 ct_line_h_30">
                            These costs can spiral but that didn't seem fair. So
                            our prices work differently. Small businesses often
                            need to do similar things: sell online, book
                            appointments, make reservations. So we offer
                            cheaper, pre-packaged Studio Store apps - that solve
                            these brilliantly.
                          </p>
                          <p class="ct_fs_16 mb-0 ct_line_h_30">
                            If you’re doing something new, on a bigger scale, or
                            need more flexibility, then Builder Studio is for
                            you. Prices vary depending on the features you need
                            but again, you’ll know exactly what you’re paying
                            upfront.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="faqtwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefaq_Two"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          How quickly will i get a response?
                        </button>
                      </h2>
                      <div
                        id="collapsefaq_Two"
                        class="accordion-collapse collapse "
                        aria-labelledby="faqtwo"
                        data-bs-parent="#faq_accordionExample"
                      >
                        <div class="accordion-body">
                          <p class="ct_fs_16 mb-3 ct_line_h_30">
                            These costs can spiral but that didn't seem fair. So
                            our prices work differently. Small businesses often
                            need to do similar things: sell online, book
                            appointments, make reservations. So we offer
                            cheaper, pre-packaged Studio Store apps - that solve
                            these brilliantly.
                          </p>
                          <p class="ct_fs_16 mb-0 ct_line_h_30">
                            If you’re doing something new, on a bigger scale, or
                            need more flexibility, then Builder Studio is for
                            you. Prices vary depending on the features you need
                            but again, you’ll know exactly what you’re paying
                            upfront.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="faqthree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefaq_Three"
                          aria-expanded="false"
                          aria-controls="collapsefaq_Three"
                        >
                          Can I speak directly with someone on the NUVIO team?
                        </button>
                      </h2>
                      <div
                        id="collapsefaq_Three"
                        class="accordion-collapse collapse"
                        aria-labelledby="faqthree"
                        data-bs-parent="#faq_accordionExample"
                      >
                        <div class="accordion-body">
                          <p class="ct_fs_16 mb-3 ct_line_h_30">
                            These costs can spiral but that didn't seem fair. So
                            our prices work differently. Small businesses often
                            need to do similar things: sell online, book
                            appointments, make reservations. So we offer
                            cheaper, pre-packaged Studio Store apps - that solve
                            these brilliantly.
                          </p>
                          <p class="ct_fs_16 mb-0 ct_line_h_30">
                            If you’re doing something new, on a bigger scale, or
                            need more flexibility, then Builder Studio is for
                            you. Prices vary depending on the features you need
                            but again, you’ll know exactly what you’re paying
                            upfront.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="faqFour">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefaq_Four"
                          aria-expanded="false"
                          aria-controls="collapsefaq_Four"
                        >
                          Do I need an account to contact support?
                        </button>
                      </h2>
                      <div
                        id="collapsefaq_Four"
                        class="accordion-collapse collapse"
                        aria-labelledby="faqFour"
                        data-bs-parent="#faq_accordionExample"
                      >
                        <div class="accordion-body">
                          <p class="ct_fs_16 mb-3 ct_line_h_30">
                            These costs can spiral but that didn't seem fair. So
                            our prices work differently. Small businesses often
                            need to do similar things: sell online, book
                            appointments, make reservations. So we offer
                            cheaper, pre-packaged Studio Store apps - that solve
                            these brilliantly.
                          </p>
                          <p class="ct_fs_16 mb-0 ct_line_h_30">
                            If you’re doing something new, on a bigger scale, or
                            need more flexibility, then Builder Studio is for
                            you. Prices vary depending on the features you need
                            but again, you’ll know exactly what you’re paying
                            upfront.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="ct_looking_for_work_bg"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div class="d-flex align-items-center gap-lg-5 gap-3 ct_flex_col_767 ">
          <div class="text-white">
            <h4 class="ct_fs_24">Looking to Work With Us?</h4>
            <p class="mb-0">
              Whether you’re ready to start or just exploring ideas, we’re here
              to support your next step
            </p>
          </div>
          <div class="ct_flex_shrink_0">
            <a
              href="coach/signup-coach.html"
              class="ct_yellow_btn ct_darkblue_btn ct_flex_1"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <footer class="ct_px_40 py-5">
        <div class="ct_footer_logo">
          <a href="#">
            <img
              src="https://nuvio-fe.onrender.com/nuvio/assets/img/Nuvio_logo.png"
              alt=""
            />
          </a>
        </div>
        <div class="row pt-4">
          <div class="col-xxl-3 col-xl-2 col-md-6 mb-4">
            <div class="ct_footer_links">
              <h4 class="ct_fs_20 ct_darkblue_text mb-3">Navigation</h4>
              <ul>
                <li>
                  <a href="" onClick={(e) => goTo(e)}>
                    For Enterprises
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => goTo(e)}>
                    For Freelancers
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => goTo(e)}>
                    CoachHub
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => goTo(e)}>
                    Funding
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => goTo(e, coachPaths?.AboutUs)}>
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-2 col-md-6 mb-4">
            <div class="ct_footer_links">
              <h4 class="ct_fs_20 ct_darkblue_text mb-3">Resources</h4>
              <ul>
                <li>
                  <a href="" onClick={(e) => goTo(e)}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => goTo(e)}>
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => goTo(e)}>
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => goTo(e)}>
                    Support
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => goTo(e)}>
                    Help Centre
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xxl-2 col-xl-3 col-md-6 mb-4">
            <div class="ct_footer_links">
              <h4 class="ct_fs_20 ct_darkblue_text mb-3">Get in Touch</h4>
              <ul>
                <li>
                  <a href="mailto:info@gmail.com">
                    <i class="fa-solid fa-envelope me-1 ct_yellow_text"></i>
                    info@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+123-456-789">
                    <i class="fa-solid fa-phone me-1 ct_yellow_text"></i>{" "}
                    +123-456-789
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fa-solid fa-location-dot ct_yellow_text me-1"></i>{" "}
                    306, Fake Street, France
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-5 col-md-6 mb-4">
            <div class="ct_newsletter_bg">
              <p>Ready to keep up with what’s next?</p>
              <div class="d-flex align-items-center gap-2 justify-content-between ct_flex_col_991">
                <div class="form-group ct_flex_1 ct_w_100_991">
                  <input
                    type="email"
                    class="form-control ct_input ct_border_radius_100"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="ct_w_100_991">
                  <button class="ct_yellow_btn ct_darkblue_btn ct_border_radius_100 ct_h_48 ct_w_100_991">
                    Subscribe now
                  </button>
                </div>
              </div>
            </div>
            <div class="pt-4">
              <h5 class="ct_fs_18 mb-3">Follow Us</h5>
              <div class="d-flex align-items-center gap-2">
                <a href="" style={{ color: "#0076B2" }}>
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="" style={{ color: "#3D5A98" }}>
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="" style={{ color: "#FF0000" }}>
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-4 ct_border_top_1">
          <div class="col-md-12">
            <p class="mb-0 text-center">
              Copyright @ 2025 NUVIO All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </CoachLayout>
  );
};

export default ContactUs;
