import { useNavigate } from "react-router-dom";
import { coachPaths } from "../../../../routes/coach";

const HeroAbout = () => {
    const navigate = useNavigate()
  return (
    <section className="ct_px_40">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="py-5">
            <h2 className="ct_fs_50 mb-4">Hey there! <br/>
            We’re <span className="ct_yellow_text">NuCore</span></h2>
            <p className="mb-0 ct_fs_24">A passionate, globally-minded team on a mission to reinvent the way people work. We believe the future of work is flexible, borderless, and full of potential — and we’re here to make it happen.</p>

         <div className="mt-4">
         <button
              type="button"
              onClick={()=>navigate(coachPaths?.ContactUs)}
              className="ct_yellow_btn px-5"
            >
              Contact us
            </button>
            </div>
         </div>
          
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="ct_about_page_right_img">
              <div className="ct_about_top_1">
                <img src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/about_page_img_1.png"/>
                <img src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/about_page_1_1.png"/>
              </div>
              <img src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/about_page_2.png" alt="" className="ct_about_img_2" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
