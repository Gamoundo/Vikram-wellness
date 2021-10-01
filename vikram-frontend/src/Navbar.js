import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';



function Navbar() {

  const [hover, sethover] = useState(false);
const link = {
    width: '50px',
    padding: '4px',
    margin: '0 6px 6px',

    textDecoration: 'none',
    color: 'pink',
  }

  const navItems = [
    {
      comp: "/shop",
      title: "Shop"
    },
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
          onMouseEnter={() => sethover(true)}
          onMouseLeave={()=> sethover(false)}
          >{element.title}
          {hover && <div className='dropdown'><ul> <a href={element.comp}> {element.title}</a></ul></div>} 
          </NavLink>
            
          

          
          
        )
    }
    )

    )
   }

    return(
        <div className="nav">
            
          {displayNavItems(navItems)}
        </div>
    )
}

export default Navbar;