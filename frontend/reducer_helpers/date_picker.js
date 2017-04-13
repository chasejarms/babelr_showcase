import merge from 'lodash/merge';

const initialState = () => ({
  name: "DatePicker",
  properties: {
    hintText: "Click here to pick a date!",
    mode: "landscape"
  },
  documentation: {
    hintText: "The hintText property sets the placeholder for your input box.",
    mode: "The mode property has two options, landscape and portrait, which set the orientation of the date popup."
  }
});

const datePickerHelper = (state, action) => {
  if (state.name !== "DatePicker") {
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

export default datePickerHelper;
