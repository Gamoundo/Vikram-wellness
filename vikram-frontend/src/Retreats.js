import React from 'react' 
import DeleteBtn from './DeleteBtn'
import { useHistory } from "react-router-dom";

function Retreats() {
    let history= useHistory()
    let vacations=[
        {
            name: 'Bali',
            img: '',
            date: 'April 2019',
            info: "Daily Yoga. Cycling through the jungles of Ubud. Relaxing at the beach in Nusa Dua. Traditional Balinese gala. Visits to temples and waterfalls. Traditional Balinese cooking class."
        },
        {
            name: 'Costa Rica',
            img: '',
            date: 'March 2018',
            info: ""
        },
        {
            name: 'Morocco',
            img: '',
            date: 'March 28th - 1st, 2020',
            info: ""
        },
        {
            name: 'Yoga en Blanc in Bermuda',
            img: '',
            date: 'November 12th - 15th, 2020',
            info: "A community-driven event centered around the healing art of yoga. Meet us in the triangle from November 12 – 15, 2020!"
        }
    ]
  
let recentVacation=[]
recentVacation.push(vacations.pop())


const updateVacations = (arr) => {
    vacations = arr
    history.push('/retreats')
}
  
const  displayVacations = (arr) => {
        return (arr.map((element) => {
            return(
             <div className="sidebarItem">
                 
                 <h4>{element.name}</h4>
                 <p> {element.date}</p>
                 <img src={element.img} width="100px" height="100px" alt={element.name}/> 
                 <p> {element.info}</p>
                 <DeleteBtn  arr={arr} obj={element} change={updateVacations}/>
                {arr.length === 1 && <button> Book Now</button>}
                 
                 
             </div>
            )
        }
        )
    
        )
       }




    
    
    
    return(
        <div> 
            <div>
                <h1> Retreats</h1>
                <h3> Join us for Yoga, Friendship, and Fun on one of our upcoming retreats</h3>
                <p className="retreatp">Whether it’s mountains or beaches, tropics or tundras, our wellness adZENtures offer the perfect space to reconnect with yourself and others while exploring new lands, cultures, sounds, tastes, and sights. We have partnered with The Trip Wish List to curate unforgettable luxury travel experiences that will make you the envy of all your friends.</p>
                <p className="retreatp">Retreats Include: Daily yoga, Luxury accommodation, Some meals, Curated experiences and Ground transportation.</p>
                <p className="retreatp">For more info visit: <a href="https://yogaenblanc.net/">yogaenblanc.net</a></p>
                <a href="https://bikramyogawellnessworks.com/img/YEB_Bermuda_Brochure.pdf" className="roundedLink"> Download Digital Brochure</a>
            </div>

            <div>
                <h1> Upcoming Retreats</h1>
                {displayVacations(recentVacation)}
            </div>

            <div>
                <h1> Past Retreats</h1>
                <div className="sidebar"> 
                    {displayVacations(vacations)}
                </div>
            </div>
            
            
        </div>
    )
}

export default Retreats;