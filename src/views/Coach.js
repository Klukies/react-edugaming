import React from 'react';
import axios from '../utils/axios';
import styles from '../assets/css/Coach.module.css';
import 'flatpickr/dist/themes/dark.css'
import CoachInformation from '../components/coachView/CoachInformation';
import CoachReviews from '../components/coachView/CoachReviews';
import CreateReview from '../components/coachView/CreateReview';
import Flatpickr from 'react-flatpickr';
import { loggedIn } from '../utils/authentication';

export default class Coach extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCoachLoaded: false,
      date: new Date(),
      reservationMessage: '',
      reservationError: '',
      isReviewModalVisible: false
    }
    this.createReservation = this.createReservation.bind(this);
  }

  getDate = () => {
    const date = new Date();
    const year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = Math.ceil(minutes/15) * 15;
    if (minutes === 60) {
      hours = hours + 1;
      minutes = 0;
    }
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  createReservation = (e) => {
    if (!loggedIn()) {
      this.props.openModal();
    } else {
      let reservationDate = this.getDate();
      axios.post('/reservation', {
        coach_id: this.state.coach.coach_id,
        reservation_time: reservationDate
      }, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('user') }
      })
      .then(response =>
        {this.setState({reservationMessage: response.data.message});
      })
      .catch(err => console.error(err));
    }
  }

  openReviewModal = e => {
    this.setState({isReviewModalVisible: true});
  }

  closeReviewModal = e => {
    e.stopPropagation();
    this.setState({isReviewModalVisible: false});
  }

  updateReviews = (updatedReviews) => {
    this.setState({
      reviews: updatedReviews,
      isReviewModalVisible: false
    })
  }

  render() {
    return(
      <>
        {this.state.isCoachLoaded ?
          <div className={styles.coachFull}>
            <CoachInformation
            img_url={this.state.coach.img_url}
            username={this.state.coach.username}
            rating={this.state.coach.average_rating}
            description={this.state.coach.description}/>

            <div className={styles.reservation}>
              <span className={styles.reservationMessage}>
                {this.state.reservationMessage}
              </span>
              <span className={styles.reservationError}>
                {this.state.reservationError}
              </span>
              <Flatpickr data-enable-time
              value={this.state.date}
              onChange={date => {this.setState({date: date[0]})}}
              options={{
                inline: true,
                minDate: this.getDate(),
                time_24hr: true,
                minuteIncrement: 15,
              }}/>
              <button className={`btn ${styles.reservationBtn}`}
                onClick={this.createReservation}>
                Reserve my coach
              </button>
            </div>

            <CoachReviews
              reviews={this.state.reviews}
              openLoginModal={this.props.openModal}
              openReviewModal={this.openReviewModal}/>

            <CreateReview
              coach_id={this.state.coach.coach_id}
              closeReviewModal={this.closeReviewModal}
              isReviewModalVisible={this.state.isReviewModalVisible}
              updateReviews={this.updateReviews} />
          </div>
          : null
        }
        </>
    )
  }

  componentDidMount() {
    this.setState({
      minDate: this.getDate()
    });
    axios.get(`/coaches/${this.props.location.pathname.split('/')[2]}`)
    .then(response => {
      console.log(response.data[0]);
      this.setState({
        isCoachLoaded: true,
        coach: response.data[0],
        reviews: response.data[0].reviews
      });
    });
    window.scrollTo(0,0);
  }
}
