import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Greetings from './Greetings';
import NavigationBar from './NavigationBar';
import SignupPage from './signup/SignupPage';
import routes from '../routes';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <Switch>
            <Route exact path="/" component={Greetings} />
            <Route path="/signup" component={SignupPage} />
        </Switch>
        {this.props.children}
      </div>
    );
  }
}

export default App;
