import React from 'react';
import styles from '../../assets/css/CoachHeader.module.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default class CoachHeader extends React.Component {
  render() {
    return (
      <div className={styles.coachHeader}>
        <div className={styles.coachImage}>
          <img src={this.props.img_url} alt={this.props.username}/>
        </div>
        <div>
          <h2 className={styles.coachUsername}>{this.props.username}</h2>
          <div className={styles.rating}>
            {this.props.rating === null ? (
              <p>Unrated</p>
            ) : (
              <Rater
              className={styles.raterRating}
              total={5}
              interactive={false}
              rating={parseFloat(this.props.rating)} />
            )}
          </div>
        </div>
      </div>
    )
  }
}
