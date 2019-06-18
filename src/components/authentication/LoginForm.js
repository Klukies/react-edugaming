import React from 'react';
import styles from './../../assets/css/Authentication.module.css';

const isEmpty = (field) => {
  return field === '';
}

const checkEmail = (email) => {
  return (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email));
}

const checkPassword = (password) => {
  return !isEmpty(password);
}

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.state = {
      email: '',
      password: '',
      isEmailFocused: false,
      isPasswordFocused: false,
    }
  }

  changeEmail(e) {
    this.setState({email: e.target.value})
    this.focus(e);
  }

  changePassword(e) {
    this.setState({password: e.target.value})
    this.focus(e);
  }

  focus(e) {
    if (isEmpty(this.state.email) && e.currentTarget.id === 'loginEmail') {
      this.setState({isEmailFocused: true});
    }

    if (e.currentTarget.id === 'loginPassword') {
      this.setState({isPasswordFocused: true});
    }
  }

  blur() {
    if (isEmpty(this.state.email)) {
      this.setState({isEmailFocused: false})
    }

    if (isEmpty(this.state.password)) {
      this.setState({isPasswordFocused: false})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (checkEmail(this.state.email) && checkPassword(this.state.password)) {
      this.props.loginCallback({
        email: this.state.email,
        password: this.state.password
      })
    }
  }

  render () {
    return(
      <div className={styles.authForm}>
        <form onSubmit={this.handleSubmit} autoComplete='off'>
          <div className='form-field'>
            <span className={styles.error}></span>

            <label className={`${styles.formLabel}
            ${this.state.isEmailFocused ? styles.focused : ''}`}
            htmlFor='loginEmail'>
            Email address</label>

            <input className={styles.formInput}
            type='text'
            id='loginEmail'
            value={this.state.email}
            onChange={this.changeEmail}
            onClick={this.focus}
            onBlur={this.blur}/>
          </div>
          <div className='form-field'>
            <span className={styles.error}></span>

            <label className={`${styles.formLabel}
            ${this.state.isPasswordFocused ? styles.focused: ''}`}
            htmlFor='loginPassword'>
            Password</label>

            <input className={styles.formInput}
            type='password'
            id='loginPassword'
            value={this.state.password}
            onChange={this.changePassword}
            onClick={this.focus}
            onBlur={this.blur}/>
          </div>
          <button type="submit" className="btn submit-btn">Login</button>
        </form>
      </div>
    )
  }
}
