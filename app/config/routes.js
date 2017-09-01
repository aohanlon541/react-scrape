import React from 'react';
import router from "react-router";

var Route = router.Route;
var Router = router.Router;

var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

// Reference the high-level components
import { main, article, content, makeNotes } from "../components";

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={main}>

        <IndexRoute component={content}>
            <Route path="/article" component={article} />
        </IndexRoute>

        <Route path="/makenotes" component={makeNotes} />

    </Route>
  </Router>

);