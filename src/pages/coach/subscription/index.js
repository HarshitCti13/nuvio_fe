import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handlePurchasePlanCoach, handlePurchasePlanData } from '../../../redux/features/coach/actions/authAction';
import Loader from '../../../components/loader';
import { coachPaths } from '../../../routes/coach';

const Subscription = () => {
    const { isLoading, subscriptionPlan } = useSelector(state => state.coach.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handlePurchasePlanData());
    }, []);

    const handlePurchasePlan = (value) => {
        const callback = (response) => {
            console.log({ response });
            // if (response) {
            navigate(coachPaths?.CoachDashboard);
            // }
        };
        const data = {
            subscription_id: value?.subscription_id,
            total_price: value?.price
        };
        dispatch(handlePurchasePlanCoach({ payload: data, callback }));
    };

    if (isLoading) {
        return <Loader />;
    };
    return (
        <div>
            <section class=" py-3">
                <div class="container-fluid">
                    <div class="row ">
                        <div class="col-md-4 mx-auto">
                            <div class="ct_signup_logo mb-3">
                                <img src="assets/img/Nuvio_logo.png" alt="" />
                            </div>
                            <div class="mt-0 text-center">
                                <h2 class="ct_fs_32 ct_fw_600 mb-3 ct_darkblue_text">
                                    Choose Your Plan
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-5">
                    <div class="row">
                        {subscriptionPlan?.length != 0 &&
                            subscriptionPlan?.map((item) => (
                                <div class="col-lg-4 col-md-6 mb-4">
                                    {console.log({ item })}
                                    <div class="ct_pricing_card">
                                        <div>
                                            <div class="ct_pricing_title mt-3">
                                                <p class="mb-2 "><img src="assets/img/noto_fire.png" alt="" />NuGlow</p>
                                                <h2 class="ct_fs_24  mb-0 ct_fw_600">${item?.price ?? 0}/ <span class="ct_fs_14 ct_fw_400">{item?.title ?? ''}</span></h2>
                                                <p class="mb-0 mt-3 ct_text_op_8">{item?.description ?? ""}</p>
                                            </div>
                                            <ul class="ct_mt_30 mb-4 mt-4">
                                                {item?.details?.map((item) => (
                                                    <li>
                                                        <i class="fa-solid fa-check"></i> {item?.feature_name ?? ""}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div type="button" class="mt-auto" onClick={() => handlePurchasePlan(item)}>
                                            <a class="ct_yellow_btn w-100">Select Plan</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Subscription;