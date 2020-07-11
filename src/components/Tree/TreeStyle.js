import styled from 'styled-components';
 
const greenBorderAfter= 'transparent transparent #1B5E20 transparent';
const greenBorderBefore= 'transparent transparent #388E3C transparent';
const lightGreenBorderAfter= 'transparent transparent #7e7f14 transparent';
const lightGreenBorderBefore= 'transparent transparent #a0a11c transparent';
const pinkBorderAfter= 'transparent transparent #ce6dd3 transparent';
const pinkBorderBefore='transparent transparent #e3ade6 transparent' ;
const purpleBorderAfter= 'transparent transparent #6e77e8 transparent';
const purpleBorderBefore='transparent transparent #adb1e6 transparent' ;

 const TreeSection = styled.div`
    background: #795548;
    position: absolute;
    width: 10px;
    height: 30px;
    z-index: ${props => props.zIndex ? props.zIndex : 'unset'};
    transform:  ${props => props.size==='extra-big' ? 'scale(2.5)' :props.size==='big' ? 'scale(1.7)' : props.size==='medium' ? ' scale(1.2)' : 'none'};  
    left: ${props => props.position.left ? props.position.left : 'unset'};  
    right: ${props => props.position.right ?  props.position.right  : 'unset'}; 
    top: ${props => props.position.top ? props.position.top : 'unset'};  
    bottom: ${props => props.position.bottom ? props.position.bottom : 'unset'};  
    margin: ${props => props.position.margin ? props.position.margin : 'unset'};
`;
 
const Leaf = styled.div`
    position: relative;
    left: 5px;    
    &::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 40px 20px;
        border-color: ${props => props.color==='pink' ? pinkBorderBefore : props.color==='light-green' ? lightGreenBorderBefore : props.color==='purple' ? purpleBorderBefore : greenBorderBefore};
        position: absolute;
        right: 9px;
        top: -3em;
    }
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width:0 20px 40px 0; 
        border-color: ${props => props.color==='pink' ? pinkBorderAfter : props.color==='light-green' ? lightGreenBorderAfter : props.color==='purple' ? purpleBorderAfter : greenBorderAfter};
        position: absolute;
        border-radius: 0; 
        top: -3em; 
        right: -9px; 
      }

    &:nth-child(1) {
        top: 10px;
     }
    &:nth-child(2) {
        top: 0px;
    }
    &:nth-child(3) {
        top: -10px;
    }
`;

const RoundLeaf = styled.div`

    position: relative;
    left: 5px;    
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 32px 20px; 
        border-color: ${props => props.color==='pink' ? '#e3ade6' : props.color==='light-green' ? '#a0a11c': props.color==='purple' ? '#adb1e6' : '#1B5E20'};
        position: absolute;
        border-radius: 10px; 
        top: -1.8em; 
        right: 0; 
      }
`;
export { 
    TreeSection,
    RoundLeaf,
    Leaf
};