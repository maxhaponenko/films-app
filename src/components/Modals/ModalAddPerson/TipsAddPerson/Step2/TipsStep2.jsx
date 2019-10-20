import React from 'react';
import s from '../Tips.module.css';
import { MDBAlert } from 'mdbreact';

const Tips = (props) => {
    
    // Validation true/false
    let filmsToAddEmpty = props.addPersonForm.validation.filmsToAddEmpty
    let filmsToAddIsTooBig = props.addPersonForm.validation.filmsToAddIsTooBig
    
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
        chooseFilms: 'Choose films you like',
        selectLessFilms: 'You can`t select more than 5 films',
    }
    
    // Create tips --> will be rendered only if will match validation rules
    let tipChooseFilms = tipCreator(filmsToAddEmpty, tipTexts.chooseFilms, "fas fa-keyboard", "success")
    let tipSelectLessFilms = tipCreator(filmsToAddIsTooBig, tipTexts.selectLessFilms, "fas fa-keyboard", "warning")

    return (
        <div className={s.tipsBlock}>
            {tipChooseFilms}
            {tipSelectLessFilms}
        </div>
    )
}

export default Tips

