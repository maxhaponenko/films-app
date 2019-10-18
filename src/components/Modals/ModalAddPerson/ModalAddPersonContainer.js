import React from 'react'
import { connect } from 'react-redux'
import ModalAddPerson from './ModalAddPerson'
import { changePersonModalStatusCreator, changeInputFirstNameCreator, changeInputSecondNameCreator, addPersonCreator } from '../../../redux/personsPage-reducer'

let mapStateToProps = (state) => {
    // debugger
    return {
        filmsPage: state.filmsPage,
        personsPage: state.personsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changePersonModalStatus: () => {
            // debugger;
            let action = changePersonModalStatusCreator()
            dispatch(action)
        },
        changeInputFirstName: (text) => {
            let action = changeInputFirstNameCreator(text)
            dispatch(action)
        },
        changeInputSecondName: (text) => {
            let action = changeInputSecondNameCreator(text)
            dispatch(action)
        },
        addPerson: () => {
            let action = addPersonCreator()
            dispatch(action)
        }
    }
}

const ModalAddPersonContainer = connect(mapStateToProps, mapDispatchToProps)(ModalAddPerson)

export default ModalAddPersonContainer