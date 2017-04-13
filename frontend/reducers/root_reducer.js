import { combineReducers } from 'redux';
import AllComponentsReducer from './all_components_reducer';
import currentComponentReducer from './current_component_reducer';

const RootReducer = combineReducers({
  allComponents: AllComponentsReducer,
  currentComponent: currentComponentReducer
});

export default RootReducer;
