import styled, { keyframes } from 'styled-components';

const boucing = keyframes`
    0% {
        transform: translateY(40px);
        animation-timing-function: ease-in;
    }

    50% {
        transform: translateY(50px);
        animation-timing-function: ease-out;
    }

    100% {
        transform: translateY(40px);
    }
`;

const spinning = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;
const Sky = styled.div`
    height: 70vh;
`;

const Sun = styled.div`
`;
const SunFace = styled.div`
    position: absolute;
    top: 2.5em;
    right: 0;
    left: 0;
    width: 6em;
    margin: 0 auto;
    height: 6em;
    background: #ffca53;
    border-radius: 6em;
    opacity: 1;
    z-index: 9;
    -webkit-box-shadow: -2px 3px 31px -3px #ffca53;
    -moz-box-shadow: -2px 3px 31px -3px #ffca53;
    box-shadow: -2px 3px 31px -3px #ffca53;
`;
const SunEye = styled.div`
    width: 25px;
    height: 25px;
    background: white;
    position: relative;
    display: inline-block;
    top: 2em;
    left: 1.6em;
    border-radius: 15px;
`;
const SunPupil = styled.div`
    background: #333;
    border-radius: 15px;
    top: 3px;
    left: 19%;
    width: 50%;
    height: 50%;
    position: relative;
    transform-origin: bottom;
`;
const SunLines = styled.div`
    position: absolute;
    top: 1em;
    top: 7px;
    right: 0;
    left: 0;
    width: 11em;
    margin: 0 auto;
    height: 11em;
    animation: ${spinning}  60s linear infinite; 

    .sun-line{
        background: #ffca53;
        position: absolute;
        margin: 0 auto;
        border-radius: 15px;
        box-shadow: 5px 10px 39px 2px #FFC107;
        &.first{
            height: 25px;
            width: 7px;
            top: 0em;
            right: 0;
            left: 0;
        }
        &.second{
            height: 7px;
            width: 25px;
            top: 5em;
            right: 0px;
            left: 9em;
         }
        &.third{
            height: 7px;
            width: 25px;
            top: 5em;
            right: 9em;
            left: 0;
         }
        &.fourth{
            height: 7px;
            width: 25px;
            top: 2em;
            right: 0;
            left: 7em;
            -webkit-transform: rotate(140deg);
            -ms-transform: rotate(140deg);
            transform: rotate(140deg);
        }
        &.fifth{
            height: 7px;
            width: 25px;
            top: 2.5em;
            right: 6em;
            left: 0;
            -webkit-transform: rotate(37deg) translate(-10px, 0px);
            -ms-transform: rotate(37deg) translate(-10px, 0px);
            transform: rotate(37deg) translate(-10px, 0px);
        
        }
        &.sixth{
            height: 25px;
            width: 7px;
            right: 0;
            left: 0;
            bottom: 0px;
        }
        &.seventh{
            height: 7px;
            width: 25px;
            top: 8.5em;
            right: 0;
            left: 6.5em;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        &.eightth{
            height: 7px;
            width: 25px;
            top: 8em;
            right: 0;
            left: -6em;
            -webkit-transform: rotate(30deg);
            -ms-transform: rotate(30deg);
            transform: rotate(140deg) translate(7px, 5px);
        }
    }
`;
const Shadow = styled.span`
    width: 87.5px;
    position: absolute;
    bottom: -10px;
    background: #000;
    z-index: -1;
    box-shadow: 0 0 25px 8px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 0 25px 8px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 0 25px 8px rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
`;
const Cloud = styled.div`
    width: 120px;
    height: 40px;
    background: #f2f9fe;
    background: linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
    background: -o-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    position: absolute;
    animation: ${boucing} 4s infinite;
    cursor: pointer;
    &::after,
    &::before {
        content: '';
        position: absolute;
        background: #f2f9fe;
        z-index: -1;
    }
    &::after {
        width: 40px;
        height: 40px;
        top: -17px;
        left: 10px;
        border-radius: 100px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
    }
    &::before {
        width: 60px;
        height: 55px;
        top: -30px;
        right: 15px;
        border-radius: 200px;
        -webkit-border-radius: 200px;
        -moz-border-radius: 200px;
    }
    &.first{
        top: 0em;
        left: 1em;
    }
    &.second{
        top: 9em;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    &.third{
        top: 1em;
        right: 2em;
    }
`;
const CloudContent = styled.div`
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
    color: #0ca9e1;
    font-family: "Arial Black", Gadget, sans-serif;
`;
const Mountains = styled.div`

    .mountain {
        position: absolute;
        bottom: 2em;
        height: 10em;
        width: 10em;
        transform: rotate(45deg);
        border-top-left-radius: 14%;
        border-top-right-radius: 80% 20%;
        border-bottom-left-radius: 20% 80%;
        background: linear-gradient(45deg, #737373 50%, transparent 50%) no-repeat, linear-gradient(-45deg, transparent 50%, #737373 50%) 0 90px no-repeat, linear-gradient(135deg, grey 57.5%, transparent 57.5%) no-repeat;
        background-size: 57.5%, 57.5%, 100%;

        &:nth-child(1), &:nth-child(2) {
            transform: rotate(45deg) scale(1.2);
        }
        &:nth-child(3) ,  &:nth-child(5), &:nth-child(7)  {
            background: linear-gradient(45deg, #8a8b18 50%, transparent 50%) no-repeat, linear-gradient(-45deg, transparent 50%, #8a8b18 50%) 0 90px no-repeat, linear-gradient(135deg, #a0a11c 57.5%, transparent 57.5%) no-repeat;
            background-size: 57.5%, 57.5%, 100%;
        }
        &:nth-child(2) {
            left: 20vw;
        }
        &:nth-child(3) {
            left: 10vw;
        }
        &:nth-child(4) {
            left: 50vw;
        }
        &:nth-child(5) {
            left: 55vw;
        }
        &:nth-child(6) {
            left: 75vw;
        }
        &:nth-child(7) {
            left: 90vw;
            transform: rotate(45deg) scale(1.7);
        }
    }
`;
const OverFloor= styled.div`
    height: 12vh;
`;
const Floor= styled.div`
    height: 18vh;
    position: absolute;
    width: 100%;
    background: linear-gradient(to bottom, #8cb44b, #36471b);
`;

export { 
    Sky,
    Sun,
    SunFace, 
    SunEye, 
    SunPupil,
    SunLines, 
    Shadow, 
    Cloud, 
    CloudContent, 
    Mountains,
    OverFloor,
    Floor

};