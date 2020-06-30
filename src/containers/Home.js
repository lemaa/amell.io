import React  from 'react';
 
// Child components
import City from '../components/Base/City';
import House from '../components/House';
import Avatar from '../components/Avatar';
import Content from '../components/Content';
import Flower from '../components/Flower';
import Tree from '../components/Tree';

const Home = (props) => {
     const textMessage =
                        <span>
                            Hi. I am Amell. Nice to meet you.
                            <br/>Curabitur magna neque, 
                            cursus ullamcorper velit cursus ullamcorper velit cursus cursus .
                            <br/>Curabitur magna neque, cursus ullamcorper velit.
                        </span>
    return (
        <City>
            <House position={{left:'1.5em'}} doorAnimation={false}/>
            <Avatar move= {false}/>
            <Content typingStartDelay={500} textMessage={textMessage} typingSpeed={100} position={{left: '8em', top: '-11em'}}/>
        </City>
        );
};

export default Home;
