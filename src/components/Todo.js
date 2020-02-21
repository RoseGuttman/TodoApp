import React from "react";
import { Icon, Button } from 'antd';
import 'antd/dist/antd.css';
import * as moment from 'moment'

export default props => (
  <div style={{ display: "flex", justifyContent: "center", padding: '10px' }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >
      
      <div className="todo-name">
      {props.todo.text}
      </div>
      <div className="todo-date">
      {moment(props.todo.date).format('MM-DD')}
      </div>
    </div>
    <Button type='danger' size='small' onClick={props.onDelete}><Icon type="close" /></Button>
  </div>
);
