import styled, { keyframes } from 'styled-components';

const circle =  keyframes` 
    from {
      box-shadow: 0 0 0 0px #78daf9;
    }
    to {
      box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
    }
 
 `;
 
const ResumeS = styled.div`
    max-height: 24em;
    overflow: auto;
 

 
      
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
  
  .resume .func .skills-prog ,
  .resume .func .interests{
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
  .resume .func .skills-prog ul li .label{
    width: 25%;
 }
  .resume .func .skills-prog ul li .progress{
     width: 75%;
  }

  .resume .func .skills-prog ul li:hover,
  .resume .func .interests-items div:hover
   {
    color: #78daf9;
}


.resume .func .interests-items {
    box-sizing: border-box;
    padding: 0 0 15px;
    width: 100%;
    text-align: center;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.resume .func .interests-items div {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.resume .func .interests-items div i {
 
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}
.resume .func .interests-items div i img{
 width: 40px;
}
.resume .func .interests-items div:hover i {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}

.pdf-section a{background-color: DodgerBlue;
border: none;
color: white;
padding: 2px 12px;
cursor: pointer;
font-size: 15px;
text-decoration: none;
margin: 15px;
display: inline-block;
}
.pdf-section a img{
    width: 20px;
    vertical-align: middle;
}
.pdf-section a span{
    padding: 15px;
}
.pdf-section a:hover {
    background-color: RoyalBlue;
  }
`;


export{
    ResumeS
}