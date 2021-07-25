import React from "react";

class Virtual extends React.Component {

    state= {
        currentBio: "Toad"
    }
        
    
    


     classTypes= [
        {
            name: "virtual",
            info: "Virtual classes allow you to tune in and experience a class from wherever you are in the world. Classes will align with live in-studio classes so you can feel like you’re right there with the teacher and other students. Guest teachers may drop in from anywhere including Kenya, Las Vegas, and Seattle.",
            link: "/virtual"
        },
        {
            name: "on-demand",
            info: "With pre-recorded content including Bikram Yoga, Hot Pilates, Vinyasa, and more, you can practice wherever and whenever you want. Explore our library and take wellness with you everywhere.",
            link: "/on-demand"
        },
        {
            name: "in-studio",
            info: "Who doesn't love the in-person, in-studio experience? Join Us in the hot room and Enjoy your favorite instructor in the flesh!",
            link: "/in-studio"
        }
    ]

    classes = [
        {
            name: "Bikram Hot Yoga",
            info: "Bikram Yoga is the original hot yoga system of 26 postures and 2 breathing exercises performed in a heated room of 105-110 degrees and 40-50% humidity. It is a total body system designed to improve flexibility and range of motion, strength and endurance. The class is 90 minutes long."
        },
        {
            name: "Bikram Blend",
            info: "Enjoy your favorite 26 postures perfectly blended with power vinyasa flow for an added aerobic element, while listening to your best-loved playlist. Blending the styles brings a moving meditation w/ a high intensity cardiovascular aspect. Together, teacher & student, in this creative heart pounding sequence, will move our bodies in a dance-like flow. You will feel wiped yet fulfilled, it will be exactly what you need! Come well-hydrated and ready to SWEAT!!"
        },
        {
            name: "Yin Yoga",
            info: "Yin yoga is a form of Hatha yoga used to stretch and release connective tissues of the hips, shoulders and spine. The goal of the postures is to improve muscle strength and injury prevention through relaxation. This practice is the complete opposite of Bikram and Pilates, such that in yin poses adapt to the body. Practitioners will learn how to achieve a position based on muscle relaxation and breath"
        },
        {
            name: "Flex'T",
            info: "FLEX’T™ will help you unlock your fascia to facilitate freedom of movement. The workshop helps you marry breath with dynamic stretching to open the body, improve mobility and reduce pain in movement."
        },
        {
            name: "Flex't Core",
            info: "FLEX'T™ Core is designed as the advanced version of the original FLEX'T series. This class will include core conditioning blended into many of the FLEX'T signature movements that you know and love. This class is great for those looking to add more strength and control to their flexibility and mobility training."
        },
        {
            name: "Drip't",
            info: "Dynamic resistance interval-based performance training. High intensity, low impact, interval training using weights & resistance bands. Workout will be done in the hot room heated to 95 degrees. If you love hot Pilates and want to up your game, join us forthis 60-minute full body mashup!"
        },
        {
            name: "Dript Cardio",
            info: "What happens when you combine body weight resistance, strength, High Intensity Interval training, and great music? You get DRIP'T™-CARDIO. Experience rhythmically coordinated aerobic exercise through dynamic movement sequences. Your body and your heart will thank you later."
        },
        {
            name: "Dript B.A.C",
            info: "Dynamic Resistance Interval based Performance (DRIP'T™) training. High intensity, low impact, interval training using weights & resistance bands. The workout will be done in the hot room heated to 95 degrees. If you love our classic DRIP’T™ class and want to up your game, join us for this 45 minute targeted back, arm, and chest strength session!"
        },
        {
            name: "26 + 2 W/Music",
            info: "Your same 26+2 Postures with your instructor performing the moves with you. Light music and limited to no dialogue. Not for beginners"
        },
    ]

    setInfo = (text) => {
    
        this.setState({
          currentBio: text
          
        })
      }

      classSchedule= [
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

      displayclassSchedule = (arr) => {
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





    displayClasses = (arr) => {
        return (arr.map((element) => {
          const  displayInfo = (e) =>{
       
                
                const targetInfo= this.classes.find(info => info.name == element.name)
                 console.log(targetInfo)
                    this.setInfo(targetInfo.info)

                 
              }
            
            return(
             <div className="c" onClick={displayInfo} >
             <p> {element.name}</p>    
             </div>
            )
        }
        )
    
        )
    }





    displayclassLinks = (arr) => {
        return (arr.map((element) => {
            return(
             <div className="tresClasses">
                 <a href={element.link}> 
                 <h1>{element.name}</h1>
                 <p style={{color: "white"}}> {element.info}</p>
                 </a>
                 {element.name === "in-studio" && <a target='_blank' style={{color: "white"}} href="https://bikramyogawellnessworks.com/img/BYW_Safety_V2.pdf"> Our Covid Safety Guidelines</a>}
             </div>
            )
        }
        )
    
        )
       }
    
    render() {
        return(
            <div>
                <div className="classLinks">
                    {this.displayclassLinks(this.classTypes)}
                </div>
                <h1> Available Classes</h1>
                <div className="classList">
                   <diV>
                   {this.displayClasses(this.classes)}
                    </diV> 
                   <div className="rightSideDiv">
                   <p >{this.state.currentBio}</p>
                   <button> See Schedule</button>
                    </div>
                </div>
                <p>Need a little more convincing? Send us an email to <a className="link" href= 'http://localhost:3000/contact'> Try a Class on Us!</a> If you are new to BYW and have never taken a class with us, we will make sure your 1st experience at our virtual or in-person studio is one that have you coming back for more. Let us know which you'd like to try first!</p>
                <h1> Classes</h1>
                <p> Sign up for live or virtual classes.</p>
                <div className="sidebar">
                    {this.displayclassSchedule(this.classSchedule)}
                </div>
                <p> Check out more in studio and virtual classes.</p>
                <button> SEE ALL CLASSES</button>   
                <h1> On-Demand</h1>
                <p> Check out on-demand classes in our video library</p>
                <button> SEE ALL VIDEOS</button>
            </div>
        )
    }
}

export default Virtual;
