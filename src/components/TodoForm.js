import React from "react";
import shortid from "shortid";
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import DatePicker from 'react-date-picker'

export default class TodoForm extends React.Component {
  state = {
    text: "",
    date: new Date()
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      date: this.state.date,
      complete: false
    });
    this.setState({
      text: ""
    });
  };

  onChange = date => this.setState({ date })

  render() {
    return (
      <form className='add' onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
         <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
        <Button onClick={this.handleSubmit}><Icon type="plus" /></Button>
      </form>
      
    );
  }
}
