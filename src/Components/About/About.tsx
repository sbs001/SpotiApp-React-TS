import React from 'react';
import './About.css';
import git from './git.png';
import inL from './in2.png';


export default function About() {

  return (
    <div className="about">
        <h2>By Sebastián E. Tassone</h2>
        <h4>Contact me:</h4>
        <div className="AboutImgs">
          <a href="https://www.linkedin.com/in/tassone-seb/" target="_blank" rel="noreferrer">
            <img className="fadein" src={inL} alt="" />
          </a>
          <a href="https://github.com/sbs001" target="_blank" rel="noreferrer">
            <img className="fadein" src={git} alt="" />
          </a>
        </div>
    </div>
  )
}