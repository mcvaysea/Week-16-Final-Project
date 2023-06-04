import "./FooterStyles.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div>
					<h1>Hipster Tripster</h1>
					<h3>Find Your Adventure</h3>
				</div>
				<div>
					<a href="/">
						<i className="fa-brands fa-facebook-square"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-instagram-square"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-twitter-square"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-youtube-square"></i>
					</a>
				</div>
			</div>
			<div className="bottom">
                <div>
                    <h4>Travel Resources</h4>
                    <a href="/">Manage My Trips</a>
                    <a href="/">Travel Advisories</a>
                    <a href="/">Frequently Asked Questions</a>
                    <a href="/">Last Minute Deals</a>
                </div>
                <div>
                    <h4>About Us</h4>
                    <a href="/">Our Company</a>
                    <a href="/">Join Our Team</a>
                    <a href="/">Travel Blogs</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Talk To An Agent</a>
                    <a href="/">Terms And Conditions</a>
                    <a href="/">Travel Accessibility </a>
                </div>
                <div>
                    <h4>Extras</h4>
                    <a href="/">Travel Insurance</a>
                    <a href="/">Explorers Visa &reg; Card</a>
                    <a href="/">Join Our Ambassadors Club</a>
                </div>
            </div>
		</div>
	);
};


export default Footer;