import React  from 'react';
import { useTranslation } from 'react-i18next';

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

    const { t, i18n } = useTranslation();   

    const WorkItems =[
        {
            "label":  t('Position'),
            "content": { "text": "FrenchCo"},
            "dates": t('May') +" 2018 - " + t('Now')
          },
          {
            "label": t('Position'),
            "content": {  "text": "IMH-Informatique"},
            "dates":  t('February') +" 2017 - " + t('May') +" 2018 "
          },
          {
            "label": t('Position'),
            "content": { "text": "Mcube Technologies"},
            "dates":  t('February') +" 2016 - " + t('February') +" 2017 "
          } 
        ];
    const EducationItems =[
        {
            "label": t('DiplomaOne'),
            "content": { "text": t('ShcoolOne')},
            "dates": "2013 - 2016"
          },
          {
            "label": t('DiplomaTwo'),
            "content": {"text": t('ShcoolTwo')},
            "dates": "2010 – 2013"
          },
          {
            "label": t('DiplomaThree'),
            "content": {"text": t('ShcoolThree')},
            "dates": "2010"
          } 
        ];
    const CodingBackendSkillsItems =[
        {
            "label": "PHP7",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        },
        {
            "label": "Zend",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        },
        {
            "label": "NodeJs",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        },
        {
            "label": "MYSQL",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        },
        {
            "label": "PostgreSQL",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        }
        ];
    const CodingFrontendSkillsItems =[
        {
            "label": "Javascript",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        },
        {
            "label": "Angular",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        },
        {
            "label": "ReactJs",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        },
        {
            "label": "HTML5",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        },
        {
            "label": "CSS3",
            "content": {
                "progressPourcent": 80,
                "progressColor": "#78daf9",
                "progressHoverColor":"#78f9f9" ,
                "barWidth": 90
                },
        }
    ];

    const InterestsItems =[
        {"content": {
            "imageIcon": artLogo,
            "description": t('Interests-0'),
        }},
        {"content": {
            "imageIcon": bookLogo,
            "description": t('Interests-1'),
        }},
        {"content": {
            "imageIcon":travelLogo,
            "description": t('Interests-2'),
        }},
        {"content": {
            "imageIcon": musicLogo,
            "description": t('Interests-3'),
        }},
        {"content": {
            "imageIcon": gameLogo,
            "description": t('Interests-4'),
        }},                      
        ];

        const experienceTitle = t('ExperienceTitle');
        const educationTitle = t('EducationTitle');
        const progSkillsTitle = t('ProgSkillsTitle');
        const interestsTitle = t('InterestsTitle');
        return(
            <OnlineResumeSection>
                <WorkExperience>
                    <Title icon={portfolioLogo} text={experienceTitle} altImg ={"work-logo"}></Title>
                    <Timeline timelineStyle={"timeline"} TimelineItems={WorkItems}/>
                </WorkExperience>
                <EducationExperience>
                    <Title icon={graduationLogo} text={educationTitle} altImg ={'education-logo'}></Title>
                    <Timeline timelineStyle={"timeline"} TimelineItems={EducationItems}/>
                </EducationExperience>
                <ProgrammingSkills>
                    <Title icon={codeLogo} text={progSkillsTitle} altImg ={'code-logo'}></Title>
                    <div className="container-skills">
                        <div className="back-end">
                            <div>Backend skills</div>
                            <Timeline 
                                timelineStyle={"progress"} 
                                TimelineItems={CodingBackendSkillsItems} 
                                labelWidth={'25%'} 
                                ContentWidth={'75%'}/>
                        </div>
                        <div className="front-end">
                            <div>Front-end skills</div>
                            <Timeline 
                                timelineStyle={"progress"} 
                                TimelineItems={CodingFrontendSkillsItems} 
                                labelWidth={'25%'} 
                                ContentWidth={'75%'}/>
                        </div>
                     </div>
                </ProgrammingSkills>
                <Interests>
                    <Title icon={interestsLogo} text={interestsTitle} altImg ={'interest-logo'}></Title>
                    <Timeline 
                        timelineStyle={"icon"} 
                        TimelineItems={InterestsItems}
                    />
                </Interests>
                <ExtraText>
                    {t('DownloadText')}
                    <DownloadButon href="path_to_file" download="proposed_file_name">
                        <i><img src={downloadLogo} alt="interest"/></i>
                        <span>{t('DownloadButton')}</span>
                    </DownloadButon>
                 </ExtraText>
 
             </OnlineResumeSection>
    );
}


export default OnlineResume;