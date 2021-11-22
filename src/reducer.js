/* eslint-disable default-param-last */

import { combineReducers } from 'redux';

const sort = (state = 'SORT_CHEAPEST_FIRST', action) => {
  switch (action.type) {
    case 'SORT':
      return  action.order;
    default:
      return state;
  }
};


const allFilters = (isChecked) => {
  if (isChecked) {
    return [-1, 0, 1, 2, 3];
  }

  return [];
};

const initialTransfers = allFilters(true);

const setAllChecked = (transfers) => {
  return (
    transfers.includes(0) && transfers.includes(1) && transfers.includes(2) && transfers.includes(3)
  );
};

const controlAllCheckbox = (transfers) => {
  if (setAllChecked(transfers)) {
    return allFilters(true);
  }

  return removeFilters(transfers, -1);
};

const removeFilters = (transfers, transfer) => {
  const index = transfers.indexOf(transfer);
  if (index > -1) {
    return [...transfers.slice(0, index), ...transfers.slice(index + 1)];
  }

  return transfers;
};

const changeFilters = (transfers, transfer) => {
  if (transfers.includes(transfer)) {
    return removeFilters(transfers, transfer);
  }

  return [...transfers, transfer];
};

 const transfers = (state = initialTransfers, action) => {
  switch (action.type) {
    case 'TRANSFERS':
      switch (action.transfers) {
        case -1:
          return allFilters(!state.includes(-1));
        case 0:
        case 1:
        case 2:
        case 3:
          return controlAllCheckbox(changeFilters(state, action.transfers));
        default:
          return state;
      }
    default:
      return state;
  }
};


const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'SET__LOADING':
      return action.isLoading;

    default:
      return state;
  }
};



const error = (state = null, action) => {
  switch (action.type) {
    case 'SET__ERROR':
      return action.error;

    default:
      return state;
  }
};

const progress = (state = 0, action) => {
  switch (action.type) {
    case 'SET__PROGRESS':
      return action.progress;

    default:
      return state;
  }
};

const tickets = (state = [], action) => {
  switch (action.type) {
    case 'SET__DATA':
      return [...state, ...action.tickets];

    default:
      return state;
  }
};



const reducer = combineReducers({
  tickets,
  sort,
  transfers,
  error,
  isLoading,
  progress,

});

export default reducer;

