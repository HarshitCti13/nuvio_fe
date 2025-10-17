import React from 'react'
import Chart from "react-apexcharts";

const CoachDashboard = () => {
    const options = {
        chart: {
            type: "radialBar",
            height: 250,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "70%",
                },
                track: {
                    background: "#E8F4FB", // light blue background ring
                    strokeWidth: "100%",
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: "14px",
                        color: "#6B7280",
                        offsetY: 30,
                    },
                    value: {
                        show: true,
                        fontSize: "22px",
                        fontWeight: 600,
                        offsetY: -10,
                        formatter: (val) => `${val}%`,
                    },
                },
            },
        },
        fill: {
            colors: ["#8CCDF2"], // light blue progress ring
        },
        labels: ["Active"],
    };
    const series = [25];
    const options2 = {
        chart: {
            type: "radialBar",
            height: 250,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "70%",
                },
                track: {
                    background: "#FFEED9", // light circle color
                    strokeWidth: "100%",
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: "14px",
                        color: "#6B7280",
                        offsetY: 30,
                    },
                    value: {
                        show: true,
                        fontSize: "22px",
                        fontWeight: 600,
                        offsetY: -10,
                        formatter: (val) => `${val}%`,
                    },
                },
            },
        },
        fill: {
            colors: ["#FF8C00"], // orange progress
        },
        labels: ["Active"],
    };
    const series2 = [44];
    const options3 = {
        chart: {
            type: "radialBar",
            height: 250,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "65%",
                },
                track: {
                    background: "#e6f3f9",
                    strokeWidth: "100%",
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: true,
                        offsetY: 30,
                        color: "#6b7280",
                        fontSize: "16px",
                    },
                    value: {
                        show: true,
                        fontSize: "32px",
                        fontWeight: 600,
                        color: "#4b5563",
                        offsetY: -10,
                        formatter: (val) => `${val}%`,
                    },
                },
            },
        },
        fill: {
            type: "solid",
            colors: ["#00A0C6"], // main active color
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Active"],
    };
    const series3 = [85];
    const options4 = {
        chart: {
            type: "bar",
            height: 250,
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: "45%",
                distributed: true, // allows individual bar colors
            },
        },
        colors: [
            "#eae8f7", "#eae8f7", "#eae8f7", "#eae8f7",
            "#eae8f7", "#eae8f7", "#eae8f7", "#219EBC", // August highlighted
            "#eae8f7", "#eae8f7", "#eae8f7", "#eae8f7",
        ],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            labels: {
                style: {
                    colors: "#6b7280",
                    fontSize: "12px",
                },
            },
        },
        tooltip: {
            y: {
                formatter: (val) => `${val}%`,
            },
        },
        legend: {
            show: false,
        },
    };
    const series4 = [
        {
            name: "Growth",
            data: [20, 25, 35, 28, 18, 30, 32, 35, 31, 27, 22, 33],
        },
    ];
    return (
        <div>
            <div class="ct_dash_header ct_px_40">
                <div class="ct_dash_logo">
                    <img src="../assets/img/Nuvio_logo.png" alt="" />
                </div>
                <ul class="ct_right_dash_option">
                    <li>
                        <a ><i class="fa-solid fa-comment"></i></a>
                    </li>
                    <li>
                        <a ><i class="fa-solid fa-bell"></i></a>
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
                                    <a class="dropdown-item">My Profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item"
                                    >Change Password</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#ct_logout_modal_post"
                                    >Log Out</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="ct_dash_nav ct_px_40">
                <ul>
                    <li>
                        <a class="active">Dashboard</a>
                    </li>
                    <li>
                        <a>Calendar</a>
                    </li>
                    <li>
                        <a>Coaching</a>
                    </li>
                    <li>
                        <a>Resources</a>
                    </li>
                    <li>
                        <a>Events</a>
                    </li>
                    <li>
                        <a>Community</a>
                    </li>
                    <li>
                        <a>Inbox</a>
                    </li>
                    <li>
                        <a>Wallet</a>
                    </li>
                    <li>
                        <a>Settings </a>
                    </li>
                </ul>
            </div>
            <div class="ct_px_40 mt-4">
                <div class="mb-4">
                    <h4 class="mb-0 ct_fs_20 ct_fw_600 mb-2">Acitvity Overview</h4>
                    <p class="ct_grey_text mb-0">Quick snapshot of your coaching activity and growth on NUVIO.</p>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="ct_outline_bg h-100">
                            <div class="d-flex align-items-start justify-content-between gap-2">
                                <div>
                                    <p class="ct_fs_14 ct_darkblue_text mb-1">Sessions</p>
                                    <h4 class="ct_fs_24 ct_sky_blue_text">12 booked</h4>
                                </div>
                                <img src="../assets/img/dash_icon_1.png" alt="" />
                            </div>
                            <ul class="d-flex align-items-center gap-2">
                                <li class="ct_fs_12 ct_orange_text"><svg width="23" height="24" viewBox="0 0 23 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1696_32114)">
                                        <path d="M7.03156 16.2038L15.3574 8.03125" stroke="#FB8500" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M15.5339 14.3985L15.5952 7.79909L8.99583 7.73778" stroke="#FB8500" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1696_32114">
                                            <rect width="16" height="16" fill="white" transform="translate(11.418 0.6875) rotate(45.5323)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                    24%
                                </li>
                                <li class="ct_text_op_2">|</li>
                                <li class="ct_grey_text ct_fs_12">track your coaching success</li>
                            </ul>
                            <div class="d-flex align-items-center justify-content-between gap-2 ct_pt_16 ct_border_top_light ct_mt_16">
                                <a class="ct_yellow_link ct_fs_14">View</a>
                                <a >
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.834 6.3125L1.16732 6.3125M12.834 6.3125L7.83398 11.3125M12.834 6.3125L7.83398 1.3125"
                                            stroke="#FFB703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="ct_outline_bg h-100">
                            <div class="d-flex align-items-start justify-content-between gap-2">
                                <div>
                                    <p class="ct_fs_14 ct_darkblue_text mb-1">Events Hosted</p>
                                    <h4 class="ct_fs_24 ">2</h4>
                                </div>
                                <img src="../assets/img/dash_icon_2.png" alt="" />
                            </div>
                            <ul class="d-flex align-items-center gap-2">
                                <li class="ct_fs_12 ct_orange_text">
                                    38%
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1696_32145)">
                                            <path d="M5.73231 8.00261L15.8359 13.8359" stroke="#8ECAE6" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M9.74891 15.7105L16.1237 14.0024L14.4156 7.6276" stroke="#8ECAE6" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1696_32145">
                                                <rect width="16" height="16" fill="white" transform="translate(21.8555 8.07031) rotate(120)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </li>
                                <li class="ct_text_op_2">|</li>
                                <li class="ct_grey_text ct_fs_12">your hosted events score</li>
                            </ul>
                            <div class="d-flex align-items-center justify-content-between gap-2 ct_pt_16 ct_border_top_light ct_mt_16">
                                <a class="ct_dark_blue_link ct_fs_14">View Report</a>
                                <a >
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.834 6.92969L1.16732 6.92969M12.834 6.92969L7.83398 11.9297M12.834 6.92969L7.83398 1.92969"
                                            stroke="#023047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="ct_outline_bg h-100">
                            <div class="d-flex align-items-start justify-content-between gap-2">
                                <div>
                                    <p class="ct_fs_14 ct_darkblue_text mb-1">Total Session ( Hours ) </p>
                                    <h4 class="ct_fs_24 ">200 hours </h4>
                                </div>
                                <img src="../assets/img/dash_icon_3.png" alt="" />
                            </div>
                            <ul class="d-flex align-items-center gap-2">
                                <li class="ct_fs_12 ct_orange_text"><svg width="23" height="24" viewBox="0 0 23 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1696_32114)">
                                        <path d="M7.03156 16.2038L15.3574 8.03125" stroke="#FB8500" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M15.5339 14.3985L15.5952 7.79909L8.99583 7.73778" stroke="#FB8500" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1696_32114">
                                            <rect width="16" height="16" fill="white" transform="translate(11.418 0.6875) rotate(45.5323)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                    24%
                                </li>
                                <li class="ct_text_op_2">|</li>
                                <li class="ct_grey_text ct_fs_12">Growth Playbook</li>
                            </ul>
                            <div class="d-flex align-items-center justify-content-between gap-2 ct_pt_16 ct_border_top_light ct_mt_16">
                                <a class="ct_dark_blue_link ct_fs_14">View Report</a>
                                <a >
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.834 6.92969L1.16732 6.92969M12.834 6.92969L7.83398 11.9297M12.834 6.92969L7.83398 1.92969"
                                            stroke="#023047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="ct_outline_bg h-100">
                            <div class="d-flex align-items-start justify-content-between gap-2">
                                <div>
                                    <p class="ct_fs_14 ct_darkblue_text mb-1">Outstanding </p>
                                    <h4 class="ct_fs_24 ">$ 100 000 </h4>
                                </div>
                                <img src="../assets/img/dash_icon_4.png" alt="" />
                            </div>
                            <ul class="d-flex align-items-center gap-2">
                                <li class="ct_fs_12 ct_darksky_blue_text">
                                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1696_32198)">
                                            <path d="M7.03156 16.2038L15.3574 8.03125" stroke="#219EBC" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M15.5339 14.3985L15.5952 7.79909L8.99583 7.73778" stroke="#219EBC" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1696_32198">
                                                <rect width="16" height="16" fill="white" transform="translate(11.418 0.6875) rotate(45.5323)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    65%
                                </li>
                                <li class="ct_text_op_2">|</li>
                                <li class="ct_grey_text ct_fs_12">Track income trends and milestones.</li>
                            </ul>
                            <div class="d-flex align-items-center justify-content-between gap-2 ct_pt_16 ct_border_top_light ct_mt_16">
                                <a class="ct_dark_blue_link ct_fs_14">View Report</a>
                                <a >
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.834 6.92969L1.16732 6.92969M12.834 6.92969L7.83398 11.9297M12.834 6.92969L7.83398 1.92969"
                                            stroke="#023047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-5 col-xl-5 mb-4">
                        <div class="ct_outline_bg h-100">
                            <div class="d-flex align-items-center justify-content-between gap-2">
                                <div>
                                    <h4 class="ct_fs_20">Activity</h4>
                                    <p class="ct_text_clr_acacac">Platform report</p>
                                </div>
                                <select class="form-control ct_input ct_fit_content  ct_border_radius_10">
                                    <option value="">Monthly</option>
                                </select>
                            </div>
                            <Chart options={options4} series={series4} type="bar" height={250} />
                        </div>
                    </div>
                    <div class="col-xxl-5 col-xl-4 mb-4">
                        <div class="ct_outline_bg h-100">
                            <h4 class="ct_fs_20 mb-3">Shortcut</h4>
                            <ul class="ct_shortcut_list">
                                <li>
                                    <div>
                                        <p class=" ct_fs_12 mb-1">View Upcoming Sessions</p>
                                        <ul>
                                            <li class="ct_fs_14 ct_text_clr_757886">10 reservation</li>
                                            <li>
                                                <span class="ct_dot_5"></span>
                                            </li>
                                            <li class="ct_fs_14">Review Panel</li>
                                        </ul>
                                    </div>
                                    <a class="text-dark"><i class="fa-solid fa-arrow-right"></i></a>
                                </li>
                                <li class="ct_border_top_light ct_mt_16 ct_pt_16">
                                    <div>
                                        <p class="ct_text_clr_757886 mb-1">Manage Events</p>
                                        <ul>
                                            <li class="ct_fs_14 ct_text_clr_757886">5 Hosted </li>
                                            <li>
                                                <span class="ct_dot_5"></span>
                                            </li>
                                            <li class="ct_fs_14">Events Panel</li>
                                        </ul>
                                    </div>
                                    <a class="text-dark"><i class="fa-solid fa-arrow-right"></i></a>
                                </li>
                                <li class="ct_border_top_light ct_mt_16 ct_pt_16">
                                    <div>
                                        <p class="ct_text_clr_757886 mb-1">Upload eBooks</p>
                                        <ul>
                                            <li class="ct_fs_14 ct_text_clr_757886">8 items </li>
                                            <li>
                                                <span class="ct_dot_5"></span>
                                            </li>
                                            <li class="ct_fs_14">Resource Library</li>
                                        </ul>
                                    </div>
                                    <a class="text-dark"><i class="fa-solid fa-arrow-right"></i></a>
                                </li>
                                <li class="ct_border_top_light ct_mt_16 ct_pt_16">
                                    <div>
                                        <p class="ct_text_clr_757886 mb-1">View Earnings</p>
                                        <ul>
                                            <li class="ct_fs_14 ct_text_clr_757886">$2,450 </li>
                                            <li>
                                                <span class="ct_dot_5"></span>
                                            </li>
                                            <li class="ct_fs_14">Earnings Report</li>
                                        </ul>
                                    </div>
                                    <a class="text-dark"><i class="fa-solid fa-arrow-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-xl-3 mb-4">
                        <div class="ct_outline_bg h-100">
                            <ul>
                                <li class="ct_yellow_card">
                                    <div class="d-flex align-items-center gap-3 mb-2">
                                        <img src="../assets/img/outgoing-call_1.png" alt="" />
                                        <h6 class="mb-0 ct_fs_20">Discovery Call</h6>
                                    </div>
                                    <div class="text-end">
                                        <a class="ct_white_link">Book Now</a>
                                    </div>
                                </li>
                                <li class="ct_sky_blue_card mt-4">
                                    <div class="d-flex align-items-center gap-3 mb-2">
                                        <img src="../assets/img/diamond_284894_1.png" alt="" />
                                        <h6 class="mb-0 ct_fs_20 text-white">Momentum </h6>
                                    </div>
                                    <div class="text-end">
                                        <a class="ct_sky_blue_text ct_white_link">Upgrade Now</a>
                                    </div>
                                </li>
                                <li class="ct_light_sky_card mt-4">
                                    <div class="d-flex align-items-center gap-3 mb-2">
                                        <img src="../assets/img/pngegg_8_1.png" alt="" />
                                        <h6 class="mb-0 ct_fs_20">Coach Rating </h6>
                                    </div>
                                    <div class="text-end">
                                        <i class="fa-solid fa-star ct_yellow_text"></i>
                                        <i class="fa-solid fa-star ct_yellow_text"></i>
                                        <i class="fa-solid fa-star ct_yellow_text"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-4 mb-4">
                        <div class="ct_outline_bg h-100">
                            <div class="d-flex align-items-center gap-3 mb-4">
                                <img src="../assets/img/Upcoming_calneder_icon.png" alt="" class="ct_flex_shrink_0" />
                                <h4 class="mb-0 ct_fs_20">Upcoming appointments</h4>
                            </div>
                            <ul>
                                <li class="d-flex align-items-center justify-content-between gap-2">
                                    <div class="d-flex align-items-center gap-3">
                                        <h6 class="mb-0 text-center">JAN <br />31</h6>
                                        <div>
                                            <p class="ct_orange_text mb-1">Coaching session Follow Up </p>
                                            <ul class="d-flex align-items-center gap-2">
                                                <li class="ct_text_clr_757886 ct_fs_12">Today at 10:54 AM </li>
                                                <li>
                                                    <span class="ct_dot_5"></span>
                                                </li>
                                                <li class="ct_darksky_blue_text ct_fs_12">
                                                    Confirmed
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <a class="text-dark"><i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center justify-content-between gap-2 pt-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <h6 class="mb-0 text-center">Feb <br />7</h6>
                                        <div>
                                            <p class="ct_yellow_text mb-1">Clarity 1st session </p>
                                            <ul class="d-flex align-items-center gap-2">
                                                <li class="ct_text_clr_757886 ct_fs_12"> 7th February 2026 at 10:54 AM </li>
                                                <li>
                                                    <span class="ct_dot_5"></span>
                                                </li>
                                                <li class="ct_orange_text ct_fs_12">
                                                    Pending
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <a class="text-dark"><i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center justify-content-between gap-2 pt-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <h6 class="mb-0 text-center">Feb <br />17</h6>
                                        <div>
                                            <p class="ct_sky_blue_text mb-1">Deep Dive session 2 </p>
                                            <ul class="d-flex align-items-center gap-2">
                                                <li class="ct_text_clr_757886 ct_fs_12"> 17th February 2026 at 10:54 AM </li>
                                                <li>
                                                    <span class="ct_dot_5"></span>
                                                </li>
                                                <li class="ct_darksky_blue_text ct_fs_12">
                                                    Confirmed
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <a class="text-dark"><i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xxl-8 mb-4">
                        <div class="row">
                            <div class="col-xl-4 mb-4 col-lg-4">
                                <div class="ct_outline_bg h-100">
                                    <h4 class="ct_fs_20 ct_fw_600 ct_darksky_blue_text">Sessions</h4>
                                    <Chart options={options3} series={series3} type="radialBar" height={250} />
                                    <div class="session-stats">
                                        <div class="d-flex align-items-start">
                                            <span class="booked-dot"></span>
                                            <div>
                                                <h6 class="ct_fs_24 mb-1">62</h6>
                                                <p class="mb-0 ct_grey_text">Booked</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-start">
                                            <span class="completed-dot"></span>
                                            <div>
                                                <h6 class="ct_fs_24 mb-1">188</h6>
                                                <p class="mb-0 ct_grey_text">Completed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 mb-4 col-lg-4">
                                <div class="ct_outline_bg h-100">
                                    <h4 class="ct_fs_20 ct_fw_600 ct_orange_text">New prospects </h4>
                                    <Chart options={options2} series={series2} type="radialBar" height={250} />
                                    <div class="session-stats">
                                        <div class="d-flex align-items-start">
                                            <span class="booked-dot" style={{ backgroundColor: "#FB8500" }}></span>
                                            <div>
                                                <h6 class="ct_fs_24 mb-1">10</h6>
                                                <p class="mb-0 ct_grey_text">Active</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-start">
                                            <span class="completed-dot" style={{ backgroundColor: "hwb(31.79deg 0% 1.57% / 19%)" }}></span>
                                            <div>
                                                <h6 class="ct_fs_24 mb-1">8</h6>
                                                <p class="mb-0 ct_grey_text">Inactive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 mb-4 col-lg-4">
                                <div class="ct_outline_bg h-100">
                                    <h4 class="ct_fs_20 ct_fw_600 ct_sky_blue_text">Events </h4>
                                    <Chart options={options} series={series} type="radialBar" height={250} />
                                    <div class="session-stats">
                                        <div class="d-flex align-items-start">
                                            <span class="booked-dot" style={{ backgroundColor: "#8ECAE6" }}></span>
                                            <div>
                                                <h6 class="ct_fs_24 mb-1">2</h6>
                                                <p class="mb-0 ct_grey_text">Active</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-start">
                                            <span class="completed-dot" style={{ backgroundColor: "hsl(199.09deg 63.77% 72.94% / 21%)" }}></span>
                                            <div>
                                                <h6 class="ct_fs_24 mb-1">5</h6>
                                                <p class="mb-0 ct_grey_text">Inactive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CoachDashboard