import React  from 'react';
 
// Child components
import City from '../components/Base/City';
import Avatar from '../components/Avatar';
import Content from '../components/Content';
import Library from '../components/Library';
import OnlineResume from '../components/OnlineResume';

const Resume = (props) => {
 
     return (
        <City>
            <Library  position={{left:'1.5em', bottom: '4em'}}/>
            <Avatar move={false}/> 
            <Content position={{left: '7em', bottom: '25em', topMobile:'-29em'}}>
                <OnlineResume/>
            </Content>
        </City>
        );
};

export default Resume;
