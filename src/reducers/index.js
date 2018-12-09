import {
  FETCH_POTS,
  FETCH_POTS_SUCCESS,
  FETCH_POTS_FAILURE,
  SET_SHOW_ALL,
  SET_SORTING
} from '../actions';
import getVisiblePots from './get-visible-pots';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POTS:
      return {
        isLoading: true,
        ...state
      };

    case FETCH_POTS_SUCCESS:
      return {
        ...state,
        pots: action.response.pots,
        visiblePots: getVisiblePots(action.response.pots, state.from, state.size, state.isAscending),
        isLoading: false
      };

    case FETCH_POTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case SET_SHOW_ALL:
      return {
        ...state,
        size: 0,
        visiblePots: getVisiblePots(state.pots, state.from, 0, state.isAscending)
      };

    case SET_SORTING:
      return {
        ...state,
        isAscending: action.isAscending,
        visiblePots: getVisiblePots(state.pots, state.from, state.size, action.isAscending)
      };

    default:
      return {
        ...state
      };
  }
};
