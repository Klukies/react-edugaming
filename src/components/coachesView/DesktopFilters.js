import React from 'react';
import DesktopGamesFilter from './DesktopGamesFilter';
import DesktopPricesFilter from './DesktopPricesFilter';
import DesktopRatingsFilter from './DesktopRatingsFilter';
import styles from '../../assets/css/Filter.module.css';

export default class DesktopFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesToFilter: [],
      priceToFilter: '',
      ratingToFilter: '',
    }
  }
  render() {
    return (
      <div className={styles.filters}>
        <DesktopGamesFilter
          filterName='Games'
          filter={this.props.filters['Games']} />

        <DesktopPricesFilter
          filterName='Prices'
          filter={this.props.filters['Prices']} />

        <DesktopRatingsFilter
          filterName='Ratings'
          filter={this.props.filters['Ratings']} />
      </div>
    )
  }
}
