import React from 'react';
import styles from '../assets/css/Banners.module.css'
import Slider from 'react-slick';

export default class Banners extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSlides = this.toggleSlides.bind(this);
    this.state = {
      isPlaying: true
    }
  }

  toggleSlides() {
    if (this.state.isPlaying) {
      this.slider.slickPause();
    } else {
      this.slider.slickPlay();
    }
    this.setState({isPlaying: !this.state.isPlaying});
  }

  pause() {
    this.slider.slickPause();
  }

  render() {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return (
      <div className={styles.bannersWrapper}>
        <Slider ref={slider => (this.slider = slider)}
        autoplay={true}
        autoplaySpeed={5000}
        arrows={false}
        pauseOnHover={false}>
        {isIos ? (
          this.props.banners.map(banner =>
              <img key={banner.game_id} src={banner.old_img_url} alt={banner.title}/>
          )) : (
          this.props.banners.map(banner =>
              <img key={banner.game_id} src={banner.img_url} alt={banner.title}/>
          ))}
        </Slider>
        <button
        className={`${styles.pause_play} ${!this.state.isPlaying ? '' : styles.playing}`}
        onClick={this.toggleSlides}>
        </button>
      </div>
    )
  };
}
