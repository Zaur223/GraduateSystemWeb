import GraduatePage from "../pages/GraduatePage";
import HomePage from "../pages/HomePage";
import MessagePage from "../pages/MessagePage";
import ProfilePage from "../pages/ProfilePage";

const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: '/graduate', element: <GraduatePage />},
  { path: '/profile', element: <ProfilePage />},
  { path: '/message', element: <MessagePage />}
];

export default publicRoutes;