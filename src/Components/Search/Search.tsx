import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Artist } from '../../interfaces/artist';
import { State } from '../../interfaces/interface';
import { getArtists } from '../../redux/actions/actions';
import Card from '../Card/Card';

export default function Search() {

  const dispatch = useDispatch();
  const results: Artist[] = useSelector((state: State) => state.artistsFound);

  const handleInputChange = (event: any) => {
    dispatch(getArtists(event.target.value));
  }

  return (
    <div className="row mt-5 fadeInFast">
      <h1 className="text-white mb-5">Search your favourites artists</h1>
      <div className="col mb-3">
        <input type="text" className="form-control" placeholder="Search artist..." onChange={handleInputChange} />
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {results.map(artist => <Card item={artist} />)}
      </div>
    </div>

  )
}