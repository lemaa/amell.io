import React  from 'react';
 
// Child components
import City from '../components/Base/City';
import Avatar from '../components/Avatar';
import Content from '../components/Content';
import Library from '../components/Library';
import OnlineResume from '../components/OnlineResume';
 import { useMediaQuery } from 'react-responsive'

const Resume = (props) => {
    const bigHeighs = useMediaQuery({ query: '(min-height: 925px)' })
    const smallHeighs = useMediaQuery({ query: '(max-height: 924px)' })
     return (
        <City>
            <Library  position={{left:'1.5em', bottom: '4em'}}/>
            <Avatar move={false}/> 

            {bigHeighs && 
                <Content position={{left: '15em', bottom: '3em', margin:'0 auto',  topMobile:'-29em'}} height={'50vh'}>
                    <OnlineResume/>
                </Content>
            }
             {smallHeighs && 
                <Content position={{left: '15em', bottom: '3em', margin:'0 auto',  topMobile:'-29em'}} height={'40vh'}>
                    <OnlineResume/>
                </Content>
            }
            {/* <Content position={{left: '15em', bottom: '3em', margin:'0 auto',  topMobile:'-29em'}} >
                <OnlineResume/>
            </Content> */}
        </City>
        );
};

export default Resume;
