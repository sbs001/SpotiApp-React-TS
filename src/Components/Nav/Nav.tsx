import React from 'react';
import logo from '../img/logo.png';

export default function Nav(): JSX.Element {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="40" height="40"/>
          <span className="mr-5"> SpotiApp</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}