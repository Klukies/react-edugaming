import React from 'react';
import styles from './../../assets/css/Header.module.css';
import { NavLink } from 'react-router-dom';

export default class HeaderComponent extends React.Component {
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
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='coaches'>Coaches</NavLink>
              </li>
              {/* TODO
              <li>
                <a v-if="!$auth.check()" @click="showLoginModal">Login</a>
                <a v-else @click.prevent="$auth.logout({redirect:null})">Logout</a>
              </li>
              */}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
