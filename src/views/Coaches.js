import React from 'react';
import styles from '../assets/css/Coaches.module.css';
import axios from '../utils/axios';
import Filters from '../components/coachesView/Filters';
import CoachList from '../components/coachesView/CoachList';

export default class Coaches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coaches: ''
    }
  }

  filterCoaches = (filters) => {
    if (filters['priceToFilter'] === 'null') {
      filters['priceToFilter'] = '';
    }
    axios.post('/coaches/filter', {
      games: filters['gamesToFilter'],
      price: filters['priceToFilter'],
      rating: filters['ratingToFilter']
    }).then((response) => {
      this.setState({
        coaches: response.data
      });
    })
  }

  render () {
    return (
      <div id={styles.coaches}>
        <Filters filterCoaches={this.filterCoaches} />
        <CoachList coaches={this.state.coaches} />
      </div>
    )
  }

  componentDidMount() {
    axios.get('/coaches')
    .then(response => {
      this.setState({
        coaches: response.data,
      });
    });
    window.scrollTo(0,0);
  }
}
