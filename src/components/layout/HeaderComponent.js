import React from 'react';
import styles from './../../assets/css/Header.module.css';
import axios from '../../utils/axios';
import MobileNavigation from './MobileNavigation';
import { NavLink } from 'react-router-dom';
import { loggedIn, logout } from '../../utils/authentication.js'

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: loggedIn(),
      isFocused: '',
    }
    this.logUserOut = this.logUserOut.bind(this);
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  logUserOut() {
    logout();
    this.setState({isLoggedIn: loggedIn()});
  }

  toggleNavigation = e => {
    if (this.state.isFocused === '') {
      this.setState({
        isFocused: styles.focus,
        isShown: 'show'
      }, () => {
        document.body.style.overflow = 'hidden';
        this.props.lockScroll();
      })
    } else {
      this.setState({
        isFocused: '',
        isShown: ''
      }, () => {
        document.body.style.overflow = 'scroll';
        this.props.enableScroll();
      })
    }
  }

  render() {
    return (
      <header>
        <NavLink to='/' className={styles.LogoLink}>
          <div className={styles.headerLogo}>
            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Logo of Edugaming"/>
            <h1>EduGaming</h1>
          </div>
        </NavLink>
        <div className={styles.mobileNavigation}>
          <button
            className={`${styles.hamburger} ${this.state.isFocused}`}
            onClick={this.toggleNavigation}
            value='Menu'
            aria-label='Menu'>
              <span className={styles.burger}></span>
              <span className={styles.burger}></span>
              <span className={styles.burger}></span>
          </button>
          <MobileNavigation
            isShown={this.state.isShown}
            toggleNavigation={this.toggleNavigation}
            login={this.props.openModal}/>
        </div>
        <div className={styles.headerNavigation}>
          <nav>
            <ul>
              <li>
                <NavLink exact to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/coaches'>Coaches</NavLink>
              </li>
              <li>
                {loggedIn() ? (
                  <button className={styles.navLink}
                    onClick={this.logUserOut}>Logout</button>
                ) : (
                  <button className={styles.navLink}
                  onClick={this.props.openModal}>Login</button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }

  componentDidMount() {
    axios.get('/auth/refreshreact', {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('user') }
    })
    .then(response => {
      localStorage.setItem('user', response.data.access_token);
    })
    .catch(err => {})
  }
}
