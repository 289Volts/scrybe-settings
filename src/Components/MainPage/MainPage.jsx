import React from "react";
import MainPageCss from "./mainpage.module.scss";
import PersonalInformation from "../SubPages/PersonalInformation/PersonalInformation";
import AccountSetting from "../SubPages/AccountSettings/AccountSettings";
import Notification from "../SubPages/Notifications/Notification";
import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";

const MainPage = () => {
	const cardDetails = [
		{
			path: "/personal-information",
			title: "Personal information",
			description: "Change/verify your email address, and set your profile picture",
			img: "/assets/icons/chevron-right.svg",
		},
		{
			path: "/account-security",
			title: "Account security",
			description: "Change your password and manage your connected Apps",
			img: "/assets/icons/chevron-right.svg",
		},
		{
			path: "/notification",
			title: "Notification",
			description: "Change how we send you updates, newsletters, periodic summaries, and other notifications",
			img: "/assets/icons/chevron-right.svg",
		},
	];
	const [isMobile, setIsMobile] = React.useState(false);
	const [isPage, setPage] = React.useState(true);
	const [isAccountPage, setIsAccountPage] = React.useState(false);
	const [isNotificationPage, setIsNotificationPage] = React.useState(false);

	const [showModal, setShowModal] = React.useState(false);

	

	const togglePage = (page) => {
		if (page === "Personal information") {
			setPage(true);
			setIsAccountPage(false);
			setIsNotificationPage(false);
		}
		if (page === "Account security") {
			setIsAccountPage(true);
			setPage(false);
			setIsNotificationPage(false);
		}
		if (page === "Notification") {
			setIsNotificationPage(true);
			setIsAccountPage(false);
			setPage(false);
		}
	};

	React.useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<div className={MainPageCss.container}>
			<div className={MainPageCss.wrapper}>
				<div className={MainPageCss.header}>
					<h1>Settings</h1>
				</div>
				<div className={MainPageCss.profileCard}>
					<div className={MainPageCss.image}>
						<img src="/assets/images/Pic.png" alt="" className="" />
					</div>
					<div className={MainPageCss.textContent}>
						<h2>John Doe</h2>
						<p className={MainPageCss.title}>Administrator</p>
						<p className={MainPageCss.email}>johndoe.admin@businessemail.com</p>
					</div>
				</div>
				<section className={MainPageCss.options}>
					<Link
						onClick={() => togglePage(cardDetails[0].title)}
						to={window.innerWidth <= 768 ? cardDetails[0].path : ""}
					>
						<div className={MainPageCss.optionsCard} style={{ backgroundColor: isPage && !isMobile ? "#e6f0ff" : "" }}>
							<div className={MainPageCss.header}>
								<h2 className={MainPageCss.heading}>{cardDetails[0].title}</h2>
								<img src={cardDetails[0].img} alt="" />
							</div>
							<p style={{ color: isPage && !isMobile ? "#002D6B" : "" }}>{cardDetails[0].description}</p>
						</div>
					</Link>
					<Link
						onClick={() => togglePage(cardDetails[1].title)}
						to={window.innerWidth <= 768 ? cardDetails[1].path : ""}
					>
						<div className={MainPageCss.optionsCard} style={{ backgroundColor: isAccountPage ? "#e6f0ff" : "" }}>
							<div className={MainPageCss.header}>
								<h2 className={MainPageCss.heading}>{cardDetails[1].title}</h2>
								<img src={cardDetails[1].img} alt="" />
							</div>
							<p style={{ color: isAccountPage ? "#002D6B" : "" }}>{cardDetails[1].description}</p>
						</div>
					</Link>
					<Link
						onClick={() => togglePage(cardDetails[2].title)}
						to={window.innerWidth <= 768 ? cardDetails[2].path : ""}
					>
						<div className={MainPageCss.optionsCard} style={{ backgroundColor: isNotificationPage ? "#e6f0ff" : "" }}>
							<div className={MainPageCss.header}>
								<h2 className={MainPageCss.heading}>{cardDetails[2].title}</h2>
								<img src={cardDetails[2].img} alt="" />
							</div>
							<p style={{ color: isNotificationPage ? "#002D6B" : "" }}>{cardDetails[2].description}</p>
						</div>
					</Link>
				</section>
				<div className={MainPageCss.error} onClick={() => setShowModal((prevState) => !prevState)}>
					<Link to="" className={MainPageCss.errorBtn}>
						Delete Account
					</Link>
				</div>
			</div>

			{showModal && <Overlay setShowModal={() => setShowModal((prevState) => !prevState, window.scrollTo(0,0))} />}

			{isPage && !isMobile && (
				<div style={{ display: innerWidth <= 768 ? "none" : "block" }} className={MainPageCss.external}>
					{isPage && !isMobile && <PersonalInformation />}
				</div>
			)}
			<div style={{ display: !isAccountPage ? "none" : "block" }} className={MainPageCss.external}>
				{isAccountPage && !isMobile && <AccountSetting />}
			</div>
			<div style={{ display: !isNotificationPage ? "none" : "block" }} className={MainPageCss.external}>
				{isNotificationPage && !isMobile && <Notification />}
			</div>
		</div>
	);
};

export default MainPage;
