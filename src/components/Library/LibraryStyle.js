import styled from 'styled-components';

const LibrarySection = styled.div`
    position: relative;
    left: ${props => props.position.left ? props.position.left : 'unset'};  
    right: ${props => props.position.right ?  props.position.right  : 'unset'}; 
    top: ${props => props.position.top ? props.position.top : 'unset'};  
    bottom: ${props => props.position.bottom ? props.position.bottom : 'unset'};  
    margin: ${props => props.position.margin ? props.position.margin : 'unset'}; 
 `;
const LibrarySideFacade = styled.div`
    width: 4em;
    height: 5.1em;
    background: #d49758;
    margin-left: -13px;
    z-index: 9;
    position: absolute;
    border-bottom: 5px solid #583f22;
    top: 1em;
    left: 6em;
    box-shadow: inset 7px -1px 5px 0px rgba(92,60,26,0.31);

    &::before{
        content: ' ';
        background: #8b5b2a;
        position: absolute;
        top: -10px;
        height: 10px;
        width: 6em;
        left: -1.5em;
        box-shadow: -10px 5px 5px 0px rgba(92, 60, 26, 0.51);
    }
`;
const LibraryFacade = styled.div`
    width: 6em;
    height: 7.1em;
    background: #d49758;
    margin-left: -13px;
    z-index: 9;
    position: absolute;
     border-bottom: 5px solid #583f22;
    top: -1em;
    box-shadow: inset 1px 9px 5px 0px rgba(92, 60, 26, 0.31);
    &::before{
        content: ' ';
        background: #8b5b2a;
        position: absolute;
        top: -10px;
        height: 10px;
        width: 7em;
        left: -7px;
        
    }
  `;
const LibraryContent = styled.div`
    left: 1em;
    top: 0px;
    position: relative;
    text-transform: uppercase;
    font-family: MuseoModernoBold;
    color: #FFFFFF;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #f4951b, 0 0 30px #f4951b, 0 0 40px #f4951b, 0 0 55px #f4951b, 0 0 75px #f4951b;

  `;
const LibraryDoor = styled.div` 
    display: block;
    width: 1.5em;
    height: 2.7em;
    background: #381616;
    position: absolute;
    bottom: 0;
    right: 2em;
    border-width: 3px 3px 0 3px;
    border-color: #eedfcf;
    border-style: solid;
`;
const FrontDoor= styled.div`
    display: block;
    width: 2em;
    height: 2.7em;
    background: #6f9af9;
    position: absolute;
    bottom: 0;
    right: -9px;
    transform-origin: left;
    z-index: 9999;
    transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg);
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
const LibraryWindow = styled.div`
    display: block;
    background: #a0d6ed;
    position: absolute;
     height: 15px;
    border-radius: 0;
     right: 0.8em;
    border: 2px solid #eedfcf;
 
    bottom: ${props => props.bottom ? props.bottom : 0};
    width: ${props => props.width  ? props.width : 0};

    .vertical {
        display: block;
        width: 3px;
        height: 15px;
        background: #eedfcf;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
`;
  
export{
    LibrarySection,
    LibraryFacade,
    LibrarySideFacade,
    LibraryContent,
    LibraryDoor,
    FrontDoor,
    LibraryWindow,
    Doorknob,
 }