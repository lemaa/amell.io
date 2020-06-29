import React , {useState}  from 'react';
import { PropTypes } from 'prop-types';
import {
    TitleSection,
    TitleImg
} from './TitleStyle';

const Title = (props) => {
    const [icon] = useState(props.icon);
    const [altImg] = useState(props.altImg);
    const [text] = useState(props.text);
    
    return(
         <TitleSection >
            <i>
                <TitleImg src={icon}  alt={altImg}/>
            </i>
            <span>{text}</span>
         </TitleSection>
       
    );
}

Title.prototype= {
    icon: PropTypes.string,
    altImg: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default Title;