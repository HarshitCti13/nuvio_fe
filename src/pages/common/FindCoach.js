import React from "react";
import CoachLayout from "../../layouts/CoachLayout";
import MenuLayout from "../../layouts/MenuLayout";

export const FindCoach = () => {
  const user = { name: "find-a-coach", role: "coach" };
  return (
    <MenuLayout user={user}>
      <section class="ct_px_40    py-5">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div
              class="col-xxl-6 col-xl-8 col-md-8 mb-4 mb-md-0 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_px_40 ct_px_0_767">
                <h2 class="ct_fs_50 mb-4 " style={{ maxWidth: "600px" }}>
                  The Right Coach, Just for{" "}
                  <span class="ct_yellow_text">You</span>
                </h2>
                <p class="mb-0 mt-3 ct_fs_20 " style={{ maxWidth: "600px" }}>
                  Browse our network of experienced coaches and choose someone
                  who understands your goals whether you're building a business,
                  leading a team, or making a life shift.
                </p>
                <div class="ct_mt_40">
                  <a

                    class="ct_yellow_btn   px-5 ct_fit_content ct_h_48"
                  >
                    Talk to Us
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
                  src="assets/img/brecome-a-coach_right.png"
                  alt=""
                  class="ct_img_h_458 w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ct_coach_created_bg ct_pt_30_pb_76 ct_px_100 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-10 mx-auto">
              <h2 className="ct_fs_32 text-center mb-4">
                Find a Coach That Fits You
              </h2>
              <p className="ct_fs_20 text-center">
                Browse our network of expert coaches by type, focus, or
                availability
              </p>
              <div className="position-relative mt-4">
                <input
                  type="search"
                  className="form-control ct_input ct_input_ps_40 bg-transparent"
                  placeholder="Search by name or keyword"
                />
                <i className="fa-solid fa-search ct_input_icon_left"></i>
              </div>

              <div className="d-flex align-items-center gap-3 mt-4 ct_flex_col_767 ct_w_100_767">
                <div className="ct_w_100_767">
                  <select className="form-control ct_input bg-transparent ct_fit_content ct_w_100_767">
                    <option>Coaching Type</option>
                  </select>
                </div>
                <div className="ct_w_100_767">
                  <select className="form-control ct_input bg-transparent ct_fit_content ct_w_100_767">
                    <option>Focus Area</option>
                  </select>
                </div>
                <div className="ct_w_100_767">
                  <select className="form-control ct_input bg-transparent ct_fit_content ct_w_100_767">
                    <option>Availability</option>
                  </select>
                </div>
                <div className="position-relative ct_w_100_767">
                  <select className="form-control ct_input border-0 bg-transparent ct_fit_content ct_ps_60 ct_w_100_767">
                    <option>Recommended</option>
                    <option>Most Viewed</option>
                    <option>Most Rated</option>
                  </select>
                  <img
                    src="assets/img/filter_circle_icon.png"
                    className="ct_input_icon_left"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row ct_mt_60">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="ct_coach_white_bg">
                <div className="d-flex align-items-start gap-2 ">
                  <img
                    src="assets/img/user_44.jpg"
                    className="ct_flex_shrink_0 ct_img_w_70"
                  />
                  <div>
                    <h4 className="ct_fs_20 mb-2">Jason Reed</h4>
                    <h6 className="ct_fs_16 mb-3">Performance Coach</h6>
                    <p
                      className="mb-0 ct_fs_14 ct_grey_text"
                      style={{ maxWidth: "224px" }}
                    >
                      Helps early-stage founders launch with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-3 flex-wrap ct_mt_30">
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Strategy_icon.png" />
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Mindset_icon.png" />
                      Mindset
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Clarity_icon.png" />
                      Clarity
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Team_icon.png" />
                      Team
                    </span>
                  </li>
                </ul>
                <div className="ct_mt_40 text-center">
                  <a

                    className="ct_yellow_btn ct_outline_grey ct_fit_content px-5 ct_fw_600 ct_btn_border_w_2 ct_h_44 mx-auto"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="ct_coach_white_bg">
                <div className="d-flex align-items-start gap-2 ">
                  <img
                    src="assets/img/user_44.jpg"
                    className="ct_flex_shrink_0 ct_img_w_70"
                  />
                  <div>
                    <h4 className="ct_fs_20 mb-2">Jason Reed</h4>
                    <h6 className="ct_fs_16 mb-3">Performance Coach</h6>
                    <p
                      className="mb-0 ct_fs_14 ct_grey_text"
                      style={{ maxWidth: "224px" }}
                    >
                      Helps early-stage founders launch with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-3 flex-wrap ct_mt_30">
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Strategy_icon.png" />
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Mindset_icon.png" />
                      Mindset
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Clarity_icon.png" />
                      Clarity
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Team_icon.png" />
                      Team
                    </span>
                  </li>
                </ul>
                <div className="ct_mt_40 text-center">
                  <a

                    className="ct_yellow_btn ct_outline_grey ct_fit_content px-5 ct_fw_600 ct_btn_border_w_2 ct_h_44 mx-auto"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="ct_coach_white_bg">
                <div className="d-flex align-items-start gap-2 ">
                  <img
                    src="assets/img/user_44.jpg"
                    className="ct_flex_shrink_0 ct_img_w_70"
                  />
                  <div>
                    <h4 className="ct_fs_20 mb-2">Jason Reed</h4>
                    <h6 className="ct_fs_16 mb-3">Performance Coach</h6>
                    <p
                      className="mb-0 ct_fs_14 ct_grey_text"
                      style={{ maxWidth: "224px" }}
                    >
                      Helps early-stage founders launch with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-3 flex-wrap ct_mt_30">
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Strategy_icon.png" />
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Mindset_icon.png" />
                      Mindset
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Clarity_icon.png" />
                      Clarity
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Team_icon.png" />
                      Team
                    </span>
                  </li>
                </ul>
                <div className="ct_mt_40 text-center">
                  <a

                    className="ct_yellow_btn ct_outline_grey ct_fit_content px-5 ct_fw_600 ct_btn_border_w_2 ct_h_44 mx-auto"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="ct_coach_white_bg">
                <div className="d-flex align-items-start gap-2 ">
                  <img
                    src="assets/img/user_44.jpg"
                    className="ct_flex_shrink_0 ct_img_w_70"
                  />
                  <div>
                    <h4 className="ct_fs_20 mb-2">Jason Reed</h4>
                    <h6 className="ct_fs_16 mb-3">Performance Coach</h6>
                    <p
                      className="mb-0 ct_fs_14 ct_grey_text"
                      style={{ maxWidth: "224px" }}
                    >
                      Helps early-stage founders launch with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-3 flex-wrap ct_mt_30">
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Strategy_icon.png" />
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Mindset_icon.png" />
                      Mindset
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Clarity_icon.png" />
                      Clarity
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Team_icon.png" />
                      Team
                    </span>
                  </li>
                </ul>
                <div className="ct_mt_40 text-center">
                  <a

                    className="ct_yellow_btn ct_outline_grey ct_fit_content px-5 ct_fw_600 ct_btn_border_w_2 ct_h_44 mx-auto"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="ct_coach_white_bg">
                <div className="d-flex align-items-start gap-2 ">
                  <img
                    src="assets/img/user_44.jpg"
                    className="ct_flex_shrink_0 ct_img_w_70"
                  />
                  <div>
                    <h4 className="ct_fs_20 mb-2">Jason Reed</h4>
                    <h6 className="ct_fs_16 mb-3">Performance Coach</h6>
                    <p
                      className="mb-0 ct_fs_14 ct_grey_text"
                      style={{ maxWidth: "224px" }}
                    >
                      Helps early-stage founders launch with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-3 flex-wrap ct_mt_30">
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Strategy_icon.png" />
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Mindset_icon.png" />
                      Mindset
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Clarity_icon.png" />
                      Clarity
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Team_icon.png" />
                      Team
                    </span>
                  </li>
                </ul>
                <div className="ct_mt_40 text-center">
                  <a

                    className="ct_yellow_btn ct_outline_grey ct_fit_content px-5 ct_fw_600 ct_btn_border_w_2 ct_h_44 mx-auto"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="ct_coach_white_bg">
                <div className="d-flex align-items-start gap-2 ">
                  <img
                    src="assets/img/user_44.jpg"
                    className="ct_flex_shrink_0 ct_img_w_70"
                  />
                  <div>
                    <h4 className="ct_fs_20 mb-2">Jason Reed</h4>
                    <h6 className="ct_fs_16 mb-3">Performance Coach</h6>
                    <p
                      className="mb-0 ct_fs_14 ct_grey_text"
                      style={{ maxWidth: "224px" }}
                    >
                      Helps early-stage founders launch with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-3 flex-wrap ct_mt_30">
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Strategy_icon.png" />
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Mindset_icon.png" />
                      Mindset
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Clarity_icon.png" />
                      Clarity
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Team_icon.png" />
                      Team
                    </span>
                  </li>
                </ul>
                <div className="ct_mt_40 text-center">
                  <a

                    className="ct_yellow_btn ct_outline_grey ct_fit_content px-5 ct_fw_600 ct_btn_border_w_2 ct_h_44 mx-auto"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="ct_coach_white_bg">
                <div className="d-flex align-items-start gap-2 ">
                  <img
                    src="assets/img/user_44.jpg"
                    className="ct_flex_shrink_0 ct_img_w_70"
                  />
                  <div>
                    <h4 className="ct_fs_20 mb-2">Jason Reed</h4>
                    <h6 className="ct_fs_16 mb-3">Performance Coach</h6>
                    <p
                      className="mb-0 ct_fs_14 ct_grey_text"
                      style={{ maxWidth: "224px" }}
                    >
                      Helps early-stage founders launch with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-3 flex-wrap ct_mt_30">
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Strategy_icon.png" />
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Mindset_icon.png" />
                      Mindset
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Clarity_icon.png" />
                      Clarity
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Team_icon.png" />
                      Team
                    </span>
                  </li>
                </ul>
                <div className="ct_mt_40 text-center">
                  <a

                    className="ct_yellow_btn ct_outline_grey ct_fit_content px-5 ct_fw_600 ct_btn_border_w_2 ct_h_44 mx-auto"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="ct_coach_white_bg">
                <div className="d-flex align-items-start gap-2 ">
                  <img
                    src="assets/img/user_44.jpg"
                    className="ct_flex_shrink_0 ct_img_w_70"
                  />
                  <div>
                    <h4 className="ct_fs_20 mb-2">Jason Reed</h4>
                    <h6 className="ct_fs_16 mb-3">Performance Coach</h6>
                    <p
                      className="mb-0 ct_fs_14 ct_grey_text"
                      style={{ maxWidth: "224px" }}
                    >
                      Helps early-stage founders launch with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-3 flex-wrap ct_mt_30">
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Strategy_icon.png" />
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Mindset_icon.png" />
                      Mindset
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Clarity_icon.png" />
                      Clarity
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Team_icon.png" />
                      Team
                    </span>
                  </li>
                </ul>
                <div className="ct_mt_40 text-center">
                  <a

                    className="ct_yellow_btn ct_outline_grey ct_fit_content px-5 ct_fw_600 ct_btn_border_w_2 ct_h_44 mx-auto"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="ct_coach_white_bg">
                <div className="d-flex align-items-start gap-2 ">
                  <img
                    src="assets/img/user_44.jpg"
                    className="ct_flex_shrink_0 ct_img_w_70"
                  />
                  <div>
                    <h4 className="ct_fs_20 mb-2">Jason Reed</h4>
                    <h6 className="ct_fs_16 mb-3">Performance Coach</h6>
                    <p
                      className="mb-0 ct_fs_14 ct_grey_text"
                      style={{ maxWidth: "224px" }}
                    >
                      Helps early-stage founders launch with clarity and
                      confidence.
                    </p>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-3 flex-wrap ct_mt_30">
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Strategy_icon.png" />
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Mindset_icon.png" />
                      Mindset
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Clarity_icon.png" />
                      Clarity
                    </span>
                  </li>
                  <li>
                    <span className="ct_coach_light_grey_badge">
                      <img src="assets/img/Team_icon.png" />
                      Team
                    </span>
                  </li>
                </ul>
                <div className="ct_mt_40 text-center">
                  <a

                    className="ct_yellow_btn ct_outline_grey ct_fit_content px-5 ct_fw_600 ct_btn_border_w_2 ct_h_44 mx-auto"
                  >
                    View Profile
                  </a>
                </div>
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
                <img src="assets/img/coach_works_img.png" alt="" />
              </div>
            </div>
            <div
              class="col-lg-8 mb-4 mb-lg-0 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="ct_how_work_content">
                <h4 class="ct_fs_24">How to Get Started?</h4>
                <h3 class="ct_fs_32 ">
                  Find your coach in three simple steps.
                </h3>
              </div>
              <div class="row mt-5">
                <div class="col-lg-4">
                  <div class="ct_how_work_card p-4">
                    <img
                      src="assets/img/ri_find-replace-fill.png"
                      alt=""
                      className="ct_w_50_345"
                    />
                    <div class="pt-4">
                      <h5 className="ct_fs_20 ct_dakrblue_text mb-4">
                        Browse Coaches
                      </h5>
                      <p class="mb-0 ct_fs_16" style={{ maxWidth: "252px" }}>
                        Use filters to find the right fit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="ct_how_work_card p-4">
                    <img
                      src="assets/img/work_icon_2.png"
                      alt=""
                      className="ct_w_50_345"
                    />
                    <div class="pt-4">
                      <h5 className="ct_fs_20 ct_dakrblue_text mb-4">
                        View Profiles
                      </h5>
                      <p class="mb-0 ct_fs_16" style={{ maxWidth: "252px" }}>
                        Learn about their specialties.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="ct_how_work_card p-4">
                    <img
                      src="assets/img/uim_bag.png"
                      alt=""
                      className="ct_w_50_345"
                    />
                    <div class="pt-4">
                      <h5 className="ct_fs_20 ct_dakrblue_text mb-4">
                        Book Your Session
                      </h5>
                      <p class="mb-0 ct_fs_16" style={{ maxWidth: "232px" }}>
                        Select your time and get started.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="ct_looking_for_work_bg     ct_p_111_y_106"
        style={{ backgroundColor: "var(--yellow)" }}
      >
        <div class="d-flex align-items-center gap-lg-5 gap-3 ct_flex_col_767 ">
          <div class="text-white">
            <h4 class="ct_fs_36 mb-4">Not Sure Where to Start?</h4>
            <p class="mb-0 ct_fs_18">
              Let us match you with a coach based on your needs and goals.
            </p>
          </div>
          <div class="ct_flex_shrink_0">
            <a
              href="javascript:void(0)"
              class="ct_yellow_btn ct_darkblue_btn ct_flex_1 px-5"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>

      <section className="ct_px_40 ct_py_130">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ct_fs_32 text-center mb-3">Featured Coaches</h2>
              <p className=" ct_fs_20 text-center">
                Coaches our clients trust and keep coming back to.
              </p>
            </div>
          </div>
          <div className="row ct_mt_60">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <figure className="ct_featured_coach_card">
                <div className="ct_featured_card_img">
                  <img src="assets/img/Featured_Coaches_img_1.jpg" />
                </div>
                <figcaption>
                  <h4 className="ct_fs_20 ct_fw_600 mb-1">Jason Reed</h4>
                  <p className="mb-0 ct_grey_text">Business Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <figure className="ct_featured_coach_card">
                <div className="ct_featured_card_img">
                  <img src="assets/img/Featured_Coaches_img_2.jpg" />
                </div>
                <figcaption>
                  <h4 className="ct_fs_20 ct_fw_600 mb-1">Jason Reed</h4>
                  <p className="mb-0 ct_grey_text">Business Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <figure className="ct_featured_coach_card">
                <div className="ct_featured_card_img">
                  <img src="assets/img/Featured_Coaches_img_3.jpg" />
                </div>
                <figcaption>
                  <h4 className="ct_fs_20 ct_fw_600 mb-1">Jason Reed</h4>
                  <p className="mb-0 ct_grey_text">Business Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <figure className="ct_featured_coach_card">
                <div className="ct_featured_card_img">
                  <img src="assets/img/Featured_Coaches_img_4.jpg" />
                </div>
                <figcaption>
                  <h4 className="ct_fs_20 ct_fw_600 mb-1">Jason Reed</h4>
                  <p className="mb-0 ct_grey_text">Business Coach</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section
        class="ct_looking_for_work_bg "
        style={{ backgroundColor: "#8ECAE6" }}
      >
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
            <a class="ct_yellow_btn ct_darkblue_btn ct_flex_1">
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
          <a>
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

      <div
        class="modal fade ct_submit_modal"
        id="ct_submit_modal"
        tabindex="-1"
        aria-labelledby="ct_submit_modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body py-5">
              <div class="mx-auto d-block text-center mb-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 48C17.6348 48 11.5303 45.4714 7.02944 40.9706C2.52856 36.4697 0 30.3652 0 24C0 17.6348 2.52856 11.5303 7.02944 7.02944C11.5303 2.52856 17.6348 0 24 0C30.3652 0 36.4697 2.52856 40.9706 7.02944C45.4714 11.5303 48 17.6348 48 24C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48ZM19.2 36L40.8 15.6L37.2 12L19.2 28.8L10.8 20.4L7.2 24L19.2 36Z"
                    fill="#FFB703"
                  />
                </svg>
              </div>
              <div class="text-center">
                <h4 class="ct_fs_20 ">Application Submitted</h4>
                <p>
                  Thanks for applying to become a coach on Nuvio CoachHub. Our
                  team is currently reviewing your application
                </p>
              </div>
              <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                <a class="ct_yellow_btn ct_outline_grey ct_h_48 px-5 ct_w_100_575">
                  View Coaches
                </a>
                <button
                  class="ct_yellow_btn ct_h_48  px-5 ct_w_100_575"
                  data-bs-dismiss="modal"
                >
                  Close{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};
