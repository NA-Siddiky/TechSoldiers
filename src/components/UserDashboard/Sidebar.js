import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <ul className='d-flex flex-column p-5'>
        <Link to='/user/dashboard/order' className='my-3 btn btn-primary'>
          All Order
        </Link>
        <Link to='/user/dashboard/review' className='my-3 btn btn-primary'>
          Write Review
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
