import React from 'react';
import styles from './../../assets/css/Authentication.module.css';
import { isEmpty, checkUsername, checkEmail, checkPassword } from '../../utils/authentication';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.state = {
      username: '',
      email: '',
      password: '',
      isUsernameFocused: false,
      isEmailFocused: false,
      isPasswordFocused: false,
    }
  }

  changeUsername(e) {
    this.setState({username: e.target.value});
    this.focus(e);
  }

  changeEmail(e) {
    this.setState({email: e.target.value});
    this.focus(e);
  }

  changePassword(e) {
    this.setState({password: e.target.value});
    this.focus(e);
  }

  focus(e) {
    if (isEmpty(this.state.username) && e.currentTarget.id === 'signUpUsername') {
      this.setState({isUsernameFocused: true});
    }

    if (isEmpty(this.state.email) && e.currentTarget.id === 'signUpEmail') {
      this.setState({isEmailFocused: true});
    }

    if (e.currentTarget.id === 'signUpPassword') {
      this.setState({isPasswordFocused: true});
    }
  }

  blur() {
    if (isEmpty(this.state.username)) {
      this.setState({isUsernameFocused: false})
    }

    if (isEmpty(this.state.email)) {
      this.setState({isEmailFocused: false})
    }

    if (isEmpty(this.state.password)) {
      this.setState({isPasswordFocused: false})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (checkUsername(this.state.username) &&
    checkEmail(this.state.email) && checkPassword(this.state.password)) {
      this.props.signUpCallback({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    }
  }

  render() {
    return (
      <div className={styles.authForm}>
        <form onSubmit={this.handleSubmit} autoComplete='off'>
          <div className='form-field'>
            <span className={styles.error}></span>

            <label className={`${styles.formLabel}
            ${this.state.isUsernameFocused ? styles.focused : ''}`}
            htmlFor='signUpUsername'>
            Username</label>

            <input className={styles.formInput}
            type='text'
            id='signUpUsername'
            value={this.state.username}
            onChange={this.changeUsername}
            onClick={this.focus}
            onBlur={this.blur}/>
          </div>

          <div className='form-field'>
            <span className={styles.error}></span>

            <label className={`${styles.formLabel}
            ${this.state.isEmailFocused ? styles.focused : ''}`}
            htmlFor='signUpEmail'>
            Email address</label>

            <input className={styles.formInput}
            type='text'
            id='signUpEmail'
            value={this.state.email}
            onChange={this.changeEmail}
            onClick={this.focus}
            onBlur={this.blur}/>
          </div>

          <div className='form-field'>
            <span className={styles.error}></span>

            <label className={`${styles.formLabel}
            ${this.state.isPasswordFocused ? styles.focused: ''}`}
            htmlFor='signUpPassword'>
            Password</label>

            <input className={styles.formInput}
            type='password'
            id='signUpPassword'
            value={this.state.password}
            onChange={this.changePassword}
            onClick={this.focus}
            onBlur={this.blur}/>
          </div>
          <button type="submit" className="btn submit-btn">Signup</button>
        </form>
      </div>
    )
  }
}
