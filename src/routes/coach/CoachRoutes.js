import { Suspense } from "react";
import { AllCoachRoutes } from ".";
import Loader from "../../components/loader";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../../components/page not found";

const CoachRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {AllCoachRoutes?.map((item, index) => {
          return (
            <Route key={index} exact path={item.path} element={item?.element} />
          );
        })}

        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default CoachRoutes;
