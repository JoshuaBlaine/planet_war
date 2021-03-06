// React
const React = require("react");
const ReactDom = require("react-dom");
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
// components
const Screen = require('./components/screen');

const GameRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ Screen }>

    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDom.render(<Screen />, root);
});
