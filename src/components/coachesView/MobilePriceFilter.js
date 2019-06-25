import React from "react";
import styles from "../../assets/css/MobileFilters.module.css";

export default class MobilePriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceToFilter: "null"
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handlePriceChange = e => {
    this.setState(
      { priceToFilter: e.target.value },
      this.props.priceFilterCallback(e.target.value)
    );
  };

  render() {
    return (
      <div className="select">
        <label className={styles.mobileLabel}>{this.props.filterName}</label>
        <select
          value={this.state.priceToFilter}
          onChange={this.handlePriceChange}>
          <option value="null">All</option>
          {Object.keys(this.props.filter).map(price => (
            <option value={price} key={price}>{this.props.filter[price]}</option>
          ))}
        </select>
      </div>
    );
  }
}
