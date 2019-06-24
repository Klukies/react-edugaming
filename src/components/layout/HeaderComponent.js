import React from 'react';
import styles from './../../assets/css/Header.module.css';
import axios from '../../utils/axios';
import { NavLink } from 'react-router-dom';
import { loggedIn, logout } from '../../utils/authentication.js'

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.logUserOut = this.logUserOut.bind(this);
    this.state = {
      isLoggedIn: loggedIn(),
    }
  }

  logUserOut() {
    logout();
    this.setState({isLoggedIn: loggedIn()});
  }

  render() {
    return (
      <header>
        <div className={styles.headerLogo}>
          <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Logo of Edugaming"/>
          <h1>EduGaming</h1>
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
    // TODO: failed refresh => log user out
  }
}
