import React from "react";
import styles from '../../assets/css/MobileFilters.module.css';

export default class MobileGamesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameToFilter: '-1',
    }
  }

  handleGameChange = (e) => {
    let game = e.target.value;
    let gameArray = [];
    if (game !== '-1') {
      gameArray.push(parseInt(game));
    }
    this.setState(
      { gameToFilter: gameArray },
      () => this.props.gamesFilterCallback(gameArray));
  }

  render() {
    return (
      <div className='select'>
        <label className={styles.mobileLabel}>
          {this.props.filterName}
        </label>
        <select
          value={this.state.gameToFilter}
          onChange={this.handleGameChange}>
          <option value='-1'>All</option>
          {this.props.filter.map(game =>
            <option
              key={game.game_id}
              value={game.game_id}>{game.title}
            </option>
          )}
        </select>
      </div>
    )
  }
}
