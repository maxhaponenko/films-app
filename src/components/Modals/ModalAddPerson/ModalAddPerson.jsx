import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import filmsStyle from '../../Content/Films/Films.module.css'
import s from './ModalAddPerson.module.css'
import TipsContainer from './Tips/TipsContainer'

class ModalAddPerson extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: this.props.personsPage.modalAddPersonStatus,
			firstName: this.props.personsPage.addPersonForm.firstName,
			secondName: this.props.personsPage.addPersonForm.secondName,
			addFilmButtonStatus: this.props.personsPage.addPersonForm.addPersonButtonStatus,
			props: this.props
		}
	}
	
	onOpenClose = () => {
		this.setState(() => {
			this.state.modal = !this.state.modal
		})
		this.props.changePersonModalStatus()
	}

	onInputNameChange = (e) => {
		let text = e.target.value
		this.setState(() => {
			this.state.name = text
		})
		this.props.changeInputFirstName(text)
	}
	onInputDescriptionChange = (e) => {
		let text = e.target.value
		this.setState(() => {
			this.state.secondName = text
		})
		this.props.changeInputSecondName(text)
	}
	onAddFilm = () => {
		this.props.addPerson()
	}


	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
		this.props.changePersonModalStatus()
	}
 
	componentWillReceiveProps() {
		console.log('-----> Will Receive starts')
		this.setState(() => {
			this.state.modal = this.props.personsPage.modalAddPersonStatus
			this.state.firstName = this.props.personsPage.addPersonForm.firstName
			this.state.secondName = this.props.personsPage.addPersonForm.secondName
			this.state.addPersonButtonStatus = this.props.personsPage.addPersonForm.addPersonButtonStatus
			this.props = this.props
		})
		// this.render()
	}

	render() {
		return (
			<MDBContainer>

				{/* this.state.modal */}
				<MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">
					<MDBModalHeader>Add new person</MDBModalHeader>
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
						<MDBBtn color="secondary" onClick={this.onOpenClose}>Close</MDBBtn>
						<MDBBtn disabled={!this.state.addFilmButtonStatus} onClick={this.onAddFilm} color="primary">Add film</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalAddPerson;