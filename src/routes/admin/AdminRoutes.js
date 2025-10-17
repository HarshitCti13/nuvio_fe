import { Suspense } from "react";
import { AllAdminRoutes } from ".";
import Loader from "../../components/loader";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../../components/page not found";

const AdminRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {AllAdminRoutes?.map((item, index) => {
          return (
            <Route key={index} exact path={item.path} element={item?.element} />
          );
        })}

        {/* <Route exact path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AdminRoutes;
