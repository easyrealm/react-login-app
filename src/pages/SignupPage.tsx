import React from "react";
import Register from "../components/Register";
import LoginHeader from "../components/LoginHeader";

const SignupPage = () => {
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <LoginHeader 
                    heading="Create an account"
                    paragraph="Already have an account?"
                    linkName="Login"
                    linkUrl="/login"
                />
                <Register />
            </div>
        </div>
    );
};

export default SignupPage;