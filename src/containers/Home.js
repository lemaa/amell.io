import React  from 'react';
import { useTranslation } from 'react-i18next';

// Child components
import City from '../components/Base/City';
import House from '../components/House';
import Avatar from '../components/Avatar';
import Content from '../components/Content';
 
const Home = (props ) => {
    const { t, i18n } = useTranslation();

     const textMessage =
                        <span>
                            {t('WelcomeText')}
                            <br/>Curabitur magna neque, 
                            cursus ullamcorper velit cursus ullamcorper velit cursus cursus .
                            <br/>Curabitur magna neque, cursus ullamcorper velit.
                        </span>
    return (
        <City>
            <House position={{left:'1.5em'}} doorAnimation={false}/>
            <Avatar move= {false}/>
            <Content typingStartDelay={500} textMessage={textMessage} typingSpeed={10} position={{left: '8em', top: '-11em'}}/>
        </City>
        );
};

export default Home;
