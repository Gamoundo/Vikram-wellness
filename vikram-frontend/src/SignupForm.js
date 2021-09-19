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
                        <input type="text" required="true" name="fname" placeholder="First Name" />
                    </div>
                    <div>
                        <input type="text" required="true" name="lname" placeholder="Last Name" />
                    </div>
                    <div>
                        <input type="tel" required="true" name="phone" placeholder="Mobile Phone" />
                    </div>
                    <div>
                        <input type="text" required="true" name="addr" placeholder="Address" />
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
                    <input type="email" required="true" name="email" placeholder="Email" />
                    
                    </div>
                    <div>
                    <input type="password" required="true" name="password" placeholder="Password" />
             
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
                    <div> 
                        <p> Subscribe to reminders & notifications</p>
                            <div>
                                <label>
                                <input type="checkbox"/>
                                Email
                                </label>
                            </div>
                            <div>
                                <label>
                                <input type="checkbox"/>
                                Text
                                </label>
                             </div>  
                        <p> Get a heads-up before bookings or when your schedule changes</p>
                            <div>
                                <label>
                                <input type="checkbox"/>
                                Email
                                </label>
                            </div>
                            <div>
                                <label>
                                <input type="checkbox"/>
                                Text
                                </label>
                             </div>
                        <p> Get updates on events and our latest offers</p>
                            <div>
                                <label>
                                <input type="checkbox"/>
                                Email
                                </label>
                            </div>
                            <div>
                                <label>
                                <input type="checkbox"/>
                                Text
                                </label>
                             </div>    
                    </div>

                <h1> Emergency Contact Information</h1>
                    <div>
                    <input type="text" required="true" name="name" placeholder="Name"/>
                    <input type="text" required="true" name="relation" placeholder="Relationship"/>
                    <input type="tel" required="true" name= "phone" placeholder="Phone"/>
                    <input type="email"  required="true"name= "email" placeholder="Email"/>
                    </div>
                <h1> Liability Release</h1>
                    <div>
                        <input type="textarea" readOnly="true" value="Bikram Yoga Works Liability Waiver: In signing below, I represent and agree as follows:
1. I have been examined by a licensed physician within the last six months and have been found to be in good physical health and fully able to perform the Bikram Hatha yoga series which will be taught to me at BYW. I understand that my participation in the practice of any strenuous exercise including Hatha Yoga can place me at risk for death or temporary or permanent injury. I agree to assume all risks attendant to my participation in the Bikram Hatha Yoga series offered at BHYR.
2. I understand that my yoga classes will be 90 minutes long and that I will be engaging in strenuous physical exercise in a room heated to approximately 105 degrees Fahrenheit and 40% humidity. I further understand that these exercises will include , but not be limited to kneeling, standing, bending, and laying prone in static and dynamic postures and that it will be stretching and compressing all parts of my body including but not limited to skin, muscle, joints, bones, tendons, ligaments, nerves, and blood vessels.
3. I understand that I am to practice yoga in a safe manner and that I am responsible to self-monitor my condition at all times.
4. I, my heirs, or legal representatives will not hold BYW, its officers, directors, shareholders, partners, instructors, or employees, landlord, and Bikram Choudhury responsible for any injuries suffered by me caused wholly or in part by my failure to faithfully follow instructions of BYW or its instructors or by any physical ailment or impairment of mine not fully disclosed to BYW.
5. The fees paid herewith and such registration fees paid hereafter are non-refundable as a matter of right; such refunds, if any, as are made shall be entirely within the sole discretion of BYW. Also, I agree that if I bring any personal property to BYW, and I store or leave any personal property at the property, that I do so at my own risk and that none of the releases hall have any liability in the event of loss, damage, unauthorized use (by any person other than a release), theft or injury resulting from the personal property.
6. I certify that I am at least 16 years old and am able to participate in the hatha yoga series offered by BHYR. Guardians of children under 16 years old can only participate in the children’s yoga program with the written consent of their parent or guardian.
7. I have read the above release and waiver of liability and fully understand its contents. I voluntarily agree to the terms and conditions stated above and acknowledge that failure to agree to the terms and conditions above would result in revocation of my membership or denial of my participation in yoga classes." />
                    </div>
                    <div>
                        <label>
                        <input type="checkbox" required="true"/>
                        I agree with the above terms
                        </label>
                    </div>
                    <div>
                    <button type="submit"> Create Account </button>
                    </div>
                 
                
            </form>
        </div>
    )
}

export default SignupForm;