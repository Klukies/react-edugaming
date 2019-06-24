import React from 'react';
import styles from '../../assets/css/CoachReviews.module.css';
import CoachReview from './CoachReview';

export default class CoachReviews extends React.Component {
  render() {
    return (
      <div className={styles.reviews}>
        <h2 className={styles.reviewTitle}>Reviews</h2>
        {this.props.reviews.length !== 0 ? (
          <ul className={styles.reviewList}>
            {this.props.reviews.map((review, i) =>
              <CoachReview review={review} key={i}/>
            )}
          </ul>
        ) : (
          <p>Coach doesn't have any reviews yet.</p>
        )}
        <button className={`btn ${styles.reviewBtn}`}>Leave a review</button>
      </div>
    )
  }
}
