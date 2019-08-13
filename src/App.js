import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Menu from './components/Menu';
import Notfound from './components/Notfound';

function App() {
  return (
    <BrowserRouter basename="/reactjs-foodsi">
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route component={Notfound} />
        </Switch>
      </div>

    </BrowserRouter>

  )
}

export default App

