import styled, { keyframes, css } from 'styled-components';
 
const display = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;

    }
`;
const ContentSection = styled.div`
    float: left;
    padding: 7px;
    background: rgba(242, 249, 254, 0.88);
    position: relative;
    margin-right: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 4px rgba(242, 249, 254, 0.28);
    width: 70%;
    opacity: ${props => props.animation === true ? '0' : '1'};
    animation: ${props => props.animation === true ? css`${display} 1s 1 forwards` : 'none'};
    animation-delay: ${props =>  props.animationStartDelay ? props.animationStartDelay: '0s'};
    font-family: MuseoModerno;
    line-height: 1.7em;
    letter-spacing: 0.5px;
    text-align: center;
    min-height: 10em;
    max-height: 30em;
    z-index: 10;
    left: ${props => props.position.left ? props.position.left : 'unset'};  
    right: ${props => props.position.right ?  props.position.right  : 'unset'}; 
    top: ${props => props.position.top ? props.position.top : 'unset'};  
    bottom: ${props => props.position.bottom ? props.position.bottom : 'unset'};  
    margin: ${props => props.position.margin ? props.position.margin : 'unset'}; 



    &::after{
	    content: ' ';
	    position: absolute;
	    width: 0;
	    height: 0;
	    left: 3em;
        right: auto;
        top: auto;
	    bottom: -24px;
	    border: 12px solid;
	    border-color: rgba(242,249,254,0.88) transparent transparent rgba(242,249,254,0.88);
    }
    @media (max-width: 768px) {
        left: 1em;
        top: ${props => props.position.topMobile ? props.position.topMobile : '-15em'};
        width: 90%;
        &::after{
            left: 12em;
        }
    }
 `;
 
export{
    ContentSection
}