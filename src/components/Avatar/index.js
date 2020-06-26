import React, { useState } from "react";
import { PropTypes } from 'prop-types'; 
import {
    AvatarSection,
    AvatarHead,
    Hair,
    Ears,
    Eyes,
    Mouth,
    Head,
    Nose,
    Blush,
    AvatarBody,
    Tshirt,
    Hands,
    Foot
} from './AvatarStyle';

const Avatar = (props) => {

    const [animation] = useState(props.animation);
    const [position] = useState(props.position); //not done yet

     return(
        <AvatarSection position={position} animation={animation}> 
             <AvatarHead>
                <Hair>
			        <span className="right-side-fringe"></span>
		        </Hair>
		        <Ears/> 
		        <Head>
			        <Eyes/>
			        <Nose/>
			        <Blush/>
			        <Mouth/>
		        </Head>
             </AvatarHead>
             <AvatarBody>
                 <Hands  className="hands">
                    <span className="hand-1"></span>
                    <span className="hand-2"></span>
                 </Hands>
                <Tshirt></Tshirt>
                 <Foot>
                    <span className="feet-1"></span>
                    <span className="feet-2"></span>
                 </Foot>
             </AvatarBody>
        </AvatarSection>
    );
}

Avatar.propTypes = {
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      margin: PropTypes.string
    }),
    animation: PropTypes.bool
   };
export default Avatar;

 