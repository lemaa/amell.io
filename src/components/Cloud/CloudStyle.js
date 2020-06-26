import styled, { keyframes, css } from 'styled-components';

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
const CloudSection = styled.div`
    width: 120px;
    height: 40px;
    background: #f2f9fe;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    position: absolute;
    animation: ${props => props.animation ===true ?  css`${boucing} 4s infinite` : 'none'};
    left: ${props => props.position.left ? props.position.left : 'unset'};  
    right: ${props => props.position.right ?  props.position.right  : 'unset'}; 
    top: ${props => props.position.top ? props.position.top : 'unset'};  
    bottom: ${props => props.position.bottom ? props.position.bottom : 'unset'};  
    margin: ${props => props.position.margin ? props.position.margin : 'unset'};  

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
 
`;
const CloudContent = styled.div`
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
    color: #0ca9e1;
    font-family: MuseoModerno;
`;
export { 
    Shadow, 
    CloudSection, 
    CloudContent 
};