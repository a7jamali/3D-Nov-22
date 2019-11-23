import React, { Component } from 'react';
import Image from '../assets/thumbnails/Home-page-mockup.jpg';
export default class lightbox extends Component {
	render() {
		return (
			<div className="idkwhatitis">
				<img src={Image} className="home" />
				<a href="/category" className="home__link" />
			</div>
		);
	}
}
