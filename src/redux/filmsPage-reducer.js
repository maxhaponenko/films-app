import { validate } from '@babel/types';

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
        validName: {
            status: false,
            numberOfSymbols: 0,
            usingNotAllowedSymbols: false,
        },
        validDescription: {
            status: false,
            numberOfSymbols: 0,
            usingNotAllowedSymbols: false,
        },
        allTips: [],
        currentTips: [],
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
    state.addFilmForm.name = action.text
    console.log('name: ' + state.addFilmForm.name)
    validateInputs(state)
    let newState = { ...state }
    return newState
}
const changeInputDescriptionText = (state, action) => {
    state.addFilmForm.description = action.text
    console.log('description: ' + state.addFilmForm.description)
    validateInputs(state)
    let newState = { ...state }
    return newState
}
const validateInputs = (state) => {
    if (state.addFilmForm.description.length > 300 || state.addFilmForm.description.length > 40) {
        alert('Description text length should be less than 300 symbols')
    } 
}
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