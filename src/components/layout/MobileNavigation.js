import React from 'react';
import styles from './../../assets/css/MobileNavigation.module.css';
import { Link } from 'react-router-dom';
import { loggedIn, logout } from '../../utils/authentication.js'

export default class MobileNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.logUserOut = this.logUserOut.bind(this);
    this.login = this.login.bind(this);
  }

  logUserOut = e => {
    this.props.toggleNavigation();
    logout();
  }

  login = e => {
    this.props.toggleNavigation();
    this.props.login();
  }

  render() {
    return(
      <nav className={`${this.props.isShown} ${styles.mobileNav}`}>
        <ul className={styles.mobileNavList}>
          <li>
            <Link onClick={this.props.toggleNavigation} to='/'>Home</Link>
          </li>
          <li>
            <Link onClick={this.props.toggleNavigation} to='/coaches'>Coaches</Link>
          </li>
          <li>
            {loggedIn() ? (
              <button className={styles.navLink}
                onClick={this.logUserOut}>Logout</button>
            ) : (
              <button className={styles.navLink}
              onClick={this.login}>Login</button>
            )}
          </li>
        </ul>
      </nav>
    )
  }
}
