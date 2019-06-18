import React from 'react';
import axios from '../../utils/axios';
import styles from './../../assets/css/Authentication.module.css'
import ModalHeader from './ModalHeader'
import SignUpForm from './SignUpForm';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.signUpCallback = this.signUpCallback.bind(this);
  }

  signUpCallback = (signUpData) => {
    axios.post('/auth/register', {
      name: signUpData.username,
      email: signUpData.email,
      password: signUpData.password
    })
    .then((response) => {
      //refer to loginCallback to log user in
      axios.post('/auth/login', {
        email: signUpData.email,
        password: signUpData.password
      })
      .then((response) => {
        localStorage.setItem('user', response.headers.authorization);
        this.props.closeModal();
      })
      .catch((err) => {
        console.error(err);
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    if(this.props.isLogin) {return null}
    return (
      <div className={styles.modal} onClick={event => event.stopPropagation()}>
        <div className={styles.closeButton}
        onClick={this.props.closeModal}><b></b><b></b><b></b><b></b></div>
        <ModalHeader
        authTitle='Sign up'
        subTitle='Already have an account?'
        modalLinkText='Log in!'
        modalLink={this.props.showLogin}/>
        <span></span>
        <SignUpForm signUpCallback={this.signUpCallback}/>
      </div>
    )
  }
}
