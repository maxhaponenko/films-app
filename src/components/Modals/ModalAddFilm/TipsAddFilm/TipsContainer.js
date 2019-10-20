import { connect } from 'react-redux';
import Tips from './Tips'

let mapStateToProps = (state) => {
    return {
        addFilmForm: state.filmsPage.addFilmForm
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const TipsContainer = connect(mapStateToProps, mapDispatchToProps)(Tips)

export default TipsContainer