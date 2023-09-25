interface State {
  token: string;
  id: string;
  username: string;
  loggedIn: boolean;
}

interface Action {
  type: string;
  data: object;
  error: null | string;
}

const initialState: State = {
  token: '',
  id: 'eab49749-cdc7-4449-b78d-68ed55012ca6',
  username: 'mtthdz',
  loggedIn: true,
};

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedIn: true };

    case 'LOGOUT':
      return { ...state, loggedIn: false };

    default:
      return state;
  }
};

export default authReducer;