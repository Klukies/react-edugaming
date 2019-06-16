import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import Home from './views/Home';
import Coaches from './views/Coaches';
import FooterComponent from './components/layout/FooterComponent';


class App extends React.Component {
  render () {
    return (
      <Router>
        <HeaderComponent/>
        <div className='body'>
          <Route exact path='/' component={Home}/>
          <Route path='/coaches' component={Coaches}/>
        </div>
        <FooterComponent/>
      </Router>
    )
  }
}

export default App;
