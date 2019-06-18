import React from 'react';
import { Link } from 'react-router-dom';

export default class Coaches extends React.Component {
  render () {
    return (
      <div>
        <h1>Coaches</h1>
        <Link to='/'>Home</Link>
      </div>
    )
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }
}
