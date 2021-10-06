import React from 'react'

function Homepage() {

  let  classSchedule= [
        {
           name: 'Bikram Yoga(Virtual)',
           instructor: "Helena",
           time: "4:00am - 5:30am",
            
        },
        {
            name: 'Bikram Yoga(Virtual)',
            instructor: "Steve",
            time: "4:00pm - 5:30pm",
             
         },
         {
            name: 'Bikram Yoga(Virtual)',
            instructor: "Judy",
            time: "8:00am - 9:30am",
             
         },
         {
            name: 'Bikram Yoga(Virtual)',
            instructor: "Tim",
            time: "10:00am - 11:30am",
             
         },
         {
            name: 'Bikram Yoga(Virtual)',
            instructor: "Helena",
            time: "4:00pm - 5:30pm",
             
         },
      ]

   const displayclassSchedule = (arr) => {
        return (arr.map((element) => {
            return(
             <div className="sidebarItem">
                 
                 <h4>{element.name}</h4>
                 <p>{element.time}</p>
                 <p> {element.instructor}</p>

                 <button>  View Details</button>
                 <button> Book </button>
                 
             </div>
            )
        }
        )
    
        )
       }
    return(
        <div>
            <div>
                <p>Visit one of our three DRIP’T studios across the DMV and get your sweat on in person. If you’ve joined us online, you HAVE to experience our team’s energy and passion, and our high-quality hot rooms in person.</p>
                <a className='bubbleLink' href='/about'>Learn More</a>

            </div>

            <div className='twodivs'>
                <div className='smalldiv'>

                </div>
                <div className='smalldiv'>
                    <p> Check out DRIP'T On-Demand for yoga and fitness workouts that work with your time and schedule.</p>
                    <a href='/on-demand'> SIGN UP FOR YOUR FREE TRIAL NOW</a>
                </div>
                
                
                
            </div>
            <p>*Learn More on how we plan to keep you safe and socially distance during your visit to our studios</p>
                <div>
                    <h1> Class Schedule</h1>
                    <h3>Sign up for classes in-studio and virtual classes streaming today</h3>
                    <div className="sidebar">
                    {displayclassSchedule(classSchedule)}
                    </div>
                </div>

        </div>
    )
}

export default Homepage;