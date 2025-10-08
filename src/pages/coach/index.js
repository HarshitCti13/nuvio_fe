import { useEffect, useState } from "react";
import CoachLayout from "../../layouts/CoachLayout";

const Home = () => {
  const user = { name: "Home", role: "coach" };
   // Target date: today + 365 days
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 365);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <CoachLayout user={user}>
      <section class="ct_px_40">
        <div class="container-fluid">
          <div class="row ct_row_inverse_991 align-items-center">
            <div
              class="col-xxl-6 col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div class="ct_webinar_img">
                <img src="/assets/img/Unleash_left.png" alt="" />
              </div>
            </div>
            <div
              class="col-xxl-6 col-lg-8 mb-4 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="">
                <h4 class="ct_fs_85 ct_fw_600 mb-3 ct_line_h_111">
                  <span class="ct_text_clr_FBB51C">Unleash</span> <br />
                  Your{" "}
                  <span class="ct_light_sky_badge ct_line_height_81 text-white">
                    inner
                  </span>{" "}
                  <br />
                  Potential
                </h4>
                <p class="mb-4 ct_fs_24">
                  Your skills are more than just work, they’re your path to 
                  <span class="ct_fw_600">
                    influence, income, <br />
                    and impact.
                  </span>
                </p>
                <p class="mb-0 ct_fs_24">
                  Join NUVIO’s debut webinar, 
                  <span class="ct_yellow_text ct_fw_600">Game On,</span>a
                  dynamic session designed to help you transform your skills
                  into real influence. Whether you’re a creative, coach, or
                  navigating a career shift, you’ll walk away with the clarity
                  and strategy to elevate your brand and lead with purpose.
                </p>

                <div class="mt-5">
                  <a
                    href="#"
                    class="ct_yellow_btn ct_darkblue_btn ct_fit_content  px-5 py-3 ct_fs_24"
                  >
                    About us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="d-md-flex d-grid align-items-center justify-content-between gap-3 mt-5 pb-3">
            <p class="mb-0 ct_fw_600 ct_text_op_8 ct_fs_24">
              30 Oct 2025 @ 6 pm CET/ 8 pm MUT
            </p>
            <ul class="d-flex align-items-center gap-3">
              <li class="ct_text_op_8 ct_fs_24">
                <i class="fa-solid fa-globe me-1"></i> English
              </li>
              <li class="ct_text_op_8 ct_fs_24">
                <i class="fa-solid fa-clock me-1"></i>60 mins
              </li>
            </ul>
          </div>
        </div>
      </section>
          <section class="ct_light_sky_blue_bg ct_py_100 ct_px_40">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h2 class="ct_fs_44 ct_fw_600 mb-5">
              <span class="ct_sky_blue_text">Game On:</span>
              <span class="ct_yellow_text"
                >Turning Skills into Influence, Income, and Impact</span
              >
            </h2>
          </div>
        </div>
        <div class="row align-items-center">
          <div
            class="col-md-7 mb-4 mb-md-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p class="ct_fs_24">
              In a world full of talent but short on opportunity, how you play
              the game matters. Whether you're just starting out or scaling your
              next move, this webinar will show you how to turn your skills
              into influence, income, and real impact.
            </p>
            <p class="ct_fs_24">
              At the heart of this edition are NUVIO and Risen Consulting, two
              women-led forces, both born in Mauritius but shaped by different
              journeys: one rooted on the island, the other expanded
              internationally. Together, they prove that strong partnerships can
              bridge local and global business landscapes while championing
              women’s empowerment.
            </p>
            <p class="ct_fs_24">
              This is more than a conversation, it’s a movement. Discover how
              women are transforming their skills into thriving ventures and
              rewriting the rules of success, not by blending in, but by
              standing out.
            </p>
            <h6 class="ct_fw_600 ct_fs_24">
              Shared roots. Different paths. One mission: empowerment through
              business.
            </h6>
          </div>
          <div
            class="col-md-5 mb-4 mb-md-0"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div class="ct_game_on_image">
              <img src="/assets/img/game_on_image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
     <section class="ct_py_100 ct_px_40">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h2 class="ct_orange_text text-center ct_fs_44 ct_fw_600 pb-5">
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
                <img src="/assets/img/speaker_img_3.jpg" alt="" />
              </div>
              <div class="ct_about_speaker text-center">
                <h4 class="ct_fs_32 ct_fw_600 mb-2 ct_blue_text">
                  Fernando Kylas
                </h4>
                <p class="ct_fs_24">
                  Digital Impact Consultant | <br />
                  Freelancer Web designer & SEO <br />
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
                <img src="/assets/img/speaker_img_1.png" alt="" />
              </div>
              <div class="ct_about_speaker text-center">
                <h4 class="ct_fs_32 ct_fw_600 mb-2 ct_blue_text">
                  Valérie Esther
                </h4>
                <p class="ct_fs_24">
                  Founder | Growth Strategist | <br />
                  AI & Innovation Strategist | <br />
                  Business Developer | <br />
                  Full-Stack marketer
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
                <img src="/assets/img/speaker_img_2.png" alt="" />
              </div>
              <div class="ct_about_speaker text-center">
                <h4 class="ct_fs_32 ct_fw_600 mb-2 ct_blue_text">
                  Kiara NUNDOO
                </h4>
                <p class="ct_fs_24">
                  Founder | Growth Strategist | <br />
                  AI & Innovation Strategist | <br />
                  Business Developer | <br />
                  Full-Stack marketer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section class="ct_yellow_shape_bg ct_px_40">
      <div class="container-fluid py-5">
        <div class="row">
          <div class="col-md-12">
            <h2 class="ct_fs_44 ct_fw_600 mb-5">Here’s What You’ll Gain:</h2>
          </div>
        </div>
        <div class="row align-items-center">
          <div
            class="col-lg-7 col-md-6 mb-4 mb-md-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div class="mb-4">
              <h2 class="ct_fs_28 ct_fw_600 mb-2 ct_text_clr_30B0C7">
                A deeper understanding of how to position yourself.
              </h2>
              <p class="mb-0">
                Learn how to own your voice, share your expertise with
                authority, and become the go-to person in your space, no matter
                your background or industry.
              </p>
            </div>
            <div class="mb-4">
              <h2 class="ct_fs_28 ct_fw_600 mb-2 ct_text_clr_30B0C7">
                Real-world strategies to monetize your expertise
              </h2>
              <p class="mb-0">
                From freelancing to digital products, consulting to content
                creation, you’ll discover practical ways to turn your skills
                into sustainable income.
              </p>
            </div>
            <div class="mb-4">
              <h2 class="ct_fs_28 ct_fw_600 mb-2 ct_text_clr_30B0C7">
                Tools to build a strong, authentic personal brand
              </h2>
              <p class="mb-0">
                Stand out with a brand that reflects who you are and what you
                stand for, not just a logo, but a message, mission, and presence
                that draws the right people and opportunities to you.
              </p>
            </div>
            <div class="mb-4">
              <h2 class="ct_fs_28 ct_fw_600 mb-2 ct_text_clr_30B0C7">
                A global perspective on how to create lasting impact
              </h2>
              <p class="mb-0">
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
              <img src="/assets/img/what_gain.png" alt="" />
            </div>
            <div class="mt-5">
              <a
                href="take-a-chance.html"
                class="ct_yellow_btn ct_light_sky_btn mx-auto ct_fs_24"
                >Take the chance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section class="ct_px_40 ct_py_100 ct_blue_shape_bg">
      <div style={{height: "80px"}}></div>
      <div
        class="container-fluid py-5"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div class="row">
          <div class="col-md-12">
            <h2 class="ct_fs_44 ct_fw_600 ct_sky_blue_text text-center ct_letter_spacing_4 mb-5">
              THIS WEBINAR WILL START IN
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="row pt-5 mt-4">
              <div class="col-md-3 col-sm-6 col-6 mb-4 mb-lg-0">
                <div class="ct_counter_card text-center">
                  <h3 class="ct_fs_44 ct_fw_600 ct_yellow_text" id="days">{timeLeft.days}</h3>
                  <h5 class="mb-0 text-white">DAYS</h5>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-6 mb-4 mb-lg-0">
                <div class="ct_counter_card text-center">
                  <h3 class="ct_fs_44 ct_fw_600 ct_yellow_text" id="hours">
                    {timeLeft.hours}
                  </h3>
                  <h5 class="mb-0 text-white">HOURS</h5>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-6 mb-4 mb-lg-0">
                <div class="ct_counter_card text-center">
                  <h3 class="ct_fs_44 ct_fw_600 ct_yellow_text" id="minutes">
                    {timeLeft.minutes}
                  </h3>
                  <h5 class="mb-0 text-white">MINUTES</h5>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-6 mb-4 mb-lg-0">
                <div class="ct_counter_card text-center">
                  <h3 class="ct_fs_44 ct_fw_600 ct_yellow_text" id="seconds">
                    {timeLeft.seconds}
                  </h3>
                  <h5 class="mb-0 text-white">SECONDS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5 mt-5">
          <a
            href="claim-your-spot.html"
            class="ct_yellow_btn ct_light_sky_btn mx-auto ct_blue_text ct_fs_24"
            >Claim Your Spot Now</a
          >
        </div>
      </div>
    </section>
     <section class="ct_sky_blue_bg ct_py_100 ct_px_40">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h2
              class="ct_fs_44 mb-4 ct_fw_600 text-center mb-5 ct_darkblue_text"
            >
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
            <figure class="mb-0 ct_coach_created_card">
              <div class="ct_coach_created_img">
                <img src="/assets/img/create_img_1.png" alt="" />
              </div>
              <figcaption class="mt-3">
                <h4 class="ct_yellow_text ct_fw_600 ct_fs_32 mb-3">NuGlow</h4>
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
            <figure class="mb-0 ct_coach_created_card">
              <div class="ct_coach_created_img">
                <img src="/assets/img/create_img_2.png" alt="" />
              </div>
              <figcaption class="mt-3">
                <h4 class="ct_orange_text ct_fw_600 ct_fs_32 mb-3">NuGlow</h4>
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
            data-aos-duration="2000"
          >
            <figure class="mb-0 ct_coach_created_card">
              <div class="ct_coach_created_img">
                <img src="/assets/img/create_img_3.png" alt="" />
              </div>
              <figcaption class="mt-3">
                <h4 class="ct_blue_text ct_fw_600 ct_fs_32 mb-3">NuStar</h4>
                <p class="mb-0 ct_darkblue_text ct_fs_24">
                  Start your freelance journey. Build your profile, gain
                  experience, and grow your skills.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
      <section class="ct_py_100 ct_px_40">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div
            class="col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div class="ct_how_work_img">
              <img src="/assets/img/webinar_for_you.png" alt="" />
            </div>
          </div>
          <div
            class="col-lg-8  mb-4 mb-lg-0"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div class="ct_how_work_content">
              <h4 class="ct_fs_24 ct_orange_text">Make Them Work for You</h4>
              <h3 class="ct_fs_32 ct_darksky_blue_text ct_fw_600">
                Why This Webinar Is for You
              </h3>
            </div>
            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="ct_how_work_card p-4">
                  <img src="/assets/img/work_icon_1.png" alt="" />
                  <div class="pt-2">
                    <p class="mb-0 ct_fs_24">
                      You’re skilled, but are people seeing your value?
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="ct_how_work_card p-4">
                  <img src="/assets/img/work_icon_2.png" alt="" />
                  <div class="pt-2">
                    <p class="mb-0 ct_fs_24">
                      You’ve got experience, but are you getting paid what
                      you’re worth?
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="ct_how_work_card p-4">
                  <img src="/assets/img/work_icon_3.png" alt="" />
                  <div class="pt-2">
                    <p class="mb-0 ct_fs_24">
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
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div class="d-flex align-items-center gap-lg-5 gap-3 ct_flex_col_767">
        <div class="text-white">
          <h4 class="ct_fs_44 ct_fw_600 mb-3">
            Win a <span class="ct_darksky_blue_text">1-Month</span> Featured
            Profile on the NUVIO
          </h4>
          <p class="mb-0 text-dark ct_fs_24">
            We’re celebrating the launch of our first webinar — Game On — by
            giving 3 lucky attendees the chance to win a free 1-month featured
            profile on the NUVIO platform!
          </p>
          <ul class="text-dark mt-3" style={{listStyle: "disc"}}>
            <li class="ct_fw_600 ct_fs_24 mt-1">Boost your visibility</li>
            <li class="ct_fw_600 ct_fs_24 mt-1">
              Get noticed by recruiters & companies
            </li>
            <li class="ct_fw_600 ct_fs_24 mt-1">
              Position yourself as a top talent on our exclusive network
            </li>
          </ul>
        </div>
        <div class="ct_flex_shrink_0">
          <a
            href="take-a-chance.html"
            class="ct_yellow_btn ct_light_sky_btn ct_flex_1 px-5 ct_fs_24"
            >Take the chance
          </a>
        </div>
      </div>
    </section>

    </CoachLayout>
  );
};

export default Home;
