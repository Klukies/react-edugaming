import React from 'react';
import axios from '../../utils/axios';
import styles from './../../assets/css/Authentication.module.css';
import ModalHeader from './ModalHeader';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginCallback = this.loginCallback.bind(this);
  }

  loginCallback = (loginData) => {
    axios.post('/auth/login', {
      email: loginData.email,
      password: loginData.password
    })
    .then((response) => {
      localStorage.setItem('user', response.headers.authorization);
      this.props.closeModal();
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    if(!this.props.isLogin) {return null}
    return (
      <div className={styles.modal} onClick={event => event.stopPropagation()}>
        <div className={styles.closeButton}
        onClick={this.props.closeModal}><b></b><b></b><b></b><b></b></div>

        <ModalHeader
        authTitle='Log in'
        subTitle='New to EduGaming?'
        modalLinkText='Sign up for free!'
        modalLink={this.props.showSignup} />

        <span></span>
        <LoginForm loginCallback={this.loginCallback}/>
      </div>
    )
  }
}
