import React, { useState } from 'react' 

import SignupForm from './SignupForm'

function Login() {
    
    const unregistered = () => {
        setregister(
            <SignupForm />
        )
    }


    const [registered, setregister] =useState(
        <form >
                <div>
                    <input type="email" name="email" placeholder="Email" />
                    
                    </div>
                    <div>
                    <input type="password" name="password" placeholder="Password" />
             
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