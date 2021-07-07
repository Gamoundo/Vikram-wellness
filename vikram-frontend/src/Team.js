import React from 'react';


function Team(props) {
    
    const members = [
        {
            name: "Tim",
            img: "https://image.flaticon.com/icons/png/512/16/16467.png",
            job: "instructor",
            video: ""
        },
        {
            name: "Tom",
            img: "https://image.flaticon.com/icons/png/512/16/16467.png",
            job: "instructor",
            video: ""
        },
        {
            name: "Tina",
            img: "https://image.flaticon.com/icons/png/512/16/16467.png",
            job: "instructor",
            video: ""
        },
        {
            name: "Dr. Omekongo Dibinga",
            img: "https://image.flaticon.com/icons/png/512/16/16467.png",
            job: "director",
            video: ""
        },
        {
            name: "Kendra Blackett-Dibinga",
            img: "https://image.flaticon.com/icons/png/512/16/16467.png",
            job: "owner",
            video: ""
        },
    ]


   const displayMembers = (arr) => {
    return (arr.map((element) => {
        return(
            <div className="member">
                <img className="profilePic" src={element.img} alt="profile pic" />
                <p> {element.name}</p>
                <p> {element.job}</p>
                
            </div>
        )
    }
    )

    )
   }
    
    return(
        <div>
            <h1>Meet the Team</h1>
            <div className="members">
            {displayMembers(members)}
            </div>
            
        </div>
    )
}

export default Team;