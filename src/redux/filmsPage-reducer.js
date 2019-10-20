const uuidv1 = require('uuid/v1');
var _ = require('lodash');

const DELETE_CURRENT_FILM = 'DELETE-CURRENT-FILM'
const CHANGE_FILM_MODAL_STATUS = 'CHANGE-FILM-MODAL-STATUS'
const CHANGE_INPUT_NAME_TEXT = 'CHANGE-INPUT-NAME-TEXT'
const CHANGE_INPUT_DESCRIPTION_TEXT = 'CHANGE-INPUT-DESCRIPTION-TEXT'
const DELETE_DATA_IN_FORM = 'DELETE-DATA-IN-FORM'
const ADD_FILM = 'ADD-FILM'

let initialState = {
    allFilms: [
        {
            id: 1,
            name: "Ad Astra",
            description: "Astronaut Roy McBride (Brad Pitt) travels to the outer edges of the solar system to find his missing father and unravel a mystery that threatens the survival of our planet. His journey will uncover secrets that challenge the nature of human existence and our place in the cosmos."
        },
        {
            id: 2,
            name: "Forrest Gump",
            description: 'American comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel by Winston Groom, and stars Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson, and Sally Field. The story depicts several decades in the life o'
        },
        {
            id: 3,
            name: "Gemini Man",
            description: "Gemini Man is an innovative action-thriller starring Will Smith as Henry Brogan, an elite assassin, who is suddenly targeted and pursued by a mysterious young operative that seemingly can predict his every move. The film is directed by Academy Award-winning filmmaker Ang Lee."
        },
        {
            id: 4,
            name: "Great Gatsby",
            description: "Film based on F. Scott Fitzgerald's 1925 novel of the same name. The film was co-written and directed by Baz Luhrmann and stars Leonardo DiCaprio as the eponymous Jay Gatsby, with Tobey Maguire, Carey Mulligan, Joel Edgerton, Isla Fisher and Elizabeth Debicki."
        },
        {
            id: 5,
            name: "Green mile",
            description: "The film stars Tom Hanks as Paul Edgecomb and Michael Clarke Duncan as John Coffey, with supporting roles by David Morse, Bonnie Hunt, and James Cromwell. It also features Dabbs Greer in his final film role as the older Paul Edgecomb before his death in 2007 at the age of 90 from renal failure and heart"
        },
        {
            id: 6,
            name: "Hustlers",
            description: "Inspired by the viral New York Magazine article, Hustlers follows a crew of savvy former strip club employees who band together to turn the tables on their Wall Street clients."
        },
        {
            id: 7,
            name: "Midway ",
            description: "MIDWAY centers on the Battle of Midway, a clash between the American fleet and the Imperial Japanese Navy which marked a pivotal turning point in the Pacific Theater during WWII."
        },
        {
            id: 8,
            name: "One Flew Over the Cuckoo's Nest",
            description: "American comedy-drama film directed by Miloš Forman, based on the 1962 novel One Flew Over the Cuckoo's Nest by Ken Kesey and the play version adapted from the novel by Dale Wasserman. The film stars Jack Nicholson as Randle McMurphy, a new patient at a mental institution, and features a supporting cast of Louise Fletcher, William Redfield, Will Sampson, Sydney Lassick, Brad Dourif, Danny DeVito and Christopher Lloyd in his film debut."
        },
        {
            id: 9,
            name: "Star Wars: The Rise of Skywalker",
            description: "The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga."
        },
        {
            id: 10,
            name: "The Great Alaskan Race",
            description: "Astronaut Roy McBride (Brad Pitt) travels to the outer edges of the solar system to find his missing father and unravel a mystery that threatens the survival of our planet. His journey will uncover secrets that challenge the nature of human existence and our place in the cosmos."
        },
        {
            id: 11,
            name: "The Lighthouse",
            description: "From Robert Eggers, the visionary filmmaker behind modern horror masterpiece The Witch, comes this hypnotic and hallucinatory tale of two lighthouse keepers on a remote and mysterious New England island in the 1890s."
        },
        {
            id: 12,
            name: "The Lion King",
            description: "Astronaut Roy McBride (Brad Pitt) travels to the outer edges of the solar system to find his missing father and unravel a mystery that threatens the survival of our planet. His journey will uncover secrets that challenge the nature of human existence and our place in the cosmos."
        },
        {
            id: 13,
            name: "Western Stars",
            description: "Springsteen's first studio album in five years, Western Stars marks a departure for the legendary singer/songwriter while still drawing on his roots."
        },{
            id: 14,
            name: "Zombieland",
            description: "Through comic mayhem that stretches from the White House and through the heartland, the Zombie slayers must face off against many new kinds of zombies that have evolved since the first movie, as well as some new human survivors."
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
    switch(action.type) {
        case DELETE_CURRENT_FILM:
            return deleteCurrentFilm(state, action)
        case CHANGE_FILM_MODAL_STATUS: 
            return changeFilmModalStatus(state, action)
        case CHANGE_INPUT_NAME_TEXT:
            return changeInputNameText(state, action)
        case CHANGE_INPUT_DESCRIPTION_TEXT:
            return changeInputDescriptionText(state, action)
        case DELETE_DATA_IN_FORM: 
            return deleteDataInForm(state)
        case ADD_FILM:
            return addFilm(state)
        default: 
            return state
    }
}

// ___________
// Delete film

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

// ___________________
// Open or close modal

const changeFilmModalStatus = (state) => {
    if (state.modalAddFilmStatus) {
        state.modalAddFilmStatus = false
    } else {
        state.modalAddFilmStatus = true
    } 
    let newState = { ...state }
    return newState
}

// ______________
// Input handlers

const changeInputNameText = (state, action) => {
    state.addFilmForm.name = action.text
    validateInputName(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}
const changeInputDescriptionText = (state, action) => {
    state.addFilmForm.description = action.text
    validateInputDescription(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}

// __________________________________
// Switcher to show or hide AddButton

const changeAddButtonStatus = (state) => {
    var allCheckpoints = []
    let obj = state.addFilmForm.validation
    allCheckpoints = Object.keys(obj).map(key => obj[key]);
    if (allCheckpoints.every(item => item === false)) {
        state.addFilmForm.addFilmButtonStatus = true
        return state
    } else {
        state.addFilmForm.addFilmButtonStatus = false
        return state
    }
}

// ______________________________
// Delete all information in form

const deleteDataInForm = (state) => {
    state.addFilmForm.name = ""
    state.addFilmForm.description = ""
    validateInputName(state)
    validateInputDescription(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}

// ______________________________
// Add film to array of all films 
//  .then sort array by name
//  .then delete data from form
//  .then validate inputs to show tips again
//  .then disable "add" button 

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

// __________
// Validation

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
    if (/[&^*()_@#%+|~={}\\<>/]/.test(text)) {
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
export const deleteDataInFormCreator = () => {
    return {
        type: DELETE_DATA_IN_FORM
    }
}
export const addFilmCreator = () => {
    return {
        type: ADD_FILM
    }
}

export default filmsPageReducer

// window.state = initialState