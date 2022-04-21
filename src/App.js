import "./App.css";
import ResponsiveAppBar from "./Components/TopNavbar"
import PrimarySearchAppBar from "./Components/Navbar"
import {Home} from "./Components/Home"
import  {Footer} from "./Components/Footer"

function App() {
 

  return (
    <div className="App">
   
   < ResponsiveAppBar/>
    < PrimarySearchAppBar />
    <Home />
    < Footer/>


    
     
     
    </div>
  );
}

export default App;

