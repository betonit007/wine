export default (state = [], action) => {
    switch(action.type) {
        case 'GET_WINE':
          return action.payload;
        default:
          return state;
    }
}