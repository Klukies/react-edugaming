import React from 'react';
import styles from '../assets/css/Authentication.module.css';
import Login from './authentication/Login';
import Signup from './authentication/Signup';

export default class Authentication extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLogin: true
    }
    this.showSignup = this.showSignupModal.bind(this);
    this.showLogin = this.showLoginModal.bind(this);
  }

  showSignupModal() {
    this.setState({isLogin: !this.state.isLogin})
  }

  showLoginModal() {
    this.setState({isLogin: !this.state.isLogin})
  }

  render() {
    if (!this.props.isModalVisible) {
      return null;
    }
    return (
      <div className={styles.modal_backdrop} onClick={this.props.closeModal}>
        <Login
          isLogin={this.state.isLogin}
          closeModal={this.props.closeModal}
          showSignup={this.showSignup}/>
        <Signup
          isLogin={this.state.isLogin}
          closeModal={this.props.closeModal}
          showLogin={this.showLogin}/>
      </div>
    )
  }
}
