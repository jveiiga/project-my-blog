import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PagesMain from './pages/Main/Main';
import PagesAboutMe from './pages/AboutMe/AboutMe';
import PagesBlog from './pages/Blog/Blog';

const IndexRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PagesMain />
      </Route>
      <Route exact path="/about">
        <PagesAboutMe />
      </Route>
      <Route exact path="/blog">
        <PagesBlog />
      </Route>
    </Switch>
  );  
}

export default IndexRoutes;