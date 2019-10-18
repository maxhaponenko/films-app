import React from 'react'
import s from './Persons.module.css'
import ModalAddPersonContainer from '../../Modals/ModalAddPerson/ModalAddPersonContainer'

const Persons = (props) => {
    // debugger;
    let onDelete = (e) => {
        props.deleteCurrentPerson(e)
    }
    let openModal = () => {
        // debugger;
        props.changePersonModalStatus()
        // ModalAddFilm.changeStatus()
    }

    let favoriteFilms = props.personsPage.allPersons.map((el) => {
        let id = el.id
        let favorites = el.favoriteFilms
        let obj = { 
            id: id,
            favorites: favorites
        }
        return obj
    })

    
    
    
    // console.log(personsFavorites)

    let allPersonsItems = props.personsPage.allPersons.map((item, key) => {
        
        let allFilms = props.allFilms
        let personsFavorites = favoriteFilms[key].favorites
        let favoritesNames = []
        favoritesNames = personsFavorites.map((el) => {    
            return allFilms[el-1].name
        })
        let favoriteFilmsNames = favoritesNames.map((e, key) => {
            return (
                <div key={key} className={`${s.filmItem} deep-blue-gradient`}>{e}</div>
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
                                {favoriteFilmsNames}
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