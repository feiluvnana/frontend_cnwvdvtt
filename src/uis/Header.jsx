import AuthApi from "../services/auth-api";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();
    const handleLogout = async () => {
        await new AuthApi().logout();
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div className="container-fluid bg-dark text-white p-2 d-flex justify-content-between">
            <h2>Logo</h2>
            <button className="btn btn-info mx-5 px-4" style={{ fontWeight: "bolder", fontSize: "1.2rem" }} onClick={handleLogout}>Log out</button>
        </div>
    )
}