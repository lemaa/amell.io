import React  from 'react';
 
// Child components
 import City from '../components/Base/City';
 import Avatar from '../components/Avatar';
 import Content from '../components/Content';
 import Library from '../components/Library';

import OnlineCV from '../components/Resume/ResumeComponent';

const Resume = (props) => {
 
     return (
        <City>
            <Library  position={{left:'1.5em'}}/>
            <Avatar move={false}/> 
            <Content position={{left: '12em', bottom: '25em'}}>
            
                <OnlineCV></OnlineCV>
            </Content>
        </City>
        );
};

export default Resume;
