import React from 'react';
import HomeContainer from './containers/HomeContainer';
import { Global } from './Style';

function App() {
  return (
      <React.Fragment>
          <Global/>
          <HomeContainer/>
      </React.Fragment>
      
  );
}

export default App;
