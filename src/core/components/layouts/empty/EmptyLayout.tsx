import { Route, Routes } from "react-router-dom";
import SignIn from "../../../../pages/auth/SignIn";
import SignUp from "../../../../pages/auth/SignUp";

function EmptyLayout() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default EmptyLayout;