import React from "react";
import Menu from "../menu/Menu";
import SliderProperty from "../home/slider/SliderProperty";
import TitleProperty from "../property/TittleProperty";
import DescriptionPropertyAccordion from "../property/DescriptionPropertyAccordion";
import Footer from "../footer/Footer";
import db from "../db/Db";


class PropertyPage extends React.Component {
	state = {
		item: db.items.find((i) => i.id === this.props.match.params.propertyId),
	};

	render() {
		return (
			<>
				<Menu />
				<main role="main" className="flex-shrink-0 mt-5">
					<div className="container">
						<SliderProperty pictures={this.state.item.pictures} />
						<TitleProperty item={this.state.item} />
						<DescriptionPropertyAccordion item={this.state.item} />
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default PropertyPage;