import React , {useState} from 'react';
import { PropTypes } from 'prop-types';
import './SocialLinksStyle.css';

const EmailLogo = require('../../images/mail.png');
const SkypeLogo = require('../../images/skype.png');
const LinkedInLogo = require('../../images/linkedin.png');
const FacebookLogo = require('../../images/facebook.png');
const TwitterLogo = require('../../images/twitter.png');


const SocialLinks = (props) => {
    const [email] = useState(props.email);
    const [skype] = useState(props.skype);
    const [linkedin] = useState(props.linkedin);
    const [facebook] = useState(props.facebook);
    const [twitter] = useState(props.twitter);
  

    return(
            <ul className='SocialLinksSection'>
                 {email && <li className="SocialLink email"><a href="mailto:amel.fezai@live.fr" ><img className='social-logo' src={EmailLogo} target="_blank" alt='Email Logo'/></a></li>} 
                 {skype && <li className="SocialLink skype"><a href="skype:amel.fezai1?chat" ><img className='social-logo' src={SkypeLogo} target="_blank" alt='Skype Logo'/></a></li>} 
                 {linkedin && <li className="SocialLink linkedin"><a href="https://www.linkedin.com/in/amell-fezai" ><img className='social-logo' src={LinkedInLogo} target="_blank" alt='LinkedIn Logo'/></a></li>} 
                 {facebook && <li className="SocialLink facebook"><a href="https://www.facebook.com/amell.fezaii" ><img className='social-logo' src={FacebookLogo} target="_blank" alt='Facebook Logo'/></a></li>} 
                 {twitter && <li className="SocialLink twitter"><a href="https://twitter.com/a_fezaii?s=09" ><img className='social-logo' src={TwitterLogo} target="_blank" alt='Twitter Logo'/></a></li>} 
            </ul>
    );
}
SocialLinks.propTypes = {
    email: PropTypes.bool,
    skype: PropTypes.bool,
    linkedin: PropTypes.bool,
    facebook: PropTypes.bool,
    twitter: PropTypes.bool
  };

export default SocialLinks;