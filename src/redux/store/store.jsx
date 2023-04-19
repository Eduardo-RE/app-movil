import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import { AuthUser } from "../reducers/authReducer";

import { createStore, combineReducers, applyMiddleware } from "redux";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: AuthUser,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export { persistor };

export default store;
