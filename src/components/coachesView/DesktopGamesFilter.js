import React from 'react';
import styles from '../../assets/css/Filter.module.css';

export default class DesktopGamesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesToFilter: [],
    }
  }

  render() {
    return(
      <div className="filter">
        <h1 className={styles.filterTitle}>{this.props.filterName}</h1>
        <ul className={styles.filterList}>
          {this.props.filter.map(option =>
            <li key={option.game_id}>
              <input type='checkbox'id={option.title} />
              <label htmlFor={option.title}>{option.title}</label>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
