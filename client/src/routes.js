
import React from 'react';
import { Route, Switch, StaticRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './models/reducers';
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
    let store = createStore(reducers, {});
    return (
      <Provider store={store}>
        <Router location={crl} context={this.props}>
          {Routes}
        </Router>
      </Provider>

    )
  }
}

export default App;