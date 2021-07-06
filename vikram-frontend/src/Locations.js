import React from 'react';


function Locations(props) {
    
   const displayLocations = (arr) => {
    return (arr.map((element) => {
        return(
            <div className="locations">
                
                <div  style= {{backgroundImage: `url(${element.img})`, backgroundRepeat: 'no-repeat', width: '100%', height: '250px'}}>
                    <h3> {element.area}</h3>
                     <p> {element.address}</p>
                     <p> {element.phone}</p>
                     <button> See on Map</button>
                </div>
                <div className="blurb">
                    <p> {element.blurb}</p>
                </div>
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

export default Locations;
