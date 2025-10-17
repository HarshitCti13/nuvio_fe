import { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoachies, updateCoachStatus } from "../../../redux/features/admin/actions/authAction";
import Loader from "../../../components/loader";
import TableHeader from "../../../components/table/tableHeader";
import NoRecord from "../../../components/form/NoRecord";
import ReactPagination from "../../../components/table/ReactPagination";
import PaginationDropdown from "../../../components/table/PaginationDropdown";
import toast from "react-hot-toast";

const Users = () => {
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);
  const tableHeaders = ["Name", "Phone Number", "Bio", "Status", "Actions"];
  const { isLoading, coachList } = useSelector(state => state.admin.auth);

  const [currentPage, setCurrentPage] = useState(0);
  const [listPerPages, setListPerPages] = useState(5);
  const [searchFilter, setSearchFilter] = useState("");

  const paginatedList = coachList
    // ?.filter((item) => {
    //   const matchesSearch = searchFilter
    //     ? item?.full_name?.toLowerCase()?.includes(searchFilter?.toLowerCase())
    //     : item;

    //   const matchesDate = selectedDate
    //     ? new Date(item?.created_at)?.toISOString().split("T")[0] ===
    //       selectedDate
    //     : true;

    //         const matchesType = typeFilter ? item?.approval_status === typeFilter : true;

    //   return matchesSearch && matchesDate && matchesType;
    // })
    ?.slice(currentPage * listPerPages, (currentPage + 1) * listPerPages);

  const handlePageClick = (data) => {
    setCurrentPage(data?.selected);
  };

  const handleUpdateStatus = (status, value) => {
    const callback = (response) => {
      dispatch(fetchCoachies());
    };
    let data = {};
    if (status == "APPROVE") {
      data = {
        user_id: value?.user_id,
        status: status
      };
    } else if (status == "REJECT") {
      data = {
        user_id: value?.user_id,
        status: status,
        rejected_reason: "Please contact admin for more information."
      };
    };
    dispatch(updateCoachStatus({ payload: data, callback }));
  };

  useEffect(() => {
    dispatch(fetchCoachies());
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <AdminLayout>
        <div class="ct_px_40 mt-4">
          <div class="row">
            <div class="col-lg-2 col-md-3 mb-4 mb-md-0">
              <h4 class="mb-0 ct_fs_20 mb-4">Coach List</h4>
              <div class="ct_filter_btn">
                <button
                  class="ct_outline_grey ct_yellow_btn ct_h_35 d-flex align-items-center gap-2"
                  onClick={() => {
                    setIsToggle(true);
                  }}
                >
                  Filter{" "}
                  <img src="../assets/img/octicon_filter-16.png" alt="" />
                </button>
              </div>
              <div
                class={`ct_filter_sidebar ct_custom_scroll p-0 ${isToggle ? "show" : ""
                  }`}
              >
                <div
                  class="ct_close_filter d-block d-lg-none"
                  onClick={() => {
                    setIsToggle(false);
                  }}
                >
                  <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="mt-4">
                  <h5 class="ct_fs_16 mb-3">Account Status</h5>
                  <ul>
                    <li>
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Active
                        </label>
                      </div>
                    </li>
                    <li class="mt-2">
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Suspended
                        </label>
                      </div>
                    </li>
                    <li class="mt-2">
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Pending Approval
                        </label>
                      </div>
                    </li>
                    <li class="mt-2">
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Deactivated
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-4">
                  <h5 class="ct_fs_16 mb-3">Activity Level</h5>
                  <ul>
                    <li>
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Last Active: Today
                        </label>
                      </div>
                    </li>
                    <li class="mt-2">
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Last 7 Days
                        </label>
                      </div>
                    </li>
                    <li class="mt-2">
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          30+ Days Inactive
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-4">
                  <h5 class="ct_fs_16 mb-3">User Plan</h5>
                  <ul>
                    <li>
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Nuglow
                        </label>
                      </div>
                    </li>
                    <li class="mt-2">
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Nuforge
                        </label>
                      </div>
                    </li>
                    <li class="mt-2">
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Nustar
                        </label>
                      </div>
                    </li>
                    <li class="mt-2">
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Free
                        </label>
                      </div>
                    </li>
                    <li class="mt-2">
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Others
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-4">
                  <h5 class="ct_fs_16 mb-3">Flagged</h5>
                  <ul>
                    <li>
                      <div class="form-check ct_custom_check2 ct_custom_check_grey d-flex align-items-center gap-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label for="" class="ct_text_clr_757886">
                          Show Only Flagged Users
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-10 col-md-9 mb-4 mb-md-0">
              <div class="d-flex align-items-center gap-3 justify-content-between mb-4 ct_flex_col_1199 pb">
                <div>
                  <h4 class="mb-0 ct_fs_20 mb-0">Manage Coaches</h4>
                  <p class="mb-0 ct_text_clr_757886">
                    View, filter, and take action across all Nuvio user types
                  </p>
                </div>
                <div class="d-flex align-items-center gap-3 ct_flex_col_575 ct_w_100_575">
                  <div class="position-relative ct_w_100_575">
                    <input
                      type="text"
                      class="form-control ct_input ct_h_35 ps-5"
                      placeholder="Search by Title"
                    />
                    <i class="fa-solid fa-search ct_input_icon_left"></i>
                  </div>
                </div>
              </div>
              <div
                class="d-flex align-items-center gap-3 justify-content-between mb-3 ct_flex_col_575 ct_pb_3_575"
                style={{ borderBottom: "1px solid #cccccc" }}
              >
                <ul class="ct_table_filter border-0">
                  <li>All Users (200) </li>
                  <li>Freelancers (50)</li>
                  <li>Founders (30)</li>
                  <li className="active">Coaches ({coachList?.length})</li>
                  <li>Enterprises (50)</li>
                  <li>Investors (50)</li>
                </ul>
                <div class="position-relative ct_flex_shrink_0">
                  <select class="form-control ct_input ct_h_35 ct_input_ps_40">
                    <option value="">July, 2025</option>
                  </select>
                  <div class="ct_input_icon_left">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.833496 7.4974C0.833496 4.9834 0.833496 3.72606 1.61483 2.9454C2.39616 2.16473 3.65283 2.16406 6.16683 2.16406H8.8335C11.3475 2.16406 12.6048 2.16406 13.3855 2.9454C14.1662 3.72673 14.1668 4.9834 14.1668 7.4974V8.83073C14.1668 11.3447 14.1668 12.6021 13.3855 13.3827C12.6042 14.1634 11.3475 14.1641 8.8335 14.1641H6.16683C3.65283 14.1641 2.3955 14.1641 1.61483 13.3827C0.834163 12.6014 0.833496 11.3447 0.833496 8.83073V7.4974Z"
                        stroke="#535862"
                        stroke-width="1.5"
                      />
                      <path
                        d="M4.16699 2.16406V1.16406M10.8337 2.16406V1.16406M1.16699 5.4974H13.8337"
                        stroke="#535862"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M11.5 10.8333C11.5 11.0101 11.4298 11.1797 11.3047 11.3047C11.1797 11.4298 11.0101 11.5 10.8333 11.5C10.6565 11.5 10.487 11.4298 10.3619 11.3047C10.2369 11.1797 10.1667 11.0101 10.1667 10.8333C10.1667 10.6565 10.2369 10.487 10.3619 10.3619C10.487 10.2369 10.6565 10.1667 10.8333 10.1667C11.0101 10.1667 11.1797 10.2369 11.3047 10.3619C11.4298 10.487 11.5 10.6565 11.5 10.8333ZM11.5 8.16667C11.5 8.34348 11.4298 8.51305 11.3047 8.63807C11.1797 8.7631 11.0101 8.83333 10.8333 8.83333C10.6565 8.83333 10.487 8.7631 10.3619 8.63807C10.2369 8.51305 10.1667 8.34348 10.1667 8.16667C10.1667 7.98986 10.2369 7.82029 10.3619 7.69526C10.487 7.57024 10.6565 7.5 10.8333 7.5C11.0101 7.5 11.1797 7.57024 11.3047 7.69526C11.4298 7.82029 11.5 7.98986 11.5 8.16667ZM8.16667 10.8333C8.16667 11.0101 8.09643 11.1797 7.9714 11.3047C7.84638 11.4298 7.67681 11.5 7.5 11.5C7.32319 11.5 7.15362 11.4298 7.0286 11.3047C6.90357 11.1797 6.83333 11.0101 6.83333 10.8333C6.83333 10.6565 6.90357 10.487 7.0286 10.3619C7.15362 10.2369 7.32319 10.1667 7.5 10.1667C7.67681 10.1667 7.84638 10.2369 7.9714 10.3619C8.09643 10.487 8.16667 10.6565 8.16667 10.8333ZM8.16667 8.16667C8.16667 8.34348 8.09643 8.51305 7.9714 8.63807C7.84638 8.7631 7.67681 8.83333 7.5 8.83333C7.32319 8.83333 7.15362 8.7631 7.0286 8.63807C6.90357 8.51305 6.83333 8.34348 6.83333 8.16667C6.83333 7.98986 6.90357 7.82029 7.0286 7.69526C7.15362 7.57024 7.32319 7.5 7.5 7.5C7.67681 7.5 7.84638 7.57024 7.9714 7.69526C8.09643 7.82029 8.16667 7.98986 8.16667 8.16667ZM4.83333 10.8333C4.83333 11.0101 4.7631 11.1797 4.63807 11.3047C4.51305 11.4298 4.34348 11.5 4.16667 11.5C3.98986 11.5 3.82029 11.4298 3.69526 11.3047C3.57024 11.1797 3.5 11.0101 3.5 10.8333C3.5 10.6565 3.57024 10.487 3.69526 10.3619C3.82029 10.2369 3.98986 10.1667 4.16667 10.1667C4.34348 10.1667 4.51305 10.2369 4.63807 10.3619C4.7631 10.487 4.83333 10.6565 4.83333 10.8333ZM4.83333 8.16667C4.83333 8.34348 4.7631 8.51305 4.63807 8.63807C4.51305 8.7631 4.34348 8.83333 4.16667 8.83333C3.98986 8.83333 3.82029 8.7631 3.69526 8.63807C3.57024 8.51305 3.5 8.34348 3.5 8.16667C3.5 7.98986 3.57024 7.82029 3.69526 7.69526C3.82029 7.57024 3.98986 7.5 4.16667 7.5C4.34348 7.5 4.51305 7.57024 4.63807 7.69526C4.7631 7.82029 4.83333 7.98986 4.83333 8.16667Z"
                        fill="#535862"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="table-responsive ct_custom_table ct_custom_table2 pt-2">
                <table class="table">
                  <TableHeader data={tableHeaders} />
                  {paginatedList?.length > 0 && (
                    <tbody>
                      {paginatedList?.map((user, index) => (
                        <tr key={index}>
                          <td>
                            <div class="d-flex align-items-center gap-3">
                              <img
                                src={user?.profile_image ?? ""}
                                class="ct_img_40"
                              />
                              <div>
                                <h5 class="ct_fs_16 ct_fw_600 mb-1">
                                  {user?.full_name ?? ""}
                                </h5>
                                <p class="mb-0 ct_grey_text">
                                  {user?.email ?? ""}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td>{user?.phone_number ?? ""}</td>
                          <td>
                            <span className="ct_overlay_text d-block">
                              {user?.bio ?? ""}{" "}
                            </span>
                          </td>
                          <td>
                            {user?.status == "APPROVE" ?
                              <span class="ct_publish_badge">{user?.status ?? ""}</span>
                              :
                              user?.status == "REJECT" ?
                                <span class="ct_publish_badge">{user?.status ?? ""}</span>
                                :
                                <select className="form-control ct_input border-0 px-0 ct_fit_content" value="" onChange={(e) => handleUpdateStatus(e.target.value, user)}>
                                  <option value="">Pending</option>
                                  <option value="APPROVE">Approve</option>
                                  <option value="REJECT">Reject</option>
                                </select>
                            }
                          </td>
                          <td>
                            <div class="ct_right_dropdown dropdown">
                              <button
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="fa-solid fa-ellipsis"></i>
                              </button>
                              <ul
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                  <a
                                    class="dropdown-item"
                                    data-bs-target="#ct_profile_modal"
                                    data-bs-toggle="modal"
                                  >
                                    View Profile
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item ct_darksky_blue_text"
                                    data-bs-target="#ct_edit_user_info"
                                    data-bs-toggle="modal"
                                  >
                                    Edit User Info
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item ct_yellow_text"
                                    data-bs-target="#ct_reactivate_account"
                                    data-bs-toggle="modal"
                                  >
                                    Activate
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item ct_orange_text"
                                    data-bs-target="#ct_suspend_account"
                                    data-bs-toggle="modal"
                                  >
                                    Suspend
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item text-danger"
                                    data-bs-target="#ct_remove_user"
                                    data-bs-toggle="modal"
                                  >
                                    Remove
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
                {paginatedList?.length <= 0 && <NoRecord />}
              </div>
              {paginatedList?.length != 0 && (
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div>
                    <PaginationDropdown
                      onChange={(val) => {
                        setListPerPages(val);
                        setCurrentPage(0);
                      }}
                    />
                  </div>
                  <div>
                    <ReactPagination
                      pageCount={Math.ceil(
                        coachList?.length / listPerPages
                      )}
                      onPageChange={handlePageClick}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <!--  Edit user modal S --> */}
        <div
          class="modal fade modal-lg"
          id="ct_edit_user_info"
          tabindex="-1"
          aria-labelledby="ct_edit_user_infoLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-0">
                <button
                  type="button"
                  class="btn-close ct_circle_close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body p-0">
                <h4 class="mb-1 ct_fs_20 px-4">Edit User Information</h4>
                <p class="mb-0 ct_grey_text px-4">
                  Update basic details for this user
                </p>
                <form
                  action="javascript:void(0)"
                  class="mt-4 ct_modal_scroll ct_custom_scroll"
                >
                  <div class="row px-4">
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="e.g. Alex Brown"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          class="form-control ct_input"
                          placeholder="e.g. alexbrown@gmail.com"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="e.g. 23478649"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Location{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">Los Angeles</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Role{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">Freelancer</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Status{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">Active</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Verification Status
                        </label>
                        <select class="form-control ct_input">
                          <option value="">Verified</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Admin Notes (optional)
                        </label>
                        <textarea
                          class="form-control ct_input h-auto"
                          rows="4"
                          placeholder="@NuvioTemp123  "
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 justify-content-center pt-4">
                    <button class="ct_yellow_btn ct_outline_grey px-5 py-2">
                      Cancel
                    </button>
                    <button
                      class="ct_yellow_btn px-5 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#ct_changed_saved_modal"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Edit user modal E --> */}

        {/* <!-- add admin modal S --> */}
        <div
          class="modal fade modal-lg"
          id="ct_create_admin"
          tabindex="-1"
          aria-labelledby="ct_create_adminLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-0">
                <button
                  type="button"
                  class="btn-close ct_circle_close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body p-0">
                <h4 class="mb-1 ct_fs_20 px-4">Add New Admin</h4>
                <p class="mb-0 ct_grey_text px-4">
                  Invite a new team member and assign their access level
                </p>
                <form
                  action="javascript:void(0)"
                  class="mt-4 ct_modal_scroll ct_custom_scroll"
                >
                  <div class="row px-4">
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="e.g. Alex Brown"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          class="form-control ct_input"
                          placeholder="e.g. alexbrown@gmail.com"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Access Type{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">Content Admin</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Status{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">Active</option>
                          <option value="">Deactive</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Temporary Password
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="@NuvioTemp123  "
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Confirm Password{" "}
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="@NuvioTemp123  "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 justify-content-center pt-4">
                    <button class="ct_yellow_btn ct_outline_grey px-5 py-2">
                      Cancel
                    </button>
                    <button
                      class="ct_yellow_btn px-5 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#ct_submit_modal"
                    >
                      Invite
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- add admin modal E --> */}
        {/* <!-- admin added modal S --> */}

        {/* <!-- Profile detail modal S --> */}
        <div
          class="modal fade modal-lg"
          id="ct_profile_modal"
          tabindex="-1"
          aria-labelledby="ct_profile_modalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-0">
                <button
                  type="button"
                  class="btn-close ct_circle_close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body px-4 pb-5">
                <div>
                  <h4 class="mb-1 ct_fs_20">Coach Profile</h4>
                  <p class="mb-0 ct_grey_text">
                    See full details for this newly registered user
                  </p>
                </div>
                <div class="d-flex align-items-start gap-3 justify-content-between mt-4 px-4 ct_flex_col_991 pb-3">
                  <div class="d-flex align-items-center gap-3">
                    <img src="../assets/img/user_22.jpeg" class="ct_img_56" />
                    <div>
                      <h5 class="ct_fs_18 ct_fw_600 mb-1 me-1">
                        Nuray Aksoy
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.27887 0.758426C7.18692 0.611517 7.05147 0.496929 6.89135 0.430612C6.73123 0.364295 6.55442 0.349549 6.38553 0.388426L5.18686 0.663759C5.06402 0.691993 4.93637 0.691993 4.81353 0.663759L3.61486 0.388426C3.44597 0.349549 3.26917 0.364295 3.10905 0.430612C2.94893 0.496929 2.81347 0.611517 2.72153 0.758426L2.0682 1.80109C2.00153 1.90776 1.91153 1.99776 1.80486 2.06509L0.762198 2.71843C0.615543 2.81029 0.501123 2.94552 0.434821 3.10537C0.368518 3.26521 0.353621 3.44173 0.392198 3.61043L0.667531 4.81043C0.695664 4.93305 0.695664 5.06046 0.667531 5.18309L0.392198 6.38243C0.353471 6.55122 0.368293 6.72788 0.434603 6.88786C0.500913 7.04784 0.615417 7.18319 0.762198 7.27509L1.80486 7.92843C1.91153 7.99509 2.00153 8.08509 2.06886 8.19176L2.7222 9.23443C2.9102 9.53509 3.26886 9.68376 3.61486 9.60443L4.81353 9.32909C4.93637 9.30086 5.06402 9.30086 5.18686 9.32909L6.3862 9.60443C6.55499 9.64315 6.73166 9.62833 6.89164 9.56202C7.05162 9.49571 7.18696 9.38121 7.27887 9.23443L7.9322 8.19176C7.99887 8.08509 8.08886 7.99509 8.19553 7.92843L9.23886 7.27509C9.38565 7.18306 9.5001 7.04756 9.5663 6.88745C9.63249 6.72734 9.64714 6.55058 9.6082 6.38176L9.33353 5.18309C9.3053 5.06025 9.3053 4.9326 9.33353 4.80976L9.60887 3.61043C9.64766 3.4417 9.63293 3.26509 9.56675 3.10511C9.50056 2.94514 9.38619 2.80975 9.23953 2.71776L8.1962 2.06443C8.08968 1.99764 7.99965 1.90761 7.93287 1.80109L7.27887 0.758426ZM6.94353 3.50976C6.98477 3.43394 6.99498 3.34508 6.97203 3.26187C6.94908 3.17867 6.89475 3.10762 6.82048 3.06365C6.7462 3.01969 6.65777 3.00626 6.57379 3.02617C6.48981 3.04608 6.41683 3.0978 6.3702 3.17043L4.62686 6.12109L3.5742 5.11309C3.54297 5.08103 3.5056 5.05558 3.46433 5.03827C3.42305 5.02096 3.37871 5.01213 3.33395 5.01233C3.28919 5.01252 3.24493 5.02173 3.2038 5.0394C3.16268 5.05707 3.12553 5.08285 3.09459 5.11518C3.06364 5.14752 3.03952 5.18576 3.02367 5.22762C3.00782 5.26948 3.00056 5.3141 3.00233 5.35883C3.0041 5.40355 3.01485 5.44746 3.03396 5.48794C3.05306 5.52842 3.08013 5.56463 3.11353 5.59443L4.46953 6.89376C4.50582 6.92846 4.54949 6.95452 4.59726 6.96998C4.64504 6.98544 4.69568 6.98991 4.74543 6.98305C4.79517 6.97619 4.84272 6.95818 4.88453 6.93037C4.92633 6.90255 4.96132 6.86565 4.98686 6.82243L6.94353 3.50976Z"
                            fill="#FFB703"
                          />
                        </svg>
                      </h5>
                      {/* <p class="mb-0 ct_fs_14">Coach</p> */}
                      <small class="ct_fs_12 ct_grey_text">
                        <i class="fa-solid fa-star ct_yellow_text me-2"></i>1.3
                        (0 Reviews)
                      </small>
                    </div>
                    <div></div>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    <button class="ct_yellow_btn ct_outline_grey py-1">
                      Message
                    </button>
                    <button
                      class="ct_yellow_btn py-1"
                      data-bs-target="#ct_approve_user_acount2"
                      data-bs-toggle="modal"
                    >
                      Approve
                    </button>
                  </div>
                </div>
                <ul>
                  <li class="d-flex align-items-center gap-2 mb-2">
                    <img
                      src="../assets/img/tdesign_location-filled.svg"
                      alt=""
                    />
                    <span> Los Angeles, CA 90045</span>
                  </li>
                  <li class="d-flex align-items-center gap-2 mb-2">
                    <img src="../assets/img/mail_icon_345.svg" alt="" />
                    <span>nurayaksoy@gmail.com</span>
                  </li>
                  <li class="d-flex align-items-center gap-2 mb-2">
                    <img src="../assets/img/phone_789.svg" alt="" />
                    <span>Phone Number: 24569864</span>
                  </li>
                  <li>
                    Status: <span class="ct_orange_text">Pending</span>
                  </li>
                </ul>
                <div className="mt-3">
                  <p className="ct_fs_16 mb-1">Bio</p>
                  <p className="mb-0 ct_fs_14 ct_para_scroll ct_custom_scroll">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="mt-3">
                  <p className="ct_fs_16 mb-1">
                    Why do you want to join NUVIO as a coach?
                  </p>
                  <p className="mb-0 ct_fs_14 ct_para_scroll ct_custom_scroll">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="mt-3">
                  <p className="ct_fs_16 mb-1">CV</p>
                  <div className="ct_document_uploaded_img">
                    <img src="../assets/img/game_on_image.png" />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="ct_fs_16 mb-1">Certificate</p>
                  <div className="ct_document_uploaded_img">
                    <img src="../assets/img/game_on_image.png" />
                  </div>
                </div>
                {/* <div className="mt-3">
              <p className="ct_fs_16 mb-1">Why do you want to join NUVIO as a coach?</p>
              <p className="mb-0 ct_fs_14 ct_para_scroll ct_custom_scroll">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div> */}
                {/* <div class="row mt-4">
              <div class="col-lg-6 mb-4 mb-lg-0">
                <div class="ct_outline_bg">
                  <h4 class="ct_fs_14 mb-4">Activity Overview</h4>
                  <ul class="ct_activity_grid_2">
                    <li>
                      <span class="ct_fs_12">Last Active </span>
                      <span class="ct_fs_12">June 25, 2025, 2:14 PM</span>
                    </li>
                    <li>
                      <span class="ct_fs_12">IP Address </span>
                      <span class="ct_fs_12">192.168.2.45</span>
                    </li>
                    <li>
                      <span class="ct_fs_12">Login Method </span>
                      <span class="ct_fs_12"
                        >Email/ Google/ Referral Link
                      </span>
                    </li>
                    <li>
                      <span class="ct_fs_12">Total Logins</span>
                      <span class="ct_fs_12">5</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 mb-4 mb-lg-0">
                <div class="ct_outline_bg">
                  <h4 class="ct_fs_14 mb-4">Performance Summary</h4>
                  <ul class="ct_activity_grid_2">
                    <li>
                      <span class="ct_fs_12">Last Active </span>
                      <span class="ct_fs_12">June 25, 2025, 2:14 PM</span>
                    </li>
                    <li>
                      <span class="ct_fs_12">IP Address </span>
                      <span class="ct_fs_12">192.168.2.45</span>
                    </li>
                    <li>
                      <span class="ct_fs_12">Login Method </span>
                      <span class="ct_fs_12"
                        >Email/ Google/ Referral Link
                      </span>
                    </li>
                    <li>
                      <span class="ct_fs_12">Total Logins</span>
                      <span class="ct_fs_12">5</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
                {/* <div class="mt-4">
              <h4 class="ct_fs_14 mb-3">Review from Clients</h4>
              <div class="owl-carousel owl-theme ct_client_review_2">
                <div class="item">
                  <div class="ct_outline_bg">
                    <div
                      class="d-flex align-items-center gap-3 justify-content-between mb-3"
                    >
                      <div class="d-flex align-items-center gap-3">
                        <img
                          src="../assets/img/user_22.jpeg"
                          class="ct_img_40"
                          alt=""
                        />
                        <div>
                          <h5 class="ct_fs_16 ct_fw_600 mb-1 me-1">
                            Nuray Aksoy
                          </h5>
                          <p class="mb-0 ct_fs_14 ct_grey_text">
                            Hiring Manager
                          </p>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex align-items-center gap-1">
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                        </div>
                        <p class="mb-0 ct_fs_12 mt-2">
                          Reviewed on
                          <span class="ct_orange_text">Aug 6, 2025</span>
                        </p>
                      </div>
                    </div>
                    <p class="mb-0 ct_fs_12">
                      Excellent portfolio and communication. Ready for a full
                      project either website or mobile design
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="ct_outline_bg">
                    <div
                      class="d-flex align-items-center gap-3 justify-content-between mb-3"
                    >
                      <div class="d-flex align-items-center gap-3">
                        <img
                          src="../assets/img/user_22.jpeg"
                          class="ct_img_40"
                          alt=""
                        />
                        <div>
                          <h5 class="ct_fs_16 ct_fw_600 mb-1 me-1">
                            Nuray Aksoy
                          </h5>
                          <p class="mb-0 ct_fs_14 ct_grey_text">
                            Hiring Manager
                          </p>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex align-items-center gap-1">
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                        </div>
                        <p class="mb-0 ct_fs_12 mt-2">
                          Reviewed on
                          <span class="ct_orange_text">Aug 6, 2025</span>
                        </p>
                      </div>
                    </div>
                    <p class="mb-0 ct_fs_12">
                      Excellent portfolio and communication. Ready for a full
                      project either website or mobile design
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="ct_outline_bg">
                    <div
                      class="d-flex align-items-center gap-3 justify-content-between mb-3"
                    >
                      <div class="d-flex align-items-center gap-3">
                        <img
                          src="../assets/img/user_22.jpeg"
                          class="ct_img_40"
                          alt=""
                        />
                        <div>
                          <h5 class="ct_fs_16 ct_fw_600 mb-1 me-1">
                            Nuray Aksoy
                          </h5>
                          <p class="mb-0 ct_fs_14 ct_grey_text">
                            Hiring Manager
                          </p>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex align-items-center gap-1">
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                          <i
                            class="fa-solid fa-star ct_yellow_text ct_fs_16"
                          ></i>
                        </div>
                        <p class="mb-0 ct_fs_12 mt-2">
                          Reviewed on
                          <span class="ct_orange_text">Aug 6, 2025</span>
                        </p>
                      </div>
                    </div>
                    <p class="mb-0 ct_fs_12">
                      Excellent portfolio and communication. Ready for a full
                      project either website or mobile design
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Profile detail modal E --> */}

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
                  <h4 class="ct_fs_20">Admin Added</h4>
                  <p>
                    The new admin account has been successfully created and
                    granted access to the Nuvio admin Dashboard
                  </p>
                </div>
                <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                  <button class="ct_yellow_btn ct_outline_grey ct_h_48 px-5 ct_w_100_575">
                    Go to Admin List
                  </button>
                  <button
                    class="ct_yellow_btn ct_h_48 px-5 ct_w_100_575"
                    data-bs-dismiss="modal"
                  >
                    Add Another Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- admin added modal E --> */}

        {/* Reactive account S */}
        <div
          class="modal fade ct_reactivate_account"
          id="ct_reactivate_account"
          tabindex="-1"
          aria-labelledby="ct_reactivate_accountLabel"
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
                  <h4 class="ct_fs_20">Reactivate User Account</h4>
                  <p>
                    Are you sure you want to reactivate Alex Brown’s account?
                    This will restore her access to the platform
                  </p>
                </div>
                <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                  <button class="ct_yellow_btn ct_outline_grey ct_h_48 w-100 px-5 ct_w_100_575">
                    Close
                  </button>
                  <button
                    class="ct_yellow_btn ct_h_48 px-5 ct_w_100_575 w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#ct_Reactivate_User_success "
                  >
                    Reactivate User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reactive account E */}

        {/* reactive success account S */}
        <div
          class="modal fade ct_Reactivate_User_success"
          id="ct_Reactivate_User_success"
          tabindex="-1"
          aria-labelledby="ct_Reactivate_User_successLabel"
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
                  <h4 class="ct_fs_20">
                    User Account Reactivated Successfully
                  </h4>
                  <p>
                    Alex Brown now has full access to her dashboard and
                    activities
                  </p>
                </div>
                <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                  <button
                    class="ct_yellow_btn ct_outline_grey ct_h_48 w-100 px-5 ct_w_100_575"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    class="ct_yellow_btn ct_h_48 mx-auto px-5 w-100 ct_w_100_575"
                    data-bs-target="#ct_profile_modal"
                    data-bs-toggle="modal"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* reactive success account E */}

        {/* changed saved S */}
        <div
          class="modal fade ct_changed_saved_modal"
          id="ct_changed_saved_modal"
          tabindex="-1"
          aria-labelledby="ct_changed_saved_modalLabel"
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
                  <h4 class="ct_fs_20">Changes Saved</h4>
                  <p>
                    Your user’s information has been updated successfully. All
                    changes are now live on the platform
                  </p>
                </div>
                <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                  <button
                    class="ct_yellow_btn ct_outline_grey ct_h_48 px-5 ct_w_100_575"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* changed saved E */}
        {/* suspend Modal S */}
        <div
          class="modal fade ct_suspend_account"
          id="ct_suspend_account"
          tabindex="-1"
          aria-labelledby="ct_suspend_accountLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body py-5">
                <div class="mx-auto d-block text-center mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 44V8C4 6.9 4.392 5.95867 5.176 5.176C5.96 4.39333 6.90133 4.00133 8 4H40C41.1 4 42.042 4.392 42.826 5.176C43.61 5.96 44.0013 6.90133 44 8V32C44 33.1 43.6087 34.042 42.826 34.826C42.0433 35.61 41.1013 36.0013 40 36H12L4 44ZM24 30C24.5667 30 25.042 29.808 25.426 29.424C25.81 29.04 26.0013 28.5653 26 28C25.9987 27.4347 25.8067 26.96 25.424 26.576C25.0413 26.192 24.5667 26 24 26C23.4333 26 22.9587 26.192 22.576 26.576C22.1933 26.96 22.0013 27.4347 22 28C21.9987 28.5653 22.1907 29.0407 22.576 29.426C22.9613 29.8113 23.436 30.0027 24 30ZM22 22H26V10H22V22Z"
                      fill="#023047"
                    />
                  </svg>
                </div>
                <div class="text-center">
                  <h4 class="ct_fs_20">Suspend User Account</h4>
                  <p>
                    Are you sure you want to suspend
                    <span class="ct_orange_text">Nuray Aksoy</span> account?
                    This will temporarily restrict access to her account on
                    Nuvio.
                  </p>
                </div>
                <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                  <button
                    class="ct_yellow_btn ct_outline_grey ct_h_48 w-100 px-5 ct_w_100_575"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button class="ct_yellow_btn ct_h_48 mx-auto px-5 w-100 ct_w_100_575 ct_red_btn">
                    Suspend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* suspend Modal E */}

        {/* user Delete S */}
        <div
          class="modal fade ct_remove_user"
          id="ct_remove_user"
          tabindex="-1"
          aria-labelledby="ct_remove_userLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body py-5">
                <div class="mx-auto d-block text-center mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 44V8C4 6.9 4.392 5.95867 5.176 5.176C5.96 4.39333 6.90133 4.00133 8 4H40C41.1 4 42.042 4.392 42.826 5.176C43.61 5.96 44.0013 6.90133 44 8V32C44 33.1 43.6087 34.042 42.826 34.826C42.0433 35.61 41.1013 36.0013 40 36H12L4 44ZM24 30C24.5667 30 25.042 29.808 25.426 29.424C25.81 29.04 26.0013 28.5653 26 28C25.9987 27.4347 25.8067 26.96 25.424 26.576C25.0413 26.192 24.5667 26 24 26C23.4333 26 22.9587 26.192 22.576 26.576C22.1933 26.96 22.0013 27.4347 22 28C21.9987 28.5653 22.1907 29.0407 22.576 29.426C22.9613 29.8113 23.436 30.0027 24 30ZM22 22H26V10H22V22Z"
                      fill="#023047"
                    />
                  </svg>
                </div>
                <div class="text-center">
                  <h4 class="ct_fs_20">Permanently Remove User</h4>
                  <p>
                    You are about to permanently delete
                    <span class="ct_orange_text">Nuray Aksoy</span> account from
                    the Nuvio platform. This action cannot be undone.
                  </p>
                </div>
                <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                  <button
                    class="ct_yellow_btn ct_outline_grey ct_h_48 w-100 px-5 ct_w_100_575"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    class="ct_yellow_btn ct_h_48 mx-auto px-5 w-100 ct_w_100_575 ct_red_btn"
                    data-bs-target="#ct_remove_user_success"
                    data-bs-toggle="modal"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* user Delete E */}

        {/* rempove user S */}
        <div
          class="modal fade ct_remove_user_success"
          id="ct_remove_user_success"
          tabindex="-1"
          aria-labelledby="ct_remove_user_successLabel"
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
                  <h4 class="ct_fs_20">User Removed Successfully</h4>
                  <p>
                    All associated data and access have been deleted from the
                    platform
                  </p>
                </div>
                <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                  <button
                    class="ct_yellow_btn ct_outline_grey ct_h_48 px-5 ct_w_100_575"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rempove user E */}

        {/* Approve user S */}
        <div
          class="modal fade ct_approve_user_acount2"
          id="ct_approve_user_acount2"
          tabindex="-1"
          aria-labelledby="ct_approve_user_acount2Label"
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
                  <h4 class="ct_fs_20">Approve User Account</h4>
                  <p>Are you sure you want to approve Alex Brown account?</p>
                </div>
                <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                  <button
                    class="ct_yellow_btn ct_outline_grey ct_h_48 w-100 px-5 ct_w_100_575"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    class="ct_yellow_btn ct_h_48 mx-auto px-5 w-100 ct_w_100_575"
                    data-bs-target="#ct_user_remove_sucess"
                    data-bs-toggle="modal"
                  >
                    Approve Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Approve user E */}
        {/* user remove sucess S */}
        <div
          class="modal fade ct_user_remove_sucess"
          id="ct_user_remove_sucess"
          tabindex="-1"
          aria-labelledby="ct_user_remove_sucessLabel"
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
                  <h4 class="ct_fs_20">User Approved</h4>
                  <p>User account approved successfully</p>
                </div>
                <div class="text-center mt-4 d-flex align-items-center gap-3 justify-content-center ct_flex_col_575 ct_w_100_575">
                  <button
                    class="ct_yellow_btn ct_outline_grey ct_h_48 px-5 ct_w_100_575"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* user remove sucess E */}
      </AdminLayout>
    </>
  );
};

export default Users;
