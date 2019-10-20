const uuidv1 = require('uuid/v1');
var _ = require('lodash');

const DELETE_CURRENT_PERSON = 'DELETE-CURRENT-PERSON'
const CHANGE_PERSON_MODAL_STATUS = 'CHANGE-PERSON-MODAL-STATUS'
const CHANGE_INPUT_FIRST_NAME = 'CHANGE-INPUT-FIRST-NAME'
const CHANGE_INPUT_SECOND_NAME = 'CHANGE-INPUT-SECOND-NAME'
const CHANGE_INPUT_AGE = 'CHANGE-INPUT-AGE'
const CHANGE_STEP = 'CHANGE-STEP'
const ADD_FILM_TO_FAVORITES = 'ADD-FILM-TO-FAVORITES'
const DELETE_DATA_INFORM = 'DELETE-DATA-INFORM'
const ADD_PERSON = 'ADD-PERSON'

let initialState = {
    allPersons: [
        {
            id: 1,
            firstName: "Ellie-Mai",
            secondName: "Rasmussen",
            age: '59 years old',
            favoriteFilms: [1, 2, 4]
        },
        {
            id: 2,
            firstName: "Forrest",
            secondName: "Gump",
            age: '42 years old',
            favoriteFilms: [3, 4]
        },
        {
            id: 3,
            firstName: "John",
            secondName: "Smith",
            age: '59 years old',
            favoriteFilms: [1, 3, 4]
        },
        {
            id: 4,
            firstName: "Lia",
            secondName: "Ewing",
            age: '32 years old',
            favoriteFilms: [1, 2, 4, 5]
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
            firstName: "Max",
            secondName: "Haponenko",
            age: '27 years old',
            favoriteFilms: [1, 2, 3, 5, 6, 7]
        },
        {
            id: 7,
            firstName: "Osama",
            secondName: "Woodward",
            age: '37 years old',
            favoriteFilms: [3, 4, 6, 8]
        },
        {
            id: 8,
            firstName: "Patrick",
            secondName: "Kasperskiy",
            age: '23 years old',
            favoriteFilms: [2, 3]
        }    
    ],
    modalAddPersonStatus: false,
    addPersonForm: {
        firstName: '',
        secondName: '',
        age: '',
        filmsToAdd: [],
        stepper: {
            currentStep: 1
        },
        validation: {
            nameIsEmpty: true,
            nameMoreThan: false,
            secondNameIsEmpty: true,
            ageIsEmpty: true,
            unrealAge: false,
            inputContainSymbols: false,
            filmsToAddEmpty: true,
            filmsToAddIsTooBig: false
        },
        addPersonButtonStatus: false
    }
}

const personsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_CURRENT_PERSON:
            return deleteCurrentPerson(state, action)
        case CHANGE_PERSON_MODAL_STATUS: 
            return changePersonModalStatus(state, action)
        case CHANGE_INPUT_FIRST_NAME:
            return changeInputFirstName(state, action)
        case CHANGE_INPUT_SECOND_NAME:
            return changeInputSecondName(state, action)
        case CHANGE_INPUT_AGE: 
            return changeInputAge(state, action)
        case CHANGE_STEP: 
            return changeStep(state, action)
        case ADD_FILM_TO_FAVORITES:
            return addFilmToFavorites(state, action)
        case DELETE_DATA_INFORM: 
            return deleteDataInForm(state)
        case ADD_PERSON:
            return addPerson(state)
        default: 
            return state
    }
}

// ___________
// Delete person

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

// ___________________
// Open or close modal

const changePersonModalStatus = (state) => {
    if (state.modalAddPersonStatus) {
        state.modalAddPersonStatus = false
    } else {
        state.modalAddPersonStatus = true
    } 
    let newState = { ...state }
    return newState
}

// ______________
// Input handlers

