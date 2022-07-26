
import Dashboard from "./pages/Dashboard.jsx";
import Map from "./pages/Map.js";
import UserProfile from "./pages/UserProfile.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/dash"
  },
  {
    path: "/map",
    name: "Map",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/dash"
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/dash"
  }
];
export default routes;
