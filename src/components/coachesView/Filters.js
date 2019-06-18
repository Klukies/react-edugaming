import React from 'react';
import axios from '../../utils/axios';
import DesktopFilters from './DesktopFilters';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersLoaded: false,
      filters: {}
    }
  }

  render() {
    // eslint-disable-next-line
    {/*todo filter on mobile and desktop*/}
    if (!this.state.filtersLoaded) {
      return null
    }
    return <DesktopFilters filters={this.state.filters} />
  }

  componentDidMount() {
    axios.get('/filters')
    .then(response => {
      this.setState({
        filtersLoaded: true,
        filters: response.data,
      })
    });
  }
}
