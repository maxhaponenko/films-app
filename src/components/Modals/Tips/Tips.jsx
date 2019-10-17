import React from 'react';
import { Component } from 'react';
import s from './Tips.module.css';
import { MDBAlert } from 'mdbreact';

export class Tips extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameIsEmpty: this.props.addFilmForm.validation.nameIsEmpty,
            nameMoreThan: this.props.addFilmForm.validation.nameMoreThan,
            descriptionIsEmpty: this.props.addFilmForm.validation.descriptionIsEmpty,
            descriptionMoreThan: this.props.addFilmForm.validation.descriptionMoreThan,
            descriptionLessThan: this.props.addFilmForm.validation.descriptionLessThan,
            inputContainSymbols: this.props.addFilmForm.validation.inputContainSymbols
        }
    }

    // debugger
    // let validationData = props.filmsPage.addFilmForm.validation

    

    tip1 = () => {
        // debugger;
        if (this.state.nameIsEmpty) {
            return (
                <MDBAlert className={s.tip} color="success" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter film name</p>
                </MDBAlert>
            )
        } else {
            return (
                <p>a</p>
            )
        }
    }
    tip2 = () => {
        if (this.state.descriptionIsEmpty) {
            return (
                <MDBAlert className={s.tip} color="success" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter description</p>
                </MDBAlert>
            )
        } else {
            return false
        }
    }
    tip3 = () => {
        if (this.state.nameMoreThan) {
            return (
                <MDBAlert className={s.tip} color="warning" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Name should be less than 50 characters</p>
                </MDBAlert>
            )
        } else {
            return false
        }
    }
    tip4 = () => {
        if (this.state.descriptionMoreThan) {
            return (
                <MDBAlert className={s.tip} color="warning" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Description should be less than 300 characters</p>
                </MDBAlert>
            )
        } else {
            return false
        }
    }
    tip5 = () => {
        if (this.state.descriptionLessThan) {
            return (
                <MDBAlert className={s.tip} color="warning" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Description should contain at least 50 characters</p>
                </MDBAlert>
            )
        } else {
            return false
        }
    }
    tip6 = () => {
        if (this.state.inputContainSymbols) {
            return (
                <MDBAlert className={s.tip} color="warning" >
                    <p><span><i style={{ marginRight: '10px', fontWeight: 'bold' }} className="fab fa-zhihu"></i></span>Name and description should not contain symbols</p>
                </MDBAlert>
            )
        } else {
            return false
        }
    }

    // componentDidMount() {
    //     debugger;
    //     this.setState(() => { 
    //         this.state.tipEnterName = this.tip1()
    //         this.state.tipEnterDescription = this.tip2()
    //         this.state.tipNameIsBig = this.tip3()
    //         this.state.tipDescriptionIsBig = this.tip4()
    //         this.state.tipDescriptionIsSmall = this.tip5()
    //         this.state.tipTextContainsSymbols = this.tip6()
    //     })
    // }

    componentWillReceiveProps() {
		this.setState(() => { 
            this.state.tipEnterName = this.tip1()
            this.state.tipEnterDescription = this.tip2()
            this.state.tipNameIsBig = this.tip3()
            this.state.tipDescriptionIsBig = this.tip4()
            this.state.tipDescriptionIsSmall = this.tip5()
            this.state.tipTextContainsSymbols = this.tip6()
        })
		
	}
    
    
    render() {
        return (
            <div className={s.tipsBlock}>
                {this.state.tipEnterName}
                {this.state.tipEnterDescription}
                {this.state.tipNameIsBig}
                {this.state.tipDescriptionIsBig}
                {this.state.tipDescriptionIsSmall}
                {this.state.tipTextContainsSymbols}
            </div>
        )
    }
    
}

export default Tips





// const Tips = (props) => {
//     // debugger
//     // let validationData = props.filmsPage.addFilmForm.validation

//     let nameIsEmpty = props.addFilmForm.validation.nameIsEmpty
//     let nameMoreThan = props.addFilmForm.validation.nameMoreThan
//     let descriptionIsEmpty = props.addFilmForm.validation.descriptionIsEmpty
//     let descriptionMoreThan = props.addFilmForm.validation.descriptionMoreThan
//     let descriptionLessThan = props.addFilmForm.validation.descriptionLessThan
//     let inputContainSymbols = props.addFilmForm.validation.inputContainSymbols

//     let tip1 = () => {
//         // debugger;
//         if (nameIsEmpty) {
//             return (
//                 <MDBAlert className={s.tip} color="success" >
//                     <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter film name</p>
//                 </MDBAlert>
//             )
//         } else {
//             return (
//                 <p>a</p>
//             )
//         }
//     }
//     let tip2 = () => {
//         if (descriptionIsEmpty) {
//             return (
//                 <MDBAlert className={s.tip} color="success" >
//                     <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter description</p>
//                 </MDBAlert>
//             )
//         } else {
//             return false
//         }
//     }
//     let tip3 = () => {
//         if (nameMoreThan) {
//             return (
//                 <MDBAlert className={s.tip} color="warning" >
//                     <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Name should be less than 50 characters</p>
//                 </MDBAlert>
//             )
//         } else {
//             return false
//         }
//     }
//     let tip4 = () => {
//         if (descriptionMoreThan) {
//             return (
//                 <MDBAlert className={s.tip} color="warning" >
//                     <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Description should be less than 300 characters</p>
//                 </MDBAlert>
//             )
//         } else {
//             return false
//         }
//     }
//     let tip5 = () => {
//         if (descriptionLessThan) {
//             return (
//                 <MDBAlert className={s.tip} color="warning" >
//                     <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Description should contain at least 50 characters</p>
//                 </MDBAlert>
//             )
//         } else {
//             return false
//         }
//     }
//     let tip6 = () => {
//         if (inputContainSymbols) {
//             return (
//                 <MDBAlert className={s.tip} color="warning" >
//                     <p><span><i style={{ marginRight: '10px', fontWeight: 'bold' }} className="fab fa-zhihu"></i></span>Name and description should not contain symbols</p>
//                 </MDBAlert>
//             )
//         } else {
//             return false
//         }
//     }

//     let tipEnterName = tip1()
//     let tipEnterDescription = tip2()
//     let tipNameIsBig = tip3()
//     let tipDescriptionIsBig = tip4()
//     let tipDescriptionIsSmall = tip5()
//     let tipTextContainsSymbols = tip6()

//     return (
//         <div className={s.tipsBlock}>
//             {tipEnterName}
//             {tipEnterDescription}
//             {tipNameIsBig}
//             {tipDescriptionIsBig}
//             {tipDescriptionIsSmall}
//             {tipTextContainsSymbols}
//         </div>
//     )
// }

// export default Tips