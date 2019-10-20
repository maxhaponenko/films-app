import { connect } from 'react-redux'
import ModalAddPerson from './ModalAddPerson'
import { changePersonModalStatusCreator, changeInputFirstNameCreator, changeInputSecondNameCreator, changeInputAgeCreator, changeStepCreator, addFilmToFavoritesCreator, deleteDataInFormCreator, addPersonCreator } from '../../../redux/personsPage-reducer'

let mapStateToProps = (state) => {
    return {
        filmsPage: state.filmsPage,
        personsPage: state.personsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changePersonModalStatus: () => {
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
        changeInputAge: (text) => {
            let action = changeInputAgeCreator(text)
            dispatch(action)
        },
        changeStep: (number) => {
            let action = changeStepCreator(number)
            dispatch(action)
        },
        addFilmToFavorites: (id) => {
            let action = addFilmToFavoritesCreator(id)
            dispatch(action)
        },
        deleteDataInForm: () => {
            let action = deleteDataInFormCreator()
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