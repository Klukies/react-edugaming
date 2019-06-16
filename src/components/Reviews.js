import React from 'react';
import styles from '../assets/css/Reviews.module.css';

export default class Reviews extends React.Component {
  render() {
    return (
      <article className="reviews">
        <div className='article-wrapper'>
          <h2>What players are saying:</h2>
          <ul className={styles.player_reviews}>
            {this.props.reviews.map((review, index) =>
              <li className={styles.review} key={index}>
                <div className='review-header'>
                  <h3>{review.author.name}</h3>
                  <p className={styles.date}>{review.created_at}</p>
                </div>
                <div className='review-body'>
                  <p>{review.review}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </article>
    )
  }
}
