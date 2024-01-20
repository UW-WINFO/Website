import React from 'react'

export function HackathonUpcoming(props) {
        
  return (
    <div id='hackathon-upcoming' >
      <div className='container container-left'>
        <h2 className=''>Upcoming Hackathon</h2>
        <h3 className='purple title'>WINFO's 12th Annual Hackathon: Infinite Possibilities, Infinite Solutions (2024)</h3>
        <div className='row'>
          <div className='col'>
            <p className='description'>
            Our theme this year is "Infinite Possibilities, Infinite Solutions." WINFO and the iSchool community strongly believe in the
            limitless potential and creativity of individuals. We strive to explore boundless avenues and innovative approaches to overcome
            challenges. Join us in our pursuit of limitless solutions and a future where possibilities are infinite.
            </p>
            <br/>
            <p className='pink subsection-title'>Registration is full!</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdV94-u_acqmx62C7obeCN5AUTwGrCAXLdtDC65hHWfZxd7JQ/viewform">Join our Waitlist</a>
            <p className='pink subsection-title'>Hackathon Schedule</p>
            <a href="https://winfo-hackthon-24.vercel.app/">Hackathon Website</a>
          </div>
          <div className='col'>
            <img src="/img/hackathon-2024.png" alt="WINFO's 12th Annual Hackathon logo"/>
          </div>
        </div>
      </div>
    </div>
 );
}