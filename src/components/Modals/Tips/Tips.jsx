import React from 'react';
import s from './Tips.module.css';
import { MDBAlert } from 'mdbreact';

const Tips = (props) => {
    debugger;
    let tip1 = (value) => {
        // debugger;
        if (value) {
            return (
                <MDBAlert className={s.tip} color="success" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter film name</p>
                </MDBAlert>
            )
        } else {
            return null
        }
    };
    let tip2 = (value) => {
        if (value) {
            return (
                <MDBAlert className={s.tip} color="success" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter description</p>
                </MDBAlert>
            )
        } else {
            return null
        }
    };
    let tip3 = (value) => {
        if (value) {
            return (
                <MDBAlert className={s.tip} color="warning" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Name should be less than 50 characters</p>
                </MDBAlert>
            )
        } else {
            return null
        }
    };
    let tip4 = (value) => {
        if (value) {
            return (
                <MDBAlert className={s.tip} color="warning" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Description should be less than 300 characters</p>
                </MDBAlert>
            )
        } else {
            return null
        }
    };
    let tip5 = (value) => {
        if (value) {
            return (
                <MDBAlert className={s.tip} color="warning" >
                    <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Description should contain at least 50 characters</p>
                </MDBAlert>
            )
        } else {
            return null
        }
    };
    let tip6 = (value) => {
        if (value) {
            return (
                <MDBAlert className={s.tip} color="warning" >
                    <p><span><i style={{ marginRight: '10px', fontWeight: 'bold' }} className="fab fa-zhihu"></i></span>Name and description should not contain symbols</p>
                </MDBAlert>
            )
        } else {
            return null
        }
    }

    let nameIsEmpty = props.addFilmForm.validation.nameIsEmpty
    let nameMoreThan = props.addFilmForm.validation.nameMoreThan
    let descriptionIsEmpty = props.addFilmForm.validation.descriptionIsEmpty
    let descriptionMoreThan = props.addFilmForm.validation.descriptionMoreThan
    let descriptionLessThan = props.addFilmForm.validation.descriptionLessThan
    let inputContainSymbols = props.addFilmForm.validation.inputContainSymbols
    let tipEnterName = tip1(nameIsEmpty)
    let tipEnterDescription = tip2(descriptionIsEmpty)
    let tipNameIsBig = tip3(nameMoreThan)
    let tipDescriptionIsBig = tip4(descriptionMoreThan)
    let tipDescriptionIsSmall = tip5(descriptionLessThan)
    let tipTextContainsSymbols = tip6(inputContainSymbols)

    console.log('Component say: ')
    console.log(props.addFilmForm.validation)
    return (
        <div className={s.tipsBlock}>
            {tipEnterName}
            {tipEnterDescription}
            {tipNameIsBig}
            {tipDescriptionIsBig}
            {tipDescriptionIsSmall}
            {tipTextContainsSymbols}
        </div>

    )
    

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



// ____________________
// TIPS FUNCTIONS --> RETURN JSX
// this.tip1 = function() {
//     // debugger;
//     if (this.state.nameIsEmpty) {
//         return (
//             <MDBAlert className={s.tip} color="success" >
//                 <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter film name</p>
//             </MDBAlert>
//         )
//     } else {
//         return (
//             <p>a</p>
//         )
//     }
// };
// this.tip2 = function() {
//     if (this.state.descriptionIsEmpty) {
//         return (
//             <MDBAlert className={s.tip} color="success" >
//                 <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter description</p>
//             </MDBAlert>
//         )
//     } else {
//         return false
//     }
// };
// this.tip3 = function() {
//     if (this.state.nameMoreThan) {
//         return (
//             <MDBAlert className={s.tip} color="warning" >
//                 <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Name should be less than 50 characters</p>
//             </MDBAlert>
//         )
//     } else {
//         return false
//     }
// };
// this.tip4 = function() {
//     if (this.state.descriptionMoreThan) {
//         return (
//             <MDBAlert className={s.tip} color="warning" >
//                 <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Description should be less than 300 characters</p>
//             </MDBAlert>
//         )
//     } else {
//         return false
//     }
// };
// this.tip5 = function() {
//     if (this.state.descriptionLessThan) {
//         return (
//             <MDBAlert className={s.tip} color="warning" >
//                 <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>Description should contain at least 50 characters</p>
//             </MDBAlert>
//         )
//     } else {
//         return false
//     }
// };
// this.tip6 = function() {
//     if (this.state.inputContainSymbols) {
//         return (
//             <MDBAlert className={s.tip} color="warning" >
//                 <p><span><i style={{ marginRight: '10px', fontWeight: 'bold' }} className="fab fa-zhihu"></i></span>Name and description should not contain symbols</p>
//             </MDBAlert>
//         )
//     } else {
//         return false
//     }
// }

