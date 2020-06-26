import React, {useState}  from 'react';
import { PropTypes } from 'prop-types';
import Typing from 'react-typing-animation';
import {
    ContentSection
} from './ContentStyle';

const Content = (props) => {
    
    const [animation] = useState(props.animation);
    const [animationStartDelay] = useState(props.animationStartDelay);
    const [typingStartDelay] = useState(props.typingStartDelay);
    const [typingSpeed] = useState(props.typingSpeed);
    const [textMessage] = useState(props.textMessage);
    const [finishedTyping, setFinishedTyping] = useState(false);

    const onFinishedTyping = () => setFinishedTyping(true);

return(
        <ContentSection  animation ={animation} animationStartDelay={animationStartDelay} > 
            {textMessage && 
                <Typing startDelay={typingStartDelay} speed={typingSpeed} onFinishedTyping={onFinishedTyping} >
                    {textMessage}
            </Typing>}
            {(finishedTyping || !textMessage) && props.children }
        </ContentSection>
    );
}

Content.propTypes = {
    typingStartDelay: PropTypes.number,
    typingSpeed: PropTypes.number,
    animationStartDelay: PropTypes.number,
    animation: PropTypes.bool,
    textMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node 
      ]),
  };
export default Content;

 