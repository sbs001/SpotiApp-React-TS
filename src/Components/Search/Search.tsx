import React from 'react';

export default function Search() {

  return (
    <div className="row mt-5">
      <h1 className="text-white mb-5">Search your favourites artists</h1>
      <div className="col mb-5">
        <input type="text"  className="form-control" placeholder="Search artist..."/>
      </div>
    </div>

  )
}