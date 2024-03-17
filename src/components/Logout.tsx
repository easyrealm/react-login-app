import React from "react";
import { useAuth } from "./AuthProvider";

const Logout = () => {
    const {logout} = useAuth();

    const logoutHandler = () => {
        logout();
    };

    return (
        <button
            onClick={logoutHandler}
            className="rounded bg-blue-400 hover:bg-blue-600 mt-0"
        >Log out</button>
    );
};

export default Logout;