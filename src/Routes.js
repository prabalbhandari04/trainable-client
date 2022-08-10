
import Dashboard from "./pages/Dashboard.jsx";
import Map from "./pages/Assessment.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Assessment from "./pages/Assessment.jsx";
import Question from "./pages/Question.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/dash"
  },
  {
    path: "/assessment",
    name: "Assessment",
    icon: "tim-icons icon-paper",
    component: Assessment,
    layout: "/dash"
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/dash"
  },
  {
    path: "/question",
    component: Question,
    layout: "/dash"
  }
];
export default routes;

