import styled, { keyframes, css } from 'styled-components';

const shadow =  keyframes` 
    from {
      box-shadow: 0 0 0 0px #78daf9;
    }
    to {
      box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
    }
 `;
 
const TimelineSection = styled.ul`
    list-style: none;
    padding: 0;
    ${props => { 
        if (props.timelineStyle ==="progress"){
            return css`
                padding: 0;
                margin: 0;
        `;
        } else if(props.timelineStyle ==="icon"){
            return css`
                box-sizing: border-box;
                padding: 0 0 25px;
                width: 100%;
                text-align: center;
                display: -webkit-box;
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-evenly;
        `;
        }
    }}
`;

 
const TimelineContent = styled.li`
    ${props => { 
        if (props.timelineStyle === "timeline"){
            return css`
                position: relative;
                margin-left: 15px;
                padding-left: 25px;
                padding-bottom: 15px;
                text-align: left;
                font-size: 14px;
                line-height: 1.2em;
                &::before,
                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                }
                &::before {
                    width: 7px;
                    height: 7px;
                    border: 3px solid #ffffff;
                    background: #78daf9;
                    border-radius: 50%;
                    left: 0;
                    z-index: 1;
                }
                &::after {
                    width: 3px;
                    height: 100%;
                    background: #ffffff;
                    left: 5px;
                    top: 0;
                }
                &:first-of-type::before {
                    width: 10px;
                    height: 10px;
                    left: 0;
                }
                &:last-of-type {
                    padding-bottom: 3px;
                }
                &:last-of-type::after {
                    border-radius: 1.5px;
                }
    
                &:hover::before {
                    -webkit-animation: ${shadow} 1.2s infinite;
                            animation: ${shadow} 1.2s infinite;
                }
            `;
        }
        else if (props.timelineStyle === "progress") {
            return  css`
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                -webkit-transition-duration: 0.3s;
                -webkit-transition-duration: 0.3s;
                transition-duration: 0.3s;
                font-size: 13px;
                text-align: left;
                padding-left: 25px;
            `;
        }else if(props.timelineStyle ==="icon"){
            return css`
                display: -webkit-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                &:hover img{
                    transform: scale(1.5);
                }
        `;
        }
    }}
    &:hover span {
        color: #78daf9;
    }
`;
const Label = styled.span`
    -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
    width: ${props => props.labelWidth ? props.labelWidth : '50%'};
`;
const Text = styled.span`
    width: ${props => props.ContentWidth ? props.ContentWidth : '50%'};


`;
const TextSmall = styled.small`
    display: block;
    opacity: 0.7;

`;
const Dates = styled.small`
    display: block;
    opacity: 0.7;
`;
const Icon = styled.i`
 
    img{
        width: 40px;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }

`;
export{
    TimelineSection,
    TimelineContent,
    Label,
    Text,
    TextSmall,
    Dates,
    Icon
}