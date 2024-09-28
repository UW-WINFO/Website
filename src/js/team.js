import React, { useState } from 'react';

import { NavBar } from './navbar'
import { Footer } from './footer'


export function Team(props) {
    const [activeYear, setActiveYear] = useState(null);

    const toggleAccordion = (year) => {
        setActiveYear(activeYear === year ? null : year);
      };

    window.scrollTo(0, 0);
    
    const years = ["2024-2025","2023-2024","2022-2023","2021-2022","2020-2021","2019-2020", "2018-2019", "2017-2018", "2016-2017"]

    const teamMembers = [
        { year: "2024-2025", name: 'Hannah Yi', position: 'Co-President', imageUrl: '/img/Officers/Officers/2024_Officers/Hannah.JPG' },
        { year: "2024-2025", name: 'Daphne He', position: 'Co-President', imageUrl: '/img/Officers/Officers/2024_Officers/Daphne.PNG' },
        { year: "2024-2025", name: 'Angela Qi', position: 'Director of Finance', imageUrl: '/img/Officers/Officers/2024_Officers/Angela.HEIC' },
        { year: "2024-2025", name: 'Nila Ragu', position: 'Director of Public Relations', imageUrl: '/img/Officers/Officers/2024_Officers/Nila.JPG' },
        { year: "2024-2025", name: 'Samrutha Babu', position: 'Creative Director', imageUrl: '/img/Officers/Officers/2024_Officers/Samrutha.jpeg' },
        { year: "2024-2025", name: 'Mayory Ajpop', position: 'Director of Outreach', imageUrl: '' },
        { year: "2024-2025", name: 'Theophila Abigail Setiawan', position: 'Director of Diversity Efforts', imageUrl: '/img/Officers/Officers/2024_Officers/Abigail.jpg' },
        { year: "2024-2025", name: 'Anushka Verma', position: 'Director of Community Efforts', imageUrl: '/img/Officers/Officers/2024_Officers/Anushka.jpg' },
        { year: "2024-2025", name: 'Pournami Varma', position: 'Hackathon Director', imageUrl: '/img/Officers/Officers/2024_Officers/Pournami.jpg' },
        { year: "2024-2025", name: 'June Mi Hong', position: 'Creative Events Director', imageUrl: '/img/Officers/Officers/2024_Officers/June.JPG' },

        { year: "2023-2024", name: 'Roshni Srikanth', position: 'Co-President', imageUrl: '/img/Officers/Officers/2023_Officers/Roshni.jpg' },
        { year: "2023-2024", name: 'Lucy Lin', position: 'Co-President', imageUrl: '/img/Officers/Officers/2023_Officers/Lucy.jpeg' },
        { year: "2023-2024", name: 'Annie Tu', position: 'Director of Finance', imageUrl: '/img/Officers/Officers/2023_Officers/Annie.jpg' },
        { year: "2023-2024", name: 'Brianna Pak', position: 'Director of Outreach', imageUrl: '/img/Officers/Officers/2023_Officers/Brianna.jpg' },
        { year: "2023-2024", name: 'Kelly Wang', position: 'Creative Director', imageUrl: '/img/Officers/Officers/2023_Officers/Kelly.png' },
        { year: "2023-2024", name: 'Daphne He', position: 'Director of Public Relations', imageUrl: '/img/Officers/Officers/2023_Officers/Daphne.jpg' },
        { year: "2023-2024", name: 'Kayla Tounalom', position: 'Director of Diversity Efforts', imageUrl: '/img/Officers/Officers/2023_Officers/Kayla.png' },
        { year: "2023-2024", name: 'Hannah Yi', position: 'Director of Community Efforts', imageUrl: '/img/Officers/Officers/2023_Officers/Hannah.JPG' },
        { year: "2023-2024", name: 'Sloane Shea', position: 'Hackathon Director', imageUrl: '/img/Officers/Officers/2023_Officers/Sloane.jpg' },

        { year: "2022-2023", name: 'Melina Perraut', position: 'Co-President', imageUrl: '/img/Officers/Officers/2022_Officers/Melina.jpg' },
        { year: "2022-2023", name: 'Roshni Srikanth', position: 'Co-President', imageUrl: '/img/Officers/Officers/2022_Officers/Roshni.png' },
        { year: "2022-2023", name: 'Bhavya Garlapati', position: 'Director of Finance', imageUrl: '/img/Officers/Officers/2022_Officers/Bhavya.jpg' },
        { year: "2022-2023", name: 'Lucy Lin', position: 'Director of Outreach', imageUrl: '/img/Officers/Officers/2022_Officers/Lucy.jpg' },
        { year: "2022-2023", name: 'Kelly Wang', position: 'Creative Director', imageUrl: '/img/Officers/Officers/2022_Officers/Kelly.png' },
        { year: "2022-2023", name: 'Alyssa Vo', position: 'Director of Public Relations', imageUrl: '/img/Officers/Officers/2022_Officers/Alyssa.jpg' },
        { year: "2022-2023", name: 'Bandhna Bedi', position: 'Director of Diversity Efforts', imageUrl: '/img/Officers/Officers/2022_Officers/Bandhna.jpeg' },
        { year: "2022-2023", name: 'Kayla Tounalom', position: 'Director of Community Efforts', imageUrl: '/img/Officers/Officers/2022_Officers/Kayla.jpg' },
        { year: "2022-2023", name: 'Emiri Nishizawa', position: 'Hackathon Director', imageUrl: '/img/Officers/Officers/2022_Officers/Emiri.jpg' },
    
        { year: "2021-2022", name: 'Allison Geary', position: 'Co-President', imageUrl: '/img/Officers/Officers/2021_Officers/Allison.jpeg' },
        { year: "2021-2022", name: 'Kayla Chea', position: 'Co-President', imageUrl: '/img/Officers/Officers/2021_Officers/Kayla.jpeg' },
        { year: "2021-2022", name: 'Rachel Kinkley', position: 'Director of Finance', imageUrl: '/img/Officers/Officers/2021_Officers/Rachel.jpeg' },
        { year: "2021-2022", name: 'Melina Perraut', position: 'Director of Outreach', imageUrl: '/img/Officers/Officers/2021_Officers/Melina.jpeg' },
        { year: "2021-2022", name: 'Dana Rin', position: 'Creative Director', imageUrl: '/img/Officers/Officers/2021_Officers/Dana.jpg' },
        { year: "2021-2022", name: 'Sam Rondini', position: 'Director of Public Relations', imageUrl: '/img/Officers/Officers/2021_Officers/Sam.jpg' },
        { year: "2021-2022", name: 'Roshni Srikanth', position: 'Director of Diversity Efforts', imageUrl: '/img/Officers/Officers/2021_Officers/Roshni.jpeg' },
        { year: "2021-2022", name: 'Gisele Fox', position: 'Director of Community Efforts', imageUrl: '/img/Officers/Officers/2021_Officers/Gisele.jpg' },
        { year: "2021-2022", name: 'Sharon Lin', position: 'Hackathon Director', imageUrl: '/img/Officers/Officers/2021_Officers/Sharon.jpeg' },

        { year: "2020-2021", name: 'Allison Geary', position: 'Co-President', imageUrl: '/img/Officers/Officers/2020_Officers/Allison.jpg' },
        { year: "2020-2021", name: 'Akoly Vongdala', position: 'Co-President', imageUrl: '/img/Officers/Officers/2020_Officers/Akoly.jpg' },
        { year: "2020-2021", name: 'Lynzley Kolakowski', position: 'Director of Finance', imageUrl: '/img/Officers/Officers/2020_Officers/Lynzley.jpg' },
        { year: "2020-2021", name: 'Julia Shull', position: 'Director of Outreach', imageUrl: '/img/Officers/Officers/2020_Officers/Julia.jpg' },
        { year: "2020-2021", name: 'Kayla Chea', position: 'Creative Director', imageUrl: '/img/Officers/Officers/2020_Officers/Kayla.jpg' },
        { year: "2020-2021", name: 'Shareen Chang', position: 'Director of Public Relations', imageUrl: '/img/Officers/Officers/2020_Officers/Shareen.jpg' },
        { year: "2020-2021", name: 'Harkiran Saluja', position: 'Director of Diversity Efforts', imageUrl: '/img/Officers/Officers/2020_Officers/Harkiran.jpg' },
        { year: "2020-2021", name: 'Rachel Kinkley', position: 'Director of Community Efforts', imageUrl: '/img/Officers/Officers/2020_Officers/Rachel.jpg' },
        { year: "2020-2021", name: 'Locksley Kolakowski', position: 'Hackathon Director', imageUrl: '/img/Officers/Officers/2020_Officers/Locksley.jpg' },

        { year: "2019-2020", name: 'Hayley Younghusband', position: 'Co-President', imageUrl: '/img/Officers/Officers/2019_Officers/hayley.jpg' },
        { year: "2019-2020", name: 'Autumn Derr', position: 'Co-President', imageUrl: '/img/Officers/Officers/2019_Officers/autumn.jpg' },
        { year: "2019-2020", name: 'Rhea Chen', position: 'Director of Finance', imageUrl: '/img/Officers/Officers/2019_Officers/rhea.jpg' },
        { year: "2019-2020", name: 'Jeongvin Yeom', position: 'Director of Outreach', imageUrl: '/img/Officers/Officers/2019_Officers/jv.jpeg' },
        { year: "2019-2020", name: 'Harkiran Saluja', position: 'Creative Director', imageUrl: '/img/Officers/Officers/2019_Officers/harki.jpg' },
        { year: "2019-2020", name: 'Allison Geary', position: 'Director of Public Relations', imageUrl: '/img/Officers/Officers/2019_Officers/allison.jpg' },
        { year: "2019-2020", name: 'Eva Perez', position: 'Director of Diversity Efforts', imageUrl: '/img/Officers/Officers/2019_Officers/eva.jpg' },
        { year: "2019-2020", name: 'Akoly Vongdala', position: 'Hackathon Director', imageUrl: '/img/Officers/Officers/2019_Officers/akoly.jpg' },

        { year: "2018-2019", name: 'Stephanie Burd', position: 'Co-President', imageUrl: '/img/Officers/Officers/2018_Officers/stephanie-burd.jpg' },
        { year: "2018-2019", name: 'August Carrow', position: 'Co-President', imageUrl: '/img/Officers/Officers/2018_Officers/august-carow.png' },
        { year: "2018-2019", name: 'ZK Lin', position: 'Director of Finance', imageUrl: '/img/Officers/Officers/2018_Officers/zk-lin.jpg' },
        { year: "2018-2019", name: 'Alexis Choi', position: 'Director of Outreach', imageUrl: '/img/Officers/Officers/2018_Officers/alexis-choi.jpg' },
        { year: "2018-2019", name: 'Echo Zhang', position: 'Creative Director', imageUrl: '/img/Officers/Officers/2018_Officers/echo-zhang.jpg' },
        { year: "2018-2019", name: 'Mary Huibregtse', position: 'Director of Public Relations', imageUrl: '/img/Officers/Officers/2018_Officers/mary-huibregtse.jpg' },
        { year: "2018-2019", name: 'Harshita Akkaraju', position: 'Director of Diversity Efforts', imageUrl: '/img/Officers/Officers/2018_Officers/harshita-akkaraju.jpg' },
        
        { year: "2017-2018", name: 'Tiffany Chen', position: 'Co-President', imageUrl: '/img/Officers/Officers/2017_Officers/tiffany-chen.jpg' },
        { year: "2017-2018", name: 'Joycie Yu', position: 'Co-President', imageUrl: '/img/Officers/Officers/2017_Officers/joycie-yu.jpg' },
        { year: "2017-2018", name: 'Zhanna Voloshina', position: 'Director of Finance', imageUrl: '/img/Officers/Officers/2017_Officers/zhanna-voloshina.jpg' },
        { year: "2017-2018", name: 'Jenny Lee', position: 'Director of Outreach', imageUrl: '/img/Officers/Officers/2017_Officers/jenny-lee.jpg' },
        { year: "2017-2018", name: 'Leanne Hwa', position: 'Creative Director', imageUrl: '/img/Officers/Officers/2017_Officers/leanne-hwa.jpg' },
        { year: "2017-2018", name: 'Andrea Chen', position: 'Director of Public Relations', imageUrl: '/img/Officers/Officers/2017_Officers/andrea-chen.jpg' },
        { year: "2017-2018", name: 'Anushree Shukla', position: 'Director of Diversity Efforts', imageUrl: '/img/Officers/Officers/2017_Officers/anushree-shukla.jpg' },

        { year: "2016-2017", name: 'Brittney Hoy', position: 'President', imageUrl: '/img/Officers/Officers/2016_Officers/brittney-hoy.JPG' },
        { year: "2016-2017", name: 'Sanjana Galgalikar', position: 'Vice-President', imageUrl: '/img/Officers/Officers/2016_Officers/sanjana-galgalikar.jpg' },
        { year: "2016-2017", name: 'Fan Yang', position: 'Director of Finance', imageUrl: '/img/Officers/Officers/2016_Officers/fan-yang.JPG' },
        { year: "2016-2017", name: 'Isabella Spaletta', position: 'Director of Outreach', imageUrl: '/img/Officers/Officers/2016_Officers/isabella-spaletta.JPG' },
        { year: "2016-2017", name: 'Sophie Song', position: 'Creative Director', imageUrl: '/img/Officers/Officers/2016_Officers/sophie-song.jpg' },
        { year: "2016-2017", name: 'Adriana Vining', position: 'Director of Public Relations', imageUrl: '/img/Officers/Officers/2016_Officers/adriana-vining.jpg' },
        { year: "2016-2017", name: 'Jessie Zhang', position: 'Director of Diversity Efforts', imageUrl: '/img/Officers/Officers/2016_Officers/jessie-zhang.jpg' },
    ];

   const renderAccordion = () => {
    return years.map((year) => (
      <div key={year} className="accordion">
        <button className="accordion-btn" onClick={() => {console.log("making ", {year}," active"); toggleAccordion(year)}}>
          {year} Officer Team
        </button>
        {activeYear === year && (
            <div className="accordion-content">
                {teamMembers
                .filter((member) => member.year === year)
                .map((member, index) => (
                    <div key={index} className="accordion-item">
                    <img src={member.imageUrl} alt={member.name} />
                    <p className='purple question'>{member.name}</p>
                    <p>{member.position}</p>
                    </div>
                ))}
            </div>
        )}
      </div>
    ));
  };

    return (
      <div className='team' >
        <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
        <div id="team-banner" className="banner center">
          <h1>Our Officer Team</h1>
        </div>
        
        <div className="accordion-container container">
            {
                renderAccordion()
            }
        </div>

        <Footer handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
      </div>
    );
}
