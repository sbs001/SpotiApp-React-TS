import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_ARTIST_BY_ID, URL_TOP_TRACKS } from '../../constants';
import { Artist } from '../../interfaces/artist';
import { TopTrack } from '../../interfaces/top-tracks';
import noImg from '../img/noimage.png';
import './Artist.css';
import spinner from '../img/spinner.gif';


interface Param {
  id: string
}

export default function Artistt(): JSX.Element {

  const [artist, setArtist] = useState<Artist>();
  const [topTracks, setTopTracks] = useState<TopTrack[]>();
  const params: Param = useParams();

  useEffect(() => {
    axios.get(URL_ARTIST_BY_ID + params.id)
      .then(res => setArtist(res.data))
      .then(() => axios.get(URL_TOP_TRACKS + params.id))
      .then(res => setTopTracks(res.data))
  }, [params]);

  if (!topTracks?.length) return <img className='spinner' src={spinner} alt=".." />
  return (
    <div className="row mt-5 fadeInSlow">
      <div className="col-2">
        <img src={artist?.images[0].url || noImg} alt="" className="img-thumbnail img-circle" />
      </div>

      <div className="col">
        <h1>{artist?.name}</h1>
        {artist?.genres.map((genre, i) => <span key={i}> {genre} {i + 1 !== artist.genres.length && '/'} </span>)}
        <h4 className="mt-3">
          <span className="badge bg-success">Followers: <span className="badge bg-dark">{artist?.followers.total}</span></span>
        </h4>
        <p className="mt-5"><a href={artist?.external_urls.spotify} target="_blank" rel="noreferrer">
          Go to artist page
        </a></p>
      </div>

      <div className="col-2 text-right">
        <button onClick={() => window.history.back()} className="btn btn-outline-danger btn-lg w-75">
          Go Back
        </button>
      </div>

      <div className="row mt-5">
        <table className="table text-white ">
          <thead>
            <tr className="table-dark">
              <th scope="col">TOP</th>
              <th scope="col"></th>
              <th scope="col">Album</th>
              <th scope="col">Song</th>
              <th scope="col">Preview</th>
            </tr>
          </thead>
          <tbody>
            {topTracks?.map((track, i) =>
              <tr>
                <td>{i + 1}</td>
                <th scope="row">
                  <img src={track.album.images[0].url || noImg} alt="" className="img-thumb" />
                </th>
                <td>{track.album.name}</td>
                <td>{track.name}</td>
                <td>
                  {/* <audio src={track.preview_url} controls></audio> */}
                  <iframe src={`https://open.spotify.com/embed/track/${track.id}`} title={track.name} className="widget" allow="encrypted-media"></iframe>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

  )
}