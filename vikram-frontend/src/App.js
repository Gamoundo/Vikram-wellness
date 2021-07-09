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
          <h1> Vikram Wellness</h1>
          <Navbar />
          <Route exact path="/about" component={About}/>
          <Route exact path="/training" component={Training}/>
          <Route exact path="/rates" component={Rates}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/press" component={News}/>
          <Route exact path= '/contact'  render={ routerProps => <Contact {...routerProps} locations={locations}/>}>

          </Route>
          <Route exact path= '/locations' render={ routerProps => <Locations {...routerProps} locations={locations}/>}></Route>
        </div>
    </Router>
    
  );
}

export default App;
