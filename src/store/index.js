import { createStore, applyMiddleware, compose } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk'; // 用来在action里面支持异步
import storage from 'redux-persist/lib/storage';
import reducer from "./reducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    // blacklist: ['pages'],
    whitelist: ['pages', 'activeKey']
};
// const myPersistReducer = persistReducer(persistConfig, reducer)

// const store = createStore(myPersistReducer)
// export const persistor = persistStore(store)

// export default store


const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
 
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
 
const myReducer = persistReducer({
    key: 'root',
    storage
}, reducer);
 
const store = createStore(myReducer, enhancer);
 
export const persistor = persistStore(store);
export default store;