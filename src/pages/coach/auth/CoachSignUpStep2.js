import { Formik } from "formik";
import { useEffect } from "react";
import Loader from "../../../components/loader";
import { coachPaths } from "../../../routes/coach";
import AuthLayout from "../../../layouts/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import StepsDots from "../../../components/form/StepsDots";
import ErrorMessage from "../../../components/form/ErrorMessage";
import { getFormData, updateFormData } from "../../../utils/pip";
import useAppNavigate from "../../../components/hooks/useAppNavigate";
import { fetchCoachCategories } from "../../../redux/features/coach/actions/authAction";
import { step2Schema } from "../../../utils/schema";

const CoachSignUpStep2 = () => {
  const dispatch = useDispatch();
  const savedData = getFormData().step2;
  const { goTo, goBack } = useAppNavigate();
  const { categoryList, isLoading } = useSelector((state) => state.coach.auth);

  const handleStep2 = (values) => {
    updateFormData("step2", values);
    goTo(coachPaths.CoachSignUpStep3);
  };

  useEffect(() => {
    dispatch(fetchCoachCategories());
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <AuthLayout>
      <div class="col-xxl-7 col-xl-6 col-lg-7 mb-4 mb-lg-0 mx-auto pe-0">
        <div class="ct_signup_right_content px-3 ct_custom_scroll pe-5">
          <div class="ct_back_top_btn">
            <a class="mb-0 ct_darkblue_text" onClick={(e) => goBack(e)}>
              <i class="fa-solid fa-arrow-left"></i>
            </a>
          </div>
          <div class="ct_signup_logo ct_mb_60">
            <img src="../assets/img/Nuvio_logo.png" alt="" />
          </div>
          <div class="mt-0 text-center">
            <h2 class="ct_fs_32  mb-2 ct_darkblue_text">
              Define Your Coaching Path
            </h2>
            <p
              class="mb-0 ct_darkblue_text mx-auto"
              style={{ maxWidth: "523px" }}
            >
              Help us understand your coaching strengths so we can tailor the
              experience to your style and clients.
            </p>
          </div>
          <Formik
            initialValues={savedData}
            validationSchema={step2Schema}
            onSubmit={(values, actions) => {
              handleStep2(values);
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
              <form onSubmit={handleSubmit} class="mt-5">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group mb-4">
                      <label for="" class="mb-2 d-block ct_darkblue_text">
                        Coaching Category
                      </label>
                      <select
                        id="category_id"
                        name="category_id"
                        value={values?.category_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        class="form-control ct_input"
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
                  <div class="col-md-12">
                    <div class="form-group mb-4">
                      <label for="" class="mb-2 d-block ct_darkblue_text">
                        {" "}
                        Years of Experience{" "}
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
                  <div class="col-md-12">
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
                </div>
                <div class="text-center mt-2">
                  <a class="ct_yellow_btn w-75 mx-auto" onClick={handleSubmit}>
                    Continue{" "}
                  </a>
                </div>

                <StepsDots activeStep={2} />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </AuthLayout>
  );
};

export default CoachSignUpStep2;
