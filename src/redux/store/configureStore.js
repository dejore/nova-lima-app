import { createStore, combineReducers } from "redux";

import adiantamentoReducer from "./../reducers/adiantamento";

const rootReducer = combineReducers({
  adiantamento: adiantamentoReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
