import { useLocation, useNavigate } from "react-router-dom";
import { adminPaths } from "../routes/admin";


const AdminLayout = ({ children, user }) => {
  const {pathname}  =useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div class="ct_dash_header ct_px_40">
        <div class="ct_dash_logo">
          <img src="../assets/img/Nuvio_logo.png" alt="" />
        </div>
        <ul class="ct_right_dash_option">
          <li>
            <a>
              <i class="fa-solid fa-comment"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fa-solid fa-bell"></i>
            </a>
          </li>
          <li>
            <div class="ct_right_dropdown dropdown">
              <button
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="../assets/img/user_22.jpeg"
                    alt=""
                    class="ct_img_30"
                  />
                </div>
                <i class="fa-solid fa-angle-down ms-auto"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item">
                    My Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item">
                    Change Password
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#ct_logout_modal_post"
                  >
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="ct_dash_nav ct_px_40">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a onClick={()=> navigate(adminPaths?.Users)} className={pathname == adminPaths?.Users ? "active" : ""}>Users</a>
          </li>
          <li>
            <a>Content</a>
          </li>
          <li>
            <a>Projects & Jobs</a>
          </li>
            <li>
            <a>Community</a>
          </li>
           <li>
            <a onClick={()=> navigate(adminPaths?.Events)} className={pathname == adminPaths?.Events ? "active" : ""}>Events</a>
          </li>
          
          <li>
            <a>Reports</a>
          </li>
          <li>
            <a>Messaging</a>
          </li>
          <li>
            <a >
              Payment
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          {/* <li>
            <a>Onboarding </a>
          </li> */}
        </ul>
      </div>
      {children}
    </>
  );
};

export default AdminLayout;
