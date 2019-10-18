import { createStore, combineReducers } from 'redux'
import filmsPageReducer from "./filmsPage-reducer"
import personsPageReducer from './personsPage-reducer'

let reducers = combineReducers({
    filmsPage: filmsPageReducer,
    personsPage: personsPageReducer
})

let store = createStore(reducers)



export default store