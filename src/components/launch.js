import React, { PureComponent } from 'react'
import 'font-awesome/css/font-awesome.min.css';

class Launch extends PureComponent {
  render() {
    var FontAwesome = require('react-fontawesome');
    const { launch } = this.props
    
    return (

      <tr>
      <th>Badge</th>
      <th>{launch.rocket.rocket_name}</th>
      <th>{launch.rocket.rocket_type}</th>
      <th>{launch.date_utc}</th>
      <th>{launch.details}</th>
      <th>{launch.flight_number}</th>
      <th><a href="/no link"><FontAwesome name='link'/></a></th>
      </tr>


    )
  }
}

export default Launch
