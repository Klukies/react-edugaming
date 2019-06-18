import React from 'react';
import styles from '../assets/css/Coaches.module.css';
import axios from '../utils/axios';
import Filters from '../components/coachesView/Filters';

export default class Coaches extends React.Component {
  render () {
    return (
      <div id={styles.coaches}>
        <Filters />
      </div>
    )
  }

  componentDidMount() {
    axios.get('/coaches')
    .then(response => {
      this.setState({
        coaches: response.data,
      })
    });
    window.scrollTo(0,0);
  }
}
