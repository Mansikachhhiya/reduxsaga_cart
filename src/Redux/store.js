import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./Reducer/rootReducer"
import  ProductSaga from "./ProductSaga";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware()
 export const store = configureStore({
  reducer:rootReducer,
  middleware: ()=>[sagaMiddleware]
 }
 )
sagaMiddleware.run(ProductSaga);