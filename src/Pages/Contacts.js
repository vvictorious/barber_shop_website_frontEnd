import React, { Component } from 'react';
import Navbar from '../Components/Navbar.js'
import './Contacts.css';
import cut from '../Images/streetcut_portrait.jpg'

class Contacts extends Component {
	render(){
		return(
			<div>
				<Navbar />
				<img src={ cut } className= "cut" alt="Kid getting a haircut"/>
				<div id="formio"></div>

				
			</div>

		);
	}
}


export default Contacts;