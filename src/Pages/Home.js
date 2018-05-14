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
				<div className="container">
					 
					<h2></h2>
					<p>
					</p>
				</div>
			</div>

		);
	}
}


export default Home;








