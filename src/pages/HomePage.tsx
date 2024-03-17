import React from "react";
import PageHeader from "../components/PageHeader";
import Users from "../components/Users";


const HomePage = () => {
    
    return (
        <div className="py-4">
            <PageHeader />
            <Users />
        </div>
    );
}

export default HomePage;