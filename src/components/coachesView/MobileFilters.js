import React from "react";
import MobileGamesFilter from "./MobileGamesFilter";
import MobilePriceFilter from "./MobilePriceFilter";
import MobileRatingFilter from "./MobileRatingFilter";
import styles from "../../assets/css/MobileFilters.module.css";

export default class MobileFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesToFilter: [],
      priceToFilter: "",
      ratingToFilter: ""
    };
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
      <div className={styles.mobileFilter}>
        <MobileGamesFilter
          filterName='Games'
          filter={this.props.filters.Games}
          gamesFilterCallback={this.gamesFilterCallback}/>

        <MobilePriceFilter
          filterName='Prices'
          filter={this.props.filters.Prices}
          priceFilterCallback={this.priceFilterCallback}/>

        <MobileRatingFilter
          filterName='Ratings'
          filter={this.props.filters.Ratings}
          ratingFilterCallback={this.ratingFilterCallback}/>
      </div>
    );
  }
}
