import React from 'react'
import CoachLayout from '../../layouts/CoachLayout'
import MenuLayout from '../../layouts/MenuLayout';
import { useNavigate } from 'react-router-dom';
import { coachPaths } from '../../routes/coach';

export const BecomeCoach = () => {
  const user = { name: "become-a-coach", role: "coach" };
  const navigate = useNavigate();

  return (
    <MenuLayout user={user}>
      <section class="ct_px_40  ct_become_coach_bg">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div
              class="col-xxl-5 col-xl-4 col-md-4 mb-4 mb-md-0 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_boocamp_img_left">
                <img
                  src="assets/img/become_a_coach_left_img.png"
                  alt=""
                  class="ct_img_h_458 w-100"
                />
              </div>
            </div>
            <div
              class="col-xxl-6 col-xl-8 col-md-8 mb-4 mb-md-0 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="ct_px_40 ct_px_0_767">
                <h2 class="ct_fs_50 mb-4 text-white">
                  Share Your <span class="ct_yellow_text">Expertise</span> ,{" "}
                  <br /> Empower Others, Get Paid
                </h2>
                <p class="mb-0 mt-3 ct_fs_20 text-white">
                  Join Nuvio’s growing network of coaches and make a real
                  difference in the lives of founders, teams, and leaders on
                  your own schedule.
                </p>
                <div class="ct_mt_40">
                  <a
                    class="ct_yellow_btn  px-5 ct_fit_content ct_h_48"
                    onClick={() => navigate(coachPaths?.ApplyBecomeCoach)}
                  >
                    Apply to Become a Coach
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ct_pt_65_pb_58">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 mb-4 mb-lg-0">
              <div class="ct_img_unlock_img_23">
                <div class="ct_img_unlock_img_23_left">
                  <img src="assets/img/CoachHub_img_1.png" alt="" />
                  <img src="assets/img/CoachHub_img_2.jpg" alt="" />
                </div>
                <div class="ct_img_unlock_img_23_right">
                  <img src="assets/img/CoachHub_img_3.jpg" alt="" />
                  <img src="assets/img/CoachHub_img_4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-7 mb-4 mb-lg-0 ps-lg-5">
              <h4 class="ct_fs_32 ct_darkblue_text mb-0">
                Why Join Nuvio CoachHub?
              </h4>
              <ul className="ct_mt_40">
                <li>
                  <h4 className="ct_fs_20 mb-2 ct_darkblue_text">
                    Work on Your Terms
                  </h4>
                  <p
                    className="mb-0 ct_darkblue_text"
                    style={{ maxWidth: "496px" }}
                  >
                    Set your own schedule, choose the coaching categories you
                    love, and work with clients who match your values and
                    strengths. Whether you coach part-time or full-time, you’re
                    in control.
                  </p>
                </li>
                <li className="mt-4">
                  <h4 className="ct_fs_20 mb-2 ct_darkblue_text">
                    Visibility Without the Hassle
                  </h4>
                  <p
                    className="mb-0 ct_darkblue_text"
                    style={{ maxWidth: "496px" }}
                  >
                    We promote your profile across our entire network from
                    startups and SMEs to leadership teams and creatives so you
                    don’t have to worry about finding clients. You just focus on
                    coaching.
                  </p>
                </li>
                <li className="mt-4">
                  <h4 className="ct_fs_20 mb-2 ct_darkblue_text">
                    Opportunities to Expand Your Reach
                  </h4>
                  <p
                    className="mb-0 ct_darkblue_text"
                    style={{ maxWidth: "496px" }}
                  >
                    Want to host a live workshop or sell your own eBook? We give
                    you the platform to do both. Our coaches don’t just coach
                    they teach, lead, and build community.
                  </p>
                </li>
                <li className="mt-4">
                  <h4 className="ct_fs_20 mb-2 ct_darkblue_text">
                    Built-In Support
                  </h4>
                  <p
                    className="mb-0 ct_darkblue_text"
                    style={{ maxWidth: "496px" }}
                  >
                    From onboarding to tech setup, we support your success every
                    step of the way. You’re never just “another coach” you’re
                    part of a curated network committed to real impact.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ct_we_looking_bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h4 className="ct_fs_32 ct_darkblue_text text-center ct_mb_30">
                Who We're Looking For
              </h4>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-7 col-lg-7 mb-4 mb-lg-0">
              <h4 className="ct_fs_28 mb-4">
                Experienced Coaches & Industry Experts
              </h4>
              <p className="ct_fs_20 mb-4" style={{ maxWidth: "566px" }}>
                We welcome certified coaches, consultants, and specialists with
                2+ years of experience in areas like leadership, business,
                performance, or personal development.
              </p>
              <p className="ct_fs_20 mb-0" style={{ maxWidth: "566px" }}>
                If you’ve coached clients, led programs, or guided professionals
                through change, we’d love to see your approach in action.
              </p>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 mb-4 mb-lg-0">
              <div>
                <img src="assets/img/looking_11.png" className="ct_img_h_400" />
              </div>
            </div>
          </div>
          <div className="row align-items-center ct_mt_60">
            <div className="col-xxl-5 col-xl-5 col-lg-5 mb-4 mb-lg-0">
              <div>
                <img src="assets/img/looking_22.png" className="ct_img_h_400" />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 mb-4 mb-lg-0 ps-lg-5">
              <h4 className="ct_fs_28 mb-4">
                Founders, Executives & Strategic Operators
              </h4>
              <p className="ct_fs_20 mb-4" style={{ maxWidth: "540px" }}>
                You don’t need to be a certified coach just someone who's been
                there. If you've launched startups, led teams, or shaped
                strategy at any level, your insight is valuable.
              </p>
              <p className="ct_fs_20 mb-0" style={{ maxWidth: "540px" }}>
                We’re looking for real-world thinkers who can turn experience
                into guidance and help others lead with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ct_px_40 ct_py_130">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h4 className="ct_fs_32 ct_darkblue_text ct_mb_60">
                Coaching Categories You Can Join
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 ct_mb_50 ">
              <div
                class="ct_white_bg_card"
                style={{ backgroundColor: "#EDF6F9", borderColor: "#E1E4EA" }}
              >
                <div>
                  <div class="ct_icon mb-3">
                    <img
                      src="assets/img/icon-park-solid_arrow-keys.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 class="ct_fs_18 ct_grey_text mb-3">Founder</h4>
                    <p
                      class="mb-0 ct_darkblue_text ct_fs_24_new ct_line_h_40"
                      style={{ maxWidth: "340px" }}
                    >
                      Empowering visionaries to lead with clarity and build with
                      confidence.
                    </p>
                  </div>
                </div>
                <div class=" ct_mt_70">
                  <a

                    class="ct_yellow_btn  ct_fit_content ct_h_48 ct_outline_yellow_new"
                  >
                    Learn More <i class="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 ct_mb_50">
              <div
                class="ct_white_bg_card"
                style={{ backgroundColor: "#FAFAFA", borderColor: "#E1E4EA" }}
              >
                <div>
                  <div class="ct_icon mb-3">
                    <img src="assets/img/ion_speedometer.png" alt="" />
                  </div>
                  <div>
                    <h4 class="ct_fs_18 ct_grey_text mb-3">Performance</h4>
                    <p
                      class="mb-0 ct_darkblue_text ct_fs_24_new ct_line_h_40"
                      style={{ maxWidth: "340px" }}
                    >
                      Unlock your full potential and operate at your peak,
                      consistently.
                    </p>
                  </div>
                </div>
                <div class=" ct_mt_70">
                  <a

                    class="ct_yellow_btn  ct_fit_content ct_h_48 ct_outline_darksky"
                  >
                    Learn More <i class="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 ct_mb_50 ">
              <div
                class="ct_white_bg_card"
                style={{
                  backgroundColor: "hsl(199deg 64% 73% / 30%)",
                  borderColor: "hsl(199deg 64% 73% / 30%)",
                }}
              >
                <div>
                  <div class="ct_icon mb-3">
                    <img
                      src="assets/img/material-symbols_mountain-flag_22.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 class="ct_fs_18 ct_grey_text mb-3">Leadership</h4>
                    <p
                      class="mb-0 ct_darkblue_text ct_fs_24_new ct_line_h_40"
                      style={{ maxWidth: "340px" }}
                    >
                      Develop the mindset and presence to lead with impact and
                      purpose.
                    </p>
                  </div>
                </div>
                <div class=" ct_mt_70">
                  <a

                    class="ct_yellow_btn  ct_fit_content ct_h_48 ct_outline_yellow"
                  >
                    Learn More <i class="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 ct_mb_50 ">
              <div
                class="ct_white_bg_card"
                style={{
                  backgroundColor: "hsl(42.86deg 100% 50.59% / 30%)",
                  borderColor: "hsl(199deg 64% 73% / 30%)",
                }}
              >
                <div>
                  <div class="ct_icon mb-3">
                    <img
                      src="assets/img/icon-park-solid_arrow-keys_4.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 class="ct_fs_18 ct_grey_text mb-3">Team</h4>
                    <p
                      class="mb-0 ct_darkblue_text ct_fs_24_new ct_line_h_40"
                      style={{ maxWidth: "340px" }}
                    >
                      Foster collaboration, communication, and cohesion for
                      stronger results.
                    </p>
                  </div>
                </div>
                <div class=" ct_mt_70">
                  <a

                    class="ct_yellow_btn  ct_fit_content ct_h_48 ct_outline_yellow"
                  >
                    Learn More <i class="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 ct_mb_50 ">
              <div
                class="ct_white_bg_card"
                style={{
                  backgroundColor: "hsl(43deg 100% 51% / 10%)",
                  borderColor: "hsl(199deg 64% 73% / 30%)",
                }}
              >
                <div>
                  <div class="ct_icon mb-3">
                    <img src="assets/img/Icon_business.png" alt="" />
                  </div>
                  <div>
                    <h4 class="ct_fs_18 ct_grey_text mb-3">Business</h4>
                    <p
                      class="mb-0 ct_darkblue_text ct_fs_24_new ct_line_h_40"
                      style={{ maxWidth: "332px" }}
                    >
                      Sharpen your business direction with expert guidance and
                      insight.
                    </p>
                  </div>
                </div>
                <div class=" ct_mt_70">
                  <a

                    class="ct_yellow_btn  ct_fit_content ct_h_48 ct_outline_yellow"
                  >
                    Learn More <i class="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 ct_mb_50 ">
              <div
                class="ct_white_bg_card"
                style={{
                  backgroundColor: "#F5F3EF",
                  borderColor: "hsl(199deg 64% 73% / 30%)",
                }}
              >
                <div>
                  <div class="ct_icon mb-3">
                    <img src="assets/img/ph_person-fill.png" alt="" />
                  </div>
                  <div>
                    <h4 class="ct_fs_18 ct_grey_text mb-3">Personal</h4>
                    <p
                      class="mb-0 ct_darkblue_text ct_fs_24_new ct_line_h_40"
                      style={{ maxWidth: "332px" }}
                    >
                      Gain clarity, confidence, and control over your personal
                      growth journey.
                    </p>
                  </div>
                </div>
                <div class=" ct_mt_70">
                  <a

                    class="ct_yellow_btn  ct_fit_content ct_h_48 ct_outline_darksky"
                  >
                    Learn More <i class="fa-solid fa-arrow-right ms-1"></i>
                  </a>
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
              class="col-lg-4 mb-4 mb-lg-0 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_how_work_img">
                <img src="assets/img/apply_left_img.png" alt="" />
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
                      src="assets/img/Apply_icon_1.png"
                      alt=""
                      className="ct_w_50_345"
                    />
                    <div class="pt-4">
                      <h5 className="ct_fs_20 ct_dakrblue_text mb-4">
                        Submit Your Application
                      </h5>
                      <p class="mb-0 ct_fs_16" style={{ maxWidth: "257px" }}>
                        Share your background and focus area.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="ct_how_work_card p-4">
                    <img
                      src="assets/img/Apply_icon_2.png"
                      alt=""
                      className="ct_w_50_345"
                    />
                    <div class="pt-4">
                      <h5 className="ct_fs_20 ct_dakrblue_text mb-4">
                        Interview / Review Stage
                      </h5>
                      <p class="mb-0 ct_fs_16" style={{ maxWidth: "257px" }}>
                        We’ll reach out if your experience fits our value.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="ct_how_work_card p-4">
                    <img
                      src="assets/img/Apply_icon_3.png"
                      alt=""
                      className="ct_w_50_345"
                    />
                    <div class="pt-4">
                      <h5 className="ct_fs_20 ct_dakrblue_text mb-4">
                        Get Onboarded
                      </h5>
                      <p class="mb-0 ct_fs_16" style={{ maxWidth: "257px" }}>
                        Create your profile and start accepting bookings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ct_looking_for_work_bg ct_looking_for_work_bg_left   ct_dark_sky_bg ct_p_111_y_106">
        <div class="d-flex align-items-center gap-lg-5 gap-3 ct_flex_col_767 ">
          <div class="text-white">
            <h4 class="ct_fs_36 mb-4" style={{ maxWidth: "500px" }}>
              Ready to Make an Impact?
            </h4>
            <p class="mb-0 ct_fs_18" style={{ maxWidth: "700px;" }}>
              Join a network of passionate coaches shaping the future of
              personal and professional growth.
            </p>
          </div>
          <div class="ct_flex_shrink_0">
            <a
              onClick={() => navigate(coachPaths.ApplyBecomeCoach)}
              class="ct_yellow_btn ct_darkblue_btn ct_flex_1 px-5"
            >
              Start Your Application
            </a>
          </div>
        </div>
      </section>

      <section class=" ct_px_40 pt-0 ct_mt_100">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xxl-6 col-xl-6 col-md-6 mb-4 mb-md-0">
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
                          How can I become a coach on NUVIO?
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
                          What kind of content can I offer as a coach?
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
                          Do I need to handle the marketing myself?
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
                          Who will see my content or sessions?
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
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="faqFive">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefaq_Five"
                          aria-expanded="false"
                          aria-controls="collapsefaq_Five"
                        >
                          How do I earn from my sessions or content?
                        </button>
                      </h2>
                      <div
                        id="collapsefaq_Five"
                        class="accordion-collapse collapse"
                        aria-labelledby="faqFive"
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

            <div class="col-xxl-5  col-xl-6 col-md-6 mb-4 mb-md-0 ps-xl-5 ">
              <div class="ct_about_img">
                <img
                  src="assets/img/faq_become_as_coach.png"
                  class="ct_img_h_617"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ct_looking_for_work_bg  ct_mt_100">
        <div class="d-flex align-items-center gap-lg-5 gap-3 ct_flex_col_767 ">
          <div class="text-white">
            <h4 class="ct_fs_36 mb-3" style={{ maxWidth: "700px" }}>
              Ready to Learn Something That Actually Moves the Needle?
            </h4>
            <p class="mb-0 ct_fs_18" style={{ maxWidth: "623px" }}>
              Join a live session, get real-time support, and walk away with
              tools you can apply today- not someday.
            </p>
          </div>
          <div class="ct_flex_shrink_0">
            <a
              class="ct_yellow_btn ct_darkblue_btn ct_flex_1"
            >
              Explore Workshop
            </a>
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
    </MenuLayout>
  );
}
