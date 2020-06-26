import React  from 'react';
import City from '../Base/City';
import Avatar from '../Avatar';
import {
    Library,
    LibraryFacade,
    LibrarySideFacade,
    HouseDoor,
    FrontDoor,
    HouseWindow,
    HouseContent,
    Doorknob,
    ResumeS
} from './LibraryStyle';


const portfolioLogo = require('../../images/portfolio.png');
const graduationLogo = require('../../images/graduation.png');
const codeLogo = require('../../images/code.png');

const Resume = () => {
 

    
    return(

        <City>
            <Library className="Library">

            <LibrarySideFacade className="two">
 
                <HouseWindow form="cube" bottom="3em"  width="2.5em">
                    <div className="vertical"></div>
                </HouseWindow>
                <HouseWindow form="cube" bottom="1em"  width="2.5em">
                    <div className="vertical"></div>
                </HouseWindow>
            </LibrarySideFacade>
                <LibraryFacade className="one">
                    <HouseContent>Library</HouseContent>
                    <HouseDoor>
                        <FrontDoor className="frontdoor">
                            <Doorknob></Doorknob>
                        </FrontDoor>
                    </HouseDoor>
                    <HouseWindow form="cube" bottom="4em"  width="4em">
                        <div className="vertical"></div>

                    </HouseWindow>
 
                </LibraryFacade>

            </Library>
            <Avatar/> 
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
                                <li><span>HTML5</span>
                                    <div className="progress"></div>
                                </li>
                                <li  ><span>CSS3 & SCSS</span>

                                </li>
                                <li  ><span>JavaScript</span>

                                </li>
                                <li  ><span>jQuery</span>

 
                                </li>
                                <li  id="aaaa"><span>jQuery</span>

 
                                </li>
                            </ul>
                        </div>
                       {/* <div className="skills-soft">
                        <h3><i className="fas fa-bezier-curve"></i>Software Skills</h3>
                        <ul>
                        <li data-percent="90">
                            <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle className="cbar" cx="50" cy="50" r="45"></circle>
                            </svg><span>Illustrator</span><small></small>
                        </li>
                        <li data-percent="75">
                            <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle className="cbar" cx="50" cy="50" r="45"></circle>
                            </svg><span>Photoshop</span><small></small>
                        </li>
                        <li data-percent="85">
                            <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle className="cbar" cx="50" cy="50" r="45"></circle>
                            </svg><span>InDesign</span><small></small>
                        </li>
                        <li data-percent="65">
                            <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle className="cbar" cx="50" cy="50" r="45"></circle>
                            </svg><span>Dreamweaver</span><small></small>
                        </li>
                        </ul>
                    </div>
                    <div className="interests">
                        <h3><i className="fas fa-star"></i>Interests</h3>
                        <div className="interests-items">
                        <div className="art"><i className="fas fa-palette"></i><span>Art</span></div>
                        <div className="art"><i className="fas fa-book"></i><span>Books</span></div>
                        <div className="movies"><i className="fas fa-film"></i><span>Movies</span></div>
                        <div className="music"><i className="fas fa-headphones"></i><span>Music</span></div>
                        <div className="games"><i className="fas fa-gamepad"></i><span>Games</span></div>
                        </div>
                        </div> */}
                    </div>
                </div>
            </ResumeS>
        </City>
       
    );
}


export default Resume;