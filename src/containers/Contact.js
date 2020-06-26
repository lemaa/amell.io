import React  from 'react';
import City from '../components/Base/City';
import Avatar from '../components/Avatar';
import Telephone from '../components/Telephone';
import Content from '../components/Content';
import SocialLinks from '../components/SocialLinks';
 
const Contact = () => {

    const textMessage = "If you wanna get in touch, talk to me about a work or just say hi you can reach me on one of these:";
   
    return(
        <City>
            <Telephone  position={{left:'1.5em'}}/>
            <Avatar move={false}/> 
            <Content typingStartDelay={0} textMessage={textMessage} typingSpeed={100} >
                <SocialLinks email={true} skype={true} linkedin={true} facebook={true}></SocialLinks>
            </Content>
        </City>
    );
}

export default Contact;