import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-2 col-3 left">
                    <Link to='/'>Service.az</Link>
                </div>
                <div className="col-lg-10 col-9 text-end right">
                    <Link to='/'>Home</Link>
                    <Link to='/admin'>Admin</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header