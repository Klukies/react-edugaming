import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/css/Coach.module.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default class CoachItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSummaryEmpty: true
    }
  }

  render() {
    return(
      <div className={styles.coach}>
        <Link to={`/coach/${this.props.coach.username}`}>
          <div className={styles.coachHeader}>
            {this.props.coach.rating === null ? (
              <p>Unrated</p>
            ) : (
              <Rater
              className={styles.rating}
              total={5}
              interactive={false}
              rating={parseFloat(this.props.coach.average_rating)}/>
            )}
            <div className={styles.price}>
              <p>€{this.props.coach.price}/hr</p>
            </div>
          </div>
          <figure className={styles.coachImage}>
            <img src={this.props.coach.img_url} alt={this.props.coach.username}/>
            <figcaption className={styles.coachName}>
              {this.props.coach.username}
            </figcaption>
          </figure>
          {this.props.coach.summary === null ? (
            <p>Coach hasn't given a summary yet.</p>
          ) : (
            <p>{this.props.coach.summary}</p>
          )}
        </Link>
      </div>
    )
  }
}
