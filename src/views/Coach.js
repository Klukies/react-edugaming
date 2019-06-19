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
    this.createReservation = this.createReservation.bind(this);
  }

  createReservation = (e) => {
    const year = this.state.date.getUTCFullYear();
    let month = this.state.date.getUTCMonth() + 1;
    const day = this.state.date.getUTCDate();
    const hours = this.state.date.getHours();
    const minutes = this.state.date.getMinutes();
    console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
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

        <button onClick={this.createReservation}>Reserve my coach</button>
        <Flatpickr data-enable-time
        value={this.state.date}
        onChange={date => {this.setState({date: date[0]})}}
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
  }
}
