import React, {useEffect, useState} from 'react';
import { useTranslation} from 'react-i18next';

// Child components
import City from '../components/Base/City';
import House from '../components/House';
import Avatar from '../components/Avatar';
import Content from '../components/Content';
 
const Home = (props ) => {
    const { t, i18n } = useTranslation();
    const [housePostionTop, sethousePostionTop] = useState('');


         useEffect(() => {
            const floor = document.getElementById("floor");
            let offset = floor.getBoundingClientRect();
            sethousePostionTop(offset.top + offset.height/2);

          });
    
     const textMessage =
                        <span>
                            {t('WelcomeText')}
                            <br/>I'm a person who loves challenge and always interested to learn new things.
                            <br/>Curabitur magna neque, cursus ullamcorper velit.
                        </span>
    return (
        <City>
            
            <House position={{left:'1.5em', bottom: '4em'}} doorAnimation={true}/>
            {/* <Avatar animation= {true}/>
            <Content 
                typingStartDelay={6500} 
                animationStartDelay={6} 
                textMessage={textMessage} 
                typingSpeed={10} 
                position={{left: '8em', top: '-11em'}}
                animation={true}/> */}
        </City>
        );
};

export default Home;
