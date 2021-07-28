import React from 'react';
import { Link } from 'react-router-dom';
import noImg from '../img/noimage.png';
import './Card.css'

export default function Card({ item }: any): JSX.Element {

  return (
    <div className="col spotiCard">
      <Link to={`/artist/${item.type === 'artist' ? item.id : item.artists[0].id }`}>
        <div className=" noLink card h-100 ">
          <img src={item.images[0]?.url || noImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">{item.name}</h5>
            <p className="card-text">
              {item.artists && item.artists.map((artist: any, i: number) => <span key={i} className="badge bg-success m-1">{artist.name}</span>)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}