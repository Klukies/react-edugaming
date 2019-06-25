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

  gamesFilterCallback = (gamesFilter) => {
    this.setState(
      {gamesToFilter: gamesFilter},
      () => this.props.filter(this.state)
    );
  }

  priceFilterCallback = (priceFilter) => {
    this.setState(
      {priceToFilter: priceFilter},
      () => this.props.filter(this.state)
    );
  }

  ratingFilterCallback = (ratingFilter) => {
    this.setState(
      {ratingToFilter: ratingFilter},
      () => this.props.filter(this.state)
    );
  }

  render() {
    return (
      <div className={styles.filters}>
        <DesktopGamesFilter
          filterName='Games'
          filter={this.props.filters.Games}
          gamesFilterCallback={this.gamesFilterCallback}/>

        <DesktopPricesFilter
          filterName='Prices'
          filter={this.props.filters.Prices}
          priceFilterCallback={this.priceFilterCallback}/>

        <DesktopRatingsFilter
          filterName='Ratings'
          filter={this.props.filters.Ratings}
          ratingFilterCallback={this.ratingFilterCallback}/>
      </div>
    )
  }
}
