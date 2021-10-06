import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';



function Navbar() {

  const [hover, sethover] = useState(
    <div>

    </div>
  );
  const [selected, setselected] = useState("");
  

const link = {
    width: '50px',
    padding: '4px',
    margin: '0 6px 6px',

    textDecoration: 'none',
    color: 'pink',
  }

  const navItems = [
    // {
    //   comp: "https://shopbyw.square.site/",
    //   title: "Shop"
    // },
    {
      comp: "/about",
      title: "About Us"
    },
    {
      comp: "/virtual-studio",
      title: "Take Classes"
    },
    {
      comp: "/training",
      title: "Training and Education"
    },

    {
      comp: "/wellness",
      title: "Manage your Pain"
    },
    {
      comp: "/retreats",
      title: "Retreats"
    },
    {
      comp: "/rates",
      title: "Rates"
    },
    {
      comp: "/contact",
      title: "Contact"
    },
    {
      comp: "/register",
      title: "Register"
    },
    {
      comp: "/login",
      title: "Login"
    },
  ]

  const displayNavItems = (arr) => {
    return (arr.map((element) => {
        return(
          
              <NavLink
          to=  {element.comp}
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'purple'
          }}
          
          // onMouseEnter={() => sethover(<div className='dropdown'><ul> <a href={element.comp}> {element.title}</a></ul></div>)}
          // onMouseLeave={()=> sethover("")}
          
          >{element.title}
          {/* {element.title  === "Rates" && hover}  */}
          </NavLink>
            
          
 
          
        )
    }
    )

    )
   }
   console.log(hover)
   console.log(selected)
    return(
       
        <div className="nav">
            <a href='https://shopbyw.square.site/'> Shop </a>
          {displayNavItems(navItems)}
        </div>
    )
}

export default Navbar;