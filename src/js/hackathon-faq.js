import React from 'react'

export function HackathonFAQ(props) {
        
  return (
  <div id='hackathon-faq' >
    <div className='container'>
      <h2 className='blue title'>FAQ</h2>
      <h3 className='purple subtitle'>Common Hackathon Questions</h3>
      <div className='row'>
        <div className='col'>
          <p className='question pink'>Do I need to know how to code?</p>
          <p className='answer'>No coding experience is necessary! The hackathon will have multiple prize tracks, ranging from design to programming, so you and your team can choose the one that you feel is best suited to your interests!</p>
          <br/>
          <p className='question pink'>Does my solution have to be coded?</p>
          <p className='answer'>No! We intentionally designed this hackathon to be beginner friendly, so you can submit any sort of solution (through a link and a powerpoint slide) whether it’s fully coded or just prototyped. This is a great chance to learn new skills or get more practice, so we encourage you to challenge yourself!</p>
          <br/>
          <p className='question pink'>How big are the teams?</p>
          <p className='answer'>Teams are made up of up to 4 individuals! Due to limits on prizes, teams may be less than 4, but cannot exceed that number.</p>
          <br/>
          <p className='question pink'>Do I need to have a team before the event?</p>
          <p className='answer'>You don’t need to have a team before the day of the hackathon. You find one before the day of the event, or during the event! WINFO will also host a Team Formation event before and during the Hackathon where you can meet other potential teammates and form your team!</p>
        </div>
        <div className='col'>
          <p className='question pink'>Do I need to have an idea before the event?</p>
          <p className='answer'>You don’t need to have an idea before the day of the hackathon. You can use the time that you have to brainstorm with your team. Even if you come up with an idea before the day of the hackathon, you are not allowed to start working on your project until the start of the event!</p>
          <br/>
          <p className='question pink'>Who can participate in the hackathon?</p>
          <p className='answer'>Any current UW student is welcome to participate! 💗</p>
          <br/>
          <p className='question pink'>Can we network with the mentors/sponsors?</p>
          <p className='answer'>Yes! Mentors are here to assist you in your project and give any advice. Sponsors would love to get to know you and hear what you’re working on. Large companies love sponsoring our hackathon because of talented and passionate students like yourself!</p>
          <br/>
          <p className='question pink'>My question isn't here!</p>
          <p className='answer'>Feel free to shoot us an email at <a href="mailto:winfo@uw.edu">winfo@uw.edu</a></p>
        </div>
      </div>
    </div>
  </div>
 );
}