 import styled , {keyframes, css}from 'styled-components';
import {tada} from 'react-animations';


const EmailLogo = require('../../images/mail.png');
const SkypeLogo = require('../../images/skype.png');
const LinkedInLogo = require('../../images/linkedin.png');
const FacebookLogo = require('../../images/facebook.png');
const TwitterLogo = require('../../images/twitter.png');

 const fadeInAnimation = keyframes`${tada}`;

const SocialLinksSection = styled.ul`
    list-style: none;
    margin:  auto;
    text-align: center;
    width: fit-content;
    li{
        width: 3em;
        height: 3em;
        float: left;
        margin: 1em 1em;
        margin-left: 0;
        border-radius: 100%;
        box-shadow: 0 0.3em 0.25em rgba(0, 0, 0, 0.22);
        background-size: 25px;
        background-repeat: no-repeat;
         background-position: center;
         background: #f2f9fe;
         animation: ${props => props.animation ===true ? css`1s ${fadeInAnimation} ease-in-out` :'none' };

    }
`;
const Email = styled.li`
    background-image: url(${EmailLogo});
    animation-delay: 0s;
 `;
const Skype = styled.li`
    background: #f2f9fe;
    background-image: url(${SkypeLogo});
    animation-delay: 1.1s;
 `;
const LinkedIn = styled.li`   
 background: #f2f9fe;
    background-image: url(${LinkedInLogo});
    animation-delay: 2.2s;

 `;
const Facebook = styled.li`
    background: #f2f9fe;
    background-image: url(${FacebookLogo});
    animation-delay: 3.3s;
 `;
const Twitter = styled.li`
    background: #f2f9fe;
    background-image: url(${TwitterLogo});
    animation-delay: 4.4s;
 `;
  

export{
    SocialLinksSection, 
    Email,
    Skype,
    LinkedIn,
    Facebook,
    Twitter
}