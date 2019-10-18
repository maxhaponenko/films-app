import { validate, isNumberLiteralTypeAnnotation } from '@babel/types';

// import Tokenizer from 'sentence-tokenizer'
// var tokenizer = new Tokenizer('Chuck');
var _ = require('lodash');


const DELETE_CURRENT_FILM = 'DELETE-CURRENT-FILM'
const CHANGE_FILM_MODAL_STATUS = 'CHANGE-FILM-MODAL-STATUS'
const CHANGE_INPUT_NAME_TEXT = 'CHANGE-INPUT-NAME-TEXT'
const CHANGE_INPUT_DESCRIPTION_TEXT = 'CHANGE-INPUT-DESCRIPTION-TEXT'

let initialState = {
    allFilms: [
        {
            id: 1,
            name: "Green mile",
            description: "The film stars Tom Hanks as Paul Edgecomb and Michael Clarke Duncan as John Coffey, with supporting roles by David Morse, Bonnie Hunt, and James Cromwell. It also features Dabbs Greer in his final film role as the older Paul Edgecomb before his death in 2007 at the age of 90 from renal failure and heart"
        },
        {
            id: 2,
            name: "Forrest Gump",
            description: 'American comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel by Winston Groom, and stars Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson, and Sally Field. The story depicts several decades in the life o'
        },
        {
            id: 3,
            name: "One Flew Over the Cuckoo's Nest",
            description: "American comedy-drama film directed by Miloš Forman, based on the 1962 novel One Flew Over the Cuckoo's Nest by Ken Kesey and the play version adapted from the novel by Dale Wasserman. The film stars Jack Nicholson as Randle McMurphy, a new patient at a mental institution, and features a supporting cast of Louise Fletcher, William Redfield, Will Sampson, Sydney Lassick, Brad Dourif, Danny DeVito and Christopher Lloyd in his film debut."
        },
        {
            id: 4,
            name: "Great Gatsby",
            description: "Film based on F. Scott Fitzgerald's 1925 novel of the same name. The film was co-written and directed by Baz Luhrmann and stars Leonardo DiCaprio as the eponymous Jay Gatsby, with Tobey Maguire, Carey Mulligan, Joel Edgerton, Isla Fisher and Elizabeth Debicki."
        },
    ],
    modalAddFilmStatus: false,
    addFilmForm: {
        name: '',
        description: '',
        validation: {
            nameMoreThan: false,
            nameIsEmpty: true,
            descriptionMoreThan: false,
            descriptionLessThan: true,
            descriptionIsEmpty: true,
            inputContainSymbols: false,
            
        },
        addFilmButtonStatus: false
    }
}

const filmsPageReducer = (state = initialState, action) => {
    // debugger;
    switch(action.type) {
        case DELETE_CURRENT_FILM:
            return deleteCurrentFilm(state, action)
        case CHANGE_FILM_MODAL_STATUS: 
            return changeFilmModalStatus(state, action)
        case CHANGE_INPUT_NAME_TEXT:
            return changeInputNameText(state, action)
        case CHANGE_INPUT_DESCRIPTION_TEXT:
            return changeInputDescriptionText(state, action)
        default: 
            return state
    }  
}

const deleteCurrentFilm = (state, action) => {
    let allFilms = state.allFilms
    let filmId = action.id
    let newArray = _.remove(allFilms, (el) => {
        return el.id !== filmId
    })
    state.allFilms = newArray
    let newState = { ...state }
    return newState
}

const changeFilmModalStatus = (state) => {
    // debugger;
    if (state.modalAddFilmStatus === true) {
        state.modalAddFilmStatus = false
    } else if (state.modalAddFilmStatus === false) {
        state.modalAddFilmStatus = true
    } else {
        console.log('Unknown status of modalAddFilm')
    }
    // state.modalAddFilmStatus = !state.modalAddFilmStatus
    let newState = { ...state }
    return newState
}

const changeInputNameText = (state, action) => {
    // debugger;
    state.addFilmForm.name = action.text
    // console.log('name: ' + state.addFilmForm.name)
    validateInputs(state)
    let newState = { ...state }
    return newState
}
const changeInputDescriptionText = (state, action) => {
    // debugger;
    state.addFilmForm.description = action.text
    // console.log('description: ' + state.addFilmForm.description)
    validateInputs(state)
    let newState = { ...state }
    return newState
}
const validateInputs = (state) => {
    let nameText = state.addFilmForm.name
    let descriptionText = state.addFilmForm.description
    checkNameForEmpty(state, nameText)
    // console.log(state.addFilmForm.validation)
    checkNameForMaxLength(state, nameText)
    // console.log(state.addFilmForm.validation)
    checkDescriptionForEmpty(state, descriptionText)
    // console.log(state.addFilmForm.validation)
    checkDescriptionForMinLength(state, descriptionText)
    // console.log(state.addFilmForm.validation)
    checkDescriptionForMaxLength(state, descriptionText)
    // console.log(state.addFilmForm.validation)
    checkForSymbols(state, nameText, descriptionText)
    // console.log(state.addFilmForm.validation)
    // let newState = { ...state }
    return state
    console.log(state.addFilmForm.validation)
}


