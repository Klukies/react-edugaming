import React from "react";
import styles from "../../assets/css/MobileFilters.module.css";

export default class MobileRatingFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingToFilter: '-1',
    }
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleRatingChange(e) {
    this.setState({
      ratingToFilter: e.target.value
    },
    this.props.ratingFilterCallback(e.target.value));
  }

  render() {
    return(
      <div className="select">
        <label className={styles.mobileLabel}>{this.props.filterName}</label>
        <select
          value={this.state.ratingToFilter}
          onChange={this.handleRatingChange}>
          <option value='-1'>All</option>
          {this.props.filter.map(rating =>
            <option value={rating} key={rating}>{rating}</option>
          )}
        </select>
      </div>
    )
  }
}
