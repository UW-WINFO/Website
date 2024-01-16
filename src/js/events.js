import React from 'react'

import { NavBar } from './navbar'


export function Events(props) {
  window.scrollTo(0, 0);
    
  return (
  <div className='events' >
    <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
    <div id="events-banner" className="banner center">
        <h1>Our Events</h1>
    </div>

    <div id="events" className='container'>
      {/* row 1  */}
      <div className="event-row">
        <div className='col'>
          <div className="event-card">
            <img src="/img/hack-for-social-good.png" alt="Hack for Social Good graphic"/>
            <div className="event-info">
              <p className='purple event-title'>Hack for Social Good</p>
              <p>
              Hack for Social Good brings together middle and high school students to seek to explore, design, and create
              potential technology-based solutions that positively impact the world while also challenging them to venture
              into a new problem space and develop thoughtful solutions that advance diversity, equity, and inclusion.
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="event-card">
            <img src="/img/fearless.png" alt="Fearless graphic"/>
            <div className="event-info">
              <p className='purple event-title'>Fearless, Tech More</p>
              <p>
              FearLess is a one-week online beginner-friendly hackathon for middle and high school students from all backgrounds
              to gain experience in technology. Engagement is a series of tasks that provide a fun, comprehensive experience with
              tech and introduces participants to the field of Informatics.
              </p>
              <a href='https://ischool.uw.edu/diversity/events-programs/high-school-ischool/fearless-tech-more'>Learn more</a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="event-card">
            <img src="/img/power-hour.png" alt="WINFO Spring Power Hour graphic"/>
            <div className="event-info">
              <p className='purple event-title'>Power Hours</p>
              <p>
              Power hours are quarterly events hosted by the Director of Diversity Efforts and Community Efforts with help from the
              Diversity Committee. Events have a strong emphasis on topics relating to IDEAS (Inclusion, Diversity, Equity, Access,
              & Sovereignty) and are aimed to amplify student voices and bring the WINFO & iSchool community closer together.
              </p>
              <a href='https://ischool.uw.edu/diversity'>Learn more about diversity at the iSchool</a>
            </div>
          </div>
        </div>
      </div>

      {/* row 2 */}
      <div className="event-row">
      <div className='col'>
          <div className="event-card">
            <img src="/img/table-talk.png" alt="Hot Cocoa Table Talk graphic"/>
            <div className="event-info">
              <p className='purple event-title'>Table Talks</p>
              <p>
              We welcome WINFO alumni and industry professionals to participate in a panel,
              discussing their experiences in various tech roles such as software engineering, program management, UX design, and
              cybersecurity. The panels aim to provide valuable insights into the diverse aspects of working in the technology industry.
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="event-card">
            <img src="/img/adventures-with-accenture.png" alt="Adventures with Accenture Company Tour graphic"/>
            <div className="event-info">
              <p className='purple event-title'>Company Tours</p>
              <p>
              We collaborate with partnered companies to provide students the opportunity to tour company offices, network with
              professionals, and learn more about how to advance their career in different industries. In the past, we held company
              tours with Accenture, Avanade, Pitchbook, and Indeed!
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="event-card">
            <img src="/img/essay-workshop.png" alt="Essay Writing Workshop graphic"/>
            <div className="event-info">
              <p className='purple event-title'>Essay Workshops</p>
              <p>
              Are you an iSchool student applying for the Grace Hopper/Tapia Scholarship or a high school student applying to get into
              the University of Washington? WINFO hosts various essay workshops throughout the year to help students develop their
              essay applications, providing writing guidance from mentors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 );
}