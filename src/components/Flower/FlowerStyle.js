import styled from 'styled-components';

const TreeSection = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    z-index: 99;
    border-radius: 15px;
    transform:  ${props => props.size==='extra-big' ? 'scale(2.5)' :props.size==='big' ? 'scale(1.7)' : props.size==='medium' ? ' scale(1.2)' : 'none'};  
    left: ${props => props.position.left ? props.position.left : 'unset'};  
    right: ${props => props.position.right ?  props.position.right  : 'unset'}; 
    top: ${props => props.position.top ? props.position.top : 'unset'};  
    bottom: ${props => props.position.bottom ? props.position.bottom : 'unset'};  
    margin: ${props => props.position.margin ? props.position.margin : 'unset'};
    background: ${props => props.color ? props.color: "#e3ade6"}
`;
 
const RoundLeaf = styled.div`
    display: block;
    width: 15px;
    height: 15px;
    background: ${props => props.roundColor ? props.roundColor: "#b947bf"};
    position: absolute;
    border-radius: 10px;
    top: 5px;
    left: 5px;
`;
export { 
    TreeSection,
    RoundLeaf
};