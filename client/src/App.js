import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ResultPage from './ResultPage';
import './styles/index.css'

function App() {

  return (
    <Switch>
      <Route path={"/search"} component={ResultPage} />
      <Route path={"/"} component={HomePage} />
    </Switch>
  );

}

export default App;
