import React from 'react'
import { connect } from 'react-redux'
import ModalAddFilm from './ModalAddFilm'
import { changeFilmModalStatusCreator, changeInputNameTextCreator, changeInputDescriptionTextCreator, addFilmCreator } from '../../../redux/filmsPage-reducer'

let mapStateToProps = (state) => {
    return {
        filmsPage: state.filmsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeFilmModalStatus: () => {
            // debugger;
            let action = changeFilmModalStatusCreator()
            dispatch(action)
        },
        changeInputNameText: (text) => {
            let action = changeInputNameTextCreator(text)
            dispatch(action)
        },
        changeInputDescriptionText: (text) => {
            let action = changeInputDescriptionTextCreator(text)
            dispatch(action)
        },
        addFilm: () => {
            let action = addFilmCreator()
            dispatch(action)
        }
    }
}

const ModalAddFilmContainer = connect(mapStateToProps, mapDispatchToProps)(ModalAddFilm)

export default ModalAddFilmContainer