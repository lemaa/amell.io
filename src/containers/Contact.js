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
            <Telephone  position={{left:'1.5em'}}/>
            <Avatar move={false}/> 
            <Content typingStartDelay={0} textMessage={t('ContactText')} typingSpeed={100} position={{left: '8em', top: '-11em'}}>
                <SocialLinks email={true} skype={true} linkedin={true} facebook={true}></SocialLinks>
            </Content>
        </City>
    );
}

export default Contact;