import { createStore, combineReducers } from 'redux'
import filmsPageReducer from "./filmsPage-reducer";

let reducers = combineReducers({
    filmsPage: filmsPageReducer
})

let store = createStore(reducers)



export default store