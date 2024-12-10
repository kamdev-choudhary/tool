interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

const rootReducers = (
  state = initialState,
  action: { type: string; payload: boolean }
): State => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default rootReducers;
