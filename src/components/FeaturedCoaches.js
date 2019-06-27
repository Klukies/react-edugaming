import React from 'react';
import styles from '../assets/css/FeaturedCoaches.module.css';
import { Link } from 'react-router-dom';

export default class FeaturedCoaches extends React.Component {
  render() {
    return (
      <article className='featured-coaches'>
        <div className='article-wrapper'>
          <h2 className="home-title">Featured coaches:</h2>
          <ul className={styles.coaches}>
            {this.props.coaches.map(coach =>
              <li className={styles.coach} key={coach.coach_id}>
                <Link to={`/coach/${coach.username}`} className={styles.coach_link}>
                  <h3>{coach.username} </h3>
                  <figure>
                    <div className={styles.figure_img}>
                      <img src={coach.img_url}
                        alt={coach.username}
                        onError={(e) => {e.target.onerror = null;
                          e.target.src='https://node-edugaming.herokuapp.com/images/standard_avatar.png'}}/>
                    </div>
                    <figcaption>
                      {coach.summary !== null &&
                        coach.summary
                      } {
                        `Coach hasn't given a summary yet.`
                      }
                    </figcaption>
                  </figure>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </article>
    )
  };
}
