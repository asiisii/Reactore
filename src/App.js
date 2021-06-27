import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact path='/'
          component= { Home }
        />
         <Route render= {() => <Redirect to='/' />}
      /> 
      </Switch>
    </div>
  );
}

export default App;
