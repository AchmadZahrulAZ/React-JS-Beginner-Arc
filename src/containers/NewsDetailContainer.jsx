import React, { Component } from 'react';
import { fetchGameDetail } from '../utils/api';
import NewsDetail from '../components/NewsDetail';

class NewsDetailContainer extends Component {
  state = {
    detail: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchDetailData();
  }

  async fetchDetailData() {
    try {
      const data = await fetchGameDetail(this.props.newsKey);
      this.setState({ detail: data.results, loading: false });
    } catch (err) {
      console.error(err);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>
        <h1>Detail Container</h1>
        <button onClick={this.props.onBack}>Back to News List</button>
        {this.state.loading ? <h1>Loading...</h1> : <NewsDetail detail={this.state.detail} />}
      </div>
    );
  }
}

export default NewsDetailContainer;
