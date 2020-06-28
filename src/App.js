import React from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
    withRouter
  } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './containers/Home';
import Contact from './containers/Contact';
import Resume from './containers/Resume';
import { Global } from './Style';

const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          {/* <Route path="/resume" component={NotFound} /> */}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));
  
function App() {
  return (
      <React.Fragment>
          <Global/>
          <BrowserRouter>
        <AnimatedSwitch />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Go to home</Link>
            </li>
            <li>
              <Link to="/contact">Go to contact</Link>
            </li>
            <li>
              <Link to="/resume">Go to resume</Link>
            </li>
          </ul>
        </nav> */}
      </BrowserRouter>
      </React.Fragment>
      
  );
}

export default App;
