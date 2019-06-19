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
    this.filterCallback = this.filterCallback.bind(this);
  }

  filterCallback(filters) {
    this.props.filterCoaches(filters);
  }

  render() {
    // eslint-disable-next-line
    {/*todo filter on mobile and desktop*/}
    if (!this.state.filtersLoaded) {
      return null
    }
    return <DesktopFilters filters={this.state.filters} filter={this.filterCallback} />
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
