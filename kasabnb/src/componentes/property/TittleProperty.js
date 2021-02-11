import React from "react";
import ReactStars from "react-rating-stars-component";

class TittleProperty extends React.Component {
	render() {
		return (
			<>
				<main role="main" className="flex-shrink-0 mt-5">
					<div className="album py-2 bg-light">
						<div className="container">
							<div className="row">
								<div className="col-9">
									<p className="propertyName">
										{this.props.item.title}
									</p>
									<p className="propertyLocation">
										{this.props.item.location}
									</p>
									<div className="propertyTags">
										{this.props.item.tags.map((tag) => (
											<button className="btn Tag">
												{tag}
											</button>
										))}
									</div>
								</div>
								<div className="col-3">
									<div className="ownerSet">
										<p className="ownerName">
											{this.props.item.host.name}
										</p>
										<img
											className="ownerPicture"
											src={this.props.item.host.picture}
											alt="#"
										/>
									</div>
									<div className="rating">
										{/*Conditional rendering here*/}
										<ReactStars
											value={this.props.item.rating}
											activeColor="#ffd700"
											edit={false}
											size={24}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</>
		);
	}
}

export default TittleProperty;