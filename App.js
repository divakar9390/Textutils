
import React,{useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import Textforms from './Textforms'
//import About from './components/About'
import Alerts from './Alerts';

/*import {
  BrowserRouter as Router,
 
  Routes,
  Route,
  Link
} from "react-router-dom"; */








function App() {

const[mode,setMode]=useState('light');
const[alert,setAlert]=useState(null);
  

 

  
  
 const toggelemode=()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='gray';
    showAlert("dark mode ")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("light mode ")
  

  }
  
 }

 const showAlert=(type)=>{

    setAlert({
        type:type
        
    })
 }

 setTimeout(()=>{
  setAlert(null);

   },5000);






  return (
    <>

  
    
      <Navbar title="welcome"  mode={mode}  toggelemode={toggelemode} /> 
      <Alerts  alerts={alert}/>
      <Textforms/>
     
     
        
      
      
      
      
      
    
   
    
    </>
  );
}

export default App;
