import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {



 const[mode, setMode] = useState("light");
 
 const[alert, setAlert] = useState(null);

 const showAlert= (Message, Type) => {
   setAlert({
     message: Message,
     type: Type

   })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
 }

  let removeBodyClass = () =>{
    
    document.body.classList.remove("bg-light");
   
  }


 const toggleMode = (cls) =>{
   console.log(cls);

  removeBodyClass();
  
  switch (cls) {
    case "primary":
    
      document.body.style.backgroundColor = "#0b4b58";
      showAlert("Dark Mode has Enabled", cls);
      setMode(cls);
  
    break;

    case "danger":

      document.body.style.backgroundColor = "#9d241b";
      showAlert("Theme changed to " + cls , cls);
      setMode(cls);

    break;

    case "success":

      document.body.style.backgroundColor = "#044a35";
      showAlert("Theme changed to " + cls , cls);
      setMode(cls);
  
    break;

    case "warning":

      document.body.style.backgroundColor = "#e9b927";
      showAlert("Theme changed to " + cls , cls);
      setMode(cls);
  
    break;

    case "dark":

      document.body.style.backgroundColor = "#876c1c";
      showAlert("Theme changed to " + cls , cls);
      setMode(cls);

    break;

    default:

      document.body.classList.add("bg-" + cls);
     
      showAlert("Theme changed to " + cls , cls);
      setMode(cls);

    break;
  }

 }


  return (
 <>

 <Router>
   
      <Navbar  title="Text-Utils" about="About-Us" mode={mode} toggleMode={toggleMode}  />

        <Alert alert={alert}/>
        
            <Routes>

                <Route exact path="/about" element={<About mode={mode} />}/>
       
                <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading = "Enter text To Analyze"/>}/>


            </Routes>
        

 </Router>

  

</>
  );
}

export default App;
