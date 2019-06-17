import React from 'react';
import styles from './../../assets/css/Authentication.module.css'
import ModalHeader from './ModalHeader'

export default class Signup extends React.Component {
  render() {
    if(this.props.isLogin) {return null}
    return (
      <div className={styles.modal} onClick={event => event.stopPropagation()}>
        <div className={styles.closeButton}><b></b><b></b><b></b><b></b></div>
        <ModalHeader
        authTitle='Sign up'
        subTitle='Already have an account?'
        modalLinkText='Log in!'
        modalLink={this.props.showLogin}/>
      </div>
    )
  }
}
