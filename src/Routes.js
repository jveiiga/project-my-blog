import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PagesMain from './pages/Main/Main';
import PagesAboutMe from './pages/AboutMe/AboutMe';
import PagesBlog from './pages/Blog/Blog';
import PagesBlogAsyncAwait from './pages/Blog/Post/AsyncAwait';
import PagesBlogFormSubmit from 'pages/Blog/Post/FormSubmit';

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
      <Route exact path="/Async-Await">
        <PagesBlogAsyncAwait />
      </Route>
      <Route exact path="/FormSubmit">
        <PagesBlogFormSubmit />
      </Route>
    </Switch>
  );  
}

export default IndexRoutes;