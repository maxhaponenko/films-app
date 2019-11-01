import { applyMiddleware, createStore, combineReducers } from 'redux'
import { save, load } from 'redux-localstorage-simple'
import filmsPageReducer from "./filmsPage-reducer"
import personsPageReducer from './personsPage-reducer'

let reducers = combineReducers({
    filmsPage: filmsPageReducer,
    personsPage: personsPageReducer
})

const createStoreWithMiddleware = applyMiddleware(save())(createStore)

let store = createStoreWithMiddleware(reducers, load())    



export default store