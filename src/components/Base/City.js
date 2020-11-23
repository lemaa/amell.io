import React , {useRef} from 'react';
import { useTranslation } from 'react-i18next';
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


                

            <OverFloor>
                <Mountain position={{left: "1vw", bottom: "-4em", margin:"0 auto" }}
                      color='grey'
                      size='small'
                      mountainTop={true}
                      />
                <Mountain position={{left: "7vw", bottom: "-4em", margin:"0 auto"  }}
                      color='green'
                      size='small'
                      mountainTop={true}
                      />
                <Mountain position={{left: "20vw", bottom: "-4em", margin:"0 auto"  }}
                      color='green'
                      size='medium'
                      mountainTop={true}
                      />
                <Mountain position={{left: "45vw", bottom: "-4em", margin:"0 auto"  }}
                      color='grey'
                      size='small'
                      mountainTop={true}
                      />
                <Mountain position={{left: "55vw", bottom: "-4em", margin:"0 auto"  }}
                      color='green'
                      size='small'
                      mountainTop={true}
                      />
                <MediaQuery  minDeviceWidth={768}>
                    <Mountain position={{left: "75vw", bottom: "-4em", margin:"0 auto"  }}
                        color='grey'
                        size='small'
                        mountainTop={true}
                    />
                    <Mountain position={{left: "80vw", bottom: "-4em", margin:"0 auto"  }}
                        color='grey'
                        size='small'
                        mountainTop={true}
                    />
                </MediaQuery>
                 {props.children}
            </OverFloor>
            <Floor id='floor'>
            <MediaQuery maxDeviceWidth={768}>
                <Tree form={"triple-leaf"} size={"big"} color={"green"} position={{left: "87vw", bottom: "15vh"}} zIndex={99}></Tree>
                <Flower  size={"small"} position={{left: "10vw", top:"7vh", margin:"0 auto"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>
                <Flower  size={"small"} position={{left: "30vw", top:"7vh", margin:"0 auto"}}  ></Flower>
                <Flower  size={"small"} position={{left: "50vw", bottom:"5vh", margin:"0 auto"}} roundColor={"#ffcf1f"}></Flower>
                <Flower  size={"small"} position={{left: "72vw", bottom:"7vh", margin:"0 auto"}}></Flower>
                <Flower  size={"small"} position={{left: "87vw", bottom:"5vh", margin:"0 auto"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>
            </MediaQuery>
            <MediaQuery  minDeviceWidth={768}>
                <Tree form={"triple-leaf"} size={"big"} color={"green"} position={{left: "20em", bottom: "15vh"}}  zIndex={9}></Tree>
                <Tree form={"triple-leaf"} size={"big"} color={"green"} position={{left: "48em", bottom: "7vh"}}  zIndex={99}></Tree>
                <Tree form={"triple-leaf"} size={"big"} color={"green"} position={{left: "75em", bottom: "15vh"}}  zIndex={99}></Tree>
                <Flower  size={"small"} position={{left: "20vw", bottom:"5vh", margin:"0 auto"}} roundColor={"#ffcf1f"}></Flower>
                <Flower  size={"small"} position={{left: "30vw", top:"4vh", margin:"0 auto"}} roundColor={"#ffcf1f"}></Flower>
                <Flower  size={"small"} position={{left: "40vw", bottom:"5vh", margin:"0 auto"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>
                <Flower  size={"small"} position={{left: "50vw", top:"4vh", margin:"0 auto"}} roundColor={"#ffcf1f"}></Flower>
                <Flower  size={"small"} position={{left: "60vw", bottom:"1vh", margin:"0 auto"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>
                <Flower  size={"small"} position={{left: "70vw", top:"4vh", margin:"0 auto"}}></Flower>
                <Flower  size={"small"} position={{left: "80vw", bottom:"1vh", margin:"0 auto"}}></Flower>
                <Flower  size={"small"} position={{left: "90vw", top:"4vh", margin:"0 auto"}}></Flower>
                <Flower  size={"small"} position={{left: "100vw", bottom:"1vh", margin:"0 auto"}} color={"#6e77e8"} roundColor={"#adb1e6"}></Flower>

            </MediaQuery>

            </Floor>
         </div> 

    )
};

export default City;