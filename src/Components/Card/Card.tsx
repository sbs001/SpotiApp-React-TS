import React from 'react';
import { Link } from 'react-router-dom';
import { Artist } from '../../interfaces/artist';
import noImg from '../img/noimage.png';
import './Card.css'

export default function Card({ item }: any): JSX.Element {

  return (
    <div className="col fadeIn">
      <div className="card h-100 spotiCard ">
        <Link to={`/artist/${item.type === 'artist' ? item.id : item.artists[0].id}`}>
          <img src={item.images[0]?.url || noImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">{item.name}</h5>
            <p className="card-text">
              {item.artists && item.artists.map((artist: Artist, i: number) => <span key={i} className="badge bg-success m-1 fs-6">{artist.name}</span>)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}