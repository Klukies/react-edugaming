import React from 'react';
import styles from '../../assets/css/CoachReviews.module.css';
import CoachReview from './CoachReview';
import { loggedIn } from '../../utils/authentication';

export default class CoachReviews extends React.Component {
  constructor(props) {
    super(props);
    this.createReview = this.createReview.bind(this);
  }

  createReview = () => {
    if (!loggedIn()) {
      this.props.openLoginModal();
    } else {
      this.props.openReviewModal();
    }
  }

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
        <button
          className={`btn ${styles.reviewBtn}`}
          onClick={this.createReview}>
          Leave a review
        </button>
      </div>
    )
  }
}
