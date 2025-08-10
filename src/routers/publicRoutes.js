import GraduatePage from "../pages/GraduatePage";
import HomePage from "../pages/HomePage";

const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: 'Graduate', element: <GraduatePage />}
];

export default publicRoutes;