const checkNameForEmpty = (state, name) => {
    // debugger;
    if (name === "") {
        state.addFilmForm.validation.nameIsEmpty = true
        // console.log('Name text is more than 40 characters')
        return state
    } else {
        state.addFilmForm.validation.nameIsEmpty = false
        return state
    }
}
const checkNameForMaxLength = (state, name) => {
    if (name.length > 40) {
        state.addFilmForm.validation.nameMoreThan = true
        // console.log('Name text is more than 40 characters')
        return state
    } else {
        state.addFilmForm.validation.nameMoreThan = false
        return state
    }
}

const checkDescriptionForMinLength = (state, description) => {
    if (description.length < 50) {
        state.addFilmForm.validation.descriptionLessThan = true
        // console.log('Show "descriptionLessThan"')
        return state
    } else {    
        state.addFilmForm.validation.descriptionLessThan = false
        console.log('Hide "descriptionLessThan"')
        return state
    }
}
const checkDescriptionForMaxLength = (state, description) => {
    if (description.length > 300) {
        state.addFilmForm.validation.descriptionMoreThan = true
        // console.log('Show "descriptionMoreThan"')
        return state
    } else {
        state.addFilmForm.validation.descriptionMoreThan = false
        // console.log('Hide "descriptionMoreThan"')
        return state
    }
}
const checkDescriptionForEmpty = (state, description) => {
    if (description === "") {
        state.addFilmForm.validation.descriptionIsEmpty = true
        // console.log('Show "descriptionIsEmpty"')
        return state
    } else {
        state.addFilmForm.validation.descriptionIsEmpty = false
        // console.log('Hide "descriptionIsEmpty"')
        return state
    }
}

const checkForSymbols = (state, name, description) => {
    if (/[-^&*()_+|~={}\[\]<>\/]/.test(name) || /[-^&*()_+|~={}\[\]<>\/]/.test(description)) {
        state.addFilmForm.validation.inputContainSymbols = true
        // console.log('Text should not contain symbols')
        // console.log('Show "inputContainSymbols"')
        return state
    } else {
        state.addFilmForm.validation.inputContainSymbols = false
        // console.log('Hide "inputContainSymbols"')
        return state
    }
}


// const splitAndCalculateSentences = (text) => {
//         let pattern = /(.+?([A-Za-z]|[А-Яа-яїіь].)\.(?:['")\\\s][\"]?)+?\s?)/igm, match
//         let sentences = []
//         while( ( match = pattern.exec( text )) != null ) {
//             if( match.index === pattern.lastIndex ) {
//                 pattern.lastIndex++
//             }
//             sentences.push( match[0] )
//         };
//         state.mainPage.allSentences = sentences
//         state.mainPage.numberOfSymbols = text.length
//         console.log('This is all sentences ' + state.mainPage.allSentences)
        
//         // console.log('numberOfSentences = ' + state.mainPage.allSentences.length)
//         if (/\s$/.test(text)) {
//             state.mainPage.numberOfSentences = state.mainPage.allSentences.length
//             // console.log('first if is worked')
//         } else {
//             state.mainPage.numberOfSentences = state.mainPage.allSentences.length + 1
//             // console.log('second if is worked')
//         };
//         // console.log('numberOfSentences after if = ' + state.mainPage.numberOfSentences)
//         // console.log(sentences);
//         // console.log('Text length: ' + text.length)
//         // console.log('All sentences: ' + state.mainPage.allSentences);
//         // console.log('Number of sentences: ' + state.mainPage.numberOfSentences);
//     };
// _______________
// ACTION CREATORS 
export const deleteCurrentFilmCreator = (id) => {
    return {
        type: DELETE_CURRENT_FILM,
        id: id 
    }
}
export const changeFilmModalStatusCreator = () => {
    
    return {
        type: CHANGE_FILM_MODAL_STATUS
    }
}
export const changeInputNameTextCreator = (text) => {
    return {
        type: CHANGE_INPUT_NAME_TEXT,
        text: text
    }
}
export const changeInputDescriptionTextCreator= (text) => {
    return {
        type: CHANGE_INPUT_DESCRIPTION_TEXT,
        text: text
    }
}
export default filmsPageReducer

window.state = initialState