import { connect } from 'react-redux';
import React from 'react';
import Tips from './Tips'

let mapStateToProps = (state) => {
    // debugger;
    // console.log('Container say :')
    // console.log(state.filmsPage.addFilmForm.validation)
    return {
        addFilmForm: state.filmsPage.addFilmForm
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const TipsContainer = connect(mapStateToProps, mapDispatchToProps)(Tips)

export default TipsContainer