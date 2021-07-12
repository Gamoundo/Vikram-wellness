import React from 'react'
import { NavLink } from 'react-router-dom';

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
      comp: "/classes",
      title: "Classes"
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
          >{element.title}</NavLink>
        )
    }
    )

    )
   }

function Navbar() {

    return(
        <div className="nav">
            {/* <NavLink
          to="/about"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'purple'
          }}
          >About Us</NavLink>
          <NavLink
          to="/classes"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Classes</NavLink>
          <NavLink
          to="/training"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Training and Education</NavLink>
          <NavLink
          to="/wellness"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Manage Your Pain</NavLink>
          <NavLink
          to="/retreats"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Retreats</NavLink>
          <NavLink
          to="/rates"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Rates</NavLink>
          <NavLink
          to="/contact"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Contact</NavLink>
          <NavLink
          to="/register"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Register</NavLink>
          <NavLink
          to="/login"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Login</NavLink> */}
          {displayNavItems(navItems)}
        </div>
    )
}

export default Navbar;