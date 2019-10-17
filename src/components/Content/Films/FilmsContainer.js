import React from 'react'
import { connect } from 'react-redux'
import Films from './Films'
import { deleteCurrentFilmCreator, changeFilmModalStatusCreator } from '../../../redux/filmsPage-reducer'

let mapStateToProps = (state) => {
    return {
        filmsPage: state.filmsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        deleteCurrentFilm: (id) => {
            let action = deleteCurrentFilmCreator(id)
            dispatch(action)
        },
        changeFilmModalStatus: () => {
            let action = changeFilmModalStatusCreator()
            dispatch(action)
        }
    }
}

const FilmsContainer = connect(mapStateToProps, mapDispatchToProps)(Films)

export default FilmsContainer