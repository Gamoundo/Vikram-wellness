import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from './Navbar';
import About from './About';
import Training from './Training';
import Rates from './Rates';
import Contact from './Contact'

function App() {

   let locations = [
    {
      area: "Riverdale Park",
      address: "6202 Rhode Island Ave Suite 200 Riverdale Park, MD 20737",
      phone: "(301) 699-1300",
      img: ""
    },
    {
      area: "Ivy City",
      address: "1510 Okie Street NE Washington, DC 20002",
      phone: "(301) 699-1300",
      img: ""
    },
    {
      area: "Mount Vernon",
      address: "500 Park Avenue Baltimore, MD 21201",
      phone: "(301) 699-1300",
      img: ""
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
          <Route exact path= '/contact'  render={ routerProps => <Contact {...routerProps} locations={locations}/>}>

          </Route>
          <Route></Route>
        </div>
    </Router>
    
  );
}

export default App;
