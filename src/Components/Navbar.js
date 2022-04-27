import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";




export default function Navbar(props) {

let Bcolor = {
  backgroundColor: "gray"
}



  
  return (
      <>
    <nav className={"navbar navbar-expand-lg "} style={Bcolor}>
  <div className="container-fluid">
    <Link className="navbar-brand text-dark" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/about">{props.about}</Link>
        </li>
      </ul>
      <form className="d-flex">
        
        <div className="d-flex">
             <div onClick={()=>{props.toggleMode("primary")}} className="bg-primary rounded mx-2"  style={{height:"6mm", width:"6mm"  }}></div>
             <div onClick={()=>{props.toggleMode("danger")}} className="bg-danger rounded mx-2"  style={{height:"6mm", width:"6mm"}}></div>
             <div onClick={()=>{props.toggleMode("success")}} className="bg-success rounded mx-2"  style={{height:"6mm", width:"6mm" }}></div>
             <div onClick={()=>{props.toggleMode("warning")}} className="bg-warning rounded mx-2"  style={{height:"6mm", width:"6mm" }}></div>
             <div onClick={()=>{props.toggleMode("dark")}} className="bg-dark rounded mx-2"  style={{height:"6mm", width:"6mm" }}></div>
             <div onClick={()=>{props.toggleMode("light")}} className="bg-light rounded mx-2"  style={{height:"6mm", width:"6mm" }}></div>

        </div>
             

      </form>
    </div>
  </div>
  </nav>
  
  </>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

/* Navbar.defaultProps = {
    title : "Akshay Dharpale",
    about : "working in Fujitsu"
} */
