import React from 'react'
import s from './Films.module.css'
import ModalAddFilmContainer from '../../Modals/ModalAddFilm/ModalAddFilmContainer';
// import { ModalAddFilm } from '../../Modals/ModalAddFilm';

const Films = (props) => {
    // debugger;

    let onDelete = (e) => {
        props.deleteCurrentFilm(e)
    }
    let openModal = () => {
        // debugger;
        props.changeFilmModalStatus()
        // ModalAddFilm.changeStatus()
    }
    let allFilmsItems = props.filmsPage.allFilms.map((item, key) => {
        return (
            <div key={key} className={`${s.itemContainer}`}>
                <div className={s.item}>
                    <div className={s.deleteButtonContainer}>
                        <button key={item.id} className={s.btnDeleteFilm} style={{outline: 'none'}} onClick={() => onDelete(item.id)}>
                            <i className={`${s.btnDeleteFilmIcon} fas fa-trash-alt`} style={{ margin: '10px 5px 10px 5px'}}></i>
                        </button>
                    </div>
                    <div className={s.itemGrid}>
                        <div className={s.title}>
                            <p>{item.name}</p>
                        </div>
                        <div className={s.description}>
                            {item.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div>
            <div className={s.controls}>
                <button className={`btn btn-sm blue-gradient ${s.btnAddFilm}`} onClick={openModal}>+ Add film</button>
            </div>
            <div className={`${s.filmsBlock} `}>
                {allFilmsItems}
            </div>
            <ModalAddFilmContainer />
        </div>
    )
}

export default Films