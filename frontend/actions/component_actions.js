export const GET_ALL_COMPONENTS = "GET_ALL_COMPONENTS";
export const CHANGE_CURRENT_COMPONENT = "CHANGE_CURRENT_COMPONENT";

export const getAllComponent = () => ({
  type: GET_ALL_COMPONENTS
});

export const changeCurrentComponent = (componentName, properties) => ({
  type: CHANGE_CURRENT_COMPONENT,
  componentName,
  properties
});
