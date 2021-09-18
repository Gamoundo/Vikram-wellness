import React, { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import SelectUSState from 'react-select-us-states';


function SignupForm () {

    const [value, setValue] = useState('United States')
    const options = useMemo(() => countryList().getData())
  
    const changeHandler = value => {
      setValue(value)
    }

    console.log(options)
    
    const displayCountries = (arr) => {
      console.log(arr)
        return(arr.map((opt) => {
          
          <div>
            <option value={opt.label}>{opt.label}</option>
          </div>
        
      }
      )
      )  
    }
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
                    <div>
                    <Select options={options} value={value} onChange={changeHandler} placeholder={value} />
                    <select>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
    <option value="AS">American Samoa</option>
    <option value="GU">Guam</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="PR">Puerto Rico</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="VI">Virgin Islands</option>
</select>   
</div>





                <h1> Create Your Login</h1>
                    <div>
                    <input type="email" name="email" placeholder="Email" />
                    
                    </div>
                    <div>
                    <input type="password" name="password" placeholder="Password" />
             
                    </div>
                <h1> Other Information</h1>
                    <div>
                        <select >
                            <option> Preferred Location</option>
                           <option> Riverdale</option> 
                           <option> BikramYogaWorks Online</option>
                           <option> Ivy City</option>
                           <option> Mount Vernon</option>
                           
                        </select>
                    </div>

                    <div>
                        <select >
                            <option>How did you hear about us?</option>
                            <option> Advertisements</option>
                            <option> Groupon</option>
                            <option> Facebook</option>
                        </select>
                    </div>
                <h1> Emergency Contact Information</h1>
                <div>
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="relation" placeholder="Relationship"/>
                <input type="tel" name= "phone" placeholder="Phone"/>
                <input type="email" name= "email" placeholder="Email"/>
                </div>
                <h1> Liability Release</h1>
                
                
            </form>
        </div>
    )
}

export default SignupForm;