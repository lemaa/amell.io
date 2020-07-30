import styled, { keyframes ,css} from 'styled-components';

const movingDefault = keyframes`

    0% {
        transform: scale(0.4);
        opacity: 1;
        left: ${props => props.startLeftPostionAnimation?`${props.startLeftPostionAnimation}em`: '-13.5em'}

    }

    100%{
 
        transform: scale(0.9);
        opacity: 1;
        left: 12em;
    }
`;

const movingMobile = keyframes`

    0% {
        transform: scale(0.4);
        opacity: 1;
        left: -3em;

    }

    100%{
 
        transform: scale(0.9);
        opacity: 1;
        left: 9em;
    }
`;

const AvatarSection = styled.div`
    left: ${props => props.animation ===true ? `${props.startLeftPostionAnimation}em` : '12em'};  
    position: absolute;
    bottom: -2em;
    z-index: 999;
    transform: ${props => props.animation ===true ? 'scale(0.4)' : 'scale(1)'};  
    opacity: ${props => props.animation ===true ? '0' : '1'};
    animation: ${props => props.animation ===true ? css`4s 1 forwards 2s ${movingDefault}` : 'none'};
    @media (max-width: 768px) {
        left: ${props => props.animation ===true ? '-3em' : '9em'};  
        animation: ${props => props.animation ===true ?  css`4s 1 forwards 2s ${movingMobile}` : 'none'};
    }
 `;
const AvatarHead = styled.div`
    border-radius: 10px;
    height: 30px;
    width: 20px;
    padding: 20px;
    float: left;
    position: relative;
 `;
const Hair = styled.div`
    position: absolute;
    background: #381615;
    top: 10%;
    left: 50%;
    height: 55px;
    width: calc(45px);
    margin-left: calc((-45px) / 2);
    border-radius: 60px 60px 10px 10px;

    &::before,  &::after {
        content: "";
        position: absolute;
        top: 0px;
        z-index: 15;
        height: calc(66px - 8px);
        width: 39px;
    }
    &::before {
        border-left: 12px solid #381615;
        border-radius: 30px 42px 1px 6px;
        left: 0px;
    }
    &::after {
        border-right: 20px solid #4a1e1c;
        border-radius: 5px 96px 50px 5px;
        right: 0;
    }
    .right-side-fringe {
        position: absolute;
        top: -3%;
        right: 2px;
        height: 40px;
        width: 20px;
        border-right: #381615 solid 12px;
        border-radius: 5px 100px 100px 50px;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-30deg);
        z-index: 20;
    }
    &::after {
        display: none;
    }
 `;
const Eyes = styled.div`
    position: absolute;
    top: 37%;
    left: 50%;

    &::before, &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        border: 3px solid #171717;
        border-radius: 10px;
    }
    &::before {
        left: 3px;
    }
    &::after {
        right: 3px;
    }
 `;
const Ears = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    width: 26px;
    height: 50px;
    margin-top: calc(-56px / 2);
    margin-left: calc(-26px / 2);
    &::before,  &::after {
        content: "";
        position: absolute;
        top: 44%;
        background: #ffcd94;
        height: 9px;
        width: 4px;
        z-index: 10;
    }
    &::before {
        left: -8px;
        border-radius: 16px 8px 8px 16px;
    }
    &::after {
        right: -8px;
        border-radius: 8px 16px 16px 8px;
    }
 `;
const Mouth = styled.div`
    position: absolute;
    top: -9%;
    left: 50%;
    width: 8px;
    height: 38px;
    margin-left: calc((-9px + -2px) / 2);
    border: 2px solid #171717;
    border-radius: 20px;
    border-color: transparent transparent #171717 transparent;
 `;
const Head = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    width: 35px;
    height: 45px;
    margin-top: calc(-45px / 2);
    margin-left: calc(-35px / 2);
    background: #ffcd94;
    overflow: hidden;
    border-radius: 50px 50px 50px 50px;
 `;
const Nose = styled.div`
    position: absolute;
    top: 57%;
    left: 50%;
    height: 1px;
    width: 1px;
    margin-left: calc(-3px / 2);
    border: 2px solid #171717;
    border-color: transparent transparent #171717 #171717;
    border-radius: 0 10px 10px;
    -webkit-transform: rotate(9deg);
    -moz-transform: rotate(9deg);
    -o-transform: rotate(9deg);
    -ms-transform: rotate(9deg);
    -webkit-transform: rotate(9deg);
    -ms-transform: rotate(9deg);
    transform: rotate(9deg);
 `;
const Blush = styled.div`
    position: absolute;
    top: 70%;
    left: 30%;
    height: 10px;
    width: 78px;
    margin-left: calc(-78px / 2);
 
    &::before,  &::after {
        -moz-box-shadow: 0 0 15px 8px rgba(222,93,131,0.6);
        -webkit-box-shadow: 0 0 15px 8px rgba(222,93,131,0.6);
        box-shadow: 0 0 15px 8px rgba(222,93,131,0.6);
        content: "";
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
    }
    &::before {
        left: 28px;
    }
    &::after {
        right: 12px;
    }
 `;
const AvatarBody = styled.div`
    background: #ab1893;
    border-radius: 8px;
    height: 3px;
    width: 5px;
    padding: 15px;
    top: 3.5em;
    margin-left: calc((24px) / 2);
    position: relative;
 `;
const Hands = styled.div`
    position: absolute;
    top: 0px;
    left: 50%;

    .hand-1, .hand-2 {
        position: absolute;
        top: -2px;
        height: 33px;
        width: 11px;
        border-bottom: #ffcd94 solid 8px;
        border-radius: 12px 12px 15px 15px;
        background: #ab1893;
    }
    .hand-2 {
        left: 19px;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
 
    }
    .hand-1 {
        right: 20px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
 `;
const Tshirt= styled.div`
    height: 3px;
    width: 5px;
    background: #ffcd94;
    padding: 5px;
    margin-left: calc((-10px) / 2);
    margin-top: calc((-31px) / 2);
    border-radius: 6px 6px 16px 17px;
 `;
const Foot = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 9;
    .feet-1, .feet-2 {
        position: absolute;
        top: 0px;
        height: 33px;
        width: 11px;
        border-bottom: #381616 solid 7px;
        border-radius: 5px 5px 15px 15px;
        background: #6f8cdd;
    }
    .feet-2 {
        left: 6px;
        -webkit-transform: rotate(-10deg);
        -ms-transform: rotate(-10deg);
        -webkit-transform: rotate(-10deg);
        -ms-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    .feet-1 {
        right: 6px;
        -webkit-transform: rotate(10deg);
        -ms-transform: rotate(10deg);
        -webkit-transform: rotate(10deg);
        -ms-transform: rotate(10deg);
        transform: rotate(10deg);
    }
 `;
export{
    AvatarSection,
    AvatarHead,
    Hair,
    Ears,
    Eyes,
    Mouth,
    Head,
    Nose,
    Blush,
    AvatarBody,
    Hands,
    Tshirt,
    Foot
}