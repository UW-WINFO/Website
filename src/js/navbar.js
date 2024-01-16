import React from 'react'

export function NavBar(props) {

  let navImg = () => {
    return (<img id="winfo-logo" src="/img/winfo-logo.png" alt="winfo logo" onClick={() => { props.handleClickHome()}}></img>);
  }

  return (
    <nav id="navbar-container">
      <div id="navbar">
        <div className="logo">
          {navImg()}
        </div>
        <ul className='links'>
          <li>
            <button className="navlink home hover1 hover1-1"
              onClick={
                () => {
                  props.handleClickHome()
                }
            }>Home</button>
          </li>
          <li>
            <button className="navlink hackathon hover2 hover2-1"
              onClick={
                () => {
                  props.handleClickHackathon()
                }
            }>Hackathon</button>
          </li>
          <li>
            <button className="navlink events hover3 hover3-1"
              onClick={
                () => {
                  props.handleClickEvents()
                }
            }>Events</button>
          </li>
          <li>
            <button className="navlink team hover4 hover4-1"
              onClick={
                () => {
                  props.handleClickTeam()
                }
            }>Team</button>
          </li>
          <li>
            <button id="support-us" className="navlink border-blue support hover5 hover5-1"
              onClick={
                  () => {
                    props.handleClickSupport()
                  }
            }>Support Us</button>
          </li>
        </ul>        
      </div>
    </nav>
  )
}


