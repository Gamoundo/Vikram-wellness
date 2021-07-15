import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from './Navbar';
import About from './About';
import Training from './Training';
import Rates from './Rates';
import Contact from './Contact';
import Locations from './Locations';
import Team from './Team';
import News from './News';
import Careers from './Careers';
import Faq from './Faq';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

   let locations = [
    {
      area: "Riverdale Park",
      address: "6202 Rhode Island Ave Suite 200 Riverdale Park, MD 20737",
      phone: "(301) 699-1300",
      img: "https://images.stockfreeimages.com/2732/sfi226w/27329558.jpg",
      blurb: "Our newly renovated studio is home to some of the OG’s on our team. We’re located just minutes from the University of Maryland, College Park and the historic Hyattsville Arts District. You’ll find onsite parking, a large community space for events, and a quality hot room that utilizes the latest technology to heat the room and help you work up a sweat."
    },
    {
      area: "Ivy City",
      address: "1510 Okie Street NE Washington, DC 20002",
      phone: "(301) 699-1300",
      img: "https://images.stockfreeimages.com/2732/sfi226w/27329558.jpg",
      blurb: "Our D.C. DRIP’T studio is one of our hubs for virtual classes and wellness services like Cryotherapy and Flex’t. Located off New York Avenue in the old Hechts Warehouse District, near My Organic Market, District yogis can join us for in-person classes or tune in from home. In-studio, you can access a 1700 Sq Ft hot room with radiant heat panels."
    },
    {
      area: "Mount Vernon",
      address: "500 Park Avenue Baltimore, MD 21201",
      phone: "(301) 699-1300",
      img: "https://images.stockfreeimages.com/2732/sfi226w/27329558.jpg",
      blurb: "Our Baltimore DRIP’T studio is home to some of our most passionate teachers and localized cryotherapy treatments. We’re located next door to Mount Vernon Marketplace where you’ll find a vibrant collection of culinary offerings for a post-class bite. The studio boasts large locker rooms, radiant heat panels, and a great community of yogis that will help you sweat, flow and GLOW!      Join us for Thirsty Thursdays at this location!"
    }
  ]
  return (
    <Router>
        <div className="App">
          <h1> Bikram Wellness</h1>
          <Navbar />
          <Route exact path="/about" component={About}/>
          <Route exact path="/training" component={Training}/>
          <Route exact path="/rates" component={Rates}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/press" component={News}/>
          <Route exact path="/careers" component={Careers}/>
          <Route exact path="/faq" component={Faq}/>
          <Route exact path= '/contact'  render={ routerProps => <Contact {...routerProps} locations={locations}/>}>

          </Route>
          <Route exact path= '/locations' render={ routerProps => <Locations {...routerProps} locations={locations}/>}></Route>
        <div className="footer">
            <div className="footerLeft">
                <h1> Dript</h1>
                <p> Powered by Bikram Yoga Works</p>
                <div>
                  <a className="link" target='_blank' href= 'https://www.youtube.com/channel/UCCYo4ol02kqpFEJ9MQ9POcw'> <i class="fa fa-youtube-square fa-4x"></i></a>
                  <a className="link" target='_blank' href= 'https://www.facebook.com/BikramYogaWorks'> <i class="fa fa-facebook-square fa-4x"></i></a>
                  <a className="link" target='_blank' href= 'https://www.instagram.com/BikramYogaWorks/'> <i class="fa fa-instagram-square fa-4x"></i></a>
                  <a className="link" target='_blank' href= 'https://twitter.com/BikramYogaWorks'> <i class="fa fa-twitter-square fa-4x"></i></a>
                </div>
            </div>
            <div className="footerRight">
              <div>
                  <div>
                  <a className="link" href= 'http://localhost:3000/contact'> Contact Us</a>
                  <a className="link" href= 'http://localhost:3000/press'> Press</a>
                  <a className="link" href= 'http://localhost:3000/locations'> Locations</a>
                  </div>
                  <div>
                    <ul className="list">
                      <a className="link"  href= 'http://localhost:3000/faq'> FAQ</a>
                      <a className="link"  href= 'http://localhost:3000/careers'> Careers</a>
                      <a className="link"  href= 'http://localhost:3000/locations'> Gift Card</a>
                      <a className="link"  href= 'http://localhost:3000/locations'> Donate</a>
                    </ul>
                  
                  </div>
              </div>
            </div>

        </div>
        </div>
    </Router>
    
  );
}

export default App;
