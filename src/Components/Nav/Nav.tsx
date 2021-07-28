import React from 'react';
import {  NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Nav(): JSX.Element {

  const handleSubmit = (event: any) => {
    event.preventDefault();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="" width="40" height="40" />
          <span className="mr-5"> SpotiApp</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink to="/" className="nav-link" >Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/search" className="nav-link " >Search</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link " >About Me</NavLink>
            </li>
          </ul>

          <form className="d-flex w-75" onSubmit={handleSubmit}>
            <input className="form-control me-1" type="search" placeholder="Search artists..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}