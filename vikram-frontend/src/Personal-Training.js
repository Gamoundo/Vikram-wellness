import React, { useState } from 'react';

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

const [training, settraining] = useState(
    [
        {
            type: "One-On-One",
            info: "Get the one-on-one attention that your fitness goals need. Connect and sweat in-studio or virtually with one of our Certified Personal Trainers. Our trainers are equipped with the kind of knowledge that will ensure long lasting results no matter what your fitness needs may be. Whether you goal is to build Strength and Stability, Increase endurance and agility, improving your range of motion, rest assured that you are in good hands."
        },
        {
            type: "Small Group Training",
            info: "BYW Small Group training combines one-one-one attention within the community atmosphere of group classes. Trainers are skilled to make sure that you are productively striving towards your personal fitness goals and will enjoy your training session in the company of your friends, family, and colleagues. The goal of every BYW trainer is to make sure that everyone is working productivity in their own bodies. By being able to offer numerous modifications and progressions for all kinds of movement sequences, we can assure that you will get the most band for your buck and your body during your small group session. Group training usually consists of 4-6 individuals per session. Expect to burn anywhere between 200-500 calories within the hour session."
        }
    ]
)


const displayTraining = (arr) => {
    return (arr.map((element) => {
        return(
         <div className="bonuses">
             <div>
                <h2> {element.type}</h2>
                <p> {element.info}</p>
                
             </div>
             
             
         </div>
        )
    }
    )

    ) 
}

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
            <div style= {{backgroundImage: `url("")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>
                {displayTraining(training)}
                <button> Book Your Session Now</button>
            </div>
            <h1> Private & Small Group Training Sessions</h1> 
            <div className="list">
                <p> Session Packages</p>
                {displaySessions(sessionPackages)}
            </div>
        </div>
    )
    
}

export default Personal_Training;