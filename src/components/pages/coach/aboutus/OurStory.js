const storyImages = [
  {
    src: "/assets/img/pexels-blue-bird-7243007.png",
    alt: "Pexels blue bird",
    col: "col-12 col-md-8",
    width: 500,
  },
  {
    src: "/assets/img/pexels-blue-bird-7243007-1.png",
    alt: "Pexels blue bird",
    col: "col-6 col-md-4",
    width: 500,
  },
  {
    src: "/assets/img/pexels-blue-bird-7243007-2.png",
    alt: "Pexels blue bird",
    col: "col-6 col-md-4",
    width: 500,
  },
  {
    src: "/assets/img/pexels-blue-bird-7243007-3.png",
    alt: "Pexels blue bird",
    col: "col-12 col-md-8",
    width: 500,
  },
];

const OurStory = () => {
  return (
    <div>
      <section
        className="ct_light_sky_bg py-5 ct_px_40"
        style={{ marginTop: "-80px" }}
      >
        <div className="container-fluid mb-5">
          <h2
            className="ct_darksky_blue_text mb-5 pt-4"
            style={{ letterSpacing: "0.5px" }}
          >
            Our Story
          </h2>

          <div className="row gy-5 align-items-start">
            {/* Left side image grid */}
            <div className="col-12 col-lg-5">
              <img
                src="/assets/img/our_story_section_img.png"
                className="ct_our_storey_img_1 "
              />
            </div>

            {/* Right side text content */}
            <div className="col-12 col-lg-7 ">
              <p className="ct_fs_20 mb-4">
                NUVIO began not with a master plan, but with a turning point.
                Our founder, Kiara Nundoo, had just wrapped up a contract.
                Instead of seeing it as the end, she saw an opportunity: to
                create something that reflected her journey, her values, and a
                deep need in the world of work.
              </p>
              <p className="ct_fs_20 mb-4">
                The idea was simple but powerful. What if the next big platform
                didn&apos;t just connect people with work, but reimagined how
                work actually happens? What if we could create something that
                gave visibility to underestimated talent and made the global
                market accessible to all?
              </p>
              <p className="ct_fs_20 mb-4">
                Drawing from her experiences across India, Mauritius, Dubai, and
                Paris, Kiara saw how many talented professionals were being
                overlooked and how many businesses were struggling to find the
                right people. NUVIO was born to bridge that gap.
              </p>
              <p className="ct_fs_20 mb-4">
                At first, it was just a few of us, passionate about freelancing,
                future-of-work thinking, and building something different. We
                believed that if we could build a space that truly empowered
                freelancers and simplified hiring for companies, we&apos;d be
                doing more than launching a platform. We&apos;d be starting a
                movement.
              </p>
              <p className="ct_fs_20 mb-4">
                As we grew, so did our community. We introduced NuGlow (for
                those just getting started), NuForge (for thought leaders
                shaping their niche), and NuStar (for top-performing
                freelancers). Along the way, we realized NUVIO isn&apos;t just a
                marketplace — it&apos;s an ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ct_px_40 ct_py_100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <header className="text-center mb-5">
                <h2 className="fw-normal fs-3 mb-3">
                  It’s all about <span className="ct_yellow_text">NuCore</span>
                </h2>
                <p
                  className="text-dark fs-6 mx-auto"
                  style={{ maxWidth: "850px" }}
                >
                  We’re a remote team with one goal: to shape a future of work
                  that’s fair, flexible, and full of opportunity. NUVIO is
                  growing fast, and we’re here to build a platform people trust
                  — where talent gets the spotlight it deserves.
                </p>
                <p
                  className="text-dark fs-6 mx-auto"
                  style={{ maxWidth: "850px" }}
                >
                  The future of work? We’re not just imagining it. We’re
                  building it.
                </p>
              </header>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <figure class="mb-0 ct_coach_created_card">
                <div class="ct_coach_created_img ct_dark_blue_overlay_img">
                  <img
                    src="/assets/img/create_img_1.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class=" ct_fw_600 ct_fs_20 mb-1">Jason Reed</h4>
                  <p class="mb-0 ct_darkblue_text">Business Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <figure class="mb-0 ct_coach_created_card">
                <div class="ct_coach_created_img ct_dark_blue_overlay_img">
                  <img
                    src="/assets/img/create_img_2.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class=" ct_fw_600 ct_fs_20 mb-1">Joe Bridges</h4>
                  <p class="mb-0 ct_darkblue_text">Leadership Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <figure class="mb-0 ct_coach_created_card">
                <div class="ct_coach_created_img ct_dark_blue_overlay_img">
                  <img
                    src="/assets/img/create_img_2.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class=" ct_fw_600 ct_fs_20 mb-1">Nellie Padilla</h4>
                  <p class="mb-0 ct_darkblue_text">Personal Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <figure class="mb-0 ct_coach_created_card">
                <div class="ct_coach_created_img ct_dark_blue_overlay_img">
                  <img
                    src="/assets/img/create_img_2.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class=" ct_fw_600 ct_fs_20 mb-1">Jeffrey Walters</h4>
                  <p class="mb-0 ct_darkblue_text">Founder Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <figure class="mb-0 ct_coach_created_card">
                <div class="ct_coach_created_img ct_dark_blue_overlay_img">
                  <img
                    src="/assets/img/create_img_2.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class=" ct_fw_600 ct_fs_20 mb-1">Jason Reed</h4>
                  <p class="mb-0 ct_darkblue_text">Business Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <figure class="mb-0 ct_coach_created_card">
                <div class="ct_coach_created_img ct_dark_blue_overlay_img">
                  <img
                    src="/assets/img/create_img_2.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class=" ct_fw_600 ct_fs_20 mb-1">Nellie Padilla</h4>
                  <p class="mb-0 ct_darkblue_text">Personal Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <figure class="mb-0 ct_coach_created_card">
                <div class="ct_coach_created_img ct_dark_blue_overlay_img">
                  <img
                    src="/assets/img/create_img_2.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class=" ct_fw_600 ct_fs_20 mb-1">Dean Bell</h4>
                  <p class="mb-0 ct_darkblue_text">Frontend Coach</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <figure class="mb-0 ct_coach_created_card">
                <div class="ct_coach_created_img ct_dark_blue_overlay_img">
                  <img
                    src="/assets/img/create_img_2.png"
                    alt=""
                  />
                </div>
                <figcaption class="mt-3">
                  <h4 class=" ct_fw_600 ct_fs_20 mb-1">Pearl Brooks</h4>
                  <p class="mb-0 ct_darkblue_text">Content Writing Coach</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
