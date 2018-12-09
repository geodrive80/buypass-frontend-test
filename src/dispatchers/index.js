import * as potsResponse from '../state/data.json';
import { fetchPots, fetchPotsFailure, fetchPotsSuccess } from '../actions';

export function fetchPotsData() {
  return (dispatch) => {
    dispatch(fetchPots());
    const { pots } = potsResponse;
    Promise.resolve(pots)
      .then(data => dispatch(fetchPotsSuccess(data)))
      .catch(error => dispatch(fetchPotsFailure(error)));
  };
}

