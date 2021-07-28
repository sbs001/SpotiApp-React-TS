import React from 'react';
import noImg from '../img/noimage.png'

export default function Card({ item }: any): JSX.Element {

  console.log(item.images)
  return (
    <div className="col">
      <div className="card">
        <img src={item.images[0].url || noImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            {item.artists.map((artist: any) => <span className="badge bg-success m-1">{artist.name}</span>)}
          </p>
        </div>
      </div>
    </div>
  )
}