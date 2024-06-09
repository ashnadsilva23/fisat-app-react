import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 xl-12 co-xxl-12">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Delete Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">view Student</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar