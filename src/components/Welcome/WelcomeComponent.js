import React  from 'react';
import Typing from 'react-typing-animation';
import {
    About,
    WelcomText
} from './Welcome';

const Welcome = () => {

 

return(
        <About > 
            <WelcomText>
                <Typing startDelay={3500}>
                    <span>Hi. I am Amell. Nice to meet you. <br/>Curabitur magna neque, cursus ullamcorper velit cursus ullamcorper velit cursus cursus .<br/>Curabitur magna neque, cursus ullamcorper velit.</span>
                 </Typing>
            </WelcomText>

        </About>
    );
}

export default Welcome;

 