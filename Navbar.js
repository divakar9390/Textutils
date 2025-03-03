import React from "react";
import { a } from "react-router-dom";



export  default function Navbar(props) {
  
  
 return (
       
      
    
  
 <>
  <nav className={`navbar navbar-expand-lg bg-body-tertiary   ${props.mode}`}  >
   <div className={`form-check form-switch  text-${props.mode==='light' ? 'dark':'light'}`}>
     <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggelemode }/>
     <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
   </div>
       
    <div className={`container-fluid ${props.mode}`} >
      <a className={`navbar-brand ${ props.mode}`}href="/" >{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-a" href="/about">About</a>
        </li>
      </ul>
      </div>
     
    </div>
  </nav>
  

 
</>

    
  );
}

