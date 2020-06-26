import styled from 'styled-components';

const TelephoneSection = styled.div`
    position: relative;
    left: ${props => props.position.left ? props.position.left : 'unset'};  
    right: ${props => props.position.right ?  props.position.right  : 'unset'}; 
    top: ${props => props.position.top ? props.position.top : 'unset'};  
    bottom: ${props => props.position.bottom ? props.position.bottom : 'unset'};  
    margin: ${props => props.position.margin ? props.position.margin : 'unset'}; 
 `;
const TelephoneFacade = styled.div`
    width: 4em;
    height: 9em;
    background: #d31f2b;
    z-index: 9;
    position: absolute;
    border: 3px solid #891b20;
    border-left: 4px solid #d31f2b;
    border-bottom: none;
    border-radius: 50px 50px 0 0;
    top: -3em;
    &::before{
        content: ' ';
        position: absolute;
        top: 7em;
        width: 4em;
        height: 9em;
        background: #d31f2b;
        position: absolute;
        border: 2px solid #d31f2b;
        border-bottom: none;
        border-radius: 50px 50px 0 0;
        top: 0em;
        box-shadow: -3px -5px 0px 2px #a8212a;

    }
    &::after{
        content: ' ';
        width: 5.5em;
        background: #444242;
        height: 10px;
        position: absolute;
        bottom: -3px;
        left: -13px;
        margin: auto;
        right: 0px;
        border-radius: 10px;
    
        
    }
  `;
const TelephoneContent = styled.div`
    left: 0px;
    top: 25px;
    position: relative;
    text-transform: uppercase;
    font-family: MuseoModernoBold;
    font-size: 10px;
    height: 15px;
    margin: 3px;
    text-align: center;
    /* background: #ffca53; */
    color: #FFFFFF;
    text-shadow: 0 0 5px #FFF, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #f4951b, 0 0 30px #f4951b, 0 0 40px #f4951b, 0 0 55px #f4951b, 0 0 75px #f4951b;
  `;
const Doorknob = styled.div` 
    display: block;
    width: 3px;
    height: 11px;
    background: #e6b34b;
    position: absolute;
    top: 5em;
    right: 2px;
    border-radius: 15px;
}
`;
const TelephoneWindow = styled.div`
    display: block;
    background: #a0d6ed;
    position: absolute;
    width: 3em;
    height: 4.5em;
    border-radius: 0;
    bottom: 1em;
    right: 6px;
    border: 2px solid #d31f2b;

    .horizontal-1 {
        display: block;
        height: 3px;
        background: #d31f2b;
        position: absolute;
        top: -36px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
     }
     .horizontal-2 {
        display: block;
        height: 3px;
        background: #d31f2b;
        position: absolute;
        top: 0em;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
     }
     .horizontal-3 {
        display: block;
        height: 3px;
        background: #d31f2b;
        position: absolute;
        top: 35px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
     }
    .vertical-1 {
        display: block;
        width: 3px;
        height: 4.5em;
        background: #d31f2b;
        position: absolute;
        top: 0;
        right: -1em;
        bottom: 0;
        left: 0;
        margin: auto;
    }
    .vertical-2 {
        display: block;
        width: 3px;
        height: 4.5em;
        background: #d31f2b;
        position: absolute;
        top: 0;
        right: 1em;
        bottom: 0;
        left: 0;
        margin: auto;
    }
`;
 
export{
    TelephoneSection,
    TelephoneFacade,
    TelephoneWindow,
    TelephoneContent,
    Doorknob 
}