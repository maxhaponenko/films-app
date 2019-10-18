const uuidv1 = require('uuid/v1');
var _ = require('lodash');


const DELETE_CURRENT_PERSON = 'DELETE-CURRENT-PERSON'
const CHANGE_PERSON_MODAL_STATUS = 'CHANGE-PERSON-MODAL-STATUS'
const CHANGE_INPUT_FIRST_NAME = 'CHANGE-INPUT-FIRST-NAME'
const CHANGE_INPUT_SECOND_NAME = 'CHANGE-INPUT-SECOND-NAME'
const ADD_PERSON = 'ADD-PERSON'

let initialState = {
    allPersons: [
        {
            id: 1,
            firstName: "Max",
            secondName: "Haponenko",
            age: '27 years old',
            favoriteFilms: [1, 2, 4]
        },
        {
            id: 2,
            firstName: "Patrick",
            secondName: "Kasperskiy",
            age: '23 years old',
            favoriteFilms: [2, 3]
        },
        {
            id: 3,
            firstName: "Forrest",
            secondName: "Gump",
            age: '42 years old',
            favoriteFilms: [3, 4]
        },
        {
            id: 4,
            firstName: "John",
            secondName: "Smith",
            age: '59 years old',
            favoriteFilms: [1, 3, 4]
        },
        {
            id: 5,
            firstName: "Margo",
            secondName: "Davies",
            age: '24 years old',
            favoriteFilms: [1, 3, 4]
        },
        {
            id: 6,
            firstName: "Osama",
            secondName: "Woodward",
            age: '37 years old',
            favoriteFilms: [3, 4]
        },
        {
            id: 7,
            firstName: "Ellie-Mai",
            secondName: "Rasmussen",
            age: '59 years old',
            favoriteFilms: [1, 2, 4]
        },
        {
            id: 8,
            firstName: "Lia",
            secondName: "Ewing",
            age: '32 years old',
            favoriteFilms: [1, 2, 4]
        }
        
    ],
    modalAddPersonStatus: false,
    addPersonForm: {
        firstName: '',
        secondName: '',
        validation: {
            nameMoreThan: false,
            nameIsEmpty: true,
            descriptionMoreThan: false,
            descriptionLessThan: true,
            descriptionIsEmpty: true,
            inputContainSymbols: false,
        },
        addPersonButtonStatus: false
    }
}

const personsPageReducer = (state = initialState, action) => {
    // debugger;
    switch(action.type) {
        case DELETE_CURRENT_PERSON:
            return deleteCurrentPerson(state, action)
        case CHANGE_PERSON_MODAL_STATUS: 
            return changePersonModalStatus(state, action)
        case CHANGE_INPUT_FIRST_NAME:
            return changeInputFirstName(state, action)
        case CHANGE_INPUT_SECOND_NAME:
            return changeInputSecondName(state, action)
        case ADD_PERSON:
            return addPerson(state)
        default: 
            return state
    }
    
}

const deleteCurrentPerson = (state, action) => {
    let allPersons = state.allPersons
    let personId = action.id
    let newArray = _.remove(allPersons, (el) => {
        return el.id !== personId
    })
    state.allPersons = newArray
    let newState = { ...state }
    return newState
}

const changePersonModalStatus = (state) => {
    // debugger;
    if (state.modalAddPersonStatus === true) {
        state.modalAddPersonStatus = false
    } else if (state.modalAddPersonStatus === false) {
        state.modalAddPersonStatus = true
    } else {
        // console.log('Unknown status of modalAddFilm')
    }
    // state.modalAddPersonStatus = !state.modalAddPersonStatus
    let newState = { ...state }
    return newState
}

const changeInputFirstName = (state, action) => {
    state.addFilmForm.name = action.text
    validateInputFirstName(state)
    changeAddButtonStatus(state)
    // console.log(state.addFilmForm.addFilmButtonStatus)
    let newState = { ...state }
    return newState
}
const changeInputSecondName = (state, action) => {
    state.addFilmForm.description = action.text
    validateInputSecondName(state)
    changeAddButtonStatus(state)
    // console.log(state.addFilmForm.addFilmButtonStatus)
    let newState = { ...state }
    return newState
}
const changeAddButtonStatus = (state) => {
    // debugger
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
const addPerson = (state) => {
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
    validateInputFirstName(state)
    validateInputSecondName(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}
const validateInputFirstName = (state) => {
    let text = state.addFilmForm.name
    checkNameForEmpty(state, text)
    checkNameForMaxLength(state, text)
    checkForSymbols(state, text)
    return state
}
const validateInputSecondName = (state) => {
    let text = state.addFilmForm.description
    checkSecondNameForEmpty(state, text)
    // checkDescriptionForMinLength(state, text)
    checkSecondNameForMaxLength(state, text)
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

// const checkDescriptionForMinLength = (state, text) => {
//     if (text.length < 50) {
//         state.addFilmForm.validation.descriptionLessThan = true
//         return state
//     } else {    
//         state.addFilmForm.validation.descriptionLessThan = false
//         return state
//     }
// }

const checkSecondNameForEmpty = (state, text) => {
    if (text === "") {
        state.addFilmForm.validation.descriptionIsEmpty = true
        return state
    } else {
        state.addFilmForm.validation.descriptionIsEmpty = false
        return state
    }
}
const checkSecondNameForMaxLength = (state, text) => {
    if (text.length > 300) {
        state.addFilmForm.validation.descriptionMoreThan = true
        return state
    } else {
        state.addFilmForm.validation.descriptionMoreThan = false
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
export const deleteCurrentPersonCreator = (id) => {
    return {
        type: DELETE_CURRENT_PERSON,
        id: id 
    }
}
export const changePersonModalStatusCreator = () => {
    
    return {
        type: CHANGE_PERSON_MODAL_STATUS
    }
}
export const changeInputFirstNameCreator = (text) => {
    return {
        type: CHANGE_INPUT_FIRST_NAME,
        text: text
    }
}
export const changeInputSecondNameCreator = (text) => {
    return {
        type: CHANGE_INPUT_SECOND_NAME,
        text: text
    }
}
export const addPersonCreator = () => {
    return {
        type: ADD_PERSON
    }
}
export default personsPageReducer

// window.state = initialState
