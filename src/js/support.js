import React from 'react'

import { NavBar } from './navbar'


export function Support(props) {
  window.scrollTo(0, 0);
    
  return (
  <div id='support'>
      <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
      
      <div id="sponsor-banner" className="banner center">
        <h1>Why Sponsor Us?</h1>
      </div>

      <div className='container'>
      <div id="informatics" className='row'>
        <div className='col'>
          <img src="img/career-fair.JPG" alt="Sponsor Tables 11th Annual Hackathon"/>
          <figcaption>Sponsor tables at the 11th Annual Hackathon</figcaption>
        </div>
        <div className='col description'>
          <div>
            <p className='text-description'>
            Becoming a sponsor can help your company’s public relations, brand perception, and product popularity. By sponsoring our hackathon event, you and your company can connect directly with young talent at the event. As one of the nation’s top research universities, the University of Washington attracts many bright students. Through our media exposure, we will help increase your company’s presence at the UW. This event is a perfect way for you to find future interns and full-time engineers, designers, and product managers. Further, by helping us provide a safe and collaborative environment for all students to create technology, you help our goal of increasing diversity within the tech industry.
            </p>
          </div>
        </div>
      </div>

      <div id='mission' className='row'>
        <div className='col description'>
          <div>
            <div className='text-description'>Your support allows us to provide our participants with meals, refreshments, prizes, and space for an awesome hackathon. Altogether, this will create an encouraging environment for participants to work on creative projects. As a sponsor, your organization will have the opportunity to: 
            <br/><br/>
            <ul>
              <li>
              Attract and inspire women to explore opportunities in information technology 
              </li>
              <li>
              Connect with over 200 current UW students
              </li>
              <li>
              Advertise your organization and recruit students 
              </li>
              <li>
              Connect women with others of passion in the realm of technology
              </li>
            </ul> 
            </div>
          </div>
        </div>
        <div className='col'>
          <img src="img/students_tabling.JPG" alt="Students tabling at WINFO's 11th annual Hackathon"/>
          <figcaption>Students tabling at WINFO's 11th Annual Hackathon</figcaption>
        </div>
      </div>

      </div>
      
      <div className='container'>
        <div className='row'>
          <div className='col'>
              <h3 className='purple'>Diamond</h3>
              <h4 className='blue'>Contribution of $2500 or more</h4>
              <ul>
                <li>Partnership with WINFO, which could include events such as company tours, tech talks, networking lunches, and more</li>
                <li>3-minute speech/announcement at the event kick-off</li>
                <li>Access to resume book </li>
                <li>Email sent to participants about company </li>
                <li>Judging representation for event prizes </li>
                <li>Tabling space and mentoring access at the hackathon</li>
                <li>Logo on advertisements and program</li>
              </ul>
          </div>
          <div className='col'>
            <h3 className='purple'>Platinum</h3>
            <h4 className='blue'>Contribution of $2000</h4>
            <ul>
              <li>Access to resume book</li>
              <li>Email sent to participants about company </li>
              <li>Judging representation for event prizes </li>
              <li>Tabling space and mentoring access at the hackathon</li>
              <li>Logo on advertisements and program</li>
            </ul>
          </div>
        </div>
        <br/><br/>
        <div className='row'>
          <div className='col'>
            <h3 className='purple'>Gold</h3>
            <h4 className='blue'>Contribution of $1000</h4>
            <ul>
              <li>Company swag distribution</li>
              <li>Tabling space and mentoring access at the hackathon</li>
              <li>Logo on advertisements and program</li>
            </ul>
          </div>
          <div className='col'>
            <h3 className='purple'>Silver</h3>
            <h4 className='blue'>Contribution of less than $1000 or other kind of donation</h4>
            <ul>
              <li>Logo on advertisements and program</li>
            </ul>
          </div>
        </div>
      </div>
     
      
      <div className=' center big-heading'>
        <p className='pink title middle'>
          Other Kinds of Hackathon Sponsorship
        </p>
      </div> 
      <div className='container'>
        <div className='row'>
          <div className='col description'>
            <div>We understand that it is not always possible to provide monetary support, so we have listed some alternative items below that are essential to the success of the hackathon.
            <br/><br/>
            <ol>
              <li>
              Sending Mentors - Mentors play an extremely important role in guiding students to build successful products. This is also an excellent opportunity for your company to build relationships with young computer scientists, designers, and project managers. Students always appreciate the guidance and expertise you provide.
              </li>
              <br/>
              <li>
              Food (Meals, snacks and drinks) - Food is a very important part of our Hackathon! We want to make sure our participants are well fed to help fuel their creativity. You can help by powering the hackathon with meals and refreshments. (College students love pizza).
              </li>
              <br/>
              <li>
              Small items to give away (aka. Swag) - Swag is always a great perk to attending a Hackathon. This can be in the form of t-shirts, stickers, mugs, pens, notebooks, etc. If you have enough swag to give to a good portion of our participants (approximately 100 students), it would be a great item to bring! This is another way to ensure that participants have exposure to your brand.
              </li>
              <br/>
              <li>
              Prizes - Prizes will be used either for random giveaways or for our ranking winners. It would be great for participants to see an awesome prize for ranking in the hackathon!
              </li>
            </ol>
           </div>
          </div>
        </div>
      </div>
      <div className='center big-heading'>
        <p className='pink title middle'>
          Past Sponsors
        </p>
      </div> 
      <div className='past-sponsors'/>

  </div>
 );
}