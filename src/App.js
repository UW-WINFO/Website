import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./css/style.css";

import {Home} from './js/home.js';
import { Hackathon } from './js/hackathon.js';
import {Team} from './js/team.js';
import { Events } from './js/events.js';
import {Support} from './js/support.js';


function App(props) {
  
  let navigate = useNavigate();
  function handleClickHome() {
    console.log("handleClickHome");
    document.querySelector(".hackathon").classList.remove("active");
    document.querySelector(".team").classList.remove("active");
    document.querySelector(".events").classList.remove("active");
    document.querySelector(".support").classList.remove("active");
    let element = document.querySelector(".home");
    element.classList.add("active");
    navigate("/");
  }

  function handleClickHackathon() {
    console.log("handleClickHackathon");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".events").classList.remove("active");
    document.querySelector(".team").classList.remove("active");
    document.querySelector(".support").classList.remove("active");
    let element = document.querySelector(".hackathon");
    element.classList.add("active");
    navigate("/hackathon");
  }

  function handleClickEvents() {
    console.log("handleClickEvents");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".hackathon").classList.remove("active");
    document.querySelector(".team").classList.remove("active");
    document.querySelector(".support").classList.remove("active");
    let element = document.querySelector(".events");
    element.classList.add("active");
    navigate("/events");
  }

  function handleClickTeam() {
    console.log("handleClickTeam");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".hackathon").classList.remove("active");
    document.querySelector(".events").classList.remove("active");
    document.querySelector(".support").classList.remove("active");
    let element = document.querySelector(".team");
    element.classList.add("active");
    navigate("/team");
  }

  function handleClickSupport() {
    console.log("handleClickSupport");
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".hackathon").classList.remove("active");
    document.querySelector(".events").classList.remove("active");
    document.querySelector(".team").classList.remove("active");
    let element = document.querySelector(".support");
    element.classList.add("active");
    navigate("/support");
  }
 
  return (
    // rendering the app
   <div>
    <Routes>
      
      <Route path="/hackathon" element={
        <>
          {/* put components here */
            <Hackathon handleClickHome={handleClickHome} handleClickHackathon={handleClickHackathon} handleClickEvents={handleClickEvents} handleClickTeam={handleClickTeam} handleClickSupport={handleClickSupport} />
          }
        </>
      } />

      <Route path="/events" element={
        <>
          {/* put components here */
            <Events handleClickHome={handleClickHome} handleClickHackathon={handleClickHackathon} handleClickEvents={handleClickEvents} handleClickTeam={handleClickTeam} handleClickSupport={handleClickSupport} />
          }
        </>
      } />

      <Route path="/team" element={
        <>
          {/* put components here */
            <Team handleClickHome={handleClickHome} handleClickHackathon={handleClickHackathon} handleClickEvents={handleClickEvents} handleClickTeam={handleClickTeam} handleClickSupport={handleClickSupport} />
          }
        </>
      } />
       <Route path="/support" element={
        <>
         {/* put components here */
            <Support handleClickHome={handleClickHome} handleClickHackathon={handleClickHackathon} handleClickEvents={handleClickEvents} handleClickTeam={handleClickTeam} handleClickSupport={handleClickSupport}  />
         }
        </>
      } />
      <Route path="/*" element={
        <>
          {/* put components here */
              <Home handleClickHome={handleClickHome} handleClickHackathon={handleClickHackathon} handleClickEvents={handleClickEvents} handleClickTeam={handleClickTeam} handleClickSupport={handleClickSupport} />
          }
        </>
      } />
    </Routes>
   </div>
  );
}

export default App;
