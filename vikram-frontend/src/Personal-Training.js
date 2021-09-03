import React from 'react';

function Personal_Training() {
   
  const sessionPackages = [
      {
          amount: "Single Session",
          price: "$75.00"
      },
      {
          amount: "5 Sessions",
          price: "$250.00"
      },
      {
          amount: "10 Sessions",
          price: "$500.00"
      }
  ]

 const displaySessions = (arr) => {
    return (arr.map((element) => {
        return(
         <div className="bonuses">
             <div>
                <p> Small Group Personal Training Session ({element.amount}) {element.price} <button> Buy Now</button> </p>
                
                
             </div>
             
             
         </div>
        )
    }
    )

    )
   }
   
    return(
        <div>
            <h1>Personal Training</h1>
            <h1> Private & Small Group Training Sessions</h1> 
            <div className="list">
                <p> Session Packages</p>
                {displaySessions(sessionPackages)}
            </div>
        </div>
    )
    
}

export default Personal_Training;