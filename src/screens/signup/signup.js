import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function SignUp() {
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [name, setname] = useState("")
    const navigate = useNavigate()

    function signupval() {
        if (validateForm())
            console.log("ins");
        axios.post('auth/register', {
            "email": email,
            "password": pass,
            "name": name
        }).then(() => {
            alert("SignedUp sucesss")
            // return <Navigate replace to={'/home'} />
            navigate('/signin')

        }
        ).catch(error => {
            console.error(error);
            alert("SignedUp failed")
            // return <Navigate replace to={'/signin'} />

        });

    }
    function validateForm() {

        const emailval = RegExp(
            "[a-z0-9]+@[a-z]+.[a-z]{2,3}"
        );
        const pattern = RegExp(
            "^[A-Za-z]+[A-Za-z ]*$"
        );
        const passval = RegExp("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$");
        function validate(text, pattern) {
            return pattern.test(text);
        }

        if (!validate(name, pattern)) {
            alert(' Name is invalid')
            return
        }

        // Check if the Email is an Empty string or not.
        if (!validate(email, emailval)) {
            alert('Email Address is invalid')
            return
        }
        // if (!validate(pass, passval)) {
        //     alert('Password is invalid')
        //     return
        // }


        return true
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-600 to-yellow-500" >
            <div className="w-[570] p-5 m-auto bg-white rounded-md shadow-md lg:max-w-xl" style={{ width: "500px" }}>
                <h1 className="text-3xl font-semibold text-center text-balck-700 ">
                    Learning Portal
                </h1>
                <br></br>
                <h1 className="text-2xl font-semibold text-center  ">
                    Sign Up
                </h1>

                <form className="m-1">
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
                            for="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setname(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>   <div className="mb-2">
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
                    <div className="mt-6">
                        <button onClick={(e) => {
                            e.preventDefault()
                            signupval()
                        }}
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-600">
                            SignUp
                        </button>
                    </div>
                </form>


            </div>
        </div>
    );
}

export default SignUp;