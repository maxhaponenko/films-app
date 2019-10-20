import { connect } from 'react-redux';
import TipsStep1 from './TipsStep1'

let mapStateToProps = (state) => {
    return {
        addPersonForm: state.personsPage.addPersonForm
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const TipsStep1Container = connect(mapStateToProps, mapDispatchToProps)(TipsStep1)

export default TipsStep1Container