import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { 
    TreeSection,
    RoundLeaf
} from './FlowerStyle';

const Flower = (props) => {

    const [position] = useState(props.position);
    const [roundColor] = useState(props.roundColor);
    const [size] = useState(props.size);
    const [color] = useState(props.color);
 
    return (
        <TreeSection color={color} position={position} size={size} className="tree">
            <RoundLeaf roundColor={roundColor}/>
        </TreeSection> 
    )
};

Flower.propTypes = {
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      margin: PropTypes.string
    }),
    size: PropTypes.oneOf(['extra-big', 'big', 'medium', 'small']),
    color: PropTypes.string,
    roundColor: PropTypes.string
};

export default Flower;