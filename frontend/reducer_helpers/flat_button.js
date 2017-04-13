import merge from 'lodash/merge';

export const initialState = () => ({
  name: "FlatButton",
  properties: {
    fullWidth: false,
    href: "#",
    label: "I'm a flat button!",
    disabled: false
  },
  documentation: {
    fullWidth: "The fullWidth property takes a boolean value to determine the button width.",
    href: "Add in a url string to determine where your user will go when they click the button.",
    label: "Use the label property to set your button text.",
    disabled: "The disabled property disables the button if set to true. The default for this property is false."
  }
});

export const flatButtonHelper = (state, action) => {
  if (state.name !== "FlatButton") {
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
