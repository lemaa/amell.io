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
            const floor = document.getElementById("frontdoor");
            let offset = floor.getBoundingClientRect();
            sethousePostionTop(offset.left);

          });
    
     const textMessage =
                        <span>
                            {t('WelcomeText')}
                            <br/> I am a full-stack software engineer with over 4 years of experience.
                            <br/>I am passionate about building excellent software that improves the lives of those around me.
                        </span>
    return (
        <City>
            
            <House position={{left:'1.5em', bottom: '4em'}} doorAnimation={true}/>
            <Avatar animation= {true} startLeftPostionAnimation={4}/>
            <Content 
                typingStartDelay={6500} 
                animationStartDelay={6} 
                textMessage={textMessage} 
                typingSpeed={50} 
                position={{left: '15em', bottom: '3em', margin:'0 auto'}}
                animation={true}/>
        </City>
        );
};

export default Home;
