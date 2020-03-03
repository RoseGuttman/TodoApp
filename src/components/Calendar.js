import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import { getEvents } from './gcal'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar';
//import BigCalendar from 'react-big-calendar'
//BigCalendar.momentLocalizer(moment)
const localizer = momentLocalizer(moment);

//Some of this code from https://blog.daftcode.pl/react-calendar-with-google-calendar-as-cms-tutorial-5f5d81e425a9


//require('react-big-calendar/lib/css/react-big-calendar.css')



export default class Calendars extends React.Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }
  render () {
    return (
      // React Components in JSX look like HTML tags
      //<Calendar
       // style={{height: '420px'}}
        //events={this.state.events}
      ///>

      <div className="cal">
          <Calendar
            events={this.state.events}
            style={{height: '420px', width: '420px'}}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
    )
  }
}

render(<Calendars />, document.getElementById('root'))