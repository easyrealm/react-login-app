import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormExtra from "../components/FormExtra";
import { useAuth } from "./AuthProvider";
import { FormFieldData } from "../types/FormFieldData";


const Login = () => {
    const {login} = useAuth();
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,4}$/;
    const {
        register,
        handleSubmit,
        setError,
        formState:{
            errors,
            isSubmitting
        }
    } = useForm<FormFieldData>();

    const navigate = useNavigate();

    const submitHandler: SubmitHandler<FormFieldData> = async (data) => {
        try{
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const user = {id: 1, name:"Admin"};
            login(user);
            navigate("/");
            console.log(data);
        } catch(error){
            setError("root",{
                message: `Error occurred while authenticating. ${error}`
            });
        }
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(submitHandler)}>
            <div className="">
                <div className="my-5">
                    <input 
                        {...register("email",{
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
                    {errors.email && (<div className="text-red-500">{errors.email.message}</div>)}
                </div>
                <div className="my-5">
                    <input 
                        {...register("password", {
                            required: "Password is required.",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters."
                            }
                        })}
                        type="password"
                        placeholder="Password"
                    />
                    {errors.password && (<div className="text-red-500">{errors.password.message}</div>)}
                </div>
                <FormExtra />
                <div className="my-2">
                    <button disabled={isSubmitting} type="submit">
                        {isSubmitting? "Loading..." : "Login"}
                    </button>
                </div>
                {errors.root && <div className="text-red-500">{errors.root.message}</div>}
            </div>
        </form>
    );
};

export default Login;