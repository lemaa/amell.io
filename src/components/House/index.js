import React , { useState }  from 'react';
import PropTypes from 'prop-types';
import {
    HouseSection,
    HouseRoof,
    HouseFacade,
    HouseDoor,
    FrontDoor,
    HouseWindow,
    HouseContent,
    Doorknob,
    HouseChimney,
    Smoking
} from './HouseStyle';
 
const House = (props) => {

    const [doorAnimation] =  useState(props.doorAnimation);
    const [position] =  useState(props.position);
    
    return(
         <HouseSection doorAnimation={doorAnimation} position={position} className="House">
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
        </HouseSection>
    );
}
House.propTypes = {
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      margin: PropTypes.string
    }),
    doorAnimation: PropTypes.bool,
  };
   
export default House;