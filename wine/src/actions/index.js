import wineService from '../apis/wineService';


export const getWine = () => async dispatch => {
  const res = await wineService.get('wines');

  dispatch({ type: 'GET_WINE', payload: res })
};


