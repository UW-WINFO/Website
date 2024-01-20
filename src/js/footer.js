import React from 'react'

export function Footer(props) {

  let navImg = () => {
    return (<img src="/img/winfo-logo.png" alt="winfo logo" onClick={() => { props.handleClickHome()}}></img>);
  }

  return (
    <footer>
      <div className='row'>
        <div className="col col-7">
          {navImg()}
          <p>
          The University of Washington acknowledges the past and present Coast Salish peoples of this land, the land that touches
          the shared waters of all tribes and bands within the Suquamish, Tulalip and Muckleshoot nations.
          </p>
          <div id='socials'>
            <a target="blank" href='https://www.facebook.com/groups/461561970560919'><i class="fa-brands fa-2x fa-square-facebook"></i></a>
            <a target="blank" href='https://www.instagram.com/uwwinfo/'><i class="fa-brands fa-2x fa-square-instagram"></i></a>
            <a target="blank" href='mailto:winfo@uw.edu'><i class="fa-solid fa-2x fa-envelope"></i></a>
          </div>
          <p id='copyright'>© 2024 Women in Informatics</p>
        </div>
        <div id='quick-links' className='col col-3'>
          <p>Quick Links</p>
          <ul className=''>
          <li>
            <button className=""
              onClick={
                () => {
                  props.handleClickHome()
                }
            }>Home</button>
          </li>
          <li>
            <button className=""
              onClick={
                () => {
                  props.handleClickHackathon()
                }
            }>Hackathon</button>
          </li>
          <li>
            <button className=""
              onClick={
                () => {
                  props.handleClickEvents()
                }
            }>Events</button>
          </li>
          <li>
            <button className=""
              onClick={
                () => {
                  props.handleClickTeam()
                }
            }>Team</button>
          </li>
          <li>
            <button className=""
              onClick={
                  () => {
                    props.handleClickSupport()
                  }
            }>Support Us</button>
          </li>
        </ul>  
        </div>
      </div>
    </footer>
  )
}


