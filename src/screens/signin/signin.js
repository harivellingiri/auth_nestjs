import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Signin() {
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const navigate = useNavigate()

    function signinval() {
        console.log("before");
        if (validateForm())
            console.log("after");
        axios.post('auth/login', {
            "email": email,
            "password": pass
        }).then(() => {
            alert("Signed in sucesss")
            navigate('/home')

        }
        ).catch(error => {
            console.error(error);
            alert("Signed in failed")

        });

    }
    function validateForm() {

        const emailval = RegExp(
            "[a-z0-9]+@[a-z]+.[a-z]{2,3}"
        );
        const passval = RegExp("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$");
        function validate(text, pattern) {
            return pattern.test(text);
        }



        // Check if the Email is an Empty string or not.
        if (!validate(email, emailval)) {
            alert('Email Address is invalid')
            return
        }
        //if (!validate(pass, passval)) {
        //     alert('Password is invalid')
        //     return
        // }


        return true
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-600 to-yellow-500">
            <div className="w-[570] p-10 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-balck-700 ">
                    Learning Portal
                </h1>
                <br></br>
                <h1 className="text-2xl font-semibold text-center  ">
                    Sign in
                </h1>
                <h6 className="font-normal text-center ">
                    Enter your credentials to access your account
                </h6>
                <br></br>
                <form className="m-4">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            onChange={(e) => setemail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(e) => setpass(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6" onClick={(e) => {
                        e.preventDefault()
                        signinval()
                    }}>
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-600">
                            Signin
                        </button>
                    </div>
                </form>

                <p className="mt-8 mb-8 text-xs font-light text-center text-gray-700" onClick={() => signinval()}>
                    {" "}
                    Forgot Password?{" "}
                    <a
                        href="#"
                        className="font-medium text-yellow-600 hover:underline"
                    >
                        Reset Password
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Signin;