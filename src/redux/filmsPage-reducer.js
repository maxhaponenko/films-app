const uuidv1 = require('uuid/v1');
var _ = require('lodash');


const DELETE_CURRENT_FILM = 'DELETE-CURRENT-FILM'
const CHANGE_FILM_MODAL_STATUS = 'CHANGE-FILM-MODAL-STATUS'
const CHANGE_INPUT_NAME_TEXT = 'CHANGE-INPUT-NAME-TEXT'
const CHANGE_INPUT_DESCRIPTION_TEXT = 'CHANGE-INPUT-DESCRIPTION-TEXT'
const ADD_FILM = 'ADD-FILM'

let initialState = {
    allFilms: [
        {
            id: 1,
            name: "Forrest Gump",
            description: 'American comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel by Winston Groom, and stars Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson, and Sally Field. The story depicts several decades in the life o'
        },
        {
            id: 2,
            name: "Great Gatsby",
            description: "Film based on F. Scott Fitzgerald's 1925 novel of the same name. The film was co-written and directed by Baz Luhrmann and stars Leonardo DiCaprio as the eponymous Jay Gatsby, with Tobey Maguire, Carey Mulligan, Joel Edgerton, Isla Fisher and Elizabeth Debicki."
        },
        {
            id: 3,
            name: "Green mile",
            description: "The film stars Tom Hanks as Paul Edgecomb and Michael Clarke Duncan as John Coffey, with supporting roles by David Morse, Bonnie Hunt, and James Cromwell. It also features Dabbs Greer in his final film role as the older Paul Edgecomb before his death in 2007 at the age of 90 from renal failure and heart"
        },
        {
            id: 4,
            name: "One Flew Over the Cuckoo's Nest",
            description: "American comedy-drama film directed by Miloš Forman, based on the 1962 novel One Flew Over the Cuckoo's Nest by Ken Kesey and the play version adapted from the novel by Dale Wasserman. The film stars Jack Nicholson as Randle McMurphy, a new patient at a mental institution, and features a supporting cast of Louise Fletcher, William Redfield, Will Sampson, Sydney Lassick, Brad Dourif, Danny DeVito and Christopher Lloyd in his film debut."
        }
        
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
        case ADD_FILM:
            return addFilm(state)
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
        // console.log('Unknown status of modalAddFilm')
    }
    // state.modalAddFilmStatus = !state.modalAddFilmStatus
    let newState = { ...state }
    return newState
}

const changeInputNameText = (state, action) => {
    state.addFilmForm.name = action.text
    validateInputName(state)
    changeAddButtonStatus(state)
    // console.log(state.addFilmForm.addFilmButtonStatus)
    let newState = { ...state }
    return newState
}
const changeInputDescriptionText = (state, action) => {
    state.addFilmForm.description = action.text
    validateInputDescription(state)
    changeAddButtonStatus(state)
    // console.log(state.addFilmForm.addFilmButtonStatus)
    let newState = { ...state }
    return newState
}
const changeAddButtonStatus = (state) => {
    var allCheckpoints = []
    // console.log('changeAddButtonStatus say ----->')
    // console.log(state.addFilmForm.validation)
    let obj = state.addFilmForm.validation
    allCheckpoints = Object.keys(obj).map(key => obj[key]);
    // console.log('changeAddButtonStatus say OBJ ----->')
    // console.log(allCheckpoints)
    if (allCheckpoints.every(item => item === false)) {
        state.addFilmForm.addFilmButtonStatus = true
        return state
    } else {
        state.addFilmForm.addFilmButtonStatus = false
        return state
    }
    
}
const addFilm = (state) => {
    let newId = uuidv1()
    let newFilm = {
        id: newId,
        name: state.addFilmForm.name,
        description: state.addFilmForm.description
    }
    state.allFilms.push(newFilm)
    let allFilmsSort = sortByName(state.allFilms)
    state.allFilms = allFilmsSort
    state.addFilmForm.name = ""
    state.addFilmForm.description = ""
    validateInputName(state)
    validateInputDescription(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}
const validateInputName = (state) => {
    let text = state.addFilmForm.name
    checkNameForEmpty(state, text)
    checkNameForMaxLength(state, text)
    checkForSymbols(state, text)
    return state
}
const validateInputDescription = (state) => {
    let text = state.addFilmForm.description
    checkDescriptionForEmpty(state, text)
    checkDescriptionForMinLength(state, text)
    checkDescriptionForMaxLength(state, text)
    checkForSymbols(state, text)
    return state
}
// ____
// Sort

const sortByName = (array) => {
    return array.sort((a, b) => {
        let x = a.name.toLowerCase(); 
        let y = b.name.toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

// ___________________
// Validation checkers

const checkNameForEmpty = (state, text) => {
    if (text === "") {
        state.addFilmForm.validation.nameIsEmpty = true
        return state
    } else {
        state.addFilmForm.validation.nameIsEmpty = false
        return state
    }
}
const checkNameForMaxLength = (state, text) => {
    if (text.length > 40) {
        state.addFilmForm.validation.nameMoreThan = true
        return state
    } else {
        state.addFilmForm.validation.nameMoreThan = false
        return state
    }
}

const checkDescriptionForMinLength = (state, text) => {
    if (text.length < 50) {
        state.addFilmForm.validation.descriptionLessThan = true
        return state
    } else {    
        state.addFilmForm.validation.descriptionLessThan = false
        return state
    }
}
const checkDescriptionForMaxLength = (state, text) => {
    if (text.length > 300) {
        state.addFilmForm.validation.descriptionMoreThan = true
        return state
    } else {
        state.addFilmForm.validation.descriptionMoreThan = false
        return state
    }
}
const checkDescriptionForEmpty = (state, text) => {
    if (text === "") {
        state.addFilmForm.validation.descriptionIsEmpty = true
        return state
    } else {
        state.addFilmForm.validation.descriptionIsEmpty = false
        return state
    }
}

const checkForSymbols = (state, text) => {
    if (/[&^*()_+|~={}\[\]<>\/]/.test(text)) {
        state.addFilmForm.validation.inputContainSymbols = true    
        return state
    } else {
        state.addFilmForm.validation.inputContainSymbols = false
        return state
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
export const changeInputDescriptionTextCreator = (text) => {
    return {
        type: CHANGE_INPUT_DESCRIPTION_TEXT,
        text: text
    }
}
export const addFilmCreator = () => {
    return {
        type: ADD_FILM
    }
}
export default filmsPageReducer

// window.state = initialState