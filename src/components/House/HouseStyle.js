import styled, { keyframes, css } from 'styled-components';

const smokeL = keyframes`
    0% {
        -webkit-transform: scale(0.2) translate(0, 0);
        transform: scale(0.2) translate(0, 0);
    }
    10% {
        opacity: 1;
        -webkit-transform: scale(0.2) translate(0, -5px);
        transform: scale(0.2) translate(0, -5px);
    }
    100% {
        opacity: 0;
        -webkit-transform: scale(1) translate(-20px, -130px);
        transform: scale(1) translate(-20px, -130px);
    }
`;
const smokeR = keyframes`
    0% {
        -webkit-transform: scale(0.2) translate(0, 0);
        transform: scale(0.2) translate(0, 0);
    }
    10% {
        opacity: 1;
        -webkit-transform: scale(0.2) translate(0, -5px);
        transform: scale(0.2) translate(0, -5px);
    }
    100% {
        opacity: 0;
        -webkit-transform: scale(1) translate(20px, -130px);
        transform: scale(1) translate(20px, -130px);
    }
`;
const doorOpen = keyframes`
    from {
        transform: none;
    }
    to {
        transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg);
    }
`;

const HouseSection = styled.div`
    position: absolute;
    left: ${props => props.position.left ? props.position.left : 'unset'};  
    right: ${props => props.position.right ?  props.position.right  : 'unset'}; 
    top: ${props => props.position.top ? props.position.top : 'unset'};  
    bottom: ${props => props.position.bottom ? props.position.bottom : 'unset'};  
    margin: ${props => props.position.margin ? props.position.margin : 'unset'}; 
 `;
const HouseRoof = styled.div`
    display: block;
    width: 5em;
    height: 5em;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background: #f4951b;
    border-top: 7px solid #951580;
    border-left: 7px solid #951580;
    z-index: 3;
    position: absolute;
    top: -2em;
    box-shadow: inset 1px 1px 10px 0px #c49b6d;
`;
const HouseFacade = styled.div`
    width: 7em;
    height: 5.1em;
    background: #f4951b;
    margin-left: -13px;
    z-index: 9;
    position: absolute;
    border-bottom: 5px solid #583f22;
    top: 1em;  
  `;
const HouseContent = styled.div`
    left: 2em;
    top: -12px;
    position: relative;
    text-transform: uppercase;
    font-family: MuseoModernoBold;
    color: #FFFFFF;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #f4951b, 0 0 30px #f4951b, 0 0 40px #f4951b, 0 0 55px #f4951b, 0 0 75px #f4951b;
  `;
const HouseDoor = styled.div` 
    display: block;
    width: 2em;
    height: 4em;
    background: #381616;
    position: absolute;
    bottom: 0;
    right: 1em;
    border-width: 3px 3px 0 3px;
    border-color: #eedfcf;
    border-style: solid;
`;
const FrontDoor= styled.div`
    display: block;
    width: 2em;
    height: 4em;
    background: #ab1893;
    position: absolute;
    bottom: 0;
    right: 0;
    transform-origin: left;
    z-index: 9999;
    animation: ${props => props.doorAnimation ===true ?  css`${doorOpen} 1s 1 forwards 1s` : 'none'};

    
`;
const Doorknob = styled.div` 
    display: block;
    width: 7px;
    height: 7px;
    background: #754d25;
    position: absolute;
    top: 26px;
    right: 5px;
    border-radius: 15px;
`;
const HouseWindow = styled.div`
    display: block;
    background: #a0d6ed;
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: ${props => props.form ==='round' ? '50%' : '0'};
    bottom: ${props => props.form ==='round' ? '6em' : '2.4em'};
    right: ${props => props.form ==='round' ? '2.5em' : '4.7em'};
    border: 2px solid #eedfcf;

    .horizontal {
        display: block;
        height: 3px;
        background: #eedfcf;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
     }
    .vertical {
        display: block;
        width: 3px;
        height: 30px;
        background: #eedfcf;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
`;
const HouseChimney = styled.div`
    display: block;
    width: 1.5em;
    height: 3em;
    background: #781267;
    z-index: 3;
    position: absolute;
    top: -3em;
    left: 4em;
`;
const Smoking = styled.div`
    position: absolute;
    z-index: 101;
    width: 110px;
    height: 170px;
    top: -170px;
    left: -45px;
    pointer-events: none;

    span {
        display: block;
        position: absolute;
        bottom: 0;
        bottom: -28px;
        left: 20px;
        height: 0px;
        width: 0px;
        border: 35px solid #fff;
        border-radius: 50%;
        opacity: 0;
        -webkit-transform: scale(0.2);
        -ms-transform: scale(0.2);
        transform: scale(0.2);
    }
    .s0 {
        -webkit-animation: ${smokeL} 10s 0s infinite;
        animation: ${smokeL} 10s 0s infinite;
    }

    .s1 {
        -webkit-animation: ${smokeR} 10s 1s infinite;
        animation: ${smokeR} 10s 1s infinite;
    }

    .s2 {
        -webkit-animation: ${smokeL} 10s 2s infinite;
        animation: ${smokeL} 10s 2s infinite;
    }
    .s3 {
        -webkit-animation: ${smokeR} 10s 3s infinite;
        animation: ${smokeR} 10s 3s infinite;
    }
    .s4 {
        -webkit-animation: ${smokeL} 10s 4s infinite;
        animation: ${smokeL} 10s 4s infinite;
    }
    .s5 {
        -webkit-animation: ${smokeR} 10s 5s infinite;
        animation: ${smokeR} 10s 5s infinite;
    }
    .s6 {
        -webkit-animation: ${smokeL} 10s 6s infinite;
        animation: ${smokeL} 10s 6s infinite;
    }
    .s7 {
        -webkit-animation: ${smokeR} 10s 7s infinite;
        animation: ${smokeR} 10s 7s infinite;
    }
    .s8 {
        -webkit-animation: ${smokeL} 10s 8s infinite;
        animation: ${smokeL} 10s 8s infinite;
    }
    .s9 {
        -webkit-animation: ${smokeR} 10s 9s infinite;
        animation: ${smokeR} 10s 9s infinite;
    }
`;
export{
    HouseSection,
    HouseRoof,
    HouseFacade,
    HouseContent,
    HouseDoor,
    FrontDoor,
    HouseWindow,
    Doorknob,
    HouseChimney,
    Smoking
}