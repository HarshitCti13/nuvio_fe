import AuthLayout from "../../../layouts/AuthLayout";
import StepsDots from "../../../components/form/StepsDots";
import useAppNavigate from "../../../components/hooks/useAppNavigate";
import { clearFormData, getFormData, updateFormData } from "../../../utils/pip";
import { Formik } from "formik";
import { step3Schema } from "../../../utils/schema";
import ErrorMessage from "../../../components/form/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { handleCoachSignUp } from "../../../redux/features/coach/actions/authAction";
import { coachPaths } from "../../../routes/coach";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader";

const CoachSignUpStep3 = () => {
  const { isLoading } = useSelector(state => state.coach.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { goBack } = useAppNavigate();
  const savedData = getFormData().step3;

  const handleFinalSubmit = (values) => {
    updateFormData("step3", values);
    const allData = getFormData();
    clearFormData();
    const formData = new FormData();
    formData.append("year_of_experience", parseInt(allData?.step2?.year_of_experience));
    formData.append("profile_image", values?.profile_image);
    formData.append("phone_number", allData?.step1?.phone_number);
    formData.append("certificate", values?.certificate);
    formData.append("category_id", allData?.step2?.category_id);
    formData.append("full_name", allData?.step1?.full_name);
    formData.append("tagline", values?.tagline);
    formData.append("format", allData?.step2?.format);
    formData.append("reason", values?.reason);
    formData.append("email", allData?.step1?.email);
    formData.append("bio", values?.bio);
    formData.append("cv", values?.cv);
    const callback = (response) => {
      if (response) {
        clearFormData();
        navigate(coachPaths?.Login);
      } else {
        clearFormData();
        navigate(coachPaths?.Login);
      };
    };
    dispatch(handleCoachSignUp({ payload: formData, callback }))
  };

  if (isLoading) {
    return <Loader />;
  };
  return (
    <AuthLayout>
      <div class="col-xxl-7 col-xl-6 col-lg-7 mb-4 mb-lg-0 mx-auto pe-0">
        <div class="ct_signup_right_content px-3 ct_custom_scroll pe-5">
          <div class="ct_back_top_btn">
            <a class="mb-0 ct_darkblue_text" onClick={(e) => goBack(e)}>
              <i class="fa-solid fa-arrow-left"></i>
            </a>
          </div>
          <div class="ct_signup_logo mb-3">
            <img src="../assets/img/Nuvio_logo.png" alt="" />
          </div>
          <div class="mt-0 text-center">
            <h2 class="ct_fs_32  mb-2 ct_darkblue_text">Who You Are</h2>
            <p
              class="mb-0 ct_darkblue_text mx-auto"
              style={{ maxWidth: "500px" }}
            >
              Add your photo, bio, tagline, and coaching style to build trust
              and attract the right clients.
            </p>
          </div>
          <Formik
            initialValues={savedData}
            validationSchema={step3Schema}
            onSubmit={(values, actions) => {
              handleFinalSubmit(values);
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
              setTouched,
            }) => (
              <form onSubmit={handleSubmit} class="mt-4">
                <div class="row">
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
                          <p class="text-center ct_fs_18 ct_text_op_07 mb-0 ct_cursor_pointer">
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
                              />
                            </svg>
                            Upload Profile
                          </p>
                          <input
                            type="file"
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
                      <label for="" class="mb-2 d-block ct_darkblue_text">
                        {" "}
                        CV{" "}
                      </label>
                      <div class="ct_upload_product_main ct_upload_product_main_180 ">
                        <label>
                          <p class="text-center ct_fs_18 ct_text_op_07 mb-0 ct_cursor_pointer">
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
                              />
                            </svg>
                            Upload CV
                          </p>
                          <input
                            type="file"
                            name=""
                            id="ct_upload_cv"
                            class="d-none"
                            accept="image/*"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              setTouched({ cv: true });
                              setFieldValue("cv", file);
                            }}
                            onBlur={handleBlur}
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
                    </div >
                  </div >
                  <div class="col-md-12">
                    <div class="form-group mb-4">
                      <label class="mb-2 d-block ct_darkblue_text">
                        Certificate{" "}
                      </label>
                      <div class="ct_upload_product_main ct_upload_product_main_180 ">
                        <label>
                          <p class="text-center ct_fs_18 ct_text_op_07 mb-0 ct_cursor_pointer">
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
                              />
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
                    <div class="form-group mb-4">
                      <label for="" class="mb-2 d-block ct_darkblue_text">
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
                        Why do you want to join NUVIO as a coach?
                      </label>
                      <textarea
                        class="form-control ct_input h-auto"
                        rows="4"
                        id="reason"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values?.reason}
                      ></textarea>
                      <ErrorMessage
                        errors={errors}
                        touched={touched}
                        fieldName={"reason"}
                      />
                    </div>
                  </div>
                </div >

                <div class="text-center mt-2">
                  <a class="ct_yellow_btn w-75 mx-auto" onClick={handleSubmit}>
                    Submit{" "}
                  </a>
                </div>

                <StepsDots activeStep={3} />
              </form >
            )}
          </Formik >
        </div >
      </div >
    </AuthLayout >
  );
};

export default CoachSignUpStep3;
