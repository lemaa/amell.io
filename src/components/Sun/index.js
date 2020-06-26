import React, {useState, forwardRef,  useImperativeHandle}  from 'react';
import PropTypes from 'prop-types';
import {
    SunSection, 
    SunFace, 
    SunLines , 
    SunEye, 
    SunPupil
} from './SunStyle';

const Sun = forwardRef((props, ref) => {

    const [position] = useState(props.position);
    const [sunlines] = useState(props.sunlines);

    useImperativeHandle(ref, () => ({

       handlePupilMovement(e){
            const pupils = document.getElementsByClassName("pupil");
            let pointerEvent = e;
            let mouseX; 
            let mouseY;
            let centerX = 0;
            let centerY = 0;
            if (e.targetTouches && e.targetTouches[0]) {
                e.preventDefault(); 
                pointerEvent = e.targetTouches[0];
                mouseX = pointerEvent.pageX;
                mouseY = pointerEvent.pageY;
            } else {
                mouseX = e.clientX + window.pageXOffset;
                mouseY = e.clientY + window.pageYOffset;
            }
    
        for (var i = 0; i < pupils.length; i++) {
            var offset = pupils[i].getBoundingClientRect();
             centerX  = offset.left + offset.width/2;
             centerY = offset.bottom;
             pupils[i]['radians'] = Math.atan2(mouseX - centerX, mouseY - centerY);
             pupils[i]['degree'] = (pupils[i]['radians'] * (180 / Math.PI) * -1); 
            pupils[i].style.transform = 'rotate('+ (pupils[i]['degree'] + 180) + 'deg)';
            }
        }

      }));


    
    return (
        <SunSection position={position} sunlines={sunlines}>
            <SunFace >
                <SunEye>
                    <SunPupil className="pupil"></SunPupil>
                </SunEye>
                <SunEye>
                    <SunPupil className="pupil"></SunPupil>
                </SunEye>
                </SunFace>
                    {sunlines && <SunLines id="sun-line-section">
                        <div className="sun-line first"></div>
                        <div className="sun-line second"></div>
                        <div className="sun-line third"></div>
                        <div className="sun-line fourth"></div>
                        <div className="sun-line fifth"></div>
                        <div className="sun-line sixth"></div>
                        <div className="sun-line seventh"></div>
                        <div className="sun-line eightth"></div>
                    </SunLines>}
                </SunSection>
    )
});
 
Sun.propTypes = {
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      margin: PropTypes.string
    }),
    sunlines: PropTypes.bool
  };
export default Sun;