import React , {useState} from 'react';
import { PropTypes } from 'prop-types';
 
import {
    ProgressBarSection,
    Bar
} from './ProgressBarStyle';


 

const ProgressBar = (props) => {
 
    const [barWidth] = useState(props.barWidth);
    const [barColor] = useState(props.barColor);
    const [barHoverColor] = useState(props.barHoverColor);
    const [width] = useState(props.width);

    return(
        <ProgressBarSection  width ={width} >
            <Bar barWidth ={barWidth} barColor ={barColor} barHoverColor={barHoverColor} /> 
        </ProgressBarSection>
                                
    );
}

ProgressBar.prototype = {
    barWidth: PropTypes.number.isRequired,
    barColor: PropTypes.string,
    barHoverColor: PropTypes.string,
    width: PropTypes.number


}
export default ProgressBar;