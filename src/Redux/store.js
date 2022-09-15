import { legacy_createStore as createStore ,applyMiddleware,compose  } from "redux";


import { Authreducer } from "./Auth/reducer";

import { combineReducers } from "redux";
import reducer from "./Products/reducer";

const rootreducer=combineReducers({
  Auth: Authreducer,
  reducer:reducer

   
})


const thunk=(store)=>(next)=>(action)=>{
    // console.log("type of Action", typeof action);

    if(typeof action==="function"){
      return   action(store.dispatch)
    }
    next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);


 export const store=createStore (rootreducer, enhancer)
