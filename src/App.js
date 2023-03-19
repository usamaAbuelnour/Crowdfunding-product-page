import classes from "./App.scss";
import mainPicMobile from "./assets/image-hero-mobile.jpg";
import mainPicDesk from "./assets/image-hero-desktop.jpg";
import ToolBar from "./navigation/ToolBar/ToolBar";
import Project from "./components/Project/Project";
import Statistics from "./components/Statistics/Statistics";
import { createContext, useRef, useState } from "react";
import About from "./components/About/About";
import BackDrop from "./UI/BackDrop/BackDrop";
import MobileMenu from "./navigation/MobileMenu/MobileMenu";
import Modal from "./UI/Modal/Modal";
import BackThisProject from "./components/BackThisProject/BackThisProject";
import PledgeConfirm from "./components/PledgeConfirm/PledgeConfirm";

export const PriceContext = createContext();

function App() {
	const [statistics, setStatistics] = useState({
		total: 19914,
		target: 100000,
		backers: 5007,
		daysLeft: 56,
	});

	const [rewards, setRewards] = useState([
		{
			type: "Pledge with no reward",
			pledgePrice: "",
			description:
				"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
			stock: "none",
			selected: false,
			noReward: true,
		},
		{
			type: "Bamboo Stand",
			pledgePrice: 25,
			description:
				"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
			stock: 101,
			selected: false,
		},
		{
			type: "Black Edition Stand",
			pledgePrice: 75,
			description:
				"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
			stock: 64,
			selected: false,
		},
		{
			type: "Mahogany Special Edition",
			pledgePrice: 200,
			description:
				"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included",
			stock: 0,
			selected: false,
		},
	]);

	const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

	const [modalIsVisible, setModalIsVisible] = useState(false);

	const [backThisProjectIsVisible, setBackThisProjectIsVisible] =
		useState(true);

	const [bookMarked, setBookMarked] = useState(false);

	const price = useRef(0);

	const oldStatistics = useRef(statistics);

	const openMobileMenu = () => setMobileMenuIsVisible(true);

	const closeMobileMenu = () => setMobileMenuIsVisible(false);

	const resetSelectedRewards = () => {
		const rewardsClone = JSON.parse(JSON.stringify(rewards));

		rewardsClone.map((reward) => (reward.selected = false));

		setRewards(rewardsClone);
	};

	const openModal = () => setModalIsVisible(true);

	const closeModal = () => {
		setModalIsVisible(false);

		setBackThisProjectIsVisible(true);

		resetSelectedRewards();
	};

	const closeBackThisProject = () => setBackThisProjectIsVisible(false);

	const toggleBookMark = () => setBookMarked((prev) => !prev);

	return (
		<div className={classes.app}>
			{backThisProjectIsVisible ? null : <span id="scrollUp"></span>}

			<BackDrop
				mobileMenuIsVisible={mobileMenuIsVisible}
				modalIsVisible={modalIsVisible}
				clicked={
					modalIsVisible && backThisProjectIsVisible
						? closeModal
						: closeMobileMenu
				}
			/>

			<figure className={classes.mainPic}>
				<img className={classes.mobileImg} src={mainPicMobile} />

				<img className={classes.deskImg} src={mainPicDesk} />
			</figure>

			<div className={classes.container} id="container">
				<Modal
					modalIsVisible={modalIsVisible}
					backThisProjectIsVisible={backThisProjectIsVisible}
				>
					<PriceContext.Provider value={price}>
						<BackThisProject
							rewards={rewards}
							setRewards={setRewards}
							closeModal={closeModal}
							backThisProjectIsVisible={backThisProjectIsVisible}
							closeBackThisProject={closeBackThisProject}
						/>
					</PriceContext.Provider>

					{backThisProjectIsVisible ? null : (
						<PledgeConfirm
							closeModal={closeModal}
							setStatistics={setStatistics}
							price={price}
						/>
					)}
				</Modal>

				<MobileMenu mobileMenuIsVisible={mobileMenuIsVisible} />

				<ToolBar
					openMobileMenu={openMobileMenu}
					closeMobileMenu={closeMobileMenu}
					mobileMenuIsVisible={mobileMenuIsVisible}
					modalIsVisible={modalIsVisible}
				/>

				<Project
					openModal={openModal}
					bookMarked={bookMarked}
					toggleBookMark={toggleBookMark}
				/>

				<Statistics
					statistics={statistics}
					oldStatistics={oldStatistics.current}
				/>

				<About
					rewards={rewards}
					openModal={openModal}
					setRewards={setRewards}
				/>
			</div>
		</div>
	);
}
export default App;
