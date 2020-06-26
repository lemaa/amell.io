import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { 
    MountainSection,
    MountainTop,
    MountainCap
} from './MountainStyle';

const Mountain = (props) => {

    const [position] = useState(props.position);
    const [color] = useState(props.color);
    const [size] = useState(props.size);
    const [mountainTop] = useState(props.mountainTop);

    return (
        <MountainSection position={position} color={color} size={size}>
            {mountainTop &&
                <MountainTop>
                    <MountainCap/>  
                    <MountainCap/>  
                    <MountainCap/>  
                </MountainTop>}
        </MountainSection> 
    )
};

Mountain.propTypes = {
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      margin: PropTypes.string
    }),
    color: PropTypes.oneOf(['green', 'grey']),
    size: PropTypes.oneOf(['big', 'medium', 'small']),
    mountainTop: PropTypes.bool
  };

export default Mountain;