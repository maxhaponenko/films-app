import { connect } from 'react-redux';
import TipsStep2 from './TipsStep2'

let mapStateToProps = (state) => {
    return {
        addPersonForm: state.personsPage.addPersonForm
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}
const TipsStep2Container = connect(mapStateToProps, mapDispatchToProps)(TipsStep2)

export default TipsStep2Container