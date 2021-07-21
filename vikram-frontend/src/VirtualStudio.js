import React from "react";

class Virtual extends React.Component {

    state=[

    ]

     classes= [
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

    displayclassLinks = (arr) => {
        return (arr.map((element) => {
            return(
             <div className="tresClasses">
                 <a href={element.link}> 
                 <h1>{element.name}</h1>
                 <p style={{color: "white"}}> {element.info}</p>
                 </a>
                 
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
                    {this.displayclassLinks(this.classes)}
                </div>
                <h1> Available Classes</h1>
                <div className="classList"></div>
                <p>Need a little more convincing? Send us an email to <a className="link" href= 'http://localhost:3000/contact'> Try a Class on Us!</a> If you are new to BYW and have never taken a class with us, we will make sure your 1st experience at our virtual or in-person studio is one that have you coming back for more. Let us know which you'd like to try first!</p>
                <h1> Classes</h1>
                <p> Sign up for live or virtual classes.</p>
                <div className="sidebar">

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
