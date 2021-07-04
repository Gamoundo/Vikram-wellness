import React from 'react';


function Contact(props) {
    
   const displayLocations = (arr) => {
    return (arr.map((element) => {
        return(
            <div className="project">
                <h3> {element.area}</h3>
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
            <h1>Locations</h1>
            {displayLocations(props.locations)}
        </div>
    )
}

export default Contact;