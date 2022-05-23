import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import chatbotReducer from './reducers/ChatbotReducer';

const persistConfig = {
    key: 'root',
    storage: storage,
  };

const rootReducer = combineReducers({ 
    chatbotReducer: chatbotReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
//export const persistor = persistStore(store);
