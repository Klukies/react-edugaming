import React from 'react';
import styles from '../../assets/css/CoachList.module.css';
import CoachItem from './CoachItem';

export default class CoachList extends React.Component {
  render() {
    if (this.props.coaches === '') {
      return null
    }
    return (
      <div className={styles.coachesList}>
        {this.props.coaches.map(coach =>
          <CoachItem coach={coach} key={coach.coach_id}/>
        )}
      </div>
    )
  }
}
