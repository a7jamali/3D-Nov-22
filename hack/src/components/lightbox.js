import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Bar } from 'react-chartjs-2';

import Pic1 from '../assets/Images/video-list-0.jpg';
import Pic2 from '../assets/Images/video-list-1.jpg';
import Pic3 from '../assets/Images/video-list-2.jpg';
import Pic4 from '../assets/Images/video-list-3.jpg';
import Pic5 from '../assets/Images/video-list-4.jpg';
import Pic6 from '../assets/Images/video-list-5.jpg';

export default class lightbox extends Component {
	render() {
		const data = {
			labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: 'rgba(255,99,132,0.2)',
					borderColor: 'rgba(255,99,132,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
					hoverBorderColor: 'rgba(255,99,132,1)',
					data: [ 65, 59, 80, 81, 56, 55, 40 ]
				}
			]
		};

		return (
			<Carousel>
				<div>
					<h2>Bar Example (custom size)</h2>
					<Bar
						data={data}
						width={100}
						height={50}
						options={{
							maintainAspectRatio: false
						}}
					/>
				</div>
				<div>
					<h2>Bar Example (custom size)</h2>
					<Bar
						data={data}
						width={100}
						height={50}
						options={{
							maintainAspectRatio: false
						}}
					/>
				</div>
				<div>
					<img src={Pic6} />
					<p className="legend">Legend 6</p>
				</div>
			</Carousel>
		);
	}
}
