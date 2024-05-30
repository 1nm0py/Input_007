import React, { useRef } from 'react'
import Home from "./inp_Home.jsx"
import "./inp.css"

export default function Login() {
    const email = useRef()
    const password = useRef()

    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")

    const handleSubmit = () => {
        if (email.current.value == "hibro@gmail.com" && password.current.value == 12345678) {
            localStorage.setItem("emailData", "hibro@gmail.com")
            localStorage.setItem("passwordData", "12345678")
        }
    }

    return (
        <div>
            {
                getEmail&&getPassword?
                <Home />:
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" ref={email} />
                    </div>
                    <div>
                        <input type="password" ref={password} />
                    </div>
                    <button>Login</button>
                </form>
            }
        </div>
    )
}