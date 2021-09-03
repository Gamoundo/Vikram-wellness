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
import Retreats from './Retreats';
import Shop from './Shop';
import Virtual from './VirtualStudio';
import Register from './Register';
import Login from './Login';
import Classes from './Classes';
import Personal_Training from './Personal-Training';
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
          <Route exact path="/retreats" component={Retreats}/>
          <Route exact path="/personal-training" component={Personal_Training}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/faq" component={Faq}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/virtual-studio" component={Virtual}/>
          <Route exact path="/classes" component={Classes}/>
          <Route exact path= '/contact'  render={ routerProps => <Contact {...routerProps} locations={locations}/>}>

          </Route>
          <Route exact path= '/locations' render={ routerProps => <Locations {...routerProps} locations={locations}/>}></Route>
        <div className="footer">
            <div className="footerLeft">
                <h1> Dript</h1>
                <p> Powered by Bikram Yoga Works</p>
                <div>
                  <a className="link" target='_blank' href= 'https://www.youtube.com/channel/UCCYo4ol02kqpFEJ9MQ9POcw'> <img src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png" height="60px" width="60px" alt="youtube" /></a>
                  <a className="link" target='_blank' href= 'https://www.facebook.com/BikramYogaWorks'> <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-logo-png-transparent-svg-vector-bie-supply-15.png" height="40px" width="30px" alt="facebook"/></a>
                  <a className="link" target='_blank' href= 'https://www.instagram.com/BikramYogaWorks/'> <img src="https://www.freepnglogos.com/uploads/download-instagram-png-logo-20.png" height="40px" width="40px" alt="instagram" /></a>
                  <a className="link" target='_blank' href= 'https://twitter.com/BikramYogaWorks'> <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" height="40px" width="40px" alt="twitter"/></a>
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
