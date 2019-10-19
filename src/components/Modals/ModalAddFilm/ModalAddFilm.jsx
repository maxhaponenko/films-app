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
			// name: this.props.filmsPage.addFilmForm.name,
			addFilmButtonStatus: this.props.filmsPage.addFilmForm.addFilmButtonStatus,
			// props: this.props
		}
	}

	onOpenClose = () => {
		// this.setState(() => {
		// 	this.state.modal = !this.state.modal
		// })
		this.props.changeFilmModalStatus()
	}

	onInputNameChange = (e) => {
		let text = e.target.value
		// this.setState(() => {
		// 	this.state.name = text
		// })
		this.props.changeInputNameText(text)
	}
	onInputDescriptionChange = (e) => {
		let text = e.target.value
		// this.setState(() => {
		// 	this.state.description = text
		// })
		this.props.changeInputDescriptionText(text)
	}
	onAddFilm = () => {
		this.props.addFilm()
	}


	toggle = () => {
		// this.setState({
		// 	modal: !this.state.modal
		// });
		this.props.changeFilmModalStatus()
	}
 
	componentWillReceiveProps() {
		// console.log('-----> Will Receive starts')
		this.setState(() => {
			this.state.modal = this.props.filmsPage.modalAddFilmStatus
			this.state.addFilmButtonStatus = this.props.filmsPage.addFilmForm.addFilmButtonStatus
			this.state.description = this.props.filmsPage.addFilmForm.description
			this.state.name = this.props.filmsPage.addFilmForm.name
			this.props = this.props
		})
		// this.render()
	}

	render() {
		return (
			<MDBContainer>

				{/* this.state.modal */}
				<MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">
					<MDBModalHeader>Add new film</MDBModalHeader>
					<MDBModalBody>
						<div style={{ marginTop: '50px' }} className={`${filmsStyle.itemContainer}`}>
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
					<MDBModalFooter>
						<MDBBtn color="darken-1" onClick={this.onOpenClose}>Close</MDBBtn>
						<MDBBtn disabled={!this.state.addFilmButtonStatus} onClick={this.onAddFilm} color="primary">Add film</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalAddFilm;