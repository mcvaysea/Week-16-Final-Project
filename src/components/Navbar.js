import { Component } from "react";
import "./NavStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class NavBar extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	render() {
		return (
			<nav className="NavbarItems">
				<h1 className="navbar-logo">Hipster Tripster</h1>
				<div className="menu-icons" onClick={this.handleClick}>
					<i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<Link className={item.cName} to={item.url}>
								<i className={item.icon}>{item.title}</i>
							</Link>
						</li>
					);
				})}

				<button>Register Here</button>

				<ul className="nav-menu"></ul>
			</nav>
		);
	}
}

export default NavBar;
