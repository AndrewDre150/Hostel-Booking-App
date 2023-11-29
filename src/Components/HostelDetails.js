import React from 'react'
import BookDashboard from './BookDashboard'
import RoomDetails from './RoomDetail'
import Dashboardfooter from './Dashboardfooter'

function HostelDetails() {
  return (
    <div>
        <BookDashboard/>
        <RoomDetails/>
        <Dashboardfooter/>
    </div>
  )
}

export default HostelDetails