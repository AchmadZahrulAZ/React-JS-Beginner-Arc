import React, { Component } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import Navbar from '../components/Navbar';
import { queryAI } from '../utils/api';

export default class ChatContainer extends Component {
  state = {
    messages: [],
    loading: false,
    error: null,
    query: '',
  };

  handleQuery = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({ loading: true, error: null });

    queryAI({ query }, this.props.token)
      .then((res) => {
        this.setState({
          messages: [...this.state.messages, { query, data: res }],
          query: '',
        });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div>
        <Navbar setToken={this.props.setToken} />
        {this.state.messages.map((message, index) => (
          <ChatMessage key={index} message={message.data.data} query={message.query} />
        ))}
        
        {/* Loading animation */}
        {this.state.loading && (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <ChatInput
          onSubmit={this.handleQuery}
          onChange={this.handleChange}
          loading={this.state.loading}
          query={this.state.query}
        />
      </div>
    );
  }
}
