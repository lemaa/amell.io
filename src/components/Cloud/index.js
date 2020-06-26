import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import {
    Shadow, 
    CloudSection, 
    CloudContent 
} from './CloudStyle';

const Cloud = (props) => {

    const [position] = useState(props.position);
    const [animation] = useState(props.animation);
 
    return (
            <CloudSection animation={animation} position={position}>
                <CloudContent>
                    {props.children}
                </CloudContent>
                <Shadow/>
            </CloudSection>
    );
};

Cloud.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    margin: PropTypes.string
  }),
  animation: PropTypes.bool,
};
 
export default Cloud;