import React from 'react';
import styles from '../../assets/css/CoachProfile.module.css'

export default class CoachProfile extends React.Component {
  render() {
    return (
      <div className={styles.coachProfile}>
        <h2>Coach Profile</h2>
        {this.props.description !== null ? (
          <p>{this.props.description}</p>
        ) : (
          <p>Coach hasn't given a description to his profile yet.</p>
        )}
      </div>
    )
  }
}
