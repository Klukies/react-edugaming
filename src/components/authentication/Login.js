import React from 'react';
import styles from './../../assets/css/Authentication.module.css'
import ModalHeader from './ModalHeader'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail = this.changeEmail.bind(this);
    this.focusEmail = this.focusEmail.bind(this);
    this.blur = this.blur.bind(this);
    this.state = {
      isEmailFocused: false,
      email: ''
    }
  }

  changeEmail(e) {
    this.setState({email: e.target.value})
  }

  focusEmail() {
    this.setState({isEmailFocused: !this.state.isEmailFocused});
  }

  blur() {
    if (this.state.email === '') {
      this.setState({isEmailFocused: !this.state.isEmailFocused})
    }
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
        <div className={styles.authForm}>
          <form onSubmit={this.handleSubmit}>
          <div className='form-field'>
            <span className={`${styles.error}`}></span>
            <label className={`${styles.formLabel}
            ${this.state.isEmailFocused ? styles.focused : 'not'}`}
            htmlFor='loginEmail'>Email address</label>
            <input
            className={styles.formInput}
            type='text'
            id='loginEmail'
            value={this.state.email}
            onChange={this.changeEmail}
            onClick={this.focusEmail}
            onBlur={this.blur}/>
          </div>
          </form>
        </div>
      </div>
    )
  }
}
