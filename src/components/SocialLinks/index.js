import React , {useState} from 'react';
import { PropTypes } from 'prop-types';
import './SocialLinksStyle.css';

const SocialLinks = (props) => {
    const [email] = useState(props.email);
    const [skype] = useState(props.skype);
    const [linkedin] = useState(props.linkedin);
    const [facebook] = useState(props.facebook);
    const [twitter] = useState(props.twitter);
  
    return(
            <ul className='SocialLinksSection'>
                 {email && <li className="SocialLink email"></li>} 
                 {skype && <li className="SocialLink skype"></li>} 
                 {linkedin && <li className="SocialLink linkedin"></li>} 
                 {facebook && <li className="SocialLink facebook"></li>} 
                 {twitter && <li className="SocialLink twitter"></li>} 
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