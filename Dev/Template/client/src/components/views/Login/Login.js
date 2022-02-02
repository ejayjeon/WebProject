import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const submitHandler = () => {
        console.log('login success')
    }

    useEffect(() => {
        axios.get('/api/user/login')
        .then(res => console.log(res))
        .catch()
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
        <form style={{ display: 'flex', flexDirection: 'column'}}>
            <span>Email</span>
            <input type='email' name='email' value={Email} onChange={emailHandler}/>
            <span>Password</span>
            <input type='password' name='password' value={Password} onChange={passwordHandler}/>
            <button type="submit" onClick={submitHandler}>Login</button>
            </form>
        </div>

        

    )
}

export default Login;