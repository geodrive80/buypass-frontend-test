export const FETCH_POTS = 'FETCH_POTS';
export const FETCH_POTS_SUCCESS = 'FETCH_POTS_SUCCESS';
export const FETCH_POTS_FAILURE = 'FETCH_POTS_FAILURE';
export const SET_SORTING = 'SET_SORTING';
export const SET_SHOW_ALL = 'SET_SHOW_ALL';

export const fetchPots = () => ({ type: FETCH_POTS });

export const fetchPotsSuccess = pots => ({
  type: FETCH_POTS_SUCCESS,
  pots
});

export const fetchPotsFailure = error => ({
  type: FETCH_POTS_FAILURE,
  error
});

export const setSorting = isAscending => ({
  type: SET_SORTING,
  isAscending
});

export const setShowAll = () => ({ type: SET_SHOW_ALL });
