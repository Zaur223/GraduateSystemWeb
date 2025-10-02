import GraduatePage from "../pages/GraduatePage.js";
import HomePage from "../pages/HomePage.js";
import MessagePage from "../pages/MessagePage.js";
import ProfilePage from "../pages/ProfilePage.js";
import StatisticPage from "../pages/StatisticPage.js";

const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: '/graduate', element: <GraduatePage />},
  { path: '/profile', element: <ProfilePage />},
  { path: '/message', element: <MessagePage />},
  { path: '/statistic', element: <StatisticPage />}
];

export default publicRoutes;