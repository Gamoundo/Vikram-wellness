import React from 'react'

function SignupForm () {

    return(
        <div >
            <form >
            
                <h1> Personal Information</h1>
                    <div>
                        <input type="text" name="fname" placeholder="First Name" />
                    </div>
                    <div>
                        <input type="text" name="lname" placeholder="Last Name" />
                    </div>
                    <div>
                        <input type="tel" name="phone" placeholder="Mobile Phone" />
                    </div>
                    <div>
                        <input type="text" name="addr" placeholder="Address" />
                    </div>
                    <div>
                        <input type="text" name="city" placeholder="City" />
                    </div>
                    





                <h1> Create Your Login</h1>
                    <div>
                    <input type="email" name="email" placeholder="Email" />
                    
                    </div>
                    <div>
                    <input type="password" name="password" placeholder="Password" />
             
                    </div>
                <h1> Other Information</h1>
                <h1> Emergency Contact Information</h1>
                <h1> Liability Release</h1>
                
                
            </form>
        </div>
    )
}

export default SignupForm;