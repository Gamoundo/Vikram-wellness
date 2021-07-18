import React from 'react';


function News(props) {
    
    const members = [
        {
            title: "‘I come to breathe’: In a time of stress, Black people looking to yoga for meditation, relief and healing",
            img: "https://image.flaticon.com/icons/png/512/16/16467.png",
            link: "https://www.baltimoresun.com/maryland/baltimore-city/bs-fe-bikram-yoga-works-kendra-blackett-dibinga-20210413-lt45qlysv5fenpzm5azxbdf7oy-story.html",
            date: "April 13, 2021"
        },
        {
            title: "CityLine Sunday, Feb. 17, 2019 Heart Health Month: Bikram Yoga",
            img: "https://image.flaticon.com/icons/png/512/16/16467.png",
            link: "https://www.wcvb.com/article/cityline-sunday-feb-17-2019-heart-health-month-bikram-yoga/26329617",
            date: "February 17, 2019"
        }
        
    ]


   const displayMembers = (arr) => {
    return (arr.map((element) => {
        return(
            <div className="member">
                <p> {element.date}</p>
                <img className="profilePic" src={element.img} alt="profile pic" />
                
                <p> {element.title}</p>
                <a className="link" target='_blank' href={element.link}> Read More</a>
                
            </div>
        )
    }
    )

    )
   }
    
    return(
        <div>
            <h1>Here what others are saying about us</h1>
             
            <div className="members">
            {displayMembers(members)}
            </div>
            
        </div>
    )
}

export default News;