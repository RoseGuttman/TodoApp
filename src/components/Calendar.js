import React from "react";
import ApiCalendar from 'react-google-calendar-api';
import {apiKey, clientID} from "apiGoogleconfig.json"

class App extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        events: []
      }
    }
    ...
  }