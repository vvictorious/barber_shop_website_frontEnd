import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Components/Navbar.js';
import photo from '../Images/barber_shop.jpg'

class Home extends Component {
	render(){
		return(
			<div>
				<Navbar />
				<img src={ photo } className= "photo" alt="Barber shop photo"/>;
				<a class="button" target="_blank" href="https://www.schedulicity.com/scheduling/thsqf4">Book Online</a>

			</div>

		);
	}
}


export default Home;








