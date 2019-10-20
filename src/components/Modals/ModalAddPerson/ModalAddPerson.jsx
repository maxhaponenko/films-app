import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';
import s from './ModalAddPerson.module.css'
import TipsStep1Container from './TipsAddPerson/Step1/TipsStep1Container'
import TipsStep2Container from './TipsAddPerson/Step2/TipsStep2Container'

class ModalAddPerson extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allFilms: this.props.filmsPage.allFilms,
			modal: this.props.personsPage.modalAddPersonStatus,
			currentStep: this.props.personsPage.addPersonForm.stepper.currentStep,
			firstName: this.props.personsPage.addPersonForm.firstName,
			secondName: this.props.personsPage.addPersonForm.secondName,
			age: this.props.personsPage.addPersonForm.age,
			filmsToAdd: this.props.personsPage.addPersonForm.filmsToAdd,
			addPersonButtonStatus: this.props.personsPage.addPersonForm.addPersonButtonStatus,
			ageCaption: '',
		}
	}

	UNSAFE_componentWillReceiveProps() {
		this.setState({
			allFilms: this.props.filmsPage.allFilms,
			modal: this.props.personsPage.modalAddPersonStatus,
			currentStep: this.props.personsPage.addPersonForm.stepper.currentStep,
			firstName: this.props.personsPage.addPersonForm.firstName,
			secondName: this.props.personsPage.addPersonForm.secondName,
			age: this.props.personsPage.addPersonForm.age,
			filmsToAdd: this.props.personsPage.addPersonForm.filmsToAdd,
			addPersonButtonStatus: this.props.personsPage.addPersonForm.addPersonButtonStatus
		})

	}


	onOpenClose = () => {
		this.props.changePersonModalStatus()
	}
	toggle = () => {
		this.props.changePersonModalStatus()
	}
	onInputNameChange = (e) => {
		let text = e.target.value
		this.props.changeInputFirstName(text)
	}
	onInputSecondNameChange = (e) => {
		let text = e.target.value
		this.props.changeInputSecondName(text)
	}
	onInputAgeChange = (e) => {
		let text = e.target.value
		if (text !== '') {
			this.setState({
				ageCaption: 'years old'
			})
		} else {
			this.setState({
				ageCaption: ''
			})
		}
		this.props.changeInputAge(text)
	}
	onAddFilmToFavorites = (id) => {
		this.props.addFilmToFavorites(id)
	}
	onStep = (number) => {
		this.props.changeStep(number)
	}
	onCancel = () => {
		this.props.deleteDataInForm()
	}
	onAddPerson = () => {
		this.props.addPerson()
	}

	allFilmsNames = () => {
		let allFilms = this.props.filmsPage.allFilms.map((e) => {
			return (
				<div key={e.id}>
					<div key={e.id}
						onClick={this.onAddFilmToFavorites.bind(this, e.id)}
						className={`${s.filmItem} noselect ${this.state.filmsToAdd.find(el => el === e.id) ? 'deep-blue-gradient' : 'grey lighten-2'}`}>
						<p style={{ marginBottom: 0 }} className="noselect">{e.name}</p>
					</div>
				</div>

			)
		})
		return allFilms
	}

	renderStep = () => {
		if (this.state.currentStep === 1) {
			return (
				<div>
					<div className="noselect"><span style={{ fontWeight: 'bold' }}>Step 1: &nbsp;</span> Enter persons information</div>
					
					<MDBContainer style={{ width: '250px', marginBottom: '30px' }}>
						<MDBRow>
							<MDBCol style={{ padding: '0' }} className={`no-gutters`} md="12">
								<form>
									<label htmlFor="defaultFormLoginEmailEx" className="grey-text">Name</label>
									<input
										type="text"
										className="form-control"
										value={this.state.firstName}
										onChange={this.onInputNameChange}
									/>
									<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Second Name</label>
									<input
										type="text"
										className="form-control"
										value={this.state.secondName}
										onChange={this.onInputSecondNameChange}
									/>
									<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Age</label>
									<input
										type="number"
										min="1"
										max="99"
										className="form-control"
										value={this.state.age}
										onChange={this.onInputAgeChange}
									/>
								</form>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
					<div style={{ marginTop: '27px' }} className={`${s.itemContainer}`}>
						<p><span style={{ fontWeight: '500' }}>Preview:</span></p>
						<div className={s.item}>
							<div>
								<div className={s.title}>
									<p className={`${s.titleName} noselect`}>{(this.state.firstName ? this.state.firstName : 'Name')} {(this.state.secondName ? this.state.secondName : 'Second name')}</p>
									<p className={`${s.titleAge} noselect`}>{(this.state.age ? `${this.state.age} ${this.state.ageCaption}` : 'Age')}</p>
								</div>
							</div>
						</div>
					</div>
					<TipsStep1Container props={this.props} />
				</div>
			)
		} else if (this.state.currentStep === 2) {
			return (
				<div>
					<div><span style={{ fontWeight: 'bold' }}>Step 2: &nbsp;</span> Choose favorite films</div>

					<MDBContainer style={{ width: '350px', maxWidth: 'fit-content', marginBottom: '30px' }}>
						<MDBRow>
							<MDBCol style={{ padding: '0' }} className={`no-gutters`} md="12">
								<div className={s.favoritesContainer}>
									{this.allFilmsNames()}
								</div>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
					<TipsStep2Container props={this.props} />
				</div>
			)
		} else {
			console.log('Triggered unknown step ')
			return null
		}
	}

	render() {
		return (
			<MDBContainer className={s.scrollbarSettings}>
				<MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">
					<MDBModalHeader className="noselect">Add new person</MDBModalHeader>
					<MDBModalBody>
						<div className={s.stepper}>
							<div className={s.stepperContainer}>
								{this.renderStep()}
							</div>
							<div className={s.stepperSwitcher}>
								<MDBRow style={{ width: '250px', margin: '0 auto', justifyContent: 'space-between' }}>
									<MDBBtn active onClick={() => this.onStep(1)} disabled={(this.state.currentStep === 1 ? true : false)} outline style={{ margin: 0 }} color="primary" size="sm">Step 1</MDBBtn>
									<MDBBtn active onClick={() => this.onStep(2)} disabled={(this.state.currentStep === 2 ? true : false)} outline style={{ margin: 0 }} color="primary" size="sm">Step 2</MDBBtn>
								</MDBRow>
							</div>
						</div>
					</MDBModalBody>
					<MDBModalFooter style={{ padding: '0.3rem' }}>
						<MDBBtn className={s.modalButtons} color="white" onClick={this.onOpenClose}>Close</MDBBtn>
						<MDBBtn className={s.modalButtons} color="white" onClick={this.onCancel}>Cancel</MDBBtn>
						<MDBBtn className={s.modalButtons} disabled={!this.state.addPersonButtonStatus} onClick={this.onAddPerson} gradient="blue" >Add</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalAddPerson;