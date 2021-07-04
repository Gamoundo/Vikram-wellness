import React from 'react';


function Contact(props) {
    
   const displayLocations = (arr) => {
    return (arr.map((element) => {
        return(
            <div className="project">
                <h3 className="area"> {element.area}</h3>
                <p> {element.address}</p>
                <p> {element.phone}</p>
                
            </div>
        )
    }
    )

    )
   }
    
    return(
        <div>
            <h1>Contact Us</h1>
            <div className="contact">
            {displayLocations(props.locations)}
            </div>
            
        </div>
    )
}

export default Contact;