import React from 'react';
import styles from './../../assets/css/Authentication.module.css'

export default class Login extends React.Component {
  render() {
    return(
      <div className={styles.modalHeader}>
        <h2>{this.props.authTitle}</h2>
        <h3 className={styles.subTitle}>
          {this.props.subTitle}
          <button
          className='button-link'
          onClick={this.props.modalLink}>
          {this.props.modalLinkText}
          </button>
        </h3>
      </div>
    )
  }
}
