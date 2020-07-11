import React , {useRef} from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Cloud from '../Cloud';
import Mountain from '../Mountain';
import Sun from '../Sun';
import Tree from '../Tree';
import Flower from '../Flower';
import {
    Sky,  
    OverFloor,
    Floor,
    TextLink
} from './CityStyle';

const City = (props) => {
 
    const sunRef = useRef();
    const { t, i18n } = useTranslation();   

    return (
        <div className="container wrapper"
            onMouseMove={(e) =>sunRef.current.handlePupilMovement(e)} 
            onTouchStart={(e) =>sunRef.current.handlePupilMovement(e)} 
            onTouchMove={(e) =>sunRef.current.handlePupilMovement(e)}
        >
            <Sky>
                <Sun ref={sunRef} position={{top: "0", left: "1em"}} sunlines={true} /> 
                <Cloud animation={true}
                        position={{top: "0", left: "1em"}}><span><TextLink to="/">{t('Home')}</TextLink></span></Cloud>
                <Cloud animation={true}
                        position={{top: "9em", left: "0", right:"0", margin: "0 auto"}}><TextLink to="/resume">{t('Resume')}</TextLink></Cloud>
                <Cloud animation={true}
                        position={{top: "1em", right: "2em"}}><TextLink to="/contact">{t('Contact')}</TextLink></Cloud>
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
            <MediaQuery maxDeviceWidth={1800} minDeviceWidth={768}>
                <Mountain position={{left: "75vw", bottom: "2em" }}
                        color='grey'
                        size='small'
                        mountainTop={true}
                    />
            </MediaQuery>

            <OverFloor>
                 {props.children}
            </OverFloor>
            <Floor className='floor'>
            <MediaQuery maxDeviceWidth={768}>
                <Tree form={"triple-leaf"} size={"big"} color={"green"} position={{left: "20em", bottom: "15vh"}} zIndex={99}></Tree>
                <Flower  size={"small"} position={{left: "1em", top:"2em"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>
                <Flower  size={"small"} position={{left: "5em", top:"4em"}}  ></Flower>
                <Flower  size={"small"} position={{left: "16em", bottom:"5em"}} roundColor={"#ffcf1f"}></Flower>
                <Flower  size={"small"} position={{left: "20em", bottom:"1em"}}></Flower>
                <Flower  size={"small"} position={{left: "24em", bottom:"5em"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1800} minDeviceWidth={768}>
                <Tree form={"triple-leaf"} size={"big"} color={"green"} position={{left: "20em", bottom: "15vh"}}  zIndex={9}></Tree>
                <Tree form={"triple-leaf"} size={"big"} color={"green"} position={{left: "48em", bottom: "1em"}}  zIndex={99}></Tree>
                <Tree form={"triple-leaf"} size={"big"} color={"green"} position={{left: "75em", bottom: "6em"}}  zIndex={99}></Tree>
                <Flower  size={"small"} position={{left: "5em", top:"4em"}}  ></Flower>
                <Flower  size={"small"} position={{left: "16em", bottom:"5em"}} roundColor={"#ffcf1f"}></Flower>
                <Flower  size={"small"} position={{left: "28em", bottom:"1em"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>
                <Flower  size={"small"} position={{left: "34em", bottom:"5em"}} roundColor={"#ffcf1f"}></Flower>
                <Flower  size={"small"} position={{left: "45em", bottom:"5em"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>
                <Flower  size={"small"} position={{left: "55em", bottom:"5em"}} roundColor={"#ffcf1f"}></Flower>
                <Flower  size={"small"} position={{left: "63em", bottom:"1em"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>
                <Flower  size={"small"} position={{left: "75em", bottom:"1em"}}></Flower>
           
            </MediaQuery>

            </Floor>
         </div> 

    )
};

export default City;