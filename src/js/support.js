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
        <div id="support-about">
          <div className='row'>
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
          <div className='row'>
            <div className='col description'>
              <div>
                <div className='text-description'>Your support allows us to provide our participants with meals, refreshments, prizes, and space for an awesome hackathon. Altogether, this will create an encouraging environment for participants to work on creative projects. As a sponsor, your organization will have the opportunity to: 
                <br/><br/>
                <ul>
                  <li>Attract and inspire women to explore opportunities in information technology</li>
                  <li>Connect with over 200 current UW students</li>
                  <li>Advertise your organization and recruit students</li>
                  <li>Connect women with others of passion in the realm of technology</li>
                </ul> 
                </div>
              </div>
            </div>
            <div className='col'>
              <img src="img/students_tabling.JPG" alt="PitchBook tabling at WINFO's 11th Annual Hackatho"/>
              <figcaption>PitchBook tabling at WINFO's 11th Annual Hackathon</figcaption>
            </div>
          </div>
        </div>

        <hr></hr>
        
        <div id="sponsor-tier">
          <h2 className='pink title'>Sponsorship Tiers</h2>
          <div className='row'>
            <div className='col'>
              <h3 className='purple'>Diamond</h3>
              <p className='blue question'>Contribution of $2500 or more</p>
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
              <p className='blue question'>Contribution of $2000</p>
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
              <p className='blue question'>Contribution of $1000</p>
              <ul>
                <li>Company swag distribution</li>
                <li>Tabling space and mentoring access at the hackathon</li>
                <li>Logo on advertisements and program</li>
              </ul>
            </div>
            <div className='col'>
              <h3 className='purple'>Silver</h3>
              <p className='blue question'>Contribution of less than $1000 or other kind of donation</p>
              <ul>
                <li>Logo on advertisements and program</li>
              </ul>
            </div>
          </div>
        </div>

        <hr></hr>

        <div id="other-sponsorship">
          <h2 className='pink title'>Other Kinds of Hackathon Sponsorship</h2>
          <p>
          We understand that it is not always possible to provide monetary support, so we have listed some alternative items below
          that are essential to the success of the hackathon.
          </p>
          <div className='row'>
            <div className='col description'>
              <h3 className='purple'>Sending mentors</h3>
              <p>
              Mentors play an extremely important role in guiding students to build successful products. This is also an excellent
              opportunity for your company to build relationships with young computer scientists, designers, and project managers.
              Students always appreciate the guidance and expertise you provide.
              </p>
            </div>
            <div className='col description'>
              <h3 className='purple'>Food</h3>
              <p>
              Food is a very important part of our Hackathon! We want to make sure our participants are well fed to help fuel their
              creativity. You can help by powering the hackathon with meals, snacks, or refreshments. (College students love pizza).
              </p>
            </div>
            <div className='col description'>
              <h3 className='purple'>Swag</h3>
              <p>
              Swag is always a great perk to attending a Hackathon. This can be in the form of t-shirts, stickers, mugs, pens, notebooks,
              etc. If you have enough swag to give to a good portion of our participants (~150 students), it would be a great
              item to bring! This is another way to ensure that participants have exposure to your brand.
              </p>
            </div>
            <div className='col description'>
              <h3 className='purple'>Prizes</h3>
              <p>
              Prizes will be used either for random giveaways or for our final winners. It would be great for participants to see an
              awesome prize for ranking in the hackathon!
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div id='past-sponsors'>
          <h2 className='pink title'>Past Sponsors</h2>
          {/* <div className='past-sponsors'/> */}
          <div className='row'>
            <div className='col'>
              <img src='/img/Sponsors/Accenture.png' alt='Accenture logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Adobe.png' alt='Adobe logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Alaska.png' alt='Alaska logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/AmazonCatalyst.png' alt='Amazon Catalyst logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/ASUW.png' alt='ASUW logo'></img>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src='/img/Sponsors/ATT.png' alt='AT&T logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Avanade.png' alt='Avande logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/BestBuy.png' alt='Best Buy logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Deloitte.png' alt='Deloitte logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Disney.png' alt='Disney logo'></img>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src='/img/Sponsors/ExtraHop.png' alt='ExtraHop logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/GEDigital.png' alt='GE Digital logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Google.png' alt='Google logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/GPSS.png' alt='GPSS logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/HBO.png' alt='HBO logo'></img>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src='/img/Sponsors/HUB.png' alt='HUB logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Hulu.png' alt='Hulu logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/iSchool.png' alt='iSchool logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/KPMG.png' alt='KPMG logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/LibertyMutual.png' alt='Liberty Mututal logo'></img>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src='/img/Sponsors/Microsoft.png' alt='Microsoft logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Nordstrom.png' alt='Nordstrom logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Okta.png' alt='Okta logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Oracle.png' alt='Oracle logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/PWC.png' alt='PWC logo'></img>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src='/img/Sponsors/SageBionetworks.png' alt='Sage Bionetworks logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/SAO.png' alt='UW Student Activities Office logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Smartsheet.png' alt='Smartsheet logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Ticketmaster.png' alt='Ticketmaster logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Tune.png' alt='Tune logo'></img>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src='/img/Sponsors/UWAlumni.png' alt='UW Alumni Association logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/Visa.png' alt='Visa logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/WellsFargo.png' alt='Wellsfargo logo'></img>
            </div>
            <div className='col'>
              <img src='/img/Sponsors/WestMonroe.png' alt='West Monroe logo'></img>
            </div>
            <div className='col'>
              <img src='' alt=''></img>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}