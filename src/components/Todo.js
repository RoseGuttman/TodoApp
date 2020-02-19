import React from "react";
import { Icon, Button } from 'antd';
import 'antd/dist/antd.css';

export default props => (
  <div style={{ display: "flex", justifyContent: "center", padding: '10px' }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <Button type='danger' size='small' onClick={props.onDelete}><Icon type="close" /></Button>
  </div>
);
