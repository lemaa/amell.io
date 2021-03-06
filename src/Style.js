import { createGlobalStyle } from 'styled-components';
import MuseoModerno from './fonts/MuseoModerno-VariableFont_wght.ttf';
import MuseoModernoBold from './fonts/MuseoModerno-Bold.ttf';

const Global = createGlobalStyle`

@font-face {
    font-family: MuseoModerno;
    src: url(${MuseoModerno});
  }
  @font-face {
    font-family: MuseoModernoBold;
    src: url(${MuseoModernoBold});
  }
html {
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'MuseoModerno', cursive;

}
body{
    height: 100%;
    margin: 0px;
    background: linear-gradient(to bottom, rgb(9, 167, 224) 0%,rgba(83,203,241,1) 31%,rgba(135,224,253,1) 70%,rgba(255,255,255,1) 100%);
    background-repeat: no-repeat;
    overflow: hidden;

}

.container{
    position: relative;
    height: 100vh;
}

.slide-enter,
.slide-exit {
  transition: transform 1000ms ease-out;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-enter.slide-enter-active {
  transform: translateX(0%);
}

.slide-exit {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateX(0%);
}

.slide-exit-active {
  transform: translateX(-100%);
}
`;

export { Global };
