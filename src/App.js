import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authentication from './components/Authentication';
import HeaderComponent from './components/layout/HeaderComponent';
import Home from './views/Home';
import Coaches from './views/Coaches';
import Coach from './views/Coach';
import FooterComponent from './components/layout/FooterComponent';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
    this.showLoginModal = this.showLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
  }

  showLoginModal() {
    this.setState({isModalVisible: !this.state.isModalVisible});
  }

  closeLoginModal(e) {
    this.setState({isModalVisible: !this.state.isModalVisible});
  }

  render () {
    return (
      <Router>
        <Authentication
          isModalVisible={this.state.isModalVisible}
          closeModal={this.closeLoginModal} />
        <HeaderComponent openModal={this.showLoginModal} />
        <div className='body'>
          <Route exact path='/' component={Home} />
          <Route exact path='/coaches' component={Coaches} />
          <Route exact path='/coach/:username'
            render={(props) => (
              <Coach {...props} openModal={this.showLoginModal}/>
            )}/>
        </div>
        <FooterComponent />
      </Router>
    )
  }
}

export default App;
