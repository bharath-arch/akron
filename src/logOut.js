import { useNavigate } from "react-router-dom";

export const handleLogout = () => {
    const navigate = useNavigate();
    localStorage.removeItem("email");
    localStorage.removeItem("usertype");
    localStorage.removeItem("token");
    navigate("/Login");
};
