
import React from 'react';
import { Route, Switch, StaticRouter as Router } from 'react-router-dom';

import Home from './page/home';

const Welcome = () => (<h1>Welcome to CGFinance</h1>)

export const Routes = (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/test" component={Home} />
    <Route component={() => <h1>Request 1</h1>} />
  </Switch>
);

class App extends React.Component {
  render() {
    let crl = !window ? this.props.currentUrl : window.location.pathname
    return (
      <Router location={crl} context={this.props}>
        {Routes}
      </Router>
    )
  }
}

export default App;