import React from "react";
import { useState, useContext } from "react";
import Usercontext from "../Context/Usercontext";

function Login() {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const { setUser } = useContext(Usercontext)

    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({ username, pass })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />
            <br />

            <input type="password" 
            placeholder="Password" 
            value={pass} 
            onChange={(e) => setPass(e.target.value)} />
            <br />
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Login;