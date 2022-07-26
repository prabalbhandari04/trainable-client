import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
    return (
        <div>
                    <h1>Oops..! 404 Page Not Found</h1>
                    <p>Looks like you came to wrong page on our server.Redirect to <Link to="/">Home</Link></p>
        </div>
    )
}

export default NotFound
