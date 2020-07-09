import styled  from 'styled-components';

 
const ProgressBarSection = styled.div`
    overflow: hidden;
    height: 10px;
    background-color: #f7f7f7;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 0px;
    width: ${props => props.width ? `${props.width}%`: '100%'};
`;
const Bar= styled.div`
    width: ${props => props.barWidth ? `${props.barWidth}%`: '0%'};
    height: 10px;
    background-color: ${props => props.barColor ? props.barColor: '#0e90d2'};
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    transition: width 0.6s ease;
    border-radius: 0 15px 15px 0;
    &:hover{
        background-color: ${props => props.barHoverColor ? props.barHoverColor: '#0e90d2'};

    }
`;
export{
    ProgressBarSection,
    Bar
}