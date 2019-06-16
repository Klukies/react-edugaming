import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authentication from './components/Authentication';
import HeaderComponent from './components/layout/HeaderComponent';
import Home from './views/Home';
import Coaches from './views/Coaches';
import FooterComponent from './components/layout/FooterComponent';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
    this.showLoginModal = this.showLoginModal.bind(this);
  }

  showLoginModal() {
    console.log('open modal');
  }

  render () {
    return (
      <Router>
        <Authentication />
        <HeaderComponent openModal={this.showLoginModal}/>
        <div className='body'>
          <Route exact path='/' component={Home} />
          <Route path='/coaches' component={Coaches} />
        </div>
        <FooterComponent />
      </Router>
    )
  }
}

export default App;
