const TakeChance = () => {
  return (
    <>
      <section class="ct_signup_main py-3">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xxl-4 col-xl-5 col-lg-5 mb-4 mb-lg-0 d-none d-lg-block">
              <div class="ct_signup_left_img">
                <img src="/assets/img/take-a-chance.svg" alt="" />
              </div>
            </div>
            <div class="col-xxl-8 col-xl-7 col-lg-7 mb-4 mb-lg-0 mx-auto pe-0">
              <div class="ct_signup_right_content px-3 ct_custom_scroll">
                <div class="ct_signup_logo mb-3">
                  <img src="/assets/img/Nuvio_logo.png" alt="" />
                </div>
                <div class="mt-0 text-center">
                  <h2 class="ct_fs_24 ct_fw_600 mb-3 ct_darkblue_text">
                    Let's get it !
                  </h2>
                  <h4 class="ct_fs_20 ct_orange_text text-center">Game On:</h4>
                  <p class="mb-0">
                    Turning Skills into Influence, Income, and Impact,
                  </p>
                </div>
                <form action="coach-step-1.html" class="mt-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="mb-2 d-block ct_darkblue_text">
                          Email
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-3">
                        <label for="" class="mb-2 d-block ct_darkblue_text">
                          Phone number
                        </label>

                        <input
                          type="number"
                          class="form-control ct_input"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="text-center mt-4">
                    <a
                      href="javascript:void(0)"
                      class="ct_yellow_btn w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#ct_submit_modal"
                    >
                      Claim Your Spot
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  🎉 1 Month Free Participation Registration Successfully!
                </h4>
              </div>
              <div class="text-center mt-4">
                <button
                  class="ct_yellow_btn ct_h_48 mx-auto px-5"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeChance;
