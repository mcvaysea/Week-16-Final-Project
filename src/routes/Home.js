import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<Navbar />
			<Hero
				cName="hero"
				heroImg="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
				title="Lorem Ipsum Sit"
				text="Excepteur Sint Occaecat Cupidatat Non Proident"
				buttonText="Book Your Trip"
				url="/"
				btnClass="show"
			/>
			<Destination />
			<Trip />
			<Footer />
		</>
	);
}

export default Home;
