import React, { useEffect } from "react";
import CoachLayout from "../../layouts/CoachLayout";
import MenuLayout from "../../layouts/MenuLayout";
import { useDispatch, useSelector } from "react-redux";
import { becomeCoachSchema } from "../../utils/schema";
import { Formik } from "formik";
import ErrorMessage from "../../components/form/ErrorMessage";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Loader from "../../components/loader";
import { fetchCoachCategories, handleCoachSignUp } from "../../redux/features/coach/actions/authAction";
import { coachPaths } from "../../routes/coach";
import { useNavigate } from "react-router-dom";

export const ApplyBecomeCoach = () => {
  const user = { name: "apply-become-a-coach", role: "coach" };
  const { categoryList, isLoading } = useSelector((state) => state.coach.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCoachCategories());
  }, []);

  const initialState = {
    full_name: "",
    email: "",
    phone_number: "",
    category_id: "",
    format: "",
    tagline: "",
    bio: "",
    reason: "",
    year_of_experience: "",
    profile_image: "",
    cv: "",
    certificate: ""
  };

  const handleBecomeCoachDetails = (values) => {
    const formData = new FormData();
    formData.append("year_of_experience", parseInt(values.year_of_experience));
    formData.append("profile_image", values?.profile_image);
    formData.append("phone_number", values.phone_number);
    formData.append("certificate", values?.certificate);
    formData.append("category_id", values.category_id);
    formData.append("full_name", values.full_name);
    formData.append("tagline", values?.tagline);
    formData.append("format", values.format);
    formData.append("reason", values?.reason);
    formData.append("email", values.email);
    formData.append("bio", values?.bio);
    formData.append("cv", values?.cv);
    const callback = (response) => {
      if (response) {
        navigate(coachPaths?.Login);
      }
    };
    dispatch(handleCoachSignUp({ payload: formData, callback }))
  };

  if (isLoading) {
    return <Loader />
  };
  return (
    <MenuLayout user={user}>
      <section class="ct_px_40   ct_dark_sky_bg py-5">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div
              class="col-xxl-6 col-xl-8 col-md-8 mb-4 mb-md-0 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_px_40 ct_px_0_767">
                <h2 class="ct_fs_50 mb-4 text-white">
                  Start Your <span class="ct_darkblue_text">Coaching</span> ,{" "}
                  <br /> Journey with Nuvio
                </h2>
                <p class="mb-0 mt-3 ct_fs_20 text-white">
                  Apply to join our trusted network of coaches and share your
                  expertise with founders, teams, and professionals ready to
                  grow.
                </p>
                <div class="ct_mt_40">
                  <a

                    class="ct_yellow_btn ct_darkblue_btn  px-5 ct_fit_content ct_h_48"
                  >
                    Our Coaches
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-xxl-5 col-xl-4 col-md-4 mb-4 mb-md-0 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="ct_boocamp_img_left">
                <img
                  src="assets/img/apply-become_coach_right.png"
                  alt=""
                  class="ct_img_h_458 w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class=" ct_px_40 ct_py_130">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div
              class="col-lg-4 mb-4 mb-lg-0 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_how_work_img">
                <img src="assets/img/How_to_Join_left_780.png" alt="" />
              </div>
            </div>
            <div
              class="col-lg-8 mb-4 mb-lg-0 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="ct_how_work_content">
                <h4 class="ct_fs_24">How to Join ?</h4>
                <h3 class="ct_fs_32 ">Apply. Align. Start Coaching</h3>
              </div>
              <div class="row mt-5">
                <div class="col-lg-4">
                  <div class="ct_how_work_card p-4">
                    <img
                      src="assets/img/navigation_icon_11.png"
                      alt=""
                      className="ct_w_50_345"
                    />
                    <div class="pt-4">
                      <h5 className="ct_fs_20 ct_dakrblue_text mb-4">
                        Submit Your Application
                      </h5>
                      <p class="mb-0 ct_fs_16" style={{ maxWidth: "252px" }}>
                        Share your background coaching category, and
                        availability using the form below.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="ct_how_work_card p-4">
                    <img
                      src="assets/img/navigation_icon_2.png"
                      alt=""
                      className="ct_w_50_345"
                    />
                    <div class="pt-4">
                      <h5 className="ct_fs_20 ct_dakrblue_text mb-4">
                        Review & Approval
                      </h5>
                      <p class="mb-0 ct_fs_16" style={{ maxWidth: "252px" }}>
                        Our team will review your submission within 3-5 business
                        days to ensure a good fit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="ct_how_work_card p-4">
                    <img
                      src="assets/img/navigation_icon_3.png"
                      alt=""
                      className="ct_w_50_345"
                    />
                    <div class="pt-4">
                      <h5 className="ct_fs_20 ct_dakrblue_text mb-4">
                        Set Up Your Account
                      </h5>
                      <p class="mb-0 ct_fs_16" style={{ maxWidth: "232px" }}>
                        If approved, you’ll receive an invite to create your
                        password and complete your profile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ct_ps_40_pe_100 ct_pb_100 ct_mb_100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 mb-4 mb-lg-0">
              <h4 className="ct_fs_32 mb-3">Tell Us About You</h4>
              <p className="ct_fs_20" style={{ maxWidth: "612px" }}>
                We’ll use this information to{" "}
                <span className="ct_darksky_blue_text">evaluate</span> your
                profile and match you with the right opportunities.
              </p>
              <Formik
                initialValues={initialState}
                validationSchema={becomeCoachSchema}
                onSubmit={(values, actions) => {
                  handleBecomeCoachDetails(values);
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
                  setTouched
                }) => (
                  <form action={handleSubmit} class="ct_mt_60">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group mb-4">
                          <label for="" class="d-block mb-2 ct_fs_14">
                            Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="Full Name"
                            class="form-control ct_input ct_input_h_60 ct_fs_14"
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
                          <label class="d-block mb-2 ct_fs_14">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="Email address"
                            class="form-control ct_input ct_input_h_60 ct_fs_14"
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
                      <div class="col-md-6">
                        <div class="form-group mb-4">
                          <label for="" class="d-block mb-2 ct_fs_14">
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
                          <label for="" class="d-block mb-2 ct_fs_14">
                            Coaching Category
                          </label>
                          <select
                            className="form-control ct_input ct_input_h_60 ct_fs_14"
                            id="category_id"
                            name="category_id"
                            value={values?.category_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value={""}>Select Coaching Category</option>;
                            {categoryList?.map((item, ind) => {
                              return (
                                <option value={item?.category_id}>
                                  {item?.category_name}
                                </option>
                              );
                            })}
                          </select>
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName={"category_id"}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group mb-4">
                          <label for="" class="d-block mb-2 ct_fs_14">
                            Year of Experience
                          </label>
                          <input
                            type="text"
                            class="form-control ct_input"
                            placeholder="Years of Experience "
                            id="year_of_experience"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values?.year_of_experience}
                          />
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName="year_of_experience"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group mb-4">
                          <label for="" class="mb-2 d-block ct_darkblue_text">
                            Coaching Format
                          </label>
                          <select
                            name="format"
                            id="format"
                            value={values?.format}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            class="form-control ct_input"
                          >
                            <option value={""}>Select Coaching Format</option>;
                            {[
                              { label: "1:1", val: "1:1" },
                              { label: "Group", val: "GROUP" },
                              { label: "Both", val: "BOTH" },
                            ]?.map((item, ind) => {
                              return (
                                <option value={item?.val}>{item?.label}</option>
                              );
                            })}
                          </select>
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName={"format"}
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group mb-4">
                          <label for="" class="d-block mb-2 ct_fs_14">
                            Bio
                          </label>
                          <textarea
                            class="form-control ct_input h-auto"
                            rows="4"
                            id="bio"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values?.bio}
                          ></textarea>
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName={"bio"}
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group mb-4">
                          <label for="" class="mb-2 d-block ct_darkblue_text">
                            Taglines (Minimum 50 words)
                          </label>
                          <textarea
                            type="text"
                            class="form-control ct_input h-auto"
                            placeholder="short and impactful"
                            rows={3}
                            id="tagline"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values?.tagline}
                          />
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName={"tagline"}
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group mb-4">
                          <label for="" class="mb-2 d-block ct_darkblue_text">
                            {" "}
                            Profile Photo{" "}
                          </label>
                          <div class="ct_upload_product_main ct_upload_product_main_180 ">
                            <label>
                              <p class="text-center ct_fs_18 ct_text_op_07 mb-0 ct_cursor_pointer d-flex align-items-center gap-2">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 9.00025V15.0002C11.0003 15.2551 11.0979 15.5003 11.2728 15.6856C11.4478 15.871 11.687 15.9825 11.9414 15.9974C12.1958 16.0124 12.4464 15.9296 12.6418 15.766C12.8373 15.6024 12.9629 15.3703 12.993 15.1172L13 15.0002V9.00025H19C19.5046 9.00009 19.9906 9.19066 20.3605 9.53375C20.7305 9.87684 20.9572 10.3471 20.995 10.8502L21 11.0002V20.0002C21.0002 20.5048 20.8096 20.9908 20.4665 21.3608C20.1234 21.7308 19.6532 21.9574 19.15 21.9953L19 22.0002H5C4.49542 22.0004 4.00943 21.8098 3.63945 21.4668C3.26947 21.1237 3.04284 20.6534 3.005 20.1502L3 20.0002V11.0002C2.99984 10.4957 3.19041 10.0097 3.5335 9.6397C3.87659 9.26972 4.34684 9.04309 4.85 9.00525L5 9.00025H11ZM12.884 2.46925L16.243 5.82725C16.4306 6.01489 16.5361 6.26938 16.5361 6.53475C16.5361 6.80011 16.4306 7.05461 16.243 7.24225C16.0554 7.42989 15.8009 7.53531 15.5355 7.53531C15.2701 7.53531 15.0156 7.42989 14.828 7.24225L13 5.41325V9.00025H11V5.41325L9.172 7.24225C9.07909 7.33516 8.96879 7.40886 8.8474 7.45914C8.726 7.50942 8.5959 7.53531 8.4645 7.53531C8.33311 7.53531 8.203 7.50942 8.0816 7.45914C7.96021 7.40886 7.84991 7.33516 7.757 7.24225C7.66409 7.14934 7.59039 7.03904 7.54011 6.91764C7.48982 6.79625 7.46394 6.66614 7.46394 6.53475C7.46394 6.40335 7.48982 6.27325 7.54011 6.15185C7.59039 6.03046 7.66409 5.92016 7.757 5.82725L11.117 2.46925C11.3514 2.23506 11.6692 2.10352 12.0005 2.10352C12.3318 2.10352 12.6496 2.23506 12.884 2.46925Z"
                                    fill="#023047"
                                  ></path>
                                </svg>
                                Upload Profile
                              </p>
                              <input
                                type="file"
                                name=""
                                id="profile_image"
                                accept="image/*"
                                onChange={(event) => {
                                  const file = event.currentTarget.files[0];
                                  setTouched({ profile_image: true });
                                  setFieldValue("profile_image", file);
                                }}
                                onBlur={handleBlur}
                                class="d-none"
                              />
                            </label>
                          </div>
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName={"profile_image"}
                          />
                          {values?.profile_image && (
                            <div class="ct_single_uploaded_img mt-3 ">
                              <img
                                src={
                                  values?.profile_image
                                    ? typeof values.profile_image === "string"
                                      ? values.profile_image
                                      : URL.createObjectURL(values.profile_image)
                                    : ""
                                }
                                alt=""
                              />
                              <i class="fa-solid fa-xmark" onClick={() => {
                                setTouched({ profile_image: true });
                                setFieldValue("profile_image", null);
                              }}></i>
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group mb-4">
                          <label class="mb-2 d-block ct_darkblue_text">
                            {" "}
                            CV{" "}
                          </label>
                          <div class="ct_upload_product_main ct_upload_product_main_180 ">
                            <label>
                              <p class="text-center ct_fs_18 ct_text_op_07 mb-0 ct_cursor_pointer d-flex align-items-center gap-2">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 9.00025V15.0002C11.0003 15.2551 11.0979 15.5003 11.2728 15.6856C11.4478 15.871 11.687 15.9825 11.9414 15.9974C12.1958 16.0124 12.4464 15.9296 12.6418 15.766C12.8373 15.6024 12.9629 15.3703 12.993 15.1172L13 15.0002V9.00025H19C19.5046 9.00009 19.9906 9.19066 20.3605 9.53375C20.7305 9.87684 20.9572 10.3471 20.995 10.8502L21 11.0002V20.0002C21.0002 20.5048 20.8096 20.9908 20.4665 21.3608C20.1234 21.7308 19.6532 21.9574 19.15 21.9953L19 22.0002H5C4.49542 22.0004 4.00943 21.8098 3.63945 21.4668C3.26947 21.1237 3.04284 20.6534 3.005 20.1502L3 20.0002V11.0002C2.99984 10.4957 3.19041 10.0097 3.5335 9.6397C3.87659 9.26972 4.34684 9.04309 4.85 9.00525L5 9.00025H11ZM12.884 2.46925L16.243 5.82725C16.4306 6.01489 16.5361 6.26938 16.5361 6.53475C16.5361 6.80011 16.4306 7.05461 16.243 7.24225C16.0554 7.42989 15.8009 7.53531 15.5355 7.53531C15.2701 7.53531 15.0156 7.42989 14.828 7.24225L13 5.41325V9.00025H11V5.41325L9.172 7.24225C9.07909 7.33516 8.96879 7.40886 8.8474 7.45914C8.726 7.50942 8.5959 7.53531 8.4645 7.53531C8.33311 7.53531 8.203 7.50942 8.0816 7.45914C7.96021 7.40886 7.84991 7.33516 7.757 7.24225C7.66409 7.14934 7.59039 7.03904 7.54011 6.91764C7.48982 6.79625 7.46394 6.66614 7.46394 6.53475C7.46394 6.40335 7.48982 6.27325 7.54011 6.15185C7.59039 6.03046 7.66409 5.92016 7.757 5.82725L11.117 2.46925C11.3514 2.23506 11.6692 2.10352 12.0005 2.10352C12.3318 2.10352 12.6496 2.23506 12.884 2.46925Z"
                                    fill="#023047"
                                  ></path>
                                </svg>
                                Upload CV
                              </p>
                              <input
                                type="file"
                                name=""
                                id="cv"
                                accept="image/*"
                                onChange={(event) => {
                                  const file = event.currentTarget.files[0];
                                  setTouched({ cv: true });
                                  setFieldValue("cv", file);
                                }}
                                onBlur={handleBlur}
                                class="d-none"
                              />
                            </label>
                          </div>
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName={"cv"}
                          />
                          {values?.cv && (
                            <div class="ct_single_uploaded_img mt-3 ">
                              <img
                                src={
                                  values?.cv
                                    ? typeof values.cv === "string"
                                      ? values.cv
                                      : URL.createObjectURL(values.cv)
                                    : ""
                                }
                                alt=""
                              />
                              <i class="fa-solid fa-xmark" onClick={() => {
                                setTouched({ cv: true });
                                setFieldValue("cv", null);
                              }}></i>
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group mb-4">
                          <label for="" class="mb-2 d-block ct_darkblue_text">
                            {" "}
                            Certificate{" "}
                          </label>
                          <div class="ct_upload_product_main ct_upload_product_main_180 ">
                            <label>
                              <p class="text-center ct_fs_18 ct_text_op_07 mb-0 ct_cursor_pointer d-flex align-items-center gap-2">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 9.00025V15.0002C11.0003 15.2551 11.0979 15.5003 11.2728 15.6856C11.4478 15.871 11.687 15.9825 11.9414 15.9974C12.1958 16.0124 12.4464 15.9296 12.6418 15.766C12.8373 15.6024 12.9629 15.3703 12.993 15.1172L13 15.0002V9.00025H19C19.5046 9.00009 19.9906 9.19066 20.3605 9.53375C20.7305 9.87684 20.9572 10.3471 20.995 10.8502L21 11.0002V20.0002C21.0002 20.5048 20.8096 20.9908 20.4665 21.3608C20.1234 21.7308 19.6532 21.9574 19.15 21.9953L19 22.0002H5C4.49542 22.0004 4.00943 21.8098 3.63945 21.4668C3.26947 21.1237 3.04284 20.6534 3.005 20.1502L3 20.0002V11.0002C2.99984 10.4957 3.19041 10.0097 3.5335 9.6397C3.87659 9.26972 4.34684 9.04309 4.85 9.00525L5 9.00025H11ZM12.884 2.46925L16.243 5.82725C16.4306 6.01489 16.5361 6.26938 16.5361 6.53475C16.5361 6.80011 16.4306 7.05461 16.243 7.24225C16.0554 7.42989 15.8009 7.53531 15.5355 7.53531C15.2701 7.53531 15.0156 7.42989 14.828 7.24225L13 5.41325V9.00025H11V5.41325L9.172 7.24225C9.07909 7.33516 8.96879 7.40886 8.8474 7.45914C8.726 7.50942 8.5959 7.53531 8.4645 7.53531C8.33311 7.53531 8.203 7.50942 8.0816 7.45914C7.96021 7.40886 7.84991 7.33516 7.757 7.24225C7.66409 7.14934 7.59039 7.03904 7.54011 6.91764C7.48982 6.79625 7.46394 6.66614 7.46394 6.53475C7.46394 6.40335 7.48982 6.27325 7.54011 6.15185C7.59039 6.03046 7.66409 5.92016 7.757 5.82725L11.117 2.46925C11.3514 2.23506 11.6692 2.10352 12.0005 2.10352C12.3318 2.10352 12.6496 2.23506 12.884 2.46925Z"
                                    fill="#023047"
                                  ></path>
                                </svg>
                                Upload Certificate
                              </p>
                              <input
                                type="file"
                                id="certificate"
                                accept="image/*"
                                onChange={(event) => {
                                  const file = event.currentTarget.files[0];
                                  setTouched({ certificate: true });
                                  setFieldValue("certificate", file);
                                }}
                                onBlur={handleBlur}
                                class="d-none"
                              />
                            </label>
                          </div>
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName={"certificate"}
                          />
                          {values?.certificate && (
                            <div class="ct_single_uploaded_img mt-3 ">
                              <img
                                src={
                                  values?.certificate
                                    ? typeof values.certificate === "string"
                                      ? values.certificate
                                      : URL.createObjectURL(values.certificate)
                                    : ""
                                }
                                alt=""
                              />
                              <i class="fa-solid fa-xmark" onClick={() => {
                                setTouched({ certificate: true });
                                setFieldValue("certificate", null);
                              }}></i>
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group mb-3">
                          <label for="" class="d-block mb-2 ct_fs_14">
                            Why do you want to join NUVIO as a coach?
                          </label>
                          <textarea
                            class="form-control ct_input h-auto"
                            rows="4"
                            id="reason"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values?.reason}
                          />
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName={"reason"}
                          />
                        </div>
                      </div>
                      <p className="ct_fs_18" style={{ maxWidth: "650px" }}>Thanks for having an interest in joining our coaching platform! Our team will review the details and get back to you.</p>
                    </div>

                    <div className="text-end mt-5">
                      <button type='button' class="ct_yellow_btn  px-5 ms-auto" onClick={handleSubmit}
                      // data-bs-toggle="modal" data-bs-target="#ct_submit_modal"
                      >
                        {" "}
                        Submit My Application
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 mb-4 mb-lg-0  ps-lg-5">
              <div className="ct_need_help_card">
                <h4 className="ct_fs_24 mb-3">Need Help Filling This Form?</h4>
                <ul>
                  <li className="ct_fs_18 ">
                    Use a clear, specific job title that reflects the role and level skip vague or trendy terms.
                  </li>
                  <li className="ct_fs_18">
                    Describe what makes the role exciting or unique to help your post stand out.
                  </li>
                  <li className="ct_fs_18">
                    List the main responsibilities, skills required, and what success looks like.
                  </li>
                  <li className="ct_fs_18">
                    Specify if the job is remote, hybrid, or onsite to manage expectations from the start.
                  </li>
                </ul>
                <p className="ct_fs_18 mt-4">Need help <span className="ct_yellow_text">Contact Us</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ct_looking_for_work_bg ct_looking_for_work_bg_left    ct_p_111_y_106">
        <div class="d-flex align-items-center gap-lg-5 gap-3 ct_flex_col_767 ">
          <div class="text-white">
            <h4 class="ct_fs_36 mb-4">
              Need Help With Your Application?
            </h4>
            <p class="mb-0 ct_fs_18">
              Reach out- we’re happy to answer questions or guide you through the process.
            </p>
          </div>
          <div class="ct_flex_shrink_0">
            <a
              class="ct_yellow_btn ct_darkblue_btn ct_flex_1 px-5"

            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="ct_px_40 ct_py_130">
        <div className="container-fluid">

          {/* convert into slider */}
          <div className="row">
            <div className="col-md-4">
              <div class="ct_testimonial_review_card">
                <div className="d-flex align-items-center gap-3 mb-3 justify-content-between">
                  <div class="d-flex align-items-center gap-1">
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                  </div>

                  <p className="mb-0 ct_fs_16">20th April, 2025</p>
                </div>
                <p className="mb-0 " style={{ maxWidth: "295px" }}>The expert sessions and networking inside NuForge are next level. I finally feel part of a serious community that pushes me to grow.</p>
                <div class="d-flex align-items-center gap-3 ct_mt_40">
                  <img src="../assets/img/user_22.jpeg" class="ct_img_60 " alt="" />
                  <div>
                    <h5 class="ct_fs_18  mb-1 me-1 ct_grey_text">Alex Robertson
                    </h5>
                    <p class="mb-0  ct_fs_16  ">Frontend Developer</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div class="ct_testimonial_review_card">
                <div className="d-flex align-items-center gap-3 mb-3 justify-content-between">
                  <div class="d-flex align-items-center gap-1">
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                  </div>

                  <p className="mb-0 ct_fs_16">20th April, 2025</p>
                </div>
                <p className="mb-0 " style={{ maxWidth: "295px" }}>The expert sessions and networking inside NuForge are next level. I finally feel part of a serious community that pushes me to grow.</p>
                <div class="d-flex align-items-center gap-3 ct_mt_40">
                  <img src="../assets/img/user_22.jpeg" class="ct_img_60 " alt="" />
                  <div>
                    <h5 class="ct_fs_18  mb-1 me-1 ct_grey_text">Alex Robertson
                    </h5>
                    <p class="mb-0  ct_fs_16  ">Frontend Developer</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div class="ct_testimonial_review_card">
                <div className="d-flex align-items-center gap-3 mb-3 justify-content-between">
                  <div class="d-flex align-items-center gap-1">
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                    <i class="fa-solid fa-star ct_orange_text ct_fs_16"></i>
                  </div>

                  <p className="mb-0 ct_fs_16">20th April, 2025</p>
                </div>
                <p className="mb-0 " style={{ maxWidth: "295px" }}>The expert sessions and networking inside NuForge are next level. I finally feel part of a serious community that pushes me to grow.</p>
                <div class="d-flex align-items-center gap-3 ct_mt_40">
                  <img src="../assets/img/user_22.jpeg" class="ct_img_60 " alt="" />
                  <div>
                    <h5 class="ct_fs_18  mb-1 me-1 ct_grey_text">Alex Robertson
                    </h5>
                    <p class="mb-0  ct_fs_16  ">Frontend Developer</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      <section class="ct_looking_for_work_bg " style={{ backgroundColor: "#8ECAE6" }}>
        <div class="d-flex align-items-center gap-lg-5 gap-3 ct_flex_col_767 ">
          <div class="text-white">
            <h4 class="ct_fs_36 mb-3" style={{ maxWidth: "700px" }}>
              Thanks For Applying
            </h4>
            <p class="mb-0 ct_fs_18" style={{ maxWidth: "623px" }}>
              We’re reviewing your submission and will be in touch soon.
            </p>
          </div>
          <div class="ct_flex_shrink_0">
            <a

              class="ct_yellow_btn ct_darkblue_btn ct_flex_1"
            >
              Explore CoachHub
            </a>
          </div>
        </div>
      </section>

      <section class=" ct_px_40 pt-0 ct_mt_100">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xxl-5  col-xl-6 col-md-6 mb-4 mb-md-0  ">
              <div class="ct_about_img">
                <img
                  src="assets/img/you_will_learn_img.png"
                  class="ct_img_h_617"
                  alt=""
                />
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-md-6 mb-4 mb-md-0 ps-xl-5">
              <div class="ct_about_cnt">
                <h2 class=" ct_fs_32  ct_mb_60">Frequently asked questions</h2>

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
                          What happens after I apply?
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
                          Can I coach part-time?
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
                          How does scheduling work?
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
                          What support does NUVIO provide to freelancers?
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


      <footer class="ct_px_40 py-5">
        <div class="ct_footer_logo">
          <a >
            <img src="assets/img/Nuvio_logo.png" alt="" />
          </a>
        </div>
        <div class="row pt-4">
          <div class="col-xxl-3 col-xl-2 col-md-6 mb-4">
            <div class="ct_footer_links">
              <h4 class="ct_fs_20 ct_darkblue_text mb-3">Navigation</h4>
              <ul>
                <li>
                  <a>For Enterprises</a>
                </li>
                <li>
                  <a>For Freelancers</a>
                </li>
                <li>
                  <a>CoachHub</a>
                </li>
                <li>
                  <a>Funding</a>
                </li>
                <li>
                  <a>About us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-2 col-md-6 mb-4">
            <div class="ct_footer_links">
              <h4 class="ct_fs_20 ct_darkblue_text mb-3">Resources</h4>
              <ul>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Newsletter</a>
                </li>
                <li>
                  <a>Tutorials</a>
                </li>
                <li>
                  <a>Support</a>
                </li>
                <li>
                  <a>Help Centre</a>
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
                    <i class="fa-solid fa-phone me-1 ct_yellow_text"></i>
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
                <a style={{ color: "#0076B2" }}>
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a style={{ color: "#3D5A98" }}>
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a style={{ color: "#FF0000" }}>
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

      <div class="modal fade ct_submit_modal" id="ct_submit_modal" tabindex="-1" aria-labelledby="ct_submit_modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body py-5">
              <div class="mx-auto d-block text-center mb-4">
                <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 48C17.6348 48 11.5303 45.4714 7.02944 40.9706C2.52856 36.4697 0 30.3652 0 24C0 17.6348 2.52856 11.5303 7.02944 7.02944C11.5303 2.52856 17.6348 0 24 0C30.3652 0 36.4697 2.52856 40.9706 7.02944C45.4714 11.5303 48 17.6348 48 24C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48ZM19.2 36L40.8 15.6L37.2 12L19.2 28.8L10.8 20.4L7.2 24L19.2 36Z" fill="#FFB703" />
                </svg>
              </div>
              <div class="text-center">
                <h4 class="ct_fs_20 ">Application Submitted</h4>
                <p>Thanks for applying to become a coach on Nuvio CoachHub. Our team is currently reviewing your application</p>
              </div>
              <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                <a class="ct_yellow_btn ct_outline_grey ct_h_48 px-5 ct_w_100_575">View Coaches</a>
                <button class="ct_yellow_btn ct_h_48  px-5 ct_w_100_575" data-bs-dismiss="modal">Close </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};
