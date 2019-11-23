import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
// import Arrow from '../assets/icons/down.svg';
import thumbnail from '../assets/Images/ted-logo.png';
import Logo from '../assets/thumbnails/Group.png';

const options = [
	{ value: 'Views', label: 'Views' },
	{ value: 'Comments', label: 'Comments' },
	{ value: 'Duration', label: 'Duration' }
];
const something = [
	{
		name: 'Hugh Herr: The new bionics that let us run, climb and dance',

		published_date: 396008735000,
		main_speaker: 'Hugh Herr',
		views: 7520736,
		description:
			"Hugh Herr is building the next generation of bionic limbs, robotic prosthetics inspired by nature's own designs. Herr lost both legs in a climbing accident 30 years ago; now, as the head of the MIT Media Lab\u2019s Biomechatronics group, he shows his incredible technology in a talk that's both technical and deeply personal \u2014 with the help of ballroom dancer Adrianne Haslet-Davis, who lost her left leg in the 2013 Boston Marathon bombing, and performs again for the first time on the TED stage.",
		url: 'https://www.ted.com/talks/hugh_herr_the_new_bionics_that_let_us_run_climb_and_dance'
	},
	{
		name: 'James Veitch: This is what happens when you reply to spam email',
		published_date: 1452269020000,
		main_speaker: 'James Veitch',
		views: 20475972,
		description:
			'Suspicious emails: unclaimed insurance bonds, diamond-encrusted safe deposit boxes, close friends marooned in a foreign country. They pop up in our inboxes, and standard procedure is to delete on sight. But what happens when you reply? Follow along as writer and comedian James Veitch narrates a hilarious, weeks-long exchange with a spammer who offered to cut him in on a hot deal.',
		url: 'https://www.ted.com/talks/james_veitch_this_is_what_happens_when_you_reply_to_spam_email\n'
	},
	{
		name: 'Pranav Mistry: The thrilling potential of SixthSense technology',
		published_date: 1258333200000,
		main_speaker: 'Pranav Mistry',
		views: 16097077,
		description:
			'At TEDIndia, Pranav Mistry demos several tools that help the physical world interact with the world of data -- including a deep look at his SixthSense device and a new, paradigm-shifting paper "laptop." In an onstage Q&A, Mistry says he\'ll open-source the software behind SixthSense, to open its possibilities to all.',
		url: 'https://www.ted.com/talks/pranav_mistry_the_thrilling_potential_of_sixthsense_technology\n'
	},
	{
		name: 'David Gallo: Underwater astonishments',
		published_date: 1200011280000,
		main_speaker: 'David Gallo',
		views: 13926113,
		description:
			"David Gallo shows jaw-dropping footage of amazing sea creatures, including a color-shifting cuttlefish, a perfectly camouflaged octopus, and a Times Square's worth of neon light displays from fish who live in the blackest depths of the ocean. This short talk celebrates the pioneering work of ocean explorers like Edith Widder and Roger Hanlon.",
		url: 'https://www.ted.com/talks/david_gallo_shows_underwater_astonishments\n'
	},
	{
		name: 'Monica Lewinsky: The price of shame',
		published_date: 1426894031000,
		main_speaker: 'Monica Lewinsky',
		views: 11443190,
		description:
			'Public shaming as a blood sport has to stop," says Monica Lewinsky. In 1998, she says, \u201cI was Patient Zero of losing a personal reputation on a global scale almost instantaneously.\u201d Today, the kind of online public shaming she went through has become constant -- and can turn deadly. In a brave talk, she takes a hard look at our online culture of humiliation, and asks for a different way.',
		url: 'https://www.ted.com/talks/monica_lewinsky_the_price_of_shame\n'
	},
	{
		name: "Raffaello D'Andrea: The astounding athletic power of quadcopters",
		published_date: 1370979845000,
		main_speaker: "Raffaello D'Andrea",
		views: 10281817,
		description:
			"In a robot lab at TEDGlobal, Raffaello D'Andrea demos his flying quadcopters: robots that think like athletes, solving physical problems with algorithms that help them learn. In a series of nifty demos, D'Andrea show drones that play catch, balance and make decisions together -- and watch out for an I-want-this-now demo of Kinect-controlled quads.",
		url: 'https://www.ted.com/talks/raffaello_d_andrea_the_astounding_athletic_power_of_quadcopters\n'
	},
	{
		name: 'Pattie Maes + Pranav Mistry: Meet the SixthSense interaction',
		published_date: 1236646800000,
		main_speaker: 'Pattie Maes + Pranav Mistry',
		views: 9753630,
		description:
			'This demo -- from Pattie Maes\' lab at MIT, spearheaded by Pranav Mistry -- was the buzz of TED. It\'s a wearable device with a projector that paves the way for profound interaction with our environment. Imagine "Minority Report" and then some.',
		url: 'https://www.ted.com/talks/pattie_maes_demos_the_sixth_sense\n'
	},
	{
		name: 'Steve Jobs: How to live before you die',
		published_date: 1321372794000,
		main_speaker: 'Steve Jobs',
		views: 8744428,
		description:
			"At his Stanford University commencement speech, Steve Jobs, CEO and co-founder of Apple and Pixar, urges us to pursue our dreams and see the opportunities in life's setbacks -- including death itself.",
		url: 'https://www.ted.com/talks/steve_jobs_how_to_live_before_you_die\n'
	},
	{
		name: 'Yves Rossy: Fly with the Jetman',
		published_date: 1396008735000,
		main_speaker: 'Yves Rossy',
		views: 7900891,
		description:
			'Strapped to a jet-powered wing, Yves Rossy is the Jetman -- flying free, his body as the rudder, above the Swiss Alps and the Grand Canyon. After a powerful short film shows how it works, Rossy takes the TEDGlobal stage to share the experience and thrill of flying.',
		'535':
			"Hugh Herr is building the next generation of bionic limbs, robotic prosthetics inspired by nature's own designs. Herr lost both legs in a climbing accident 30 years ago; now, as the head of the MIT Media Lab\u2019s Biomechatronics group, he shows his incredible technology in a talk that's both technical and deeply personal \u2014 with the help of ballroom dancer Adrianne Haslet-Davis, who lost her left leg in the 2013 Boston Marathon bombing, and performs again for the first time on the TED stage.",
		url: 'https://www.ted.com/talks/yves_rossy_fly_with_the_jetman\n'
	},
	{
		name: 'Sheryl Sandberg: Why we have too few women leaders',
		published_date: 1292943083000,
		main_speaker: 'Sheryl Sandberg',
		views: 7431179,
		description:
			'Facebook COO Sheryl Sandberg looks at why a smaller percentage of women than men reach the top of their professions -- and offers 3 powerful pieces of advice to women aiming for the C-suite.',
		url: 'https://www.ted.com/talks/sheryl_sandberg_why_we_have_too_few_women_leaders\n'
	}
];

