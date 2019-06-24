import React from 'react';
import axios from '../../utils/axios';
import DesktopFilters from './DesktopFilters';
import MobileFilters from './MobileFilters';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersLoaded: false,
      filters: {},
      isMobile: false,
    }
    this.filterCallback = this.filterCallback.bind(this);
  }

  filterCallback(filters) {
    this.props.filterCoaches(filters);
  }

  onWindowResize = () => {
    this.setState({
      isMobile: window.innerWidth < 1280
    }, () => console.log(this.state.isMobile)
  )};

  render() {
    if (!this.state.filtersLoaded) {
      return null
    } else if (this.state.isMobile) {
      return (
        <MobileFilters
          filters={this.state.filters}
          filter={this.filterCallback} />
      )
    } else if (!this.state.isMobile) {
      return (
        <DesktopFilters
          filters={this.state.filters}
          filter={this.filterCallback} />
      )
    }
  }

  componentDidMount() {
    axios.get('/filters')
    .then(response => {
      this.setState({
        filtersLoaded: true,
        filters: response.data,
      })
    });
    window.addEventListener("resize", this.onWindowResize);
    this.onWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }
}
