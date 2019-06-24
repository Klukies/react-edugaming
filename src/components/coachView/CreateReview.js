import React from "react";
import styles from "../../assets/css/CreateReview.module.css";
import axios from "../../utils/axios";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

export default class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      rating: 0
    };
  }

  handleRatingChange = rating => {
    this.setState({ rating: rating });
  };

  handleReviewChange = e => {
    this.setState({ review: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios.post('/review', {
      coach_id: this.props.coach_id,
      rating: this.state.rating,
      review: this.state.review,
    }, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('user') }
    })
    .then(response => {
      this.props.updateReviews(response.data);
    })
    .catch(err => console.error(err));
    console.log(this.state.review);
  };

  render() {
    if (!this.props.isReviewModalVisible) {
      return null;
    }
    return (
      <div className={styles.modalBackdrop} onClick={this.props.closeReviewModal}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            <h2 className={styles.reviewTitle}>Review</h2>
            <Rater
              className={styles.rating}
              total={5}
              rating={this.state.rating}
              onRate={({rating}) => {this.handleRatingChange(rating)}} />
          </div>
          <span className={styles.reviewError}></span>
          <div className={styles.reviewForm}>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="form-field">
                <textarea
                  className={styles.textarea}
                  placeholder="Write your review here"
                  value={this.state.review}
                  onChange={this.handleReviewChange}/>
              </div>
              <div className={styles.buttons}>
                <button
                  className={`btn ${styles.reviewBtn}`}
                  onClick={this.props.closeReviewModal}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`btn ${styles.reviewBtn}`}>
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
