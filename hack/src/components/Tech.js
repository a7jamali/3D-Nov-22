import React, { Component } from "react";


export default class Tech extends Component {
	render() {
	return (



		<div className="tech">

<div className="tech__header">
            <h1 className="tech__header-logo">Neft</h1>
            <h2 className="tech__header-page">Technology</h2>

            <div className="tech__sort-div">
            <h3 className="tech__sort-text">Filter</h3>
            <button className="tech__sort-button">A</button>
            </div>
            </div>


		<div className="tech__list">

				<div className="tech__item">

					<iframe className="tech__vid" width="560" height="315" src="https://www.youtube.com/embed/464puoD09dM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div className="tech__textbox">
							<div className="tech__text1">
								<h1>Title</h1>
								<h2>Author</h2>
								<h4>Description</h4>
							</div>
							<div className="tech__text2">
									<h2>Views</h2>
									<h2>Ratings</h2>
								</div>
					</div>

					</div>

					<div className="tech__item">

					<iframe className="tech__vid" width="560" height="315" src="https://www.youtube.com/embed/464puoD09dM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div className="tech__textbox">
						<div className="tech__text1">
							<h1>Title</h1>
							<h2>Author</h2>
							<h4>Description</h4>
						</div>
						<div className="tech__text2">
								<h2>Views</h2>
								<h2>Ratings</h2>
							</div>
					</div>

					</div>

					<div className="tech__item">

					<iframe className="tech__vid" width="560" height="315" src="https://www.youtube.com/embed/464puoD09dM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div className="tech__textbox">
						<div className="tech__text1">
							<h1>Title</h1>
							<h2>Author</h2>
							<h4>Description</h4>
						</div>
						<div className="tech__text2">
								<h2>Views</h2>
								<h2>Ratings</h2>
							</div>
						</div>

					</div>
			</div>
            </div>


	);
}}