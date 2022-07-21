import React, { useState } from 'react'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = (e) => {
        e.preventDefault();

        Login(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='from-inner border w-50 mx-auto p-4 mt-5 shadow rounded'>
                <h2>Login</h2>
                {(error !== "") ? (<div className='error mb-3'>{error}</div>) : ""}
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input placeholder='Username' className='form-control mx-auto my-3' type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input placeholder='Email' className='form-control mx-auto my-3' type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input placeholder='Password' className='form-control mx-auto my-3 mb-5' type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}></input>
                </div>
                <button className='btn btn-success' type='submit' value="LOGIN">Login</button>
            </div>
        </form >
    )
}

export default LoginForm