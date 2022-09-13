import axios from 'axios'; 

// Actions

const GET_GREETINGS = "GET_GREETINGS";


// Action Creators


const getGreetingsSuccess = () => ({
  type: GET_GREETINGS,
  payload: greeting,
});

// Thunk Creators

const initialState = {
  greeting: [],
};

const getGreeting = () => async (dispatch) => {
  const response = await axios.get('/greetings');
  const greeting = response.data.greeting;

  dispatch({
    type: GET_GREETINGS,
    payload: greeting
  });
};


const greetingReducer = (state= initialState, action) => {

  switch (action.type) {
    case 'GET_GREETINGS':
      return {
        ...state,
        greeting: action.payload
      };
    default:
      return state;
    }
};

export default greetingReducer;
export {
  getGreetingsSuccess,
  getGreeting,
};