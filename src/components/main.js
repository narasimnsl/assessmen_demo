import '../components/less/main.less'
import React from 'react';
import Aux from '../hoc/aux'
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from '../components/layout/layout';
import Intro from '../components/pages/intro';
import Questions from '../components/pages/questions';
import Results from '../components/pages/results';
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)

const main = ({ location }) => (
   
    <Aux>
         <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 600, exit: 100 }}
          classNames={'fade'}
        >
         <Switch location={location}>
           <Layout>
              <Route path="/" exact component={Intro}/>
              <Route path="/questions" exact component={Questions}  />
              <Route path="/results" exact component={Results} />
            </Layout>
         </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Aux>
)

export default withRouter(main);