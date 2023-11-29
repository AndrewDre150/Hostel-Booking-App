import React from 'react'
import Booking from './Booking'
import BookDashboard from './BookDashboard'
import Dashboardfooter from './Dashboardfooter'

function BookingComponent() {
  return (
    <div>
        <BookDashboard></BookDashboard>
        <Booking></Booking>
        <Dashboardfooter></Dashboardfooter>
    </div>
  )
}

export default BookingComponent