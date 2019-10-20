import React from 'react';
import s from './Tips.module.css';
import { MDBAlert } from 'mdbreact';

const Tips = (props) => {

    // Validation true/false
    let nameIsEmpty = props.addFilmForm.validation.nameIsEmpty
    let nameMoreThan = props.addFilmForm.validation.nameMoreThan
    let descriptionIsEmpty = props.addFilmForm.validation.descriptionIsEmpty
    let descriptionMoreThan = props.addFilmForm.validation.descriptionMoreThan
    let descriptionLessThan = props.addFilmForm.validation.descriptionLessThan
    let inputContainSymbols = props.addFilmForm.validation.inputContainSymbols

    // Tips creator
    let tipCreator = (type, text, icon, color) => {
        if (type) {
            return (
                <MDBAlert className={`${s.tip} noselect`} color={color} >
                    <p><span><i style={{ marginRight: '10px', fontWeight: 'bold' }} className={icon}></i></span>{text}</p>
                </MDBAlert>
            )
        } else {
            return null
        }
    }

    // Tips texts
    let tipTexts = {
        enterFilmName: 'Enter film name',
        enterDescription: 'Enter description',
        nameIsBig: 'Film name should be less than 15 characters',
        descriptionIsBig: 'Description should be less than 300 characters',
        descriptionIsSmall: 'Description should contain at least 50 characters',
        textContainsSymbols: 'Name and description should not contain symbols'
    }

    // Create tips
    let tipEnterName = tipCreator(nameIsEmpty, tipTexts.enterFilmName, "fas fa-keyboard", "success")
    let tipEnterDescription = tipCreator(descriptionIsEmpty, tipTexts.enterDescription, "fas fa-keyboard", "success")
    let tipNameIsBig = tipCreator(nameMoreThan, tipTexts.nameIsBig, "fas fa-exclamation", "warning")
    let tipDescriptionIsBig = tipCreator(descriptionMoreThan, tipTexts.descriptionIsBig, "fas fa-exclamation", "warning")
    let tipDescriptionIsSmall = tipCreator(descriptionLessThan, tipTexts.descriptionIsSmall, "fas fa-exclamation", "warning")
    let tipTextContainsSymbols = tipCreator(inputContainSymbols, tipTexts.textContainsSymbols, "fab fa-zhihu", "warning")

    
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

