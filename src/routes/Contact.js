import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
	return (
		<>
			<Navbar />
			<Hero
				cName="hero-midsize"
				heroImg="https://plus.unsplash.com/premium_photo-1661763836983-05fe81dff38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1967&q=80"
				title="Contact Us"
			/>
			<ContactForm />
			<Footer />
		</>
	);
}

export default Contact;
