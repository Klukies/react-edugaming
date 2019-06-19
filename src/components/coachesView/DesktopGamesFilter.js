import React from 'react';
import styles from '../../assets/css/Filter.module.css';

export default class DesktopGamesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesToFilter: [],
    }
    this.changeGames = this.changeGames.bind(this);
  }

  changeGames(e) {
    let newGamesFilter = this.state.gamesToFilter;
    if (this.state.gamesToFilter.indexOf(e.target.value) === -1) {
      newGamesFilter.push(e.target.value);
      this.setState({
        gamesToFilter: newGamesFilter
      },
      () => this.props.gamesFilterCallback(this.state.gamesToFilter));
    } else {
      const indexOfGame = this.state.gamesToFilter.indexOf(e.target.value);
      newGamesFilter.splice(indexOfGame, 1);
      this.setState({
        gamesToFilter: newGamesFilter
      },
      () => this.props.gamesFilterCallback(this.state.gamesToFilter));
    }
  }

  render() {
    return(
      <div className="filter">
        <h1 className={styles.filterTitle}>{this.props.filterName}</h1>
        <ul className={styles.filterList}>
          {this.props.filter.map(option =>
            <li key={option.game_id}>
              <input type='checkbox'id={option.title} value={option.game_id} onChange={this.changeGames} />
              <label htmlFor={option.title}>{option.title}</label>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