export default class Tech extends Component {
	state = {
		selectedOption: null,
		prevSelect: null
	};
	handleChange = (selectedOption) => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	};

	componentDidUpdate(prevState) {
		console.log(this.state.selectedOption.value);

		if (
			this.state.selectedOption.value !== undefined &&
			this.state.selectedOption.value !== this.state.prevSelect
		) {
			this.setState({
				prevSelect: this.state.selectedOption.value
			});
		}
		console.log(this.state.prevSelect);
	}

	render() {
		const { selectedOption } = this.state;
		const sortedSomething = something.sort((somethingOne, somethingTwo) => {
			return somethingTwo.views - somethingOne.views;
		});
		console.log(selectedOption);
		const normal = something.map((data, index) => {
			return (
				<div>
					<div className="tech__list">
						<a href={data.url} className="tech__a">
							<div className="tech__item">
								<iframe
									className="tech__vid"
									width="560"
									height="315"
									src={thumbnail}
									frameborder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								/>
								<div className="tech__textbox">
									<h1 className="tech__textbox-title">{data.name}</h1>
									<div className="tech__textbox-array">
										<h2 className="tech__textbox-array-cell">{data.main_speaker}</h2>
										<h2 className="tech__textbox-array-cell">{data.views}</h2>
										<h2 className="tech__textbox-array-cell">{data.published_date}</h2>
									</div>
									<h3 className="tech__textbox-desc">{data.description}</h3>
								</div>
							</div>
						</a>
					</div>
				</div>
			);
		});
		const views = sortedSomething.map((data) => {
			return (
				<div>
					<div className="tech__list">
						<a href={data.url} className="tech__a">
							<div className="tech__item">
								<iframe
									className="tech__vid"
									width="560"
									height="315"
									src={thumbnail}
									frameborder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								/>
								<div className="tech__textbox">
									<h1 className="tech__textbox-title">{data.name}</h1>
									<div className="tech__textbox-array">
										<h2 className="tech__textbox-array-cell">{data.main_speaker}</h2>
										<h2 className="tech__textbox-array-cell">{data.views}</h2>
										<h2 className="tech__textbox-array-cell">{data.published_date}</h2>
									</div>
									<h3 className="tech__textbox-desc">{data.description}</h3>
								</div>
							</div>
						</a>
					</div>
				</div>
			);
		});
		// const comments =
		// const Duration =

		if (selectedOption === null) {
			return (
				<div>
					<div className="tech">
						<div className="tech__header">
							<img src={Logo} className="tech__header-logo" />

							<h2 className="tech__header-page">Technology</h2>

							<div className="tech__sort-div">
								<Select
									value={selectedOption}
									onChange={this.handleChange}
									options={options}
									className="tech__dropdown"
								/>
							</div>
						</div>
						{normal}
					</div>
				</div>
			);
		} else if (selectedOption.value === 'Views') {
			return (
				<div>
					<div className="tech">
						<div className="tech__header">
							<h1 className="tech__header-logo">Neft</h1>
							<h2 className="tech__header-page">Technology</h2>

							<div className="tech__sort-div">
								<Select
									value={selectedOption}
									onChange={this.handleChange}
									options={options}
									className="tech__dropdown"
								/>
							</div>
						</div>
						{views}
					</div>
				</div>
			);
		}
		// else if(selectedOption.value==='Comments'){
		// 	return {comments}
		// } else if (selectedOption.value==='Duration'){
		// 	return {Duration}
		// }

		// return (
		// 	<div className="tech">
		// 		<div className="tech__header">
		// 			<h1 className="tech__header-logo">Neft</h1>
		// 			<h2 className="tech__header-page">Technology</h2>

		// 			<div className="tech__sort-div">
		// 				<Select
		// 					value={selectedOption}
		// 					onChange={this.handleChange}
		// 					options={options}
		// 					className="tech__dropdown"
		// 				/>
		// 			</div>
		// 		</div>

		// 		<div className="tech__list">
		// 			<div className="tech__item">
		// 				<iframe
		// 					className="tech__vid"
		// 					width="560"
		// 					height="315"
		// 					src="https://www.youtube.com/embed/464puoD09dM"
		// 					frameborder="0"
		// 					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		// 					allowfullscreen
		// 				/>
		// 				<div className="tech__textbox">
		// 					<h1 className="tech__textbox-title">Title</h1>
		// 					<div className="tech__textbox-array">
		// 						<h2 className="tech__textbox-array-cell">Author</h2>
		// 						<h2 className="tech__textbox-array-cell">Views</h2>
		// 						<h2 className="tech__textbox-array-cell">Date</h2>
		// 					</div>
		// 					<h3 className="tech__textbox-desc">Description</h3>
		// 				</div>
		// 			</div>

		// 			<div className="tech__item">
		// 				<iframe
		// 					className="tech__vid"
		// 					width="560"
		// 					height="315"
		// 					src="https://www.youtube.com/embed/464puoD09dM"
		// 					frameborder="0"
		// 					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		// 					allowfullscreen
		// 				/>
		// 				<div className="tech__textbox">
		// 					<h1 className="tech__textbox-title">Title</h1>
		// 					<div className="tech__textbox-array">
		// 						<h2 className="tech__textbox-array-cell">Author</h2>
		// 						<h2 className="tech__textbox-array-cell">Views</h2>
		// 						<h2 className="tech__textbox-array-cell">Date</h2>
		// 					</div>
		// 					<h3 className="tech__textbox-desc">Description</h3>
		// 				</div>
		// 			</div>

		// 			<div className="tech__item">
		// 				<iframe
		// 					className="tech__vid"
		// 					width="560"
		// 					height="315"
		// 					src="https://www.youtube.com/embed/464puoD09dM"
		// 					frameborder="0"
		// 					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		// 					allowfullscreen
		// 				/>
		// 				<div className="tech__textbox">
		// 					<h1 className="tech__textbox-title">Title</h1>
		// 					<div className="tech__textbox-array">
		// 						<h2 className="tech__textbox-array-cell">Author</h2>
		// 						<h2 className="tech__textbox-array-cell">Views</h2>
		// 						<h2 className="tech__textbox-array-cell">Date</h2>
		// 					</div>
		// 					<h3 className="tech__textbox-desc">Description</h3>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// );
	}
}
