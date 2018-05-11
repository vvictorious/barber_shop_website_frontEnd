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
					 
					<h2>Welcome to  Techniques!</h2>
					<p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.
					</p>
				</div>
			</div>

		);
	}
}


export default Home;








