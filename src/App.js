import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Gepel from "./pages/Gepel";
import Valaszto from "./pages/Valaszto";
import Rendez from "./pages/Rendez";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Valaszto />} />
                    <Route path="rendez" element={<Rendez />} />
                    <Route path="gepel" element={<Gepel />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
