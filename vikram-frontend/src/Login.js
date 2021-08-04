import React, { useState } from 'react' 
import Register from './Register'

function Login() {
    
    const unregistered = () => {
        setregister(
            <Register />
        )
    }


    const [registered, setregister] =useState(
        <form >
                <div>
                <input type="email" name="email" />
                <label htmlFor="email">Email</label> 
                </div>
                <div>
                <input type="password" name="password" />
                <label htmlFor="password">Password</label> 
                </div>
                
                
                <input type="submit" value="Sign In"  />

                <button onClick={unregistered}> Create Profile</button>
                
                 
            </form>
    )
    return(
        <div className="form">
            {registered}
        </div>
    )
}

export default Login;