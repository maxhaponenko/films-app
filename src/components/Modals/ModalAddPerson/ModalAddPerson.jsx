import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';
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
			age: this.props.personsPage.addPersonForm.age,
			addFilmButtonStatus: this.props.personsPage.addPersonForm.addPersonButtonStatus,
			filmsToAdd: this.props.personsPage.addPersonForm.filmsToAdd,
			props: this.props,
			ageCaption: '',
			stepper: {
				currentStep: this.props.personsPage.addPersonForm.stepper.currentStep
			},
			allFilms: this.props.filmsPage.allFilms

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
			this.state.firstName = text
		})
		this.props.changeInputFirstName(text)
	}
	onInputSecondNameChange = (e) => {
		let text = e.target.value
		this.setState(() => {
			this.state.secondName = text
		})
		this.props.changeInputSecondName(text)
	}
	onInputAgeChange = (e) => {
		let text = e.target.value
		console.log('Age input value: ' + text)
		console.log('Age type is: ' + typeof text)
		this.setState(() => {
			this.state.age = text
		})
		if (text !== '') {
			console.log('if')
			this.setState(() => {
				this.state.ageCaption = 'years old'
			})

		} else {
			console.log('else')
			this.setState(() => {
				this.state.ageCaption = ''
			})

		}
		this.props.changeInputAge(text)
	}


	onAddPerson = () => {
		this.props.addPerson()
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
		this.props.changePersonModalStatus()
	}

	

	componentWillReceiveProps() {
		// console.log('-----> Will Receive starts')
		this.setState(() => {
			this.state.modal = this.props.personsPage.modalAddPersonStatus
			this.state.firstName = this.props.personsPage.addPersonForm.firstName
			this.state.secondName = this.props.personsPage.addPersonForm.secondName
			this.state.age = this.props.personsPage.addPersonForm.age
			this.state.addPersonButtonStatus = this.props.personsPage.addPersonForm.addPersonButtonStatus
			this.state.stepper.currentStep = this.props.personsPage.addPersonForm.stepper.currentStep
			this.state.allFilms = this.props.filmsPage.allFilms
			this.state.filmsToAdd = this.props.personsPage.addPersonForm.filmsToAdd
			this.props = this.props
		})
		
	}



	onStep = (number) => {
		console.log('Step1 button clicked')
		this.props.changeStep(number)
	}


	onAddFilmToFavorites = (id) => {
		this.props.addFilmToFavorites(id)
		// console.log( "bla bla " + this.state.filmsToAdd.filter( el => el === id ) )
	}
	

	// console.log( this.state.filmsToAdd.filter( el => el === e.id ) )
	// isDisabled = (id) => {
	// 	let status = this.state.filmsToAdd.find( item => item === id )
	// 	console.log('the status is ' + status)
	// 	if (status) {
	// 		return {padding: "10px"}
	// 	} else {
	// 		return {color: 'red'}
	// 	}
		
	// }

	// style={this.state.filmsToAdd.find( el => el == e.id ) ? { fontWeight: '500' } : { fontWeight: '400'} }

	allFilmsNames = () => {
		// debugger
		let allFilms = this.props.filmsPage.allFilms.map((e) => {
			console.log(e.id)

			return (
				<div>
					<div key={e.id} 
						onClick={this.onAddFilmToFavorites.bind(this, e.id)} 
						className={`${s.filmItem} ${this.state.filmsToAdd.find( el => el == e.id ) ? 'deep-blue-gradient' : 'grey lighten-2' }`}>
						<p style={{marginBottom: 0}} className={s.noselect}>{e.name}</p>
						</div>
					
				</div>
				
			)
		})
		return allFilms
	}

	renderStep = () => {
		// console.log('Starting to check if statement')
		// debugger;
		if (this.state.stepper.currentStep === 1) {
			// console.log('Triggered step ' + this.state.stepper.step)
			return (
				<div>
					<div className={s.noselect}><span style={{ fontWeight: 'bold' }}>Step 1: &nbsp;</span> Enter persons information</div>
					<div style={{ marginTop: '27px' }} className={`${filmsStyle.itemContainer}`}>
						<div className={s.item}>
							{/* className={filmsStyle.itemGrid} */}
							<div >
								<div className={s.title}>
									<p className={`${s.titleName} ${s.noselect}`}>{(this.state.firstName ? this.state.firstName : 'Name')} {(this.state.secondName ? this.state.secondName : 'Second name')}</p>
									<p className={`${s.titleAge} ${s.noselect}`}>{(this.state.age ? `${this.state.age} ${this.state.ageCaption}` : 'Age')}</p>
								</div>
							</div>
						</div>
					</div>
					<MDBContainer style={{ width: '250px', marginBottom: '30px' }}>
						<MDBRow>
							<MDBCol style={{ padding: '0' }} className={`no-gutters`} md="12">
								<form>

									<label htmlFor="defaultFormLoginEmailEx" className="grey-text">Name</label>
									<input
										type="text"
										id="defaultFormLoginEmailEx"
										className="form-control"
										value={this.state.firstName}
										onChange={this.onInputNameChange}
									/>
									<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Second Name</label>
									<input
										type="text"
										id="defaultFormLoginPasswordEx"
										className="form-control"
										value={this.state.secondName}
										onChange={this.onInputSecondNameChange}
									/>
									<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Age</label>
									<input
										type="number"
										min="1"
										max="99"
										id="defaultFormLoginPasswordEx"
										className="form-control"
										value={this.state.age}
										onChange={this.onInputAgeChange}
									/>
								</form>
							</MDBCol>
						</MDBRow>

					</MDBContainer>
					<TipsContainer props={this.props} />
				</div>
			)
		} else if (this.state.stepper.currentStep === 2) {

			return (
				<div>
					<div><span style={{ fontWeight: 'bold' }}>Step 2: &nbsp;</span> Choose favorite films</div>

					<MDBContainer style={{ width: '350px', marginBottom: '30px' }}>
						<MDBRow>
							<MDBCol style={{ padding: '0' }} className={`no-gutters`} md="12">
							<div className={s.favoritesContainer}>
								{this.allFilmsNames()}
                            </div>
								
							</MDBCol>
						</MDBRow>

					</MDBContainer>
					{/* <TipsContainer props={this.props} /> */}
				</div>
			)
		} else {
			console.log('Triggered unknown step ')
			return null
		}
	}

	render() {
		return (
			<MDBContainer>

				{/* this.state.modal */}
				<MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">
					<MDBModalHeader>Add new person</MDBModalHeader>
					<MDBModalBody>
						<div className={s.stepper}>
							<div className={s.stepperContainer}>
								{this.renderStep()}
							</div>
							<div className={s.stepperSwitcher}>
								<MDBRow style={{ width: '250px', margin: '0 auto', justifyContent: 'space-between' }}>
									<MDBBtn onClick={() => this.onStep(1)} disabled={(this.state.stepper.currentStep === 1 ? true : false)} outline style={{ margin: 0 }} color="secondary" size="sm">Step 1</MDBBtn>
									<MDBBtn onClick={() => this.onStep(2)} disabled={(this.state.stepper.currentStep === 2 ? true : false)} outline style={{ margin: 0 }} color="secondary" size="sm">Step 2</MDBBtn>
								</MDBRow>
							</div>
						</div>
					</MDBModalBody>
					<MDBModalFooter>
						<MDBBtn color="grey darken-1" onClick={this.onOpenClose}>Close</MDBBtn>
						<MDBBtn disabled={!this.state.addPersonButtonStatus} onClick={this.onAddPerson} color="primary">Add person</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalAddPerson;