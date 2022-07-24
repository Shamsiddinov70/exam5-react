import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/bobur-logo.svg";

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = (e) => {
        e.preventDefault();

        Login(details)
    }

    return (
        <div className='container'>
            <Link to={'/'}><img src={Logo} alt="site-logo" className="site-logo" width={209} height={58} /></Link>
            <form onSubmit={submitHandler}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}>
                    <h2 className='login-title'>Login</h2>
                    <p style={{ 'color': 'red' }}>{error}</p>
                    <div className='form-group'>
                        {/* <label htmlFor='email'>Email:</label> */}
                        <input placeholder='Email' className='input' type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}></input>
                    </div>
                    <div className='form-group'>
                        {/* <label htmlFor='password'>Password:</label> */}
                        <input placeholder='Password' className='input' type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}></input>
                    </div>
                    <button className='submit-btn' type='submit' value="LOGIN">Submit</button>
                </div>
            </form >
        </div>
    )
}

export default LoginForm