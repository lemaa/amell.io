import styled, { keyframes } from 'styled-components';

const spinning = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;
const SunSection = styled.div`
    position: relative;
    left: ${props => props.position.left ? props.position.left : 'unset'};  
    right: ${props => props.position.right ?  props.position.right  : 'unset'}; 
    top: ${props => props.position.top ? props.position.top : 'unset'};  
    bottom: ${props => props.position.bottom ? props.position.bottom : 'unset'};  
    margin: ${props => props.position.margin ? props.position.margin : 'unset'}; 
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
 
  
export { 
    SunSection,
    SunFace, 
    SunEye, 
    SunPupil,
    SunLines
};