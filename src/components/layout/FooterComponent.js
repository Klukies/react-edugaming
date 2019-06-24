import React from 'react';
import styles from './../../assets/css/Footer.module.css';

export default class FooterComponent extends React.Component {
  render() {
    return (
      <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.logo}>
          <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Logo of EduGaming"/>
        </div>
        <a href={`mailto:info@edugaming.be`}>info@edugaming.be</a>
        <a href={`tel:+32499123456`}>+32 499 12 34 56</a>
        <div className={styles.socialMedia}>
          <div className={styles.socialMediaWrapper}>
            <img src={process.env.PUBLIC_URL + '/assets/images/facebook.png'} alt="Logo of Facebook"/>
          </div>
          <div className={styles.socialMediaWrapper}>
            <img src={process.env.PUBLIC_URL + '/assets/images/twitter.png'} alt="Logo of Twitter"/>
          </div>
          <div className={styles.socialMediaWrapper}>
            <img src={process.env.PUBLIC_URL + '/assets/images/instagram.png'} alt="Logo of Instagram"/>
          </div>
          <div className={styles.socialMediaWrapper}>
            <img src={process.env.PUBLIC_URL + '/assets/images/twitch.png'} alt="Logo of Twitch"/>
          </div>
        </div>
      </div>
      </footer>
    )
  }
}
