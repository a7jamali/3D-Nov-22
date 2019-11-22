import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
	'//placekitten.com/1500/500',
	'//placekitten.com/4000/3000',
	'//placekitten.com/800/1200',
	'//placekitten.com/1500/1500'
];

export default class LightboxExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photoIndex: 0,
			isOpen: false
		};
	}

	submitButton = () => {
		return (
			<div>
				<button type="button">Submit</button>
			</div>
		);
	};

	render() {
		const { photoIndex, isOpen } = this.state;
		const toolBar = [
			<Link to="/category">
				{' '}
				<button type="button">submit</button>{' '}
			</Link>
		];
		const title = [ 'title', 'whatever' ];

		return (
			<div>
				<button type="button" onClick={() => this.setState({ isOpen: true })}>
					Open Lightbox
				</button>

				{isOpen && (
					<Lightbox
						mainSrc={images[photoIndex]}
						nextSrc={images[(photoIndex + 1) % images.length]}
						prevSrc={images[(photoIndex + images.length - 1) % images.length]}
						onCloseRequest={() => this.setState({ isOpen: false })}
						onMovePrevRequest={() =>
							this.setState({
								photoIndex: (photoIndex + images.length - 1) % images.length
							})}
						onMoveNextRequest={() =>
							this.setState({
								photoIndex: (photoIndex + 1) % images.length
							})}
						onAfterOpen={this.submitButton}
						toolbarButtons={toolBar}
						imageCaption={title[this.state.photoIndex]}
					/>
				)}
			</div>
		);
	}
}
