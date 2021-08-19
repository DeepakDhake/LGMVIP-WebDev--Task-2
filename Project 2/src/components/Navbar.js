import React from 'react'

export default function Navbar(props) {
  const clicked = () => {
    props.onSetIsClicked(1);
}
    return (
        
      <nav className="navbar navbar-lg-expand">
        
        <p className="brand p-3 mx-3 text-Black display-3">TATA MOTORS</p>
        <p>CLICK ON THE GET USERS BUTTON TO PROCEED</p>
        <div className="nav-item p-3 mx-3"><button className="btn btn-success shadow-lg" onClick={clicked}>Get Users</button></div>
       
      </nav>
        
    )
}
