import React, { Component } from "react";
import Arrow from "../assets/icons/down.svg"


export default class Tech extends Component {
	render() {
	return (



		<div className="tech">

<div className="tech__header">
            <h1 className="tech__header-logo">Neft</h1>
            <h2 className="tech__header-page">Technology</h2>

            <div className="tech__sort-div">
            <h3 className="tech__sort-text">Filter</h3>
            <button className="tech__sort-button"><img className="tech__sort-icon" src={Arrow}/></button>
            </div>
            </div>


		<div className="tech__list">

				<div className="tech__item">

					<iframe className="tech__vid" width="560" height="315" src="https://www.youtube.com/embed/464puoD09dM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div className="tech__textbox">
								<h1 className="tech__textbox-title">Title</h1>
								<div className="tech__textbox-array">
                                <h2 className="tech__textbox-array-cell">Author</h2>
                                <h2 className="tech__textbox-array-cell">Views</h2>
                                <h2 className="tech__textbox-array-cell">Date</h2></div>
                                <h3 className="tech__textbox-desc">Description</h3>
							</div>

					</div>

                    				<div className="tech__item">

					<iframe className="tech__vid" width="560" height="315" src="https://www.youtube.com/embed/464puoD09dM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div className="tech__textbox">
                    <h1 className="tech__textbox-title">Title</h1>
								<div className="tech__textbox-array">
                                <h2 className="tech__textbox-array-cell">Author</h2>
                                <h2 className="tech__textbox-array-cell">Views</h2>
                                <h2 className="tech__textbox-array-cell">Date</h2></div>
                                <h3 className="tech__textbox-desc">Description</h3>
							</div>

					</div>


		
									<div className="tech__item">

					<iframe className="tech__vid" width="560" height="315" src="https://www.youtube.com/embed/464puoD09dM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div className="tech__textbox">
                    <h1 className="tech__textbox-title">Title</h1>
								<div className="tech__textbox-array">
                                    <h2 className="tech__textbox-array-cell">Author</h2>
                                    <h2 className="tech__textbox-array-cell">Views</h2>
                                    <h2 className="tech__textbox-array-cell">Date</h2></div>
                                <h3 className="tech__textbox-desc">Description</h3>
							</div>

					</div>


		
			</div>
            </div>


	);
}}