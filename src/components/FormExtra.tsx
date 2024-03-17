import React from "react";
import { Link } from "react-router-dom";


const FormExtra = () => {
    return (
        <div className="flex items-center justify-between my-5">
            <div className="flex items-center">
            <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-400 focus:ring-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
            </label>
            </div>
            <div className="text-sm">
                <Link 
                    to="/"
                    className="font-medium text-blue-400 hover:text-blue-600"
                > Forgot your password?</Link>
            </div>
        </div>
    );
};

export default FormExtra;