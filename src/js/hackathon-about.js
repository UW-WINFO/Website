import React from 'react'

export function HackathonAbout(props) {
        
  return (
    <div id="hackathon-about">
      <div className='container container-left'>
        <h2 className=''>About</h2>
        <h3 className='purple title'>COLLABORATE. NETWORK. SOLVE.</h3>
        <iframe width="550" height="350" src="https://www.youtube.com/embed/PUSKK4Xt0-U?si=a8iiaX3AKBqowZNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <figcaption>Video by Anthony Sy</figcaption>
        <br></br>
        <p className='description'>
        The WINFO Hackathon is an annual collegiate hackathon that brings together students with diverse skill sets to develop
        solutions that address a wide array of issues. Here in the iSchool community, we believe in designing and developing
        technology-based solutions that positively impact the world. We challenge you to venture into a new problem space and
        develop thoughtful solutions that empower those around us to promote equity.
        <br/><br/>
        WINFO invites UW students from all backgrounds and identities to celebrate equity and inclusion in the technology field
        through our hackathon. It's a great experience for college students, especially women, entering the tech field to <span className='blue'>network,</span> get
        <span className='blue'> hands-on experience</span> coding or designing, and <span className='blue'>work in teams</span> to problem solve. Whether you're an experienced hacker or
        just looking to explore, come join WINFO this year for a valuable experience!
        </p>
      </div>
    </div>
  );
}