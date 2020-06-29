import React  from 'react';
import Title from '../Title';
import Timeline from '../Timeline';
import {
    OnlineResumeSection,
    WorkExperience,
    EducationExperience,
    ProgrammingSkills,
    Interests,
    ExtraText,
    DownloadButon
} from './OnlineResumeStyle';

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

const OnlineResume = () => {
    const WorkItems =[
        {
            "label": "Full-stack web developer",
            "content": { "text": "FrenchCo"},
            "dates": "May 2018 - Now"
          },
          {
            "label": "Full-stack web developer",
            "content": {  "text": "IMH-Informatique"},
            "dates": "February 2017 - May 2018"
          },
          {
            "label": "Full-stack web developer",
            "content": { "text": "Mcube Technologies"},
            "dates": "February 2016 - February 2017"
          } 
        ];
    const EducationItems =[
        {
            "label": "Computer engineering",
            "content": { "text": "National engineering school of Carthage"},
            "dates": "2013 - 2016"
          },
          {
            "label": "Preparatory cycle of engineering studies",
            "content": {"text": "Preparatory institute for engineering studies of Bizerte"},
            "dates": "2010 – 2013"
          },
          {
            "label": "Bachelor in mathematics",
            "content": {"text": "Secondary school of Ghardimaou"},
            "dates": "2010"
          } 
        ];
    const CodingSkillsItems =[
            {
                "label": "HTML5",
                "content": {
                    "progressPourcent": 50,
                    "progressColor": "#78daf9",
                    "progressHoverColor":"#78f9f9" ,
                    "barWidth": 90
                    },
                },
                {
                    "label": "HTML5",
                    "content": {
                        "progressPourcent": 50,
                        "progressColor": "#78daf9",
                        "progressHoverColor":"#78f9f9" ,
                        "barWidth": 90
                        },
                    },
                    {
                        "label": "HTML5",
                        "content": {
                            "progressPourcent": 50,
                            "progressColor": "#78daf9",
                            "progressHoverColor":"#78f9f9" ,
                            "barWidth": 90
                            },
                        },
        ];

    const InterestsItems =[
        {"content": {
            "imageIcon": artLogo,
            "description": "Art",
        }},
        {"content": {
            "imageIcon": bookLogo,
            "description": "Books",
        }},
        {"content": {
            "imageIcon":travelLogo,
            "description": "travel",
        }},
        {"content": {
            "imageIcon": musicLogo,
            "description": "Music",
        }},
        {"content": {
            "imageIcon": gameLogo,
            "description": "Games",
        }},                      
    ];
    const textMessage = "If you wish to get my  fully detailed cv you can dowload it here";

    return(
            <OnlineResumeSection>
                <WorkExperience>
                    <Title icon={portfolioLogo} text={"Experience"} altImg ={"work-logo"}></Title>
                    <Timeline timelineStyle={"timeline"} TimelineItems={WorkItems}/>
                </WorkExperience>
                <EducationExperience>
                    <Title icon={graduationLogo} text={"Education"} altImg ={'education-logo'}></Title>
                    <Timeline timelineStyle={"timeline"} TimelineItems={EducationItems}/>
                </EducationExperience>
                <ProgrammingSkills>
                    <Title icon={codeLogo} text={"Programming Skills"} altImg ={'code-logo'}></Title>
                    <Timeline 
                        timelineStyle={"progress"} 
                        TimelineItems={CodingSkillsItems} 
                        labelWidth={'25%'} 
                        ContentWidth={'75%'}/>
                </ProgrammingSkills>
                <Interests>
                    <Title icon={interestsLogo} text={"Interests"} altImg ={'interest-logo'}></Title>
                    <Timeline 
                        timelineStyle={"icon"} 
                        TimelineItems={InterestsItems}
                    />
                </Interests>
                <ExtraText>
                    {textMessage}
                    <DownloadButon href="path_to_file" download="proposed_file_name">
                        <i><img src={downloadLogo} alt="interest"/></i>
                        <span>Download</span>
                    </DownloadButon>
                 </ExtraText>
 
             </OnlineResumeSection>
    );
}


export default OnlineResume;