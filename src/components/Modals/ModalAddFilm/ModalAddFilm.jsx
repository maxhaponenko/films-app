import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import filmsStyle from '../../Content/Films/Films.module.css'
import s from './ModalAddFilm.module.css'
import TipsContainer from './TipsAddFilm/TipsContainer'

class ModalAddFilm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: this.props.filmsPage.modalAddFilmStatus,
			name: this.props.filmsPage.addFilmForm.name,
			description: this.props.filmsPage.addFilmForm.description,
			addFilmButtonStatus: this.props.filmsPage.addFilmForm.addFilmButtonStatus
		}
	}
	UNSAFE_componentWillReceiveProps() {
		this.setState({
			modal: this.props.filmsPage.modalAddFilmStatus,
			name: this.props.filmsPage.addFilmForm.name,
			description: this.props.filmsPage.addFilmForm.description,
			addFilmButtonStatus: this.props.filmsPage.addFilmForm.addFilmButtonStatus
		})
	}
	onOpenClose = () => {
		this.props.changeFilmModalStatus()
	}
	onInputNameChange = (e) => {
		let text = e.target.value
		this.props.changeInputNameText(text)
	}
	onInputDescriptionChange = (e) => {
		let text = e.target.value
		this.props.changeInputDescriptionText(text)
	}
	onAddFilm = () => {
		this.props.addFilm()
	}
	onCancel = () => {
		this.props.deleteDataInForm()
	}
	toggle = () => {
		this.props.changeFilmModalStatus()
	}

	render() {
		return (
			<MDBContainer>
				{/* this.state.modal */}
				<MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">
					<MDBModalHeader className="noselect">Add new film</MDBModalHeader>
					<MDBModalBody>
						<div className="noselect">Add <span style={{ fontWeight: '500' }}>film name</span> and <span style={{ fontWeight: '500' }}>description below</span></div>
						<div style={{ marginTop: '27px' }} className={`${s.itemContainer}`}>
							<div className={filmsStyle.item}>
								<div className={filmsStyle.itemGrid}>
									<div className={filmsStyle.title}>
										<textarea
											className={s.titleTextArea}
											placeholder="Name"
											value={this.state.name}
											onChange={this.onInputNameChange} />
									</div>
									<div className={filmsStyle.description}>
										<textarea
											className={s.descriptionTextArea}
											placeholder="Description"
											value={this.state.description}
											onChange={this.onInputDescriptionChange} />
									</div>
								</div>
							</div>
						</div>
						<TipsContainer props={this.props} />
					</MDBModalBody>
					<MDBModalFooter style={{padding: '0.3rem', fontSize: '0.3rem'}}>
						<MDBBtn className={s.modalButtons} color="white" onClick={this.onOpenClose}>Close</MDBBtn>
						<MDBBtn className={s.modalButtons} color="white" onClick={this.onCancel}>Cancel</MDBBtn>
						<MDBBtn className={s.modalButtons} disabled={!this.state.addFilmButtonStatus} onClick={this.onAddFilm} gradient="blue">Add</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalAddFilm;