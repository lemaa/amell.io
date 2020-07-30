import styled  from 'styled-components';

const OnlineResumeSection = styled.div`
    max-height: 95%;
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
        .container-skills{
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-flow: row wrap;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            .back-end{
                width: 48%;
                margin: 0 4% 15px 0;
            }
            .front-end{
                width: 48%;

            }
         }
`;
const Interests = styled.div`
    clear: both;
    width:100%;
`;
const ExtraText = styled.div`
    width: 100%;
    font-size: 14px;
    font-family: MuseoModernoBold;
    margin-bottom: 20px; 
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