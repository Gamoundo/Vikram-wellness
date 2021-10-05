import React, { useState } from 'react';
import ReactPlayer from 'react-player'


function About(props) {
    
//    const displayAbout = (arr) => {
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
const bonuses = [
    {
        name: 'Yoga Mat Rental',
        img: "https://bikramyogawellnessworks.com/video/Yoga_Mat_Rental.mp4"
    },
    {
        name: "Parking",
        img: "https://bikramyogawellnessworks.com/img/parking.jpg"
    },
    {
        name: "Community Area",
        img: 'https://bikramyogawellnessworks.com/video/Community_Area.mp4'
    },
    {
        name: 'Spacious Locker Room',
        img: 'https://bikramyogawellnessworks.com/img/lockers.jpg'
    }
]


const [display, setdisplay] = useState("")


const changeDisplay = (pic) => {
    setdisplay(
        pic
    )
}

const displayBonuses = (arr) => {
    return (arr.map((element) => {
      const  displayInfo = (e) =>{
   
            
            const targetInfo= bonuses.find(bonus => bonus.name == element.name)
             console.log(targetInfo)
                changeDisplay(targetInfo.img)

             
          }
        
        return(
         <div  className='bonuses' onClick={displayInfo} >
         <p> {element.name}</p>    
         </div>
        )
    }
    )

    )
}


    
    return(
        <div >
            <div className="centered"> 
            <h1>Independently Owned and Operated</h1>
            <p> BikramYogaWorks is an independent, Family Owned and operated yoga and wellness community based in the D.C. and Maryland area. With four studios and virtual classes, we’re taking wellness global! When our founders first opened the doors, there weren’t many studios in the region that were as inclusive and dedicated to broadening the yoga community as we are. Since 2011, our yoga family has grown exponentially with members from all backgrounds. We have some of the most experienced teachers both locally and globally on our team.</p>
            </div>
            
            <h3> Our Founders</h3>
            <div > 
                <div className="mediumdiv"> 
                    <div className='smalldiv'>
                        <img  src="" alt="founders pic"/>
                    </div>
                    <div className="smalldiv">
                        <p>Kendra Blackett-Dibinga and her husband Omekongo Dibinga are the co-founders of BikramYogaWorks and its four DRIP’T studios. After discovering the benefits of the hot room, Kendra introduced her family to Bikram yoga and all its healing benefits, it became a family affair. Read below to see how Bikram Yoga has changed Kendra's life for the better:</p>

                        <p>"After years of running track and weight training, I developed chronic knee pain, which led to surgery in 2010. Bikram Yoga helped to strengthen and heal my knees. It also helps me manage stress and the demands of a very busy, but rewarding life. Bikram Yoga changed my life. It was the one opportunity that I had to focus completely on myself without the distractions of life. When I introduced Bikram Yoga to my husband, who was suffering from chronic groin pain and residual basketball injuries, it changed his life too."</p>

                        <p>    As certified instructors, the duo continues to share the practice and provides guidance with any and everyone who is curious about-the practive so that they can also heal their own lives.</p>
                    </div>
                </div>
                

                <h3> Our Mission</h3>
                <p className="highlight"> We strive to provide an exceptional experience from the moment you walk into our studios until you leave our doors. That is why we pride ourselves on making our tight-knit community feel like family. By fostering an inclusive culture, we at DRIP'T™ Studios aim to make every member feel welcomed, heard, and supported in their health and wellness goals.</p>
                <div className="mediumdiv">
                    <div className='smalldiv'> 
                        <img  src="" alt="instructors"/>

                    </div>
                    <div className="smalldiv">
                        <p> Whether you are a veteran yogi or new to Bikram yoga and other heated classes, our community is happy that your fitness journey led you to us! You’ll find a variety of in-studio and virtual classes as well as other wellness services that will make it easy for community is happy that your fitness journey led you to us!</p>
                    </div>
                    
                </div>
                <p className="highlight"> You’ll find a variety of in-studio and virtual classes as well as other wellness services that will make it easy for you to build a personalized routine. Our state-of-the-art facilities offer a friendly environment and several amenities for your comfort and convenience</p>
                <div>
                    <div > 
                        {displayBonuses(bonuses)}
                    </div>
                    <div className="bigdiv">
                        <div className="mediumdiv">
                        {display.endsWith('jpg') ? <img width='500px' height= '500px' src={display} alt='?' />: <ReactPlayer playing='true' url={display}/>}
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* {displayAbout(props.About)} */}
        </div>
    )
}

export default About;