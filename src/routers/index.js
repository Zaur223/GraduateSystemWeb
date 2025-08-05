import { Routes, Route } from "react-router-dom";
import publicRoutes from "./publicRoutes";

export default function Router() {
    return (
        <Routes>
            {publicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    )
}