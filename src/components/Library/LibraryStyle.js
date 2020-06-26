import styled, { keyframes } from 'styled-components';

const circle =  keyframes` 
    from {
      box-shadow: 0 0 0 0px #78daf9;
    }
    to {
      box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
    }
 
 `;
 
const Library = styled.div`
    position: relative;
    left: 1.5em;
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
  const HouseContent = styled.div`
left: 1em;
    top: 0px;
    position: relative;
    text-transform: uppercase;
    font-family: MuseoModernoBold;
    color: #825113;
    
  `;
const HouseDoor = styled.div` 
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
const HouseWindow = styled.div`
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
 
const ResumeS = styled.div`
    float: left;
    padding: 7px;
    background: rgba(242,249,254,0.88);
    position: relative;
    margin-right: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 4px rgba(242,249,254,0.28);
    left: 10em;
    top: -26em;
    width: 70%;
     height: 75vh;
    font-family: MuseoModerno;
    line-height: 1.7em;
    -webkit-letter-spacing: 0.5px;
    -moz-letter-spacing: 0.5px;
    -ms-letter-spacing: 0.5px;
    letter-spacing: 0.5px;
    text-align: center;
    z-index: 99999999;
    overflow: auto;
//     &::after{
//         content: ' ';
//         position: absolute;
//         width: 0;
//         height: 0;
//         left: 3em;
//         right: auto;
//         top: auto;
//         bottom: -20px;
//         border: 12px solid;
//         border-color: #f2f9fe transparent transparent #f2f9fe;
// }
    @media (max-width: 768px) {
        left: 10px;
        top: -37em;
        width: 92%;
        z-index: 10;
        // &::after{
        //     left: 12em;
        // }
    }
 
      
.resume .func {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
}

.resume .func .work {
    width: 48%;
    margin: 0 4% 15px 0;
  }

  .resume .func:hover > div:not(:hover) {
    opacity: 0.5;
  }
  

  .resume .func h3 {
        text-align: left;
  padding-left: 10px;}

  .resume .func h3 img {
    padding: 6px;
    width: 30px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    margin-right: 8px;
  }
  
  .resume .func .work ul, 
  .resume .func .edu ul
  {
    list-style: none;
    padding: 0;
  }
  .resume .func .work ul li,
  .resume .func .edu ul li {
    position: relative;
    margin-left: 15px;
    padding-left: 25px;
    padding-bottom: 15px;
    text-align: left;
    font-size: 14px;
    line-height: 1.2em;
  }

  .resume .func .work ul li::before,
  .resume .func .edu ul li::before {
    width: 7px;
    height: 7px;
    border: 3px solid #ffffff;
    background: #78daf9;
    border-radius: 50%;
    left: 0;
    z-index: 1;
  }
  .resume .func .work ul li:first-of-type::before,
  .resume .func .edu ul li:first-of-type::before {
    width: 10px;
    height: 10px;
    left: 0;
  }


  
  .resume .func .work ul li:hover::before,
  .resume .func .edu ul li:hover::before {
    -webkit-animation: ${circle} 1.2s infinite;
            animation: ${circle} 1.2s infinite;
  }
  
  .resume .func .work ul li:hover span,
  .resume .func .edu ul li:hover span {
    color: #78daf9;
  }
  
  .resume .func .work small,
  .resume .func .edu small {
    display: block;
    opacity: 0.7;
  }
 
  


  
  .resume .func .work ul li:last-of-type,
  .resume .func .edu ul li:last-of-type {
    padding-bottom: 3px;
  }
  
  .resume .func .work ul li:last-of-type::after,
  .resume .func .edu ul li:last-of-type::after {
    border-radius: 1.5px;
  }
  
  .resume .func .work ul li::before,
  .resume .func .work ul li::after,
  .resume .func .edu ul li::before,
  .resume .func .edu ul li::after {
    content: "";
    display: block;
    position: absolute;
  }
  

  
  .resume .func .work ul li::after,
  .resume .func .edu ul li::after {
    width: 3px;
    height: 100%;
    background: #ffffff;
    left: 5px;
    top: 0;
  }
  
  .resume .func .work ul li span,
  .resume .func .edu ul li span {
    -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
 
  }
  

  
  .resume .func .edu {
    width: 48%;
  }
  
  .resume .func .skills-prog {
    clear: both;
     width:100%;
  }
  
  .resume .func .skills-prog ul {
    padding: 0;
    margin: 0;
  }
  
  .resume .func .skills-prog ul li {
    margin-bottom: 5px;
    display: -webkit-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    font-size: 13px;
    text-align: left;
    padding-left: 25px;
  }
   
  

`;
export{
    Library,
    LibraryFacade,
    LibrarySideFacade,
    HouseContent,
    HouseDoor,
    FrontDoor,
    HouseWindow,
    Doorknob,
    ResumeS
}