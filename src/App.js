import './App.css';
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "bootstrap/dist/js/bootstrap.bundle";

// Imports
import Home from "./Screens/Home";
import Academy from "./Screens/Academy";
import Hackathons from "./Screens/Hackathons";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Academy" component={Academy} />
        <Route exact path="/Hackathons" component={Hackathons} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
  <Footer/>
    </div>
  );
}

export default App;
