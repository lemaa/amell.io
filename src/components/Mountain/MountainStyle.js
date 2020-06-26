import styled from 'styled-components';

const greyMountain = 'linear-gradient(45deg, #737373 50%, transparent 50%) no-repeat, linear-gradient(135deg, grey 57.5%, transparent 57.5%) no-repeat';
const greenMountain = 'linear-gradient(45deg, #8a8b18 50%, transparent 50%) no-repeat, linear-gradient(135deg, #a0a11c 57.5%, transparent 57.5%) no-repeat';

const MountainSection = styled.div`
    position: absolute;
    height: 10em;
    width: 10em;
    border-top-left-radius: 14%;
    border-top-right-radius: 80% 20%;
    border-bottom-left-radius: 20% 80%;
    transform:  ${props => props.size==='big' ? 'rotate(45deg) scale(1.7)' : props.size==='medium' ? 'rotate(45deg) scale(1.2)' : 'rotate(45deg)'};  
    left: ${props => props.position.left ? props.position.left : 'unset'};  
    right: ${props => props.position.right ?  props.position.right  : 'unset'}; 
    top: ${props => props.position.top ? props.position.top : 'unset'};  
    bottom: ${props => props.position.bottom ? props.position.bottom : 'unset'};  
    margin: ${props => props.position.margin ? props.position.margin : 'unset'}; 
    background: ${props => (props.color==='green') ? greenMountain : greyMountain};
    background-size: 57.5%,100%,100%;
`;
const MountainTop = styled.div`
    position: absolute;
    right: 120px;
    top: -3px;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 25px solid #ceeaf6;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
`;
const MountainCap = styled.div`
    position: absolute;
    top: 24px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 11px solid #ceeaf6;
    &:nth-child(1) {
        left: -30px;
    }
    &:nth-child(2) {
        left: -10px;
    }
    &:nth-child(3) {
        left: 8px;
    }
`;

export { 
    MountainSection,
    MountainTop,
    MountainCap
};