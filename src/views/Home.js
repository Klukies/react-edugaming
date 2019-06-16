import React from 'react';
import axios from '../utils/axios';
import styles from '../assets/css/Home.css'
import Banners from '../components/Banners';
import FeaturedCoaches from '../components/FeaturedCoaches';
import Reviews from '../components/Reviews';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: [],
      coaches: [],
      reviews: [],
    };
  }
  render() {
    return (
      <div id="home">
        <Banners banners={this.state.banners}/>
        <article className="method">
          <div className="article-wrapper">
            <h2>Method</h2>
            <p>
              EduGaming coaches aren't just coaches - they're mentors.
              Every single instructor on our platform has passed our rigorous application process.<br/>
              We guarantee our pros aren't just top gamers,
              but also experienced teachers who will help you learn efficiently and effectively.
            </p>
          </div>
        </article>
        <FeaturedCoaches coaches={this.state.coaches} styles={styles}/>
        <Reviews reviews={this.state.reviews} styles={styles}/>
      </div>
  )}

  componentDidMount() {
    axios.get('/home').then(response => {
      this.setState({banners: response.data.games, coaches: response.data.coaches, reviews: response.data.reviews});
    })
  }
}
