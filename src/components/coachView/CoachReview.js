import React from 'react';
import styles from '../../assets/css/CoachReview.module.css';

export default class CoachReview extends React.Component {
  render() {
    return(
      <li className={styles.review}>
        <div className='review-header'>
          <h3 className={styles.author}>{this.props.review.author.name}</h3>
          <p className={styles.date}>{this.props.review.created_at}</p>
        </div>
        <div className='review-body'>
          <p>{this.props.review.review}</p>
        </div>
      </li>
    )
  }
}
