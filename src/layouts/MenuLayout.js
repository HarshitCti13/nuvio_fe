import { useNavigate } from "react-router-dom";
import { coachPaths } from "../routes/coach";


const MenuLayout = ({ children, user }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div class="text-end py-4 ">
       
        <div class="ct_logo">
          <a
            onClick={() => {
              navigate(coachPaths?.Webinar);
            }}
          >
            <img
              src="/assets/img/Nuvio_logo.png"
              alt=""
            />
          </a>
        </div>
      </div> */}
      <header class="ct_header">
        <div class="ct_logo">
          <a>
            <img src="assets/img/Nuvio_logo.png" alt="" />
          </a>
        </div>
        <div class="ct_navbar ">
          <ul>
            <div class="ct_close_menu">
              <i class="fa-solid fa-xmark"></i>
            </div>
            <li><a>For Enterprises</a>

            </li>
            <li><a>For Freelancers</a></li>
            <li class="ct_dropdown"><a >CoachHub <i class="fa-solid fa-angle-down"></i>
            </a>
              <div class="ct_custom_dropdown">
                <ol>
                  <li>
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Find a Coach</a>
                  </li>
                  <li onClick={() => navigate(coachPaths.ApplyBecomeCoach)}>
                    <a>Become a Coach</a>
                  </li>
                  <li>
                    <a>Events</a>
                  </li>
                  <li>
                    <a>Bootcamp</a>
                  </li>
                  <li>
                    <a>Webinar</a>
                  </li>
                </ol>

              </div>
            </li>
            <li><a>Funding</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li><a>Blog</a></li>
          </ul>
        </div>
        <div class="d-flex align-items-center gap-4">

          <a class="ct_orange_link" onClick={() => navigate(coachPaths.Signup)}>Sign Up</a>
          <a class="ct_orange_link" onClick={() => navigate(coachPaths?.Login)}>Log in</a>
          <a class="text-dark ">UK <img src="assets/img/flag.png" alt="" /> </a>
          <div class="ct_menu_bar">
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
        {/* <ul class="ct_right_dash_option">
          <li>
            <a><i class="fa-solid fa-comment"></i></a>
          </li>
          <li>
            <a><i class="fa-solid fa-bell"></i></a>
          </li>
          <li>
            <div class="ct_right_dropdown dropdown">
              <button id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <div class="d-flex align-items-center">
                  <img src="../assets/img/user_22.jpeg" alt="" class="ct_img_30" />
                </div>
                <i class="fa-solid fa-angle-down ms-auto"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item">My Profile</a>
                </li>
                <li>
                  <a class="dropdown-item">Change Password</a>
                </li>
                <li>
                  <a class="dropdown-item">Log Out</a>
                </li>
              </ul>
            </div>
          </li>
        </ul> */}
      </header>
      {children}
    </>
  );
};

export default MenuLayout;
