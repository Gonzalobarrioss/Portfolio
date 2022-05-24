import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import chatbotReducer from './reducers/ChatbotReducer';
import stylesReducer from './reducers/StylesReducer';

const persistConfig = {
    key: 'root',
    storage: storage,
  };

const rootReducer = combineReducers({ 
    chatbotReducer: chatbotReducer,
    stylesReducer: stylesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
//export const persistor = persistStore(store);
