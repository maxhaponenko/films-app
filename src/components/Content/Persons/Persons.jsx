import React from 'react'
import s from './Persons.module.css'
import ModalAddPersonContainer from '../../Modals/ModalAddPerson/ModalAddPersonContainer'
var _ = require('lodash');

const Persons = (props) => {
    
    let onDelete = (e) => {
        props.deleteCurrentPerson(e)
    }
    let openModal = () => {
        props.changePersonModalStatus()
    }

    let favoriteFilms = props.personsPage.allPersons.map((el) => {
        let id = el.id
        let favorites = el.favoriteFilms
        // console.log(favorites)
        let obj = { 
            id: id,
            favorites: favorites
        }
        return obj
    })

    // ______________________
    // Render all users items

    let allPersonsItems = props.personsPage.allPersons.map((item, key) => {
        let allFilms = props.allFilms
        let personFavoriteFilmsId = favoriteFilms[key].favorites
        let personFavoriteFilms = personFavoriteFilmsId.map((el) => {    
            var filmId = el
            let film = allFilms.filter( x => x.id === filmId)
            if (film[0] !== undefined) {
                return film[0]
            } else {
                return false
            }
        })
        _.remove(personFavoriteFilms, (e) => { return e == false });
        
        // ______________________________________
        // Render all favorite films in user item
        
        let personFavoriteFilmsNames = personFavoriteFilms.map((e, key) => {
            return (
                <div key={key} className={`${s.filmItem} deep-blue-gradient`}>{e.name}</div>
            )
        })
        return (
            <div key={key} className={`${s.itemContainer}`}>
                <div className={`${s.item}`}>
                    <div className={s.deleteButtonContainer}>
                        <button key={item.id} className={s.btnDeleteFilm} onClick={() => onDelete(item.id)}>
                            <i className="fas fa-trash-alt" style={{ marginRight: '5px', marginTop: '10px' }}></i>
                        </button>
                    </div>
                    <div className={s.itemGrid}>
                        <div className={s.title}>
                            <p className={s.titleName}>{item.firstName} {item.secondName}</p>
                            <p className={s.titleAge}>{item.age}</p>
                        </div>
                        <div className={s.favorites}>
                            <p className={s.favoritesTitle}>Favorite films:</p>
                            <div className={s.favoritesContainer}>
                                {personFavoriteFilmsNames}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    
    return ( 
        <div>
            <div className={s.controls}>
                <button className={`btn btn-sm blue-gradient ${s.btnAddFilm}`} onClick={openModal}>+ Add person</button>
            </div>
            <div className={`${s.filmsBlock} `}>
                {allPersonsItems}
            </div>
            <ModalAddPersonContainer />
        </div>
       
    )
}

export default Persons 