import thunk from 'redux-thunk';
import { createStore,applyMiddleware,compose } from "redux";
import peopleReducer from "./reducers";
import { saveState, loadState } from "./utils/localStorage";


const persistedState = loadState();
const store = createStore(
    peopleReducer,
    persistedState,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
store.subscribe(() => {
    saveState({
        people: store.getState().people,
        loading: store.getState().loading,
        error: store.getState().error,
    });
});

export default store;