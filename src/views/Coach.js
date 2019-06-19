import React from 'react';
import axios from '../utils/axios';
import CoachInformation from '../components/coachView/CoachInformation';

export default class Coach extends React.Component {
  render() {
    return(
      <div>
        <CoachInformation />
      </div>
    )
  }

  componentDidMount() {
    axios.get(`/coaches/${this.props.location.pathname.split('/')[2]}`)
    .then(response => {
      console.log(response.data[0]);
      this.setState({
        coach: response.data[0],
      });
    });
    window.scrollTo(0,0);
  }
}
