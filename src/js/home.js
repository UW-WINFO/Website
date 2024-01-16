import React from 'react'

import { NavBar } from './navbar'


export function Home(props) {
  window.scrollTo(0, 0);
  
  return (
    <div id='home' >
        
      <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>

      <div id="title-banner" className="banner center">
        <img id="uw-banner" src="/img/banner-image.png" alt="University of Washington"></img>
        <h1>Women in Informatics</h1>
      </div>

      <div id="about-us" className='center'>
        <h2 className='pink section-title'>About Us</h2>
        <p className='text-description'>
          <span className='pink'>Women in Informatics (WINFO)</span> is a diversity organization at the Information School at the University of Washington,
          Seattle. Our organization is dedicated to <span className='pink'>empowering women to thrive as producers of technology.</span> We establish and
          maintain a network of women who offer encouragement, support, and ongoing knowledge. As an organization open to all
          interested students, we aim to attract and inspire everyone to explore opportunities in information technology, to
          connect them with others of passion in the realm of technology, and to utilize their unique perspectives to lead
          technological innovation.
        </p>
      </div>


      <div className='container'>
      <div id="informatics" className='row'>
        <div className='col'>
          <img id="gracehopper" src="img/gracehopper.jpeg" alt="Grace Hopper 2019"/>
          <figcaption>Grace Hopper 2019</figcaption>
        </div>
        <div className='col description'>
          <div>
            <h2 className='purple section-title'>What is Informatics?</h2>
            <p className='text-description'>
              The term “informatics” broadly describes the <span className='purple'>study and practice of creating, storing, finding, manipulating, and
              sharing information.</span> When the iSchool chose "informatics" as the name of its bachelor of science degree in 1999,
              the term was not widely used in the U.S. The name was chosen because it spoke to the opportunities that are available
              to students with the strong technical background needed to develop solutions to the world’s information challenges.
            </p>
            <a className='home-link' href="https://ischool.uw.edu/">Visit the iSchool Website</a>
          </div>
        </div>
      </div>

      <div className='container'>
        <div id='mission' className='row'>
          <div className='col description'>
            <div>
              <h2 className='pink section-title'>Our Mission</h2>
              <p className='text-description'>
                Our mission is to empower women to thrive as producers of technology by <span className='pink'>establishing and maintaining a network of
                women who offer encouragement, support, and the ongoing knowledge needed to succeed.</span> We inspire each other to challenge
                ourselves, achieve our goals, and work together. By providing students with resources and support towards career
                development and academic pursuits, WINFO hopes to have a positive impact on the lives of all students at the iSchool
                and beyond.
              </p>
            </div>
          </div>
          <div className='col'>
            <img src="img/8th-hackathon.jpeg" alt="WINFO's 8th Annual Hackathon"/>
            <figcaption>WINFO's 8th Annual Hackathon</figcaption>
          </div>
        </div>
      </div>
      

      </div>

     

      <div id='history' className='center'>
        <h2 className='blue section-title'>Our History</h2>
        <p className='text-description'>
          WINFO was founded in 2012 by a group of women in the University of Washington Informatics program whose
          goal was to <span className='blue'>attract and inspire female students in the tech industry to connect with each other and lead others
          to achieve.</span> Through events such as company visits, social meetings, hackathons, and more, we continue to carry out this mission in our operations.
          <br></br><br></br>
          One goal of the Informatics program was to increase their female applicants. In 2012, the Informatics program admitted
          only 140 students, 28% of which were female. Now, the Informatics program accepts more than 200 students per year, 40%
          of which are female.
        </p>
        <img src='/img/speed-mentor.jpg' alt='Speed Mentoring with Women Leaders 2016'></img>
        <figcaption>Speed Mentoring with Women Leaders 2016</figcaption>
      </div>
    </div>
 );
}