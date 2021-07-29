import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../interfaces/interface';
import { NewReleases } from '../../interfaces/new-releases';
import { getNewRealses } from '../../redux/actions/actions';
import Card from '../Card/Card';
import spinner from '../img/spinner.gif';

export default function Home(): JSX.Element {

  const dispatch = useDispatch();
  const newRealses: NewReleases[] = useSelector((state: State) => state.newReleases)

  useEffect(() => {
    dispatch(getNewRealses());
  }, [dispatch]);

  return (
    <div>
      <h1 className="my-5 text-light">New Releases</h1>
      {!newRealses.length ? <img className='spinner' src={spinner} alt=".." /> :
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
          {newRealses.map(release => <Card item={release} />)}
        </div>}
    </div>
  )
}