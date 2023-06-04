import "./TripStyles.css";
import TripData from "./TripData";
import Trips1 from "../assets/scotland1.png"
import Trips2 from "../assets/iceland1.png"
import Trips3 from "../assets/germany1.png"

function Trip() {
	return (
		<div className="trip">
			<h1>Recent Travels</h1>
			<p>Fringilla urna porttitor rhoncus</p>
            <div className="tripcard">
                <TripData 
                image={Trips1}
				heading="Travel Scotland By Rail"
				text="Nullam non nisi est sit amet facilisis magna. Condimentum lacinia quis vel eros donec ac. Fermentum leo vel orci porta non pulvinar. Eros in cursus turpis massa tincidunt dui. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Augue mauris augue neque gravida in fermentum. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Aliquet risus feugiat in ante metus dictum. In hac habitasse platea dictumst quisque. Cursus metus aliquam eleifend mi. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat."
                />
                <TripData 
                image={Trips2}
				heading="See Iceland Auroras"
				text="Sed velit dignissim sodales ut eu sem integer. Tristique senectus et netus et malesuada. Eget dolor morbi non arcu risus quis. In est ante in nibh mauris cursus mattis molestie a. Pulvinar pellentesque habitant morbi tristique. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Fermentum et sollicitudin ac orci phasellus egestas tellus. Non consectetur a erat nam at lectus urna duis convallis. Purus gravida quis blandit turpis. Urna nunc id cursus metus aliquam eleifend. Eu mi bibendum neque egestas congue quisque egestas."
                />
                <TripData 
                image={Trips3}
				heading="Visit Tranquil Germany"
				text="Elementum nisi quis eleifend quam. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Eu lobortis elementum nibh tellus molestie nunc non blandit. Nunc non blandit massa enim nec dui nunc mattis enim. Vitae aliquet nec ullamcorper sit. Porttitor massa id neque aliquam vestibulum morbi blandit. Orci phasellus egestas tellus rutrum. Lacus laoreet non curabitur gravida arcu ac. Proin sagittis nisl rhoncus mattis rhoncus urna. Ut ornare lectus sit amet est placerat in."
                />
            </div>
		</div>
	);
}

export default Trip;