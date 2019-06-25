import React from 'react';
import styles from '../../assets/css/Filter.module.css';

export default class DesktopGamesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceToFilter: 'null',
    }
    this.changePrice = this.changePrice.bind(this);
  }

  changePrice(e) {
    this.setState({
      priceToFilter: e.target.value
    },
    this.props.priceFilterCallback(e.target.value));
  }

  render() {
    return(
      <div className="filter">
        <h1 className={styles.filterTitle}>{this.props.filterName}</h1>
        <ul className={styles.filterList}>
          <li>
            <input type='radio'
              id='-1'
              value='null'
              checked={this.state.priceToFilter === 'null'}
              onChange={this.changePrice} />
            <label htmlFor='-1'>All</label>
          </li>
          {Object.keys(this.props.filter).map(price => (
            <li key={price}>
              <input type='radio'
                id={price}
                value={price}
                checked={this.state.priceToFilter === price}
                onChange={this.changePrice}/>
              <label htmlFor={price}>{this.props.filter[price]}</label>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
