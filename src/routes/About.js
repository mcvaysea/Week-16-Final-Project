import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function About() {
	return (
		<>
			<Navbar />
			<Hero
				cName="hero-midsize"
				heroImg="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"
				title="About Us"
				btnClass="hide"
			/>
			<AboutUs />
			<Footer />
		</>
	);
}

export default About;
