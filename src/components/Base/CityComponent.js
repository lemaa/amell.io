import React  from 'react';
import {
    Sky, 
    Sun, 
    SunFace, 
    SunLines , 
    Shadow, 
    Cloud, 
    CloudContent, 
    SunEye, 
    SunPupil , 
    Mountains,
    OverFloor,
    Floor,
} from './City';

const City = (props) => {

    const pupils = document.getElementsByClassName("pupil");
 
    const handlePupilMovement = (e)  =>{
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

    return (
        <div className="container wrapper"  
            onMouseMove={handlePupilMovement} 
            onTouchStart={handlePupilMovement} 
            onTouchMove={handlePupilMovement}>
            <Sky>
                <Sun>
                    <SunFace >
                        <SunEye>
                            <SunPupil className="pupil"></SunPupil>
                        </SunEye>
                        <SunEye>
                            <SunPupil className="pupil"></SunPupil>
                        </SunEye>
                    </SunFace>
                    <SunLines id="sun-line-section">
                        <div className="sun-line first"></div>
                        <div className="sun-line second"></div>
                        <div className="sun-line third"></div>
                        <div className="sun-line fourth"></div>
                        <div className="sun-line fifth"></div>
                        <div className="sun-line sixth"></div>
                        <div className="sun-line seventh"></div>
                        <div className="sun-line eightth"></div>
                    </SunLines>
                </Sun>
                <Cloud className="cloud first">
                    <CloudContent> About </CloudContent>
                    <Shadow/>
                </Cloud>
                <Cloud className="cloud second">
                    <CloudContent>Resume</CloudContent>
                    <Shadow/>
                </Cloud>
                <Cloud className="cloud third">
                    <CloudContent>Contact</CloudContent>
                    <Shadow/>
                </Cloud>
            </Sky>
            <Mountains>
                <div className='mountain'></div>
                <div className='mountain'></div>
                <div className='mountain'></div>
                <div className='mountain'></div>
                <div className='mountain'></div>
                <div className='mountain'></div>
                <div className='mountain'></div>
             </Mountains>
 
            <OverFloor>
                 {props.children}
            </OverFloor>
            <Floor></Floor>
         </div> 

    )
};

export default City;