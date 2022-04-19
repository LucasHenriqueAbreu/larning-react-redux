import { Route, Routes } from "react-router-dom";
import Dashboard from "../../../../pages/dashboard/Dashboard";
import Navbar from "../../navbar/Navbar";

function BasicLayout() {
    return (
        <div>
            <Navbar></Navbar>

            {/* Rotas */}
            <div className="flex h-full w-full max-w-6xl">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
}

export default BasicLayout;