import merge from 'lodash/merge';

const initialState = () => ({
  name: "CircularProgress",
  properties: {
    size: 40,
    thickness: 7
  },
  documentation: {
    size: "This property determines the diameter of the circle.",
    thickness: "This controls the thickness of the circle."
  }
});

const CircularProgressHelper = (state, action) => {
  if (state.name !== "CircularProgress") {
    return initialState();
  } else {
    if (!action.properties) {
      return state;
    } else {
      let newState = merge({}, state);
      let propKey = Object.keys(action.properties)[0];
      newState.properties[propKey] = action.properties[propKey];
      return newState;
    }
  }

};

export default CircularProgressHelper;
