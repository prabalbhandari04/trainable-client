import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
    return (
      <div>
      <h1>Oops..! Access Denied</h1>
              <p>Looks like you need to register or login to access this page.Redirect to <Link to="/login">Login Page.</Link></p>
  </div>
    )
}

export default NotFound
