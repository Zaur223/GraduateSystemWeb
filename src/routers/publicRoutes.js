import GraduatePage from "../pages/GraduatePage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: '/graduate', element: <GraduatePage />},
  { path: '/profile', element: <ProfilePage />}
];

export default publicRoutes;