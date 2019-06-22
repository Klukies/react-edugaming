import React from 'react';
import CoachHeader from './CoachHeader';
import CoachProfile from './CoachProfile';

export default class CoachInformation extends React.Component {
  render() {
    return(
      <>
        <CoachHeader img_url={this.props.img_url}
          username={this.props.username}
          rating={this.props.rating}/>
        <CoachProfile description={this.props.description}/>
      </>
    )
  }
}
