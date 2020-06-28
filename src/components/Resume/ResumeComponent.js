import React  from 'react';
import ProgressBar from '../ProgressBar';
import {
    ResumeS
} from './Resume';


const portfolioLogo = require('../../images/portfolio.png');
const graduationLogo = require('../../images/graduation.png');
const codeLogo = require('../../images/code.png');
const interestsLogo = require('../../images/star.png');
const bookLogo = require('../../images/book.png');
const travelLogo = require('../../images/plane.png');
const gameLogo = require('../../images/vr-gaming.png');
const artLogo = require('../../images/edit-tools.png');
const musicLogo = require('../../images/headset.png');
const downloadLogo = require('../../images/download.png');

const OnlineCV = () => {
 

    
    return(
            <ResumeS>
               <div className="resume">
                    <div className="func">
                        <div className="work">
                            <h3><i><img src={portfolioLogo}/></i>Experience</h3>
                            <ul>
                            <li><span>Full-stack web developer</span><small>FrenchCo</small><small>May 2018 - Now</small></li>
                            <li><span>Full-stack web developer</span><small>IMH-Informatique</small><small>February 2017 - May 2018</small></li>
                            <li><span>Full-stack web developer</span><small>Mcube Technologies</small><small>February 2016 - February 2017</small></li>
                            </ul>
                        </div>
                        <div className="edu">
                    <h3><i><img src={graduationLogo} alt="work"/></i>Education</h3>
                        <ul>
                            <li><span>Computer engineering</span><small>National engineering school of Carthage</small><small>2013 - 2016 </small></li>
                            <li><span>Preparatory cycle of engineering studies</span><small>Preparatory institute for engineering studies of Bizerte</small><small>2010 – 2013</small></li>
                            <li><span>Bachelor in mathematics</span><small>Secondary school of Ghardimaou</small><small>2010 – 2013</small></li>
                        </ul>
                    </div>
   
                        <div className="skills-prog">
                            <h3><i><img src={codeLogo} alt="work"/></i>Programming Skills</h3>
                            <ul>
                                <li><span className="label">HTML5</span>
                                <span className="progress">
                                    <ProgressBar barWidth="50" barColor='#78daf9' barHoverColor='#78f9f9' width='90'/>
                                </span>

                                </li>
                                <li  ><span className="label">CSS3 & SCSS</span>
                                <span className="progress">
                                    <ProgressBar barWidth="50" barColor='#78daf9' barHoverColor='#78f9f9' width='90'/>
                                </span>

                                </li>
                                <li  ><span className="label">JavaScript</span>
                                <span className="progress">
                                    <ProgressBar barWidth="50" barColor='#78daf9' barHoverColor='#78f9f9' width='90'/>
                                    </span>

                                </li>
                                <li  >
                                    <span className="label">jQuery</span>
                                    <span className="progress">
                                        <ProgressBar barWidth="50" barColor='#78daf9' barHoverColor='#78f9f9' width='90'/>
                                    </span>

 
                                </li>
                            </ul>
                        </div>
         
                        <div className="interests">
                            <h3><i><img src={interestsLogo} alt="interest"/></i>Interests</h3>
                            <div className="interests-items">
                                 <div className="art"><i><img src={artLogo} alt="interest"/></i><span>Art</span></div>
                                <div className="art"><i><img src={bookLogo} alt="interest"/></i><span>Books</span></div>
                                <div className="movies"><i><img src={travelLogo} alt="interest"/></i><span>travel</span></div>
                                <div className="music"><i><img src={musicLogo} alt="interest"/></i><span>Music</span></div>
                                <div className="games"><i><img src={gameLogo} alt="interest"/></i><span>Games</span></div>
                            </div>
                        </div>
 
                        </div>
                    <div className="pdf-section">
                        <span>if you wish to get my  fully detailed cv you can dowload it here</span>
                        <a href="path_to_file" download="proposed_file_name"><i><img src={downloadLogo} alt="interest"/></i><span>Download</span></a>
                         
                    </div>
                    </div>
            </ResumeS>

       
    );
}


export default OnlineCV;