import React, { Component } from 'react';
import Navbar from '../Components/Navbar.js'
import './Services.css';
import beard from '../Images/beard.jpg'

class Services extends Component {
	render(){
		return(
			<div>
				<Navbar />
				<img src={ beard } className= "beard" alt="Man getting shaved"/>;
				
			</div>

		);
	}
}


export default Services;
