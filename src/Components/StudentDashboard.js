import React from 'react'
import BookDashboard from './BookDashboard'
import HomePage from './HomePage'
import Dashboardfooter from './Dashboardfooter'

function StudentDashboard() {
  return (
    <div>
        <BookDashboard></BookDashboard>
        <HomePage></HomePage>
        <Dashboardfooter></Dashboardfooter>
    </div>
  )
}

export default StudentDashboard