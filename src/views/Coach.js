import React from 'react';
import axios from '../utils/axios';
import styles from '../assets/css/Coach.module.css';
import 'flatpickr/dist/themes/dark.css'
import CoachInformation from '../components/coachView/CoachInformation';
import Flatpickr from 'react-flatpickr';


export default class Coach extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCoachLoaded: false,
      date: new Date()
    }
  }
  render() {
    if(!this.state.isCoachLoaded) {
      return(null)
    }
    return(
      <div className={styles.coachFull}>
        <CoachInformation
        img_url={this.state.coach.img_url}
        username={this.state.coach.username}
        rating={this.state.coach.average_rating}
        description={this.state.coach.description}/>

        <Flatpickr data-enable-time
        value={this.state.date}
        onChange={date => {this.setState({date})}}
        options={{
          inline: true,
          minDate: "today",
          time_24hr: true
        }}/>
      </div>
    )
  }

  componentDidMount() {
    axios.get(`/coaches/${this.props.location.pathname.split('/')[2]}`)
    .then(response => {
      console.log(response.data[0]);
      this.setState({
        isCoachLoaded: true,
        coach: response.data[0],
      });
    });
    window.scrollTo(0,0);
    console.log(new Date().getDate());
  }
}
