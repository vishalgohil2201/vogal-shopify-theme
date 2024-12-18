import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyBreadcrumb = ({ title }) => {
  return (
    <div className="bc">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to='/'>
            Home
          </Link></Breadcrumb.Item>
        <Breadcrumb.Item active>{title}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default MyBreadcrumb
