import styled, { keyframes } from 'styled-components';
 
const display = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;

    }
`;
const About = styled.div`
    float: left;
    padding: 7px;
    background: rgba(242, 249, 254, 0.88);
    position: relative;
    margin-right: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 4px rgba(242, 249, 254, 0.28);
    left: 8em;
    top: -11em;
    width: 70%;
    opacity: 0;
    animation: ${display} 2s 1 forwards 3s;

    &::after{
	    content: ' ';
	    position: absolute;
	    width: 0;
	    height: 0;
	    left: 3em;
        right: auto;
        top: auto;
	    bottom: -20px;
	    border: 12px solid;
	    border-color: #f2f9fe transparent transparent #f2f9fe;
    }
    @media (max-width: 768px) {
        left: 1em;
        top: -16em;
        width: 90%;
        z-index: 10;
        &::after{
            left: 12em;
        }
    }
 `;
const WelcomText = styled.div`
    font-family: MuseoModerno;
    line-height: 1.7em;
    letter-spacing: 0.5px;
    text-align: center;
  `;
 
export{
    About,
    WelcomText
}