import { connect } from 'react-redux'
import { changePersonModalStatusCreator, deleteCurrentPersonCreator } from '../../../redux/personsPage-reducer'

import Persons from './Persons'

let mapStateToProps = (state) => {
    return {
        personsPage: state.personsPage,
        allFilms: state.filmsPage.allFilms
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        deleteCurrentPerson: (id) => {
            let action = deleteCurrentPersonCreator(id)
            dispatch(action)
        },
        changePersonModalStatus: () => {
            let action = changePersonModalStatusCreator()
            dispatch(action)
        }
    }
}

const PersonsContainer = connect(mapStateToProps, mapDispatchToProps)(Persons)

export default PersonsContainer