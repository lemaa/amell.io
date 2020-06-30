import styled, { keyframes } from 'styled-components';

const circle =  keyframes` 
    from {
      box-shadow: 0 0 0 0px #78daf9;
    }
    to {
      box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
    }
 `;
 
const OnlineResumeSection = styled.div`
    max-height: 24em;
    overflow: auto;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`;

const WorkExperience = styled.div`
    width: 48%;
    margin: 0 4% 15px 0;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;

    }
      
`;
const EducationExperience = styled.div`
    width: 48%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const ProgrammingSkills = styled.div`
    clear: both;
     width:100%;
`;
const Interests = styled.div`
    clear: both;
    width:100%;
`;
const ExtraText = styled.div`
    width: 100%;
    font-size: 14px;
    font-family: MuseoModernoBold;
    margin-top: 25px;
 
`;
const DownloadButon = styled.a`
    background-color: #2093ed;
    border: none;
    color: white;
    padding: 2px 5px;
    cursor: pointer;
    font-size: 13px;
    -webkit-text-decoration: none;
    text-decoration: none;
    display: inline-block;
    margin-left: 5px;
    &:hover {
        background-color: #1975d1;
      }
    img{
        width: 20px;
        vertical-align: middle;
    }
    span{
        padding: 5px;
    }
`;

export{
    OnlineResumeSection,
    WorkExperience,
    EducationExperience,
    ProgrammingSkills,
    Interests,
    ExtraText,
    DownloadButon
}