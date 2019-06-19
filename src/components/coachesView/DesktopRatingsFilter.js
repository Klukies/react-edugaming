import React from 'react';
import styles from '../../assets/css/Filter.module.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default class DesktopRatingsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingToFilter: '-1',
    }
    this.changeRating = this.changeRating.bind(this);
  }

  changeRating(e) {
    this.setState({
      ratingToFilter: e.target.value
    },
    this.props.ratingFilterCallback(e.target.value));
  }

  render() {
    return(
      <div className='filter'>
        <h1 className={styles.filterTitle}>{this.props.filterName}</h1>
        <ul className={styles.filterList}>
          <li>
              <input type='radio' id='-1' value='-1'
              checked={this.state.ratingToFilter === '-1'}
              onChange={this.changeRating} />
              <label htmlFor='-1'>All</label>
          </li>
          {this.props.filter.map(rating =>
            <li key={rating}>
              <input type='radio' id={rating} value={rating}
              checked={this.state.ratingToFilter === rating}
              onChange={this.changeRating} />
              <label htmlFor={rating}>
                <Rater className={styles.rating} total={5} rating={parseInt(rating)} interactive={false}/>
              </label>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
