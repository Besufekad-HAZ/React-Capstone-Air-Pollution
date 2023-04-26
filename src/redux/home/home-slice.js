const GET_REGIONS = 'air/home/GET_REGIONS';

export const getContinents = (payload) => ({
  type: GET_REGIONS,
  payload,
});

const continentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_REGIONS:
      return action.payload;
    default:
      return state;
  }
};

export default continentsReducer;
