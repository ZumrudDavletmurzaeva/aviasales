
import { getSearchId, getData } from './services/aviasalesApi';
export const sortCheap = () => ({type: 'SORT',
  order: 'SORT_CHEAPEST_FIRST'});

export const sortFast = () => ({ type: 'SORT',
order: 'SORT_FASTEST_FIRST'});

export const allTransfers = () => ({ type: 'TRANSFERS', transfers: -1});


export const noneTransfers = () => ({type: 'TRANSFERS', transfers: 0});

export const oneTransfer = () =>({type: 'TRANSFERS', transfers: 1})

export const twoTransfers = ()=> ({type: 'TRANSFERS', transfers: 2})

export const threeTransfers = () =>({type: 'TRANSFERS', transfers: 3})

export const Error = (error) => ({ type: 'SET__ERROR', error });

export const Loading = (isLoading) => ({ type: 'SET__LOADING', isLoading });

export const Progress = (progress) => ({ type: 'SET__PROGRESS', progress });

export const setData = (tickets) => ({ type: 'SET__DATA', tickets });


export const DataFlight = () => async (dispatch) => {
  dispatch(Loading(true));
  let responseId;
  try {
    responseId = await getSearchId();
  } catch (err) {
    dispatch(Error(err));
    dispatch(Loading(false));
    return;
  }
  const circle = 30;
  for (let i = 1; i <= circle; i++) {
  try {
   const { tickets, stop} = await getData(responseId.searchId);
   if (!stop) {
   dispatch(setData(tickets)); 
   dispatch(Progress((i*100)/100))
  }
else{
  dispatch(Progress((100)))
}
  } catch (err) {
    dispatch(Error(err));
  } finally {
   dispatch(Loading(false));
    }
  
}}
