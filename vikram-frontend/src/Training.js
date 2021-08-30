import React from 'react';


function Training(props) {
    
//    const displayTraining = (arr) => {
//     return (arr.map((element) => {
//         return(
//             <div className="project">
//                 <h3> {element.area}</h3>
//                 <p> {element.address}</p>
//                 <p> {element.phone}</p>
                
//             </div>
//         )
//     }
//     )

//     )
//    }
    
    return(
        <div>
            <h1>Training</h1>
            {/* {displayTraining(props.Training)} */}
            <p> Our signature training CEO You provides training for budding entrepreneurs who want to understand what it takes to step out on their own and do the work necessary to be competitive. We also offer professional and personal development courses throughout the year. Training is held at BYW headquarters in Riverdale, Maryland. Are you interested to know when the next event will be? Email <a >info@bikramyogaworks.com</a> and let us answer all of your questions.</p>
            <p>Click the Video below to learn more!</p>
            <h2>Hear Testimonials from past Attendees</h2>
            <a className="link" href= 'http://localhost:3000/contact'> Email Us for more info </a>
        </div>
    )
}

export default Training;