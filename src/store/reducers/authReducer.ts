interface State {
  token: string;
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
  username: '',
  loggedIn: false,
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