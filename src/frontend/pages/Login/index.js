import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThenGoToHomepage, registerThenLogin, register } from './loginActions';

export default function Login() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const dispatch = useDispatch();

    const submitRegister = form => {
        form.preventDefault();

        dispatch(registerThenLogin({
            email: form.target.email.value,
            password: form.target.password.value
        }))
    }

    const submitLogin = form => {
        form.preventDefault();

        dispatch(loginThenGoToHomepage({
            email: form.target.email.value,
            password: form.target.password.value
        }))
    }

    return (
        <div style={{display: 'flex'}}>
            <div style={{height: '100vh', width: '50vw', background: 'red'}}>
                <h1>Register</h1>
                <form onSubmit={submitRegister}>
                    <label>Email: </label>
                    <input 
                        name='email'
                        type="text" 
                        value={registerEmail} 
                        onChange={e => setRegisterEmail(e.target.value)}
                    />
                    <br/>
                    <label>Password: </label>
                    <input
                        name='password'
                        type="password" 
                        value={registerPassword} 
                        onChange={e => setRegisterPassword(e.target.value)} 
                    />
                    <br/>
                    <button type='submit'>Log In</button>
                </form>
            </div>
            <div style={{height: '100vh', width: '50vw', background: 'blue'}}>
                <h1>Login</h1>
                <form onSubmit={submitLogin}>
                    <label>Email: </label>
                    <input 
                        name='email'
                        type="text" 
                        value={loginEmail} 
                        onChange={e => setLoginEmail(e.target.value)}
                    />
                    <br/>
                    <label>Password: </label>
                    <input
                        name='password'
                        type="password" 
                        value={loginPassword} 
                        onChange={e => setLoginPassword(e.target.value)} 
                    />
                    <br/>
                    <button type='submit'>Log In</button>
                </form>
            </div>
        </div>
    )
}
