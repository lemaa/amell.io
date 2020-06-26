import React , {useRef} from 'react';
import Cloud from '../Cloud';
import Mountain from '../Mountain';
import Sun from '../Sun';
import {
    Sky,  
    OverFloor,
    Floor,
} from './CityStyle';

const City = (props) => {
 
    const sunRef = useRef();

    return (
        <div className="container wrapper"
            onMouseMove={(e) =>sunRef.current.handlePupilMovement(e)} 
            onTouchStart={(e) =>sunRef.current.handlePupilMovement(e)} 
            onTouchMove={(e) =>sunRef.current.handlePupilMovement(e)}
        >
            <Sky>
                <Sun ref={sunRef} position={{top: "0", left: "1em"}} sunlines={true} /> 
                <Cloud animation={true}
                        position={{top: "0", left: "1em"}}/>
                <Cloud animation={true}
                        position={{top: "9em", left: "0", right:"0", margin: "0 auto"}}/>
                <Cloud animation={true}
                        position={{top: "1em", right: "2em"}}/>
            </Sky>
            <Mountain position={{left: "1vw", bottom: "2em" }}
                      color='grey'
                      size='small'
                      mountainTop={true}
                      />
            <Mountain position={{left: "7vw", bottom: "2em" }}
                      color='green'
                      size='small'
                      mountainTop={true}
                      />
            <Mountain position={{left: "20vw", bottom: "2em" }}
                      color='green'
                      size='medium'
                      mountainTop={true}
                      />
            <Mountain position={{left: "45vw", bottom: "2em" }}
                      color='grey'
                      size='small'
                      mountainTop={true}
                      />
            <Mountain position={{left: "55vw", bottom: "2em" }}
                      color='green'
                      size='small'
                      mountainTop={true}
                      />
            <Mountain position={{left: "75vw", bottom: "2em" }}
                      color='grey'
                      size='small'
                      mountainTop={true}
                      />
            <Mountain position={{left: "90vw", bottom: "2em" }}
                      color='green'
                      size='big'
                      mountainTop={true}
                      />

            <OverFloor>
                 {props.children}
            </OverFloor>
            <Floor></Floor>
         </div> 

    )
};

export default City;