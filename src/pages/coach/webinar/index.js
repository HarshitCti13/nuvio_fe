import { useState } from "react";
import { coachPaths } from "../../../routes/coach";
import CoachLayout from "../../../layouts/CoachLayout";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAppNavigate from "../../../components/hooks/useAppNavigate";
import ClaimYourSpot from "../../../components/pages/coach/webinar/claim-your-spot";
import { CountdownTimer } from "../../../components/pages/coach/webinar/CountdownTimer";

const Webinar = () => {
  const user = { name: "Webinar", role: "coach" };
  const navigate = useNavigate();
  const { goTo } = useAppNavigate();
  const [isSpotModal, setIsSpotModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const cetTimeIso = "2025-10-30T18:00:00+02:00";
  return (
    <CoachLayout user={user}>
      <section class="ct_px_40">
        <div class="container-fluid">
          <div class="row ct_row_inverse_991 align-items-center">
            <div
              class="col-xxl-5 col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_webinar_img">
                <img
                  src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/Unleash_left.png"
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-xxl-7 col-lg-8 mb-4 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="">
                <h4 class="ct_fs_85 ct_fw_600 mb-3 ct_mb_0_1326 ct_line_h_111">
                  <span class="ct_text_clr_FBB51C">Unleash</span> <br />
                  Your{" "}
                  <span class="ct_light_sky_badge ct_line_height_81 text-white">
                    inner
                  </span>{" "}
                  <br />
                  Potential
                </h4>
                <p
                  class="mb-4 ct_mb_3_1323 ct_fs_24 ct_fw_500 ct_fs_43_res_1800 ct_max_w_100_3500 ct_max_w_523"
                  style={{ maxWidth: "850px" }}
                >
                  Your skills are more than just work, they’re your path to
                  <span class="ct_fw_600 ct_text_clr_30B0C7">
                    {" "}influence, income, and impact.
                  </span>
                </p>
                <p
                  class="mb-0 ct_fs_24 ct_fw_500 ct_fs_43_res_1800 ct_max_w_100_3500 ct_max_w_791 ct_max_w_612"
                  style={{ maxWidth: "900px" }}
                >
                  Join NUVIO’s debut webinar,
                  <span class="ct_yellow_text ct_fw_600">{" "}Game On,{" "}</span>a
                  dynamic session designed to help you transform your skills
                  into real influence. Whether you’re a creative, coach, or
                  navigating a career shift, you’ll walk away with the clarity
                  and strategy to elevate your brand and lead with purpose.
                </p>

                <div class="mt-3 ">
                  <a
                    href="#"
                    // onClick={(e) => goTo(e, coachPaths?.AboutUs)}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSpotModal(true);
                    }}
                    class="ct_yellow_btn ct_darkblue_btn ct_fit_content  px-5 py-3 ct_fs_24 ct_fs_43_res_1800"
                  >
                    Take the chance
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="d-lg-flex d-grid align-items-center justify-content-around gap-3 mt-5 pb-3 ct_mt_3_1326">
            <p class="mb-0 ct_fw_900 ct_text_op_8 ct_fs_24 ct_outline_blue_5 ct_ms_minus_55">
              30 Oct 2025 @ 6 pm CET/ 8 pm MUT
            </p>
            {/* <ul class="d-flex align-items-center gap-5">
              <li class="ct_text_op_8 ct_fs_24 ct_fw_600">
                <i class="fa-solid fa-globe me-1 ct_darkblue_text"></i> English
              </li>
             
            </ul> */}
            <div class="ct_text_op_8 ct_fs_24 ct_fw_900 d-flex align-items-center gap-4">
              <img src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/globe_icon.png" className="ct_icon_30" />{" "}
              English
            </div>
            <div class="ct_text_op_8 ct_fs_24 ct_fw_900  d-flex align-items-center gap-4">
              <img src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/clock_icon.png" className="ct_icon_30" />
              70 mins
            </div>
          </div>
        </div>
      </section>
      <section class="ct_light_sky_blue_bg ct_py_100 ct_px_40">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <h2 class="ct_fs_50 ct_fw_600 mb-5 pb-3">
                <span class="ct_darkblue_text">Game On:</span>
                <span class="ct_orange_text">
                  Turning Skills into Influence, Income, and Impact
                </span>
              </h2>
            </div>
          </div>
          <div class="row ">
            <div
              class="col-md-7 mb-4 mb-md-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <p class="ct_fs_24 ct_fw_500 mb-3">
                In a world full of talent but short on opportunity, how you play
                the game matters.
              </p>
              <p class="ct_fs_24 ct_fw_500 mb-3">
                At the heart of this edition are NUVIO and Risen Consulting two
                women-led forces born in Mauritius but shaped by different
                journeys: Valérie, a visionary business leader rooted in the
                Mauritian ecosystem, and Kiara, who brings an international
                perspective shaped by her global experiences.
              </p>
              <p class="ct_fs_24 ct_fw_500 mb-3">
                Joining them is Fernando Kylas, a renowned graphic and web
                designer as well as a digital consultant whose creative
                expertise bridges design, technology, and strategy. His work,
                grounded in Mauritius yet influenced by global trends, adds a
                powerful creative dimension to the conversation.
              </p>
              <p class="ct_fs_24 ct_fw_500 mb-3">
                Together, they bridge local roots and global reach, showing how
                creativity and collaboration can transform and redefine the way
                success is achieved.
              </p>
              <h6 class="ct_fw_600 ct_fs_24">
                Shared roots. Different paths. One mission:{" "}
                <span className="ct_orange_text">
                  empowerment through business.
                </span>
              </h6>
            </div>
            <div
              class="col-md-5 mb-4 mb-md-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="ct_game_on_image">
                <img
                  src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/game_on_image.png"
                  style={{ borderRadius: "10px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ct_py_100 ct_px_40">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <h2 class="ct_orange_text text-center ct_fs_50 ct_fw_600 pb-5 mb-3">
                Speakers
              </h2>
            </div>
          </div>
          <div class="row ct_px_40">
            <div
              class="col-xl-4 col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div class="ct_speakers_card">
                <div class="ct_speaker_img">
                  <img
                    src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/speaker_img_3.jpg"
                    alt=""
                  />
                </div>
                <div class="ct_about_speaker text-center mt-4">
                  <h4 class="ct_fs_32 ct_fw_600 mb-2 ct_blue_text">
                    Fernando Kylas
                  </h4>
                  <p
                    class="ct_fs_24 mx-auto ct_max_w_374_3500 ct_max_w_249_1366 ct_max_w_374_3500 ct_max_w_258_1728"
                    style={{ maxWidth: "334px" }}
                  >
                    Digital Impact Consultant Freelancer Web designer & SEO |
                    Marketing Psychology
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div class="ct_speakers_card">
                <div class="ct_speaker_img">
                  <img
                    src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/speaker_img_1.png"
                    alt=""
                  />
                </div>
                <div class="ct_about_speaker text-center mt-4">
                  <h4 class="ct_fs_32 ct_fw_600 mb-2 ct_blue_text">
                    Valérie Esther
                  </h4>
                  <p
                    class="ct_fs_24 mx-auto ct_max_w_374_3500 ct_max_w_249_1366 ct_max_w_258_1728"
                    style={{ maxWidth: "300px" }}
                  >
                    Co-Founder & Business Leader | Certified Trainer |
                    Transforming Businesses & Capturing Stories Through
                    Photography
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-xl-4 col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div class="ct_speakers_card">
                <div class="ct_speaker_img">
                  <img
                    src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/speaker_img_2.png"
                    alt=""
                  />
                </div>
                <div class="ct_about_speaker text-center mt-4">
                  <h4 class="ct_fs_32 ct_fw_600 mb-2 ct_blue_text">
                    Kiara NUNDOO
                  </h4>
                  <p
                    class="ct_fs_24 mx-auto ct_max_w_374_3500 ct_max_w_249_1366 ct_max_w_258_1728"
                    style={{ maxWidth: "284px" }}
                  >
                    Founder | Growth Strategist | AI & Innovation Strategist |
                    Business Developer | <br /> Full-Stack marketer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ct_yellow_shape_bg ct_px_40">
        <div class="container-fluid py-5 mb-4">
          <div class="row">
            <div class="col-md-12">
              <h2 class="ct_fs_50 ct_fw_600 mb-5">Here’s What You’ll Gain:</h2>
            </div>
          </div>
          <div class="row ">
            <div
              class="col-lg-7 col-md-6 mb-4 mb-md-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="mb-4">
                <h2 class="ct_fs_28 ct_fw_600 mb-2 ct_text_clr_30B0C7">
                  A deeper understanding of how to position yourself.
                </h2>
                <p
                  class="mb-0 ct_fs_24 ct_max_w_100_3500 ct_max_w_622"
                  style={{ maxWidth: "824px" }}
                >
                  Learn how to own your voice, share your expertise with
                  authority, and become the go-to person in your space, no
                  matter your background or industry.
                </p>
              </div>
              <div class="mb-4">
                <h2 class="ct_fs_28 ct_fw_600 mb-2 ct_text_clr_30B0C7">
                  Real-world strategies to monetize your expertise
                </h2>
                <p
                  class="mb-0 ct_fs_24 ct_max_w_100_3500 ct_max_w_622"
                  style={{ maxWidth: "839px" }}
                >
                  From freelancing to digital products, consulting to content
                  creation, you’ll discover practical ways to turn your skills
                  into sustainable income.
                </p>
              </div>
              <div class="mb-4">
                <h2 class="ct_fs_28 ct_fw_600 mb-2 ct_text_clr_30B0C7">
                  Tools to build a strong, authentic personal brand
                </h2>
                <p
                  class="mb-0 ct_fs_24 ct_max_w_100_3500 ct_max_w_622"
                  style={{ maxWidth: "839px" }}
                >
                  Stand out with a brand that reflects who you are and what you
                  stand for, not just a logo, but a message, mission, and
                  presence that draws the right people and opportunities to you.
                </p>
              </div>
              <div class="mb-4">
                <h2 class="ct_fs_28 ct_fw_600 mb-2 ct_text_clr_30B0C7">
                  A global perspective on how to create lasting impact
                </h2>
                <p
                  class="mb-0 ct_fs_24 ct_max_w_100_3500 ct_max_w_622"
                  style={{ maxWidth: "839px" }}
                >
                  Get inspired by leaders who are building influence beyond
                  borders. You’ll learn how to use your platform, story, and
                  skills to make a difference locally and internationally.
                </p>
              </div>
            </div>
            <div
              class="col-lg-5 col-md-6 mb-4 mb-md-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="ct_what_gain_img">
                <img
                  src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/what_gain.png"
                  alt=""
                />
              </div>
              {/* <div class="mt-5">
                <a
                  

                  onClick={(e) => {
                    e.preventDefault();
                    setIsSpotModal(true);
                  }}
                  class="ct_yellow_btn ct_light_sky_btn mx-auto ct_fs_24"
                >
                  Take the chance
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section class="ct_px_40  ct_blue_shape_bg">
        <div
          class="container-fluid pb-5"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div class="row">
            <div class="col-md-12">
              <h2 class="ct_fs_50 ct_fw_600 ct_sky_blue_text text-center ct_letter_spacing_4 ">
                THIS WEBINAR WILL START IN
              </h2>
            </div>
          </div>

          <CountdownTimer targetDate={cetTimeIso} />

          <div class="pt-5 mt-4">
            <a
              onClick={(e) => {
                e.preventDefault();
                setIsSpotModal(true);
              }}
              // data-bs-toggle="modal"
              // data-bs-target="#ct_claim_your_spot"
              class="ct_yellow_btn ct_light_sky_btn mx-auto ct_blue_text ct_fs_24"
            >
              Claim Your Spot Now
            </a>
          </div>
        </div>
      </section>
      <section class="ct_sky_blue_bg ct_py_100 ct_px_40">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <h2 class="ct_fs_50 pb-5 ct_fw_600 text-center mb-0 ct_darkblue_text">
                Create, Connect, and Grow with NuCore
              </h2>
            </div>
          </div>

          <div class="row">
            <div
              class="col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <figure class="mb-0 ct_coach_created_card ct_coach_created_w_90">
                <div class="ct_coach_created_img">
                  <img
                    src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/create_img_1.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class="ct_yellow_text ct_fw_600 ct_fs_35 mb-3">NuGlow</h4>
                  <p class="mb-0 ct_darkblue_text ct_fs_24">
                    Start your freelance journey. Build your profile, gain
                    experience, and grow your skills.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div
              class="col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <figure class="mb-0 ct_coach_created_card ct_coach_created_w_90">
                <div class="ct_coach_created_img">
                  <img
                    src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/create_img_2.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class="ct_orange_text ct_fw_600 ct_fs_32 mb-3">
                    NuForge
                  </h4>
                  <p class="mb-0 ct_darkblue_text ct_fs_24">
                    Take your career to the next level. Work on high-value
                    projects and expand your network.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div
              class="col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <figure class="mb-0 ct_coach_created_card ct_coach_created_w_90">
                <div class="ct_coach_created_img">
                  <img
                    src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/create_img_3.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class="ct_blue_text ct_fw_600 ct_fs_32 mb-3">NuStar</h4>
                  <p class="mb-0 ct_darkblue_text ct_fs_24">
                    Lead as a top-tier freelancer. Access premium opportunities
                    and elevate your personal brand.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section class="ct_py_70 ct_px_40">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div
              class="col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_how_work_img">
                <img
                  src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/webinar_for_you.png"
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-lg-8  mb-4 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="ct_how_work_content mb-5">
                <h4 class="ct_fs_24 ct_orange_text">Make Them Work for You</h4>
                <h3 class="ct_fs_32 ct_darksky_blue_text ct_fw_600">
                  Why This Webinar Is for You
                </h3>
              </div>
              <div class="row mt-3">
                <div class="col-lg-4">
                  <div class="ct_how_work_card">
                    <img
                      src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/work_icon_1.png"
                      alt=""
                    />
                    <div class="pt-3">
                      <p
                        class="mb-0 ct_fs_24 ct_max_w_100_3500"
                        style={{ maxWidth: "191px" }}
                      >
                        You’re skilled, but are people seeing your value?
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="ct_how_work_card">
                    <img
                      src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/work_icon_2.png"
                      alt=""
                    />
                    <div class="pt-4">
                      <p
                        class="mb-0 ct_fs_24 ct_max_w_100_3500"
                        style={{ maxWidth: "191px" }}
                      >
                        You’ve got experience, but are you getting paid what
                        you’re worth?
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="ct_how_work_card">
                    <img
                      src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/work_icon_3.png"
                      alt=""
                    />
                    <div class="pt-4">
                      <p
                        class="mb-0 ct_fs_24 ct_max_w_100_3500"
                        style={{ maxWidth: "191px" }}
                      >
                        You have a story, but are you using it to lead, connect,
                        and make a difference?
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
        class="ct_looking_for_work_bg ct_looking_for_work_bg_left py-5 ct_mb_100"

      >
        <div class=" ">
          <div class="text-white">
            <h4 class="ct_fs_34 ct_fw_600 mb-3">
              Win a <span style={{ color: "#0076B2" }}>1-Month</span> Featured
              Profile on the NUVIO
            </h4>
            <p class="mb-0 text-dark ct_fs_24" style={{ maxWidth: "765px" }}>
              We’re celebrating the launch of our first webinar — Game On — by
              giving 3 lucky attendees the chance to win a free 1-month featured
              profile on the NUVIO platform!
            </p>
            <div className="d-flex align-items-start justify-content-between w-100 mt-4 flex-wrap gap-3">
              <ul class="text-dark  ps-4" style={{ listStyle: "disc" }}>
                <li class="ct_fw_600 ct_fs_24 mt-1">Boost your visibility</li>
                <li class="ct_fw_600 ct_fs_24 mt-1">
                  Get noticed by recruiters & companies
                </li>
                <li class="ct_fw_600 ct_fs_24 mt-1">
                  Position yourself as a top talent on our exclusive network
                </li>
              </ul>
              <div class="ct_flex_shrink_0">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSpotModal(true);
                  }}
                  class="ct_yellow_btn py-2 ct_light_sky_btn ct_flex_1 px-5 ct_fs_24"
                >
                  Take the chance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isSpotModal && (
        <ClaimYourSpot
          isOpen={isSpotModal}
          setClose={setIsSpotModal}
          isSuccessModal={isSuccessModal}
          setIsSuccessModal={setIsSuccessModal}
        />
      )}

      {isSuccessModal && (
        <div
          class="modal fade  d-block show  ct_submit_modal"
          id="ct_submit_modal"
          tabindex="-1"
          aria-labelledby="ct_submit_modalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body py-5">
                <div class="ct_check_icon">
                  <svg
                    stroke="currentColor"
                    fill="#fff"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    height="30px"
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"></path>
                  </svg>
                </div>
                <div class="text-center">
                  <h4 class="ct_fs_20 ct_fw_600">
                    🎉 Registration Successfully!
                  </h4>
                  <p>
                    You’re all set for{" "}
                    <span class="ct_yellow_text">
                      Game On : Turning Skills into Influence, Income, and
                      Impact.
                    </span>
                  </p>
                  <p class="mb-0">
                    Check your inbox for your confirmation and event link.
                  </p>
                  <p class="mb-0">See you on October 30th!</p>
                </div>
                <div class="text-center mt-4">
                  <button
                    class="ct_yellow_btn ct_h_48 mx-auto px-5"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      setIsSuccessModal(false);
                      setIsSpotModal(false);
                      navigate(coachPaths?.Webinar);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </CoachLayout>
  );
};

export default Webinar;
