import React  from 'react';
import { useTranslation } from 'react-i18next';

import City from '../components/Base/City';
import Avatar from '../components/Avatar';
import Telephone from '../components/Telephone';
import Content from '../components/Content';
import SocialLinks from '../components/SocialLinks';
 
const Contact = () => {
    const { t, i18n } = useTranslation();   
    return(
        
        <City>
            <Telephone position={{left:'1.5em', bottom: '4em'}}/>
            <Avatar move={false}/> 
            <Content typingStartDelay={0} textMessage={t('ContactText')} typingSpeed={50} position={{left: '15em', bottom: '3em', margin:'0 auto'}}>
                <SocialLinks email={true} skype={true} linkedin={true} facebook={true}></SocialLinks>
            </Content>
        </City>
    );
}

export default Contact;