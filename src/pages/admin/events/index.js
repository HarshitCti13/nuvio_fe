import { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { getWebinarAllData } from "../../../redux/features/admin/actions/authAction";
import Loader from "../../../components/loader";
import TableHeader from "../../../components/table/tableHeader";
import NoRecord from "../../../components/form/NoRecord";
import PaginationDropdown from "../../../components/table/PaginationDropdown";
import ReactPagination from "../../../components/table/ReactPagination";

const Events = () => {
  const { isLoading, allWebinarList } = useSelector(state => state.admin.auth);

  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [listPerPages, setListPerPages] = useState(5);

  const tableHeaders = ["#", "Title", "Join Date", "Phone Number", "Role", "Actions"];

  useEffect(() => {
    dispatch(getWebinarAllData());
  }, []);

  const paginatedList = allWebinarList
    ?.slice(currentPage * listPerPages, (currentPage + 1) * listPerPages);

  const handlePageClick = (data) => {
    setCurrentPage(data?.selected);
  };

  if (isLoading) {
    return <Loader />;
  };
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
                  <h4 class="mb-0 ct_fs_20 mb-0">Manage Content</h4>
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
                <ul class="ct_table_filter">
                  <li>All (500)</li>
                  <li class="active">Webinar (5)</li>
                  <li>Workshop (1)</li>
                  <li>Bootcamp (30)</li>
                  <li>Registrants</li>
                  <li>Cross Group(1) </li>
                  <li>Coach Talks (1) </li>
                  <li>Masterclass (2) </li>
                </ul>
              </div>
              {/* Webinar Table S */}
              <div class="table-responsive ct_custom_table ct_custom_table2 pt-2">
                <table class="table">
                  <TableHeader data={tableHeaders} />
                  {paginatedList?.length > 0 && (
                    <tbody>
                      {paginatedList?.map((user, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{user?.first_name ?? ""} {" "}{user?.last_name ?? ""}</td>
                          <td>{user?.created_at ?? ""}</td>
                          <td>{user?.phone_number ?? ""}</td>
                          <td>
                            {user?.role ?? ""}
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
                                    View
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item ct_darksky_blue_text"
                                    data-bs-target="#ct_edit_user_info"
                                    data-bs-toggle="modal"
                                  >
                                    Edit
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
                        allWebinarList?.length / listPerPages
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

        {/* <!-- Bootcamp detail modal S --> */}
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
                  <h4 class="mb-1 ct_fs_20">View Bootcamp Details</h4>
                  <p class="mb-0 ct_grey_text">
                    See full details for this newly registered user
                  </p>
                </div>

                <ul className="ct_webinar_grid_2 mt-4">
                  <li>
                    <p className="mb-0 ct_fs_14">Title </p>
                    <p className="mb-0 ct_fs_14 ct_grey_text">
                      From Idea to Action
                    </p>
                  </li>
                  <li>
                    <p className="mb-0 ct_fs_14">Coach </p>
                    <p className="mb-0 ct_fs_14 ct_grey_text">
                      Jeffrey Walters
                    </p>
                  </li>
                  <li>
                    <p className="mb-0 ct_fs_14">Date </p>
                    <p className="mb-0 ct_fs_14 ct_grey_text">Sept 24, 2024</p>
                  </li>
                  <li>
                    <p className="mb-0 ct_fs_14">Time </p>
                    <p className="mb-0 ct_fs_14 ct_grey_text">1:00 PM CET</p>
                  </li>
                  <li>
                    <p className="mb-0 ct_fs_14">Duration </p>
                    <p className="mb-0 ct_fs_14 ct_grey_text">3 Days</p>
                  </li>
                  <li>
                    <p className="mb-0 ct_fs_14">Price </p>
                    <p className="mb-0 ct_fs_14 ct_grey_text">$30,000</p>
                  </li>
                  <li>
                    <p className="mb-0 ct_fs_14">Available Seats </p>
                    <p className="mb-0 ct_fs_14 ct_grey_text">30 Seats</p>
                  </li>
                  <li>
                    <p className="mb-0 ct_fs_14">Location </p>
                    <p className="mb-0 ct_fs_14 ct_grey_text">
                      {" "}
                      OBOĒ Gardenstē
                    </p>
                  </li>

                  <li>
                    <p className="mb-0 ct_fs_14">Status </p>
                    <p className="mb-0 ct_fs_14 ct_darksky_blue_text">
                      Completed
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Bootcamp detail modal E --> */}

        {/* <!--  Edit Bootcamp modal S --> */}
        <div
          class="modal fade modal-lg"
          id="ct_edit_bootcamp_info"
          tabindex="-1"
          aria-labelledby="ct_edit_bootcamp_infoLabel"
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
                <h4 class="mb-1 ct_fs_20 px-4">Edit Bootcamp Information</h4>
                <p class="mb-0 ct_grey_text px-4">
                  Update basic details for this bootcamp
                </p>
                <form
                  action="javascript:void(0)"
                  class="mt-4 ct_modal_scroll ct_custom_scroll"
                >
                  <div class="row px-4">
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="Title"
                          value="From Idea to Action"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Coach
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="e.g. Jeffrey Walters"
                          value="Jeffrey Walters"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Duration{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">3 Days</option>
                          <option value="">6 Days</option>
                          <option value="">9 Days</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Date{" "}
                        </label>
                        <input type="date" className="form-control ct_input" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Time{" "}
                        </label>
                        <input type="time" className="form-control ct_input" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Price{" "}
                        </label>
                        <input
                          type="time"
                          className="form-control ct_input"
                          placeholder="Price "
                          value="$30,000"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Available Seats{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">20 Seats</option>
                          <option value="">30 Seats</option>
                          <option value="">40 Seats</option>
                        </select>
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
                          Status{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">Active</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 justify-content-center pt-4">
                    <button class="ct_yellow_btn ct_outline_grey px-5 py-2">
                      Cancel
                    </button>
                    <button class="ct_yellow_btn px-5 py-2">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Edit Bootcamp modal E --> */}
        {/* <!--  Edit Bootcamp modal S --> */}
        <div
          class="modal fade modal-lg"
          id="ct_create_bootcamp"
          tabindex="-1"
          aria-labelledby="ct_create_bootcampLabel"
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
                <h4 class="mb-1 ct_fs_20 px-4">Add Bootcamp Information</h4>
                <p class="mb-0 ct_grey_text px-4">
                  Add basic details for this bootcamp
                </p>
                <form
                  action="javascript:void(0)"
                  class="mt-4 ct_modal_scroll ct_custom_scroll"
                >
                  <div class="row px-4">
                    <div class="col-md-12">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="Title"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Coach
                        </label>
                        <input
                          type="text"
                          class="form-control ct_input"
                          placeholder="e.g. Jeffrey Walters"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Duration{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">3 Days</option>
                          <option value="">6 Days</option>
                          <option value="">9 Days</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Date{" "}
                        </label>
                        <input type="date" className="form-control ct_input" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Time{" "}
                        </label>
                        <input type="time" className="form-control ct_input" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Price{" "}
                        </label>
                        <input
                          type="time"
                          className="form-control ct_input"
                          placeholder="Price "
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-4">
                        <label for="" class="d-block mb-2">
                          Available Seats{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">20 Seats</option>
                          <option value="">30 Seats</option>
                          <option value="">40 Seats</option>
                        </select>
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
                          Status{" "}
                        </label>
                        <select class="form-control ct_input">
                          <option value="">Active</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 justify-content-center pt-4">
                    <button class="ct_yellow_btn ct_outline_grey px-5 py-2">
                      Cancel
                    </button>
                    <button class="ct_yellow_btn px-5 py-2">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Edit Bootcamp modal E --> */}
      </AdminLayout>
    </>
  );
};

export default Events;
