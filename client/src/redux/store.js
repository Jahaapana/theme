import { createStore } from "redux";

import rootReducer from "./reducers";

const mockinStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

export default mockinStore;
