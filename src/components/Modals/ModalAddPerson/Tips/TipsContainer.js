import { connect } from 'react-redux';
import React from 'react';
import Tips from './Tips'

let mapStateToProps = (state) => {
    // debugger;
    // console.log('Container say :')
    // console.log(state.filmsPage.addFilmForm.validation)
    return {
        addPersonForm: state.personsPage.addPersonForm
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const TipsContainer = connect(mapStateToProps, mapDispatchToProps)(Tips)

export default TipsContainer