import React from 'react'

class Classes extends React.Component {

    state= {
        classes: [
            {
               name: 'Bikram Yoga(Virtual)',
               instructor: "Helena",
               time: "4:00am - 5:30am",
               date: '08/28/21'
                
            },
            {
                name: 'Bikram Yoga(Virtual)',
                instructor: "Steve",
                time: "4:00pm - 5:30pm",
                date: '08/31/21'
             },
             {
                name: 'Bikram Yoga(Virtual)',
                instructor: "Judy",
                time: "8:00am - 9:30am",
                date: '08/25/21'
             },
             {
                name: 'Bikram Yoga(Virtual)',
                instructor: "Tim",
                time: "10:00am - 11:30am",
                date: '08/27/21'
             },
             {
                name: 'Bikram Yoga(Virtual)',
                instructor: "Helena",
                time: "4:00pm - 5:30pm",
                date: '08/29/21'
             },
          ],
          date: new Date().toLocaleString(),
          week: []
    }

changeWeek = (r) => {
    this.setState({week: [...this.state.week, r]})
}

    makeWeek = () => {
      let week= [];
      let  cd;
       let day;

       
       
        for (let i = 0; i < 7; i++) {
           if (i !== 0) {
            let  d = new Date()
            d.setHours(0,0,0)
            console.log(d)
            d.setDate(d.getDate() + i)
            console.log(d)
            console.log(i)
              cd = d
        day= cd.toLocaleString()
        week.push(
            {
                date: cd,
                string: day
            }) 
           } else {
            let  d = new Date()
            d.setDate(d.getDate() + i)
            console.log(d)
            console.log(i)
              cd = d
        day= cd.toLocaleString()
        week.push(
            {
                date: cd,
                string: day
            })
           }
            
            
        }   return (week)

      
    }
    mapWeek = (arr) => {
        let classes = this.state.classes
        
        
        
        
        
        return (arr.map((element) => {
            console.log(element)

          let displayClass = (el,cl) => {
       let  filteredClasses = cl.filter(cla => new Date(cla.date) !== el.date)  
          console.log(filteredClasses)  
            console.log(cl.filter(cla => new Date(cla.date) !== el.date))
            console.log(el.date)
            return(filteredClasses.map((c) => {
                  
                    return(
                        <div key={c}>
                    <h3>{c.name} </h3> 
                    <p> {c.instructor}</p>
                    <p> {c.time}</p>

                 </div>
                    )
                    
                    }  
                
                )
                
                )

                
            }
           return( 
              <div>
                    <h1 className="highlight"> {element.string}</h1>
                    {displayClass(element, classes)}
              </div> 

           ) 
            
        }
        
        )
    
        )

    
    
      
        
    }
    w = this.makeWeek()
    z = this.mapWeek(this.w)
    

    render() {
        
        console.log([...new Set(this.w)])
        console.log(this.w)
        console.log(this.z)
        return(
            <div>
                <h1> Schedule</h1>
                <p> Need a little more convincing? Send us an email to Try a Class on Us! If you are new to BYW and have never taken a class with us, we will make sure your 1st experience at our virtual or in-person studio is one that have you coming back for more. Let us know which you'd like to try first!</p>
                <div>
                    
                {this.z}
                </div>
                
                {/* We need to capture the date and then display classes from that date up to a week ahead. Don't display classes before the time of the date.
                then it is simply sorting them by days.  */}
            </div>
        )
    }

}

export default Classes;