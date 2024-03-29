import React from 'react';
import s from '../Tips.module.css';
import { MDBAlert } from 'mdbreact';

const Tips = (props) => {
    
    // Validation true/false
    let nameIsEmpty = props.addPersonForm.validation.nameIsEmpty
    let secondNameIsEmpty = props.addPersonForm.validation.secondNameIsEmpty
    let ageIsEmpty = props.addPersonForm.validation.ageIsEmpty
    let nameMoreThan = props.addPersonForm.validation.nameMoreThan
    let secondNameMoreThan = props.addPersonForm.validation.secondNameMoreThan
    let unrealAge = props.addPersonForm.validation.unrealAge
    let inputContainSymbols = props.addPersonForm.validation.inputContainSymbols

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

    let tipTexts = {
        enterName: 'Enter name',
        enterSecondName: 'Enter second name',
        enterAge: 'Enter age',
        nameIsBig: 'Name should be less than 15 characters',
        secondNameIsBig: 'Second name should be less than 20 characters',
        unrealAge: 'Don`t joke with us! Please, enter real age',
        textContainsSymbols: 'Name and second name should not contain symbols'
    }
    
    // Create tips
    let tipEnterName = tipCreator(nameIsEmpty, tipTexts.enterName, "fas fa-keyboard", "success")
    let tipEnterSecondName = tipCreator(secondNameIsEmpty, tipTexts.enterSecondName, "fas fa-keyboard", "success")
    let tipEnterAge = tipCreator(ageIsEmpty, tipTexts.enterAge, "fas fa-keyboard", "success")
    let tipNameIsBig = tipCreator(nameMoreThan, tipTexts.nameIsBig, "fas fa-exclamation", "warning")
    let tipSecondNameIsBig = tipCreator(secondNameMoreThan, tipTexts.secondNameIsBig, "fas fa-exclamation", "warning")
    let tipUnrealAge = tipCreator(unrealAge, tipTexts.unrealAge, "fab fa-zhihu", "warning")
    let tipTextContainsSymbols = tipCreator(inputContainSymbols, tipTexts.textContainsSymbols, "fab fa-zhihu", "warning")

    return (
        <div className={s.tipsBlock}>
            {tipEnterName}
            {tipEnterSecondName}
            {tipEnterAge}
            {tipNameIsBig}
            {tipSecondNameIsBig}
            {tipUnrealAge}
            {tipTextContainsSymbols}
        </div>
    )
}


export default Tips






// const Tips = (props) => {
//     // debugger
//     // let validationData = props.filmsPage.addPersonForm.validation

//     let nameIsEmpty = props.addPersonForm.validation.nameIsEmpty
//     let nameMoreThan = props.addPersonForm.validation.nameMoreThan
//     let secondNameIsEmpty = props.addPersonForm.validation.secondNameIsEmpty
//     let secondNameMoreThan = props.addPersonForm.validation.secondNameMoreThan
//     let secondNameLessThan = props.addPersonForm.validation.secondNameLessThan
//     let inputContainSymbols = props.addPersonForm.validation.inputContainSymbols

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
//         if (secondNameIsEmpty) {
//             return (
//                 <MDBAlert className={s.tip} color="success" >
//                     <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter secondName</p>
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
//         if (secondNameMoreThan) {
//             return (
//                 <MDBAlert className={s.tip} color="warning" >
//                     <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>secondName should be less than 300 characters</p>
//                 </MDBAlert>
//             )
//         } else {
//             return false
//         }
//     }
//     let tip5 = () => {
//         if (secondNameLessThan) {
//             return (
//                 <MDBAlert className={s.tip} color="warning" >
//                     <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>secondName should contain at least 50 characters</p>
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
//                     <p><span><i style={{ marginRight: '10px', fontWeight: 'bold' }} className="fab fa-zhihu"></i></span>Name and secondName should not contain symbols</p>
//                 </MDBAlert>
//             )
//         } else {
//             return false
//         }
//     }

//     let tipEnterName = tip1()
//     let tipEntersecondName = tip2()
//     let tipNameIsBig = tip3()
//     let tipsecondNameIsBig = tip4()
//     let tipsecondNameIsSmall = tip5()
//     let tipTextContainsSymbols = tip6()

//     return (
//         <div className={s.tipsBlock}>
//             {tipEnterName}
//             {tipEntersecondName}
//             {tipNameIsBig}
//             {tipsecondNameIsBig}
//             {tipsecondNameIsSmall}
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
//     if (this.state.secondNameIsEmpty) {
//         return (
//             <MDBAlert className={s.tip} color="success" >
//                 <p><span><i style={{ marginRight: '10px' }} className="fas fa-keyboard"></i></span>Enter secondName</p>
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
//     if (this.state.secondNameMoreThan) {
//         return (
//             <MDBAlert className={s.tip} color="warning" >
//                 <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>secondName should be less than 300 characters</p>
//             </MDBAlert>
//         )
//     } else {
//         return false
//     }
// };
// this.tip5 = function() {
//     if (this.state.secondNameLessThan) {
//         return (
//             <MDBAlert className={s.tip} color="warning" >
//                 <p><span><i style={{ marginRight: '10px' }} className="fas fa-exclamation"></i></span>secondName should contain at least 50 characters</p>
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
//                 <p><span><i style={{ marginRight: '10px', fontWeight: 'bold' }} className="fab fa-zhihu"></i></span>Name and secondName should not contain symbols</p>
//             </MDBAlert>
//         )
//     } else {
//         return false
//     }
// }

