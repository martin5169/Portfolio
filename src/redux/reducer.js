const initialState = {
    language: 'es',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LANGUAGE':
        return { ...state, language: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;