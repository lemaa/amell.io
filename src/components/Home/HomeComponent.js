import React  from 'react';
import City from '../Base/CityComponent';
import Avatar from '../Avatar/AvatarComponent';
import Welcome from '../Welcome/WelcomeComponent';

import {
    House,
    HouseRoof,
    HouseFacade,
    HouseDoor,
    FrontDoor,
    HouseWindow,
    HouseContent,
    Doorknob,
    HouseChimney,
    Smoking
} from './Home';

const Home = () => {

    return(
        <City>
            <House className="House">
                <HouseChimney>
                    <Smoking>
                        <span className="s0"></span>
                        <span className="s1"></span>
                        <span className="s2"></span>
                        <span className="s3"></span>
                        <span className="s4"></span>
                        <span className="s5"></span>
                        <span className="s6"></span>
                        <span className="s7"></span>
                        <span className="s8"></span>
                        <span className="s9"></span>
                    </Smoking>
                </HouseChimney>
                <HouseRoof></HouseRoof>
                <HouseFacade>
                    <HouseContent>Home</HouseContent>
                    <HouseWindow form="round">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </HouseWindow>
                    <HouseDoor>
                        <FrontDoor className="frontdoor">
                            <Doorknob></Doorknob>
                        </FrontDoor>
                    </HouseDoor>
                    <HouseWindow form="cube">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </HouseWindow>
                </HouseFacade>
            </House>
            <Avatar/> 
            <Welcome className="about"/>
        </City>
    );
}

export default Home;