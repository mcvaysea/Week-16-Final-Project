import Danang1 from "../assets/da1.png";
import Danang2 from "../assets/da2.png";
import Ital1 from "../assets/ital1.png";
import Ital2 from "../assets/ital2.png";
import VBC1 from "../assets/vbc1.png";
import VBC2 from "../assets/vbc2.png";
import Sinpr1 from "../assets/snpr2.png";
import Sinpr2 from "../assets/snpr1.png";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";

const Destination = () => {
	return (
		<div className="destination">
			<h1>Popular Destinations</h1>
			<p>Toursa Ut enim ad minim veniam quis nostrud consequat.</p>

			<DestinationData
				className="first-dest"
				heading="Da Nang, Vietnam"
				text="Sit amet mauris commodo quis. Vitae sapien pellentesque habitant morbi. Non blandit massa enim nec dui nunc mattis enim ut. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Eu nisl nunc mi ipsum faucibus vitae aliquet. Nunc faucibus a pellentesque sit. Sagittis eu volutpat odio facilisis mauris sit. Faucibus pulvinar elementum integer enim neque."
				img1={Danang1}
				img2={Danang2}
			/>

			<DestinationData
				className="first-dest-reverse"
				heading="Venezia, Italy"
				text="Volutpat blandit aliquam etiam erat. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. In metus vulputate eu scelerisque felis imperdiet. Nibh praesent tristique magna sit. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Tincidunt arcu non sodales neque sodales.  Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Dictum non consectetur a erat nam at lectus. Massa sapien faucibus et molestie ac feugiat."
				img1={Ital1}
				img2={Ital2}
			/>

			<DestinationData
				className="first-dest"
				heading="Victoria, British Columbia"
				text="Aliquet nibh praesent tristique magna sit amet purus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Pellentesque habitant morbi tristique senectus et netus. Ornare arcu odio ut sem nulla pharetra diam. Nunc sed augue lacus viverra vitae congue eu consequat. Velit dignissim sodales ut eu sem integer vitae justo eget. Gravida cum sociis natoque penatibus. Id leo in vitae turpis massa sed elementum tempus. Fames ac turpis egestas sed. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. "
				img1={VBC1}
				img2={VBC2}
			/>

			<DestinationData
				className="first-dest-reverse"
				heading="Singapore"
				text="Rhoncus aenean vel elit scelerisque mauris pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Risus nec feugiat in fermentum posuere urna nec tincidunt. Et ligula ullamcorper malesuada proin. Rhoncus urna neque viverra justo nec ultrices dui sapien. Pellentesque diam volutpat commodo sed egestas egestas. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. In arcu cursus euismod quis viverra nibh. Sit amet justo donec enim diam vulputate ut. Ultrices sagittis orci a scelerisque purus. Quis hendrerit dolor magna eget est. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat."
				img1={Sinpr1}
				img2={Sinpr2}
			/>
		</div>
	);
};

export default Destination;
