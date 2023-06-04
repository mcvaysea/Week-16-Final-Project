import { Component } from "react";
import "./DestinationStyle.css";


class DestinationData extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<div className="dest-text">
					<h2>{this.props.heading}</h2>
					<p>{this.props.text}</p>
				</div>
				<div className="image">
					<img alt="dnang1" src={this.props.img1}></img>
					<img alt="dnang2" src={this.props.img2}></img>
				</div>
			</div>
		);
	}
}

export default DestinationData;
