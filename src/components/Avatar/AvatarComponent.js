import React  from 'react';
 
import {
    Amell,
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
} from './Avatar';

const Avatar = () => {

    return(
        <Amell className="avatar"> 
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
        </Amell>
    );
}

export default Avatar;

 