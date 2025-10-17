import Login from "../../pages/admin/auth/Login";
import Events from "../../pages/admin/events";
import Users from "../../pages/admin/users";

export const adminPaths = {
  Login: "/admin/login",
  Users: "/admin/users",
  Events: "/admin/events",
};

export const AllAdminRoutes = [
  {
    name: "Login",
    path: adminPaths.Login,
    element: <Login />,
    isPrivate: false,
  },
  {
    name: "Users",
    path: adminPaths.Users,
    element: <Users />,
    isPrivate: false,
  },
  {
    name: "Events",
    path: adminPaths.Events,
    element: <Events />,
    isPrivate: false,
  },
];