import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBAlert } from 'mdbreact';
import filmsStyle from '../Content/Films/Films.module.css'
import s from './ModalAddFilm.module.css'
import TipsContainer from './Tips/TipsContainer'

class ModalAddFilm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: this.props.filmsPage.modalAddFilmStatus,
			name: this.props.filmsPage.addFilmForm.name,
			description: this.props.filmsPage.addFilmForm.description
		}
	}

	onOpenClose = () => {
		this.setState(() => {
			this.state.modal = !this.state.modal
		})
		this.props.changeFilmModalStatus()
	}

	onInputNameChange = (e) => {
		let text = e.target.value
		this.setState(() => {
			this.state.name = text
		})
		this.props.changeInputNameText(text)
	}
	onInputDescriptionChange = (e) => {
		let text = e.target.value
		this.setState(() => {
			this.state.description = text
		})
		this.props.changeInputDescriptionText(text)
	}


	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
		this.props.changeFilmModalStatus()
	}

	componentWillReceiveProps() {
		this.setState(() => {
			this.state.modal = this.props.filmsPage.modalAddFilmStatus
		})
		// this.render()
	}

	render = () => {
		return (
			<MDBContainer>

				{/* this.state.modal */}
				<MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">
					<MDBModalHeader>Add new film below</MDBModalHeader>
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
						
						<TipsContainer />
						{/* <div className={s.tipsBlock}>
							
							
							<MDBAlert className={s.tip} color="warning" >
								<p><span><i style={{marginRight: '10px'}} className="fas fa-exclamation"></i></span>Description should contain at least 50 characters</p>
							</MDBAlert>
							<MDBAlert className={s.tip} color="warning" >
								<p><span><i style={{marginRight: '10px', fontWeight: 'bold'}} className="fab fa-zhihu"></i></span>Name and description should not contain symbols</p>
							</MDBAlert>
							<MDBAlert className={s.tip} color="warning" >
								<p><span><i style={{marginRight: '10px'}} className="fas fa-exclamation"></i></span>Description should be less than 300 characters</p>
							</MDBAlert>
							<MDBAlert className={s.tip} color="warning" >
								<p><span><i style={{marginRight: '10px'}} className="fas fa-exclamation"></i></span>Name should be less than 50 characters</p>
							</MDBAlert>
						</div> */}
					</MDBModalBody>
					<MDBModalFooter>
						<MDBBtn color="secondary" onClick={this.onOpenClose}>Close</MDBBtn>
						<MDBBtn color="primary">Add film</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalAddFilm;