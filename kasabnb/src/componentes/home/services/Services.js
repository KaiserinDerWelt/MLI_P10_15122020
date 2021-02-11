import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "../../menu/Menu";
import db from "../../db/Db.js";

class Servicios extends React.Component {
	state = {
		items: [],
	};

	componentDidMount() {
		this.setState({ items: db.items });
	}

	render() {
		return (
			<>
				<Menu />
				<main role="main" className="flex-shrink-0 mt-4">
					<div className="album bg-light">
						<div className="container">
							<div className="row">
								{this.state.items.map((item) => (
									<div className="col-md-4">
										<div className="card mb-4 shadow-sm">
											{/*Modify card background*/}
											<NavLink
												to={`/property/${item.id}`}
												className="nav-link-property"
											>
												<img
													className="bd-placeholder-img card-img-top hostPicture"
													width="100%"
													height="225"
													src={item.cover}
													preserveAspectRatio="xMidYMid slice"
													focusable="false"
													alt={item.title}
													aria-label="Placeholder: Property 1"
												/>
											</NavLink>
											<p className="bottonLeftTittle">
												{item.title}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</main>
			</>
		);
	}
}

export default Servicios;