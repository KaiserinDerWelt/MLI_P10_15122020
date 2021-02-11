import React from "react";
//I must provide the properties to propertyFluid in CSS
class SliderProperty extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return (
			<div id="slider" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					{this.props.pictures.map((picture, index) => (
						<li
							data-target="#slider"
							data-slide-to="1"
							className={index === 0 ? "active" : ""}
						></li>
					))}
				</ol>
				<div className="carousel-inner">
					{this.props.pictures.map((picture, index) => (
						<div
							className={`carousel-item ${
								index === 0 ? "active" : ""
							} host`}
							key={index}
						>
							<img
								className="img-fluid-host "
								src={picture}
								alt="background-property-one"
							/>
						</div>
					))}
				</div>
				<a
					className="carousel-control-prev"
					href="#slider"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#slider"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}

export default SliderProperty;