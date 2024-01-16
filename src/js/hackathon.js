import React from 'react'
import { HashLink } from 'react-router-hash-link';

import { NavBar } from './navbar'
import { HackathonAbout } from './hackathon-about';
import { HackathonFAQ } from './hackathon-faq';
import { HackathonUpcoming } from './hackathon-upcoming';
import { HackathonPast } from './hackathon-past';


export function Hackathon(props) {
        
  return (
    <div id='hackathon'>
      
      <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>

      <div id="hackathon-banner" className="banner center">
        <h1>WINFO Hackathon</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col col-3 navbar-col'>
            <nav className="navbar-list">
              <p><HashLink className='navbar-list' smooth to='/hackathon/#hackathon-about' > About </HashLink></p>
              <p><HashLink className='navbar-list' smooth to='/hackathon/#hackathon-upcoming' > Upcoming Hackathon </HashLink></p>
              <p><HashLink className='navbar-list' smooth to='/hackathon/#hackathon-past' > Past Hackathons </HashLink></p>
              <p><HashLink className='navbar-list' smooth to='/hackathon/#hackathon-faq' > FAQ </HashLink></p>
            </nav>
          </div>
          <div className='col col-9 content-col'>
            <HackathonAbout/>
            <hr></hr>
            <HackathonUpcoming/>
            <hr></hr>
            <HackathonPast/>
            <hr></hr>
            <HackathonFAQ/>
          </div>
        </div>
      </div>
  </div>
 );
}