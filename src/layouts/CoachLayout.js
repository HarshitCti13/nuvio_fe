import { useNavigate } from "react-router-dom";
import { coachPaths } from "../routes/coach";


const CoachLayout = ({ children, user }) => {
  const navigate = useNavigate();
  return (
    <>
      <div class="text-end py-4 ">
        {/* <div className="ct_navbar ">
        <ul className="justify-content-end pe-4">
          <li>
            <a href="#" onClick={()=> navigate(coachPaths?.AboutUs)}>About Us</a>
          </li>
          <li>
            <a onClick={()=> navigate(coachPaths?.ContactUs)}>Contact Us</a>
          </li>
        </ul>
        </div> */}
        <div class="ct_logo">
          <a
            href="#"
            onClick={() => {
              navigate(coachPaths?.Webinar);
            }}
          >
            <img
              src="https://nuvio-fe.onrender.com/nuvio/assets/img/Nuvio_logo.png"
              alt=""
            />
          </a>
        </div>
      </div>
      {children}
    </>
  );
};

export default CoachLayout;
