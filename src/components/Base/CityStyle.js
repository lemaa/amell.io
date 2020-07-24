import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Sky = styled.div`
    height: 70vh;
`;

  
const OverFloor= styled.div`
    position: relative;
    height: 12vh;
`;
const Floor= styled.div`
    height: 18vh;
    position: relative;
    width: 100%;
    background: linear-gradient(to bottom, #8cb44b, #36471b);
`;

const TextLink = styled(Link)`
    color: #0ca9e1; 
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    font-family: MuseoModernoBold;
    font-size: 15px;
    text-align: center;
    color: #0ca9e1;
`;

export { 
    Sky,
    OverFloor,
    Floor,
    TextLink

};