import React from 'react'

function Register () {

    return(
        <div >
            <form>
            <div>
                <input type="email" name="email" />
                <label htmlFor="email">Email</label> 
                </div>
                <div>
                <input type="password" name="password" />
                <label htmlFor="password">Password</label> 
                </div>
            </form>
        </div>
    )
}

export default Register;