const changeInputFirstName = (state, action) => {
    state.addPersonForm.firstName = action.text
    validateInputFirstName(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}
const changeInputSecondName = (state, action) => {
    state.addPersonForm.secondName = action.text
    validateInputSecondName(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}
const changeInputAge = (state, action) => {
    state.addPersonForm.age = action.text
    validateInputAge(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}

// __________________________________
// Switcher to show or hide AddButton

const changeAddButtonStatus = (state) => {
    var allCheckpoints = []
    let obj = state.addPersonForm.validation
    allCheckpoints = Object.keys(obj).map(key => obj[key]);
    if (allCheckpoints.every(item => item === false)) {
        state.addPersonForm.addPersonButtonStatus = true
        return state
    } else {
        state.addPersonForm.addPersonButtonStatus = false
        return state
    }
}

// ___________________________________
// Handler to add chosen film to array

const addFilmToFavorites = (state, action) => {
    if (action.id === (state.addPersonForm.filmsToAdd.filter( el => el === action.id )[0])) {
        _.remove(state.addPersonForm.filmsToAdd, (el) => {
            return el === action.id
        })
    } else {
        state.addPersonForm.filmsToAdd.push(action.id)
    }
    validateFilmsToAdd(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}

// ______________
// Steps switcher

const changeStep = (state, action) => {
    let newStep = action.number
    if (newStep !== state.addPersonForm.stepper.currentStep) {
        state.addPersonForm.stepper.currentStep = newStep
        let newState = { ...state }
        return newState
    } else {
        return state
    }
}

// ______________________________
// Delete all information in form

const deleteDataInForm = (state) => {
    state.addPersonForm.firstName = ""
    state.addPersonForm.secondName = ""
    state.addPersonForm.age = ""
    state.addPersonForm.filmsToAdd = []
    state.addPersonForm.stepper.currentStep = 1
    // state.modalAddPersonStatus = false         // Set to TRUE if "Cancel" button should close the modal"
    validateInputFirstName(state)
    validateInputSecondName(state)
    validateInputAge(state)
    validateFilmsToAdd(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}

// ______________________________
// Add person to array of all persons 
//  .then sort array by name
//  .then delete data from form
//  .then validate inputs to show tips again
//  .then disable "add" button 

const addPerson = (state) => {
    let newId = uuidv1()
    let newPerson = {
        id: newId,
        firstName: state.addPersonForm.firstName,
        secondName: state.addPersonForm.secondName,
        age: `${state.addPersonForm.age} years old`,
        favoriteFilms: state.addPersonForm.filmsToAdd
    }
    state.allPersons.push(newPerson)
    let allPersonsSort = sortByName(state.allPersons)
    state.allPersons = allPersonsSort
    state.addPersonForm.firstName = ""
    state.addPersonForm.secondName = ""
    state.addPersonForm.age = ""
    state.addPersonForm.filmsToAdd = []
    state.addPersonForm.stepper.currentStep = 1
    validateInputFirstName(state)
    validateInputSecondName(state)
    validateInputAge(state)
    validateFilmsToAdd(state)
    changeAddButtonStatus(state)
    let newState = { ...state }
    return newState
}

// __________
// Validation

const validateInputFirstName = (state) => {
    let text = state.addPersonForm.firstName
    checkNameForEmpty(state, text)
    checkNameForMaxLength(state, text)
    checkForSymbols(state, text)
    return state
}
const validateInputSecondName = (state) => {
    let text = state.addPersonForm.secondName
    checkSecondNameForEmpty(state, text)
    checkSecondNameForMaxLength(state, text)
    checkForSymbols(state, text)
    return state
}
const validateInputAge = (state) => {
    let text = state.addPersonForm.age
    checkAgeForEmpty(state, text)
    checkAgeForValue(state, text)
    return state
}

const validateFilmsToAdd = (state) => {
    checkSelectForEmpty(state)
    checkSelectForTooMany(state)
    return state
}

const checkSelectForEmpty = (state) => {
    if (!state.addPersonForm.filmsToAdd.length) {
        state.addPersonForm.validation.filmsToAddEmpty = true
        return state
    } else {
        state.addPersonForm.validation.filmsToAddEmpty = false
        return state
    }
}

const checkSelectForTooMany = (state) => {
    if (state.addPersonForm.filmsToAdd.length > 5) {
        state.addPersonForm.validation.filmsToAddIsTooBig = true
        return state
    } else { 
        state.addPersonForm.validation.filmsToAddIsTooBig = false
        return state
    }
}

// ____________
// ----Sort----

const sortByName = (array) => {
    return array.sort((a, b) => {
        let x = a.firstName.toLowerCase(); 
        let y = b.firstName.toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}


// ___________________
// Validation checkers

const checkNameForEmpty = (state, text) => {
    if (text === "") {
        state.addPersonForm.validation.nameIsEmpty = true
        return state
    } else {
        state.addPersonForm.validation.nameIsEmpty = false
        return state
    }
}
const checkNameForMaxLength = (state, text) => {
    if (text.length > 15) {
        state.addPersonForm.validation.nameMoreThan = true
        return state
    } else {
        state.addPersonForm.validation.nameMoreThan = false
        return state
    }
}

const checkSecondNameForEmpty = (state, text) => {
    if (text === "") {
        state.addPersonForm.validation.secondNameIsEmpty = true
        return state
    } else {
        state.addPersonForm.validation.secondNameIsEmpty = false
        return state
    }
}
const checkSecondNameForMaxLength = (state, text) => {
    if (text.length > 20) {
        state.addPersonForm.validation.secondNameMoreThan = true
        return state
    } else {
        state.addPersonForm.validation.secondNameMoreThan = false
        return state
    }
}

const checkAgeForEmpty = (state, text) => {
    if (text === "") {
        state.addPersonForm.validation.ageIsEmpty = true
        return state
    } else {
        state.addPersonForm.validation.ageIsEmpty = false
        return state
    }
}
const checkAgeForValue = (state, text) => {
    let number = parseInt(text, 10)
    if (number > 99 || number < 1) {
        state.addPersonForm.validation.unrealAge = true
        return state
    } else {
        state.addPersonForm.validation.unrealAge = false
        return state
    }
}

const checkForSymbols = (state, text) => {
    if (/[&^*()_@#%+|~={}\\<>/]/.test(text)) {
        state.addPersonForm.validation.inputContainSymbols = true    
        return state
    } else {
        state.addPersonForm.validation.inputContainSymbols = false
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
export const changeInputAgeCreator = (text) => {
    return {
        type: CHANGE_INPUT_AGE,
        text: text
    }
}
export const changeStepCreator = (number) => {
    return {
        type: CHANGE_STEP,
        number: number
    }
}
export const addFilmToFavoritesCreator = (id) => {
    return {
        type: ADD_FILM_TO_FAVORITES,
        id: id
    }
}
export const deleteDataInFormCreator = () => {
    return {
        type: DELETE_DATA_INFORM
    }
}
export const addPersonCreator = () => {
    return {
        type: ADD_PERSON
    }
}
export default personsPageReducer

