import React from "react";
import { FormFieldData } from "../types/FormFieldData";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";
import { useAuth } from "./AuthProvider";

const Register = () => {
    const navigate = useNavigate();
    const {login} = useAuth();
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,4}$/;
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFieldData>();

    const onRegisterHandler: SubmitHandler<FormFieldData> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const user: User = {
            id: 1,
            name: `${data.firstName} ${data.lastName}`
            
        };
        login(user);
        navigate("/");
        console.log(data);
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onRegisterHandler)}>
            <div className="px-5">
                <div className="my-5">
                    <input
                        {...register("firstName", {
                            required: "First Name is required."
                        })}
                        type="text"
                        placeholder="First Name"
                    />
                    {errors.firstName && <div className="text-xs text-red-500">{errors.firstName.message}</div> }
                </div>
                <div className="my-5">
                    <input
                        {...register("lastName", {
                            required: "Last Name is required."
                        })}
                        type="text"
                        placeholder="Last Name"
                    />
                    {errors.lastName && <div className="text-xs text-red-500">{errors.lastName.message}</div> }
                </div>
                <div className="my-5">
                    <input 
                        {...register("email", {
                            required: "Email is required.",
                            validate: (value) => {
                                if(!emailRegex.exec(value)){
                                    return "Incorrect email format.";
                                }
                                return true;
                            }
                        })}
                        type="text"
                        placeholder="Email address" 
                    />
                    {errors.email && <div className="text-xs text-red-500">{errors.email.message}</div> }
                </div>
                <div className="my-5">
                    <input
                        {...register("password", {
                            required: "Password is required.",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long."
                            }
                        })}
                        type="password"
                        placeholder="Password"  
                    />
                    {errors.password && <div className="text-xs text-red-500">{errors.password.message}</div> } 
                </div>
                <div className="my-2">
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting? "Loading..." : "Register"}
                    </button>    
                </div>
            </div>
        </form>
    );
};

export default Register;