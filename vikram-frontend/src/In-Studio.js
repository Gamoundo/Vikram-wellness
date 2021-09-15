import React from 'react'
import ReactPlayer from 'react-player';

function In_Studio() {

    const studioDeets = {
        title: "Now that we have our zoom room set up, we will be offering more classes in studio! An in studio/virtual class means that the teacher may not physically be in the studio with you. They will be zoomed into the hot room. They will be able to still see you and offer corrections to you as you practice.",
        video: "https://bikramyogawellnessworks.com/video/In_Studio_Promo.mp4",
        benefits: ["You get access to the Hot Room","Smaller class sizes","More opportunities to practice","Burn more calories while enjoying your favorite HIIT classes and Yoga Practices in the Hot Room"],
        condition: "In order to avail the hot room to members and others we will be opening our studios for these classes into the new year beginning with Ivy City and followed by Mt Vernon and then Riverdale."
    }
    const displayBenefit = (arr) => {
        return (arr.map((element) => {
            return(
                <div >
                    <li> {element} </li>
                    
                </div>
            )
        }
        )
    
        )
       }


    return(
        <div>
            <h1> In Studio</h1>
            <p> Meet Us In The Hot Room</p>
            <div className="largediv">
                <h2>{studioDeets.title}</h2>
                <div className="twodivs">
                    <div>
                        <ReactPlayer url={studioDeets.video} />
                    </div>
                    <div className="retreatp">
                        <p>The benefits to this option are as follows:</p>
                        {displayBenefit(studioDeets.benefits)}
                        <p>Come Join us in-studio and see what the hype is all about. Schedule your class today!!</p>
                <a target='_blank' style={{color: "blue"}} href="https://bikramyogawellnessworks.com/img/BYW_Safety_V2.pdf">Click Here To Learn More About Our Covid Safety Guidelines</a>
                    </div>
                </div>
                
            </div>
            
                <a className="link" href="http://localhost:3000/classes"> Book Our In-Studio Class NOW</a>
        </div>
    )
}

export default In_Studio;
