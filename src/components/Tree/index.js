import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { 
    TreeSection,
    RoundLeaf,
    Leaf,
} from './TreeStyle';

const Tree = (props) => {

    const [position] = useState(props.position);
    const [form] = useState(props.form);
    const [size] = useState(props.size);
    const [color] = useState(props.color);
    const [zIndex] = useState(props.zIndex);
    let leaf;
    
    if(form === 'round'){
        leaf = <RoundLeaf color={color}/>;
    }
    else if (form === 'one-leaf') {
        leaf = <Leaf color={color}/>;
     } else {
        leaf = <React.Fragment>
                    <Leaf color={color}/>
                    <Leaf color={color}/>
                    <Leaf color={color}/>
                </React.Fragment>;
    }

    return (
        <TreeSection color={color} position={position} size={size} zIndex={zIndex} className="tree">
            {leaf}
        </TreeSection> 
    )
};

Tree.propTypes = {
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      margin: PropTypes.string
    }),
    form: PropTypes.oneOf(['triple-leaf', 'one-leaf', 'round']),
    size: PropTypes.oneOf(['extra-big', 'big', 'medium', 'small']),
    color: PropTypes.oneOf(['green', 'light-green', 'pink', 'purple']),
    zIndex: PropTypes.number
};

export default Tree;