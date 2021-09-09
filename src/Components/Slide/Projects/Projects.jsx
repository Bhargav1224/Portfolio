import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const useStyles = makeStyles((theme) => ({
	root: {
		overflowY: "scroll",
		padding: "100px 0 ",
	},
}));

const BridgeTwo = styled.div`
	padding-top: 150px;
	width: 100%;
	margin: 0 auto;
	background-color: ${(props) => props.theme.body};
	color: ${(props) => props.theme.fontColor};

	/* min-height: 400px; */
	z-index: 99;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	> div:nth-child(2) {
		padding: 50px 0;
		border-radius: 5px;
		display: flex;
		flex-wrap: wrap;
		grid-row-gap: 20px;
		width: 90%;
		margin: 30px auto;
		align-items: center;
		justify-content: space-evenly;
		background-size: cover;
		background-position: center;
	}
`;

let projectArray = [
	{
		img: "https://user-images.githubusercontent.com/64008831/128008993-a72d89e7-9988-44e3-82e9-17bbf27f3f76.png",
		title: "Frontend-masters",
		description:
			"A platform for users to learn different software courses online.",
		techStack: ["HTML", "CSS", "JavaScript", "React", "MaterialUI"],
		repoLink: "https://github.com/Ramaruva/FrontendMasters_clone",
		demoLink: "https://frontendmasterclone.vercel.app/",
		type: "A collaborative project built by a team of 3 executed in 7 days.",
		blogLink: "#",
		features: [
			"Signup and Login.",
			"A user can see the list of Courses.",
			"A user can search based on the title.",
			"A user can see his progress.",
			"A user can see attend bootCamp.",
			"A user can see read the guides of courses.",
		],
		responsibilities: [
			"Worked on ,created the own database ,UI for login ,also created Author Details Section, Guide Section, Popular Course Section , All Course Details section with dynamic progress bar of every user and also developed the Bootcamp Section.",
		],
	},
	{
		img: "https://user-images.githubusercontent.com/77038785/132504566-682b047b-2880-4599-bd4a-37aae90e3dea.PNG",
		title: "Murariblogs",
		description:
			"A platform for users to see the different blogs and user also write his own blogs and publish.",
		techStack: [
			"HTML",
			"CSS",
			"JavaScript",
			"NextJs",
			"Node",
			"Express",
			"MongoDB",
		],
		repoLink: "https://github.com/Bhargav1224/Murariblogs.com",
		demoLink: "https://murariblogs.vercel.app/",
		type: "Solo Project",
		blogLink: "#",
		features: [
			"Signup and Login.",
			"Users can see other bogs.",
			"User can add his blogs.",
		],
	},
	{
		img: "https://user-images.githubusercontent.com/77038785/132513780-4eeac5e8-04f9-4cee-8181-943e624817c1.PNG",
		title: "IndieGogo -Clone ",
		description:
			"With Indiegogo, user will raise the funds and having the opportunity to support entrepreneurs .",

		techStack: ["HTML", "CSS", "JavaScript", "React", "MaterialUI"],
		repoLink: "https://github.com/Bhargav1224/Nitrogen-IndieGogo",
		demoLink: "https://indiegogo.vercel.app/",
		type: "A collaborative project built by a team of 3 executed in 4 days.",
		blogLink: "#",
		features: [
			"Login and Signup.",
			"User can see list of cards of campaigns.",
			"User can filter based on the campaign.",
			"User can sort and filter and search.",
		],
		responsibilities: [
			"Worked on home page and explore Page where use can see the different cards of funding.",
		],
	},

	{
		img: "https://user-images.githubusercontent.com/77038785/131108784-207b9702-f264-4a9b-b546-62af7d1c0326.PNG",
		title: "MurariXprs.com",
		description: "It is a E-commerce website.User can see different types of products and sort based on price,filter based on rating and offers.",
		techStack: ["HTML", "CSS", "JavaScript", "React"],
		repoLink: "https://github.com/Bhargav1224/MurariXprs.com",
		demoLink: "https://murarixprs.vercel.app/",
		type: "Solo project",
		blogLink: "#",
		features: [
			" Signup and Login.",
			"A user can sort and filter.",
			"A user can order by filling in the required details.",
			"Orders history can be viewer in oder page.",
		],
	},
	{
		img: "https://miro.medium.com/max/700/1*ZSIENZem0DCoj2ACRMl_ww.png",
		title: "Foodxprs-Clone ",
		description:
			"Foodxprs providers Lunch Services to the healthy lunch requirements of employees .",
		techStack: ["HTML", "CSS", "JavaScript"],
		repoLink: "https://github.com/ankitbajpai1607/project-2-FoodXprs_clone",
		type: "A collaborative project built by a team of 4 under 4 days.",
		demoLink: "https://foodxprs.netlify.app/index.html",
		blogLink: "https://bhargavkudala.medium.com/",
		features: [
			" Signup and Login.",
			"User can see the different kind of food meals.",
			"User can make an order.",
			"User can contact the company.",
		],

		responsibilities: [
			"Worked on menu list on Home Page that includes ,Packages Section , Food Order Section by Accepting the user orders.",
		],
	},
];

function Projects() {
	const [panel, setPanel] = React.useState(false);
	let [currentProject, setCurrentProject] = React.useState({});
	const classes = useStyles();
	return (
		<div id="projects">
			<BridgeTwo backgroundImg={currentProject.img}>
				<MainHeadingWrapper>
					<h1>Projects</h1>
					<div></div>
				</MainHeadingWrapper>
				<div>
					{projectArray?.map((project) => (
						<ProjectCard
							key={project.title}
							setCurrentProject={setCurrentProject}
							setPanel={setPanel}
							{...project}
						></ProjectCard>
					))}
				</div>
				<Modal
					className={classes.root}
					open={panel}
					onClose={() => setPanel(false)}
				>
					<ProjectDetail
						{...currentProject}
						setPanel={setPanel}
					></ProjectDetail>
				</Modal>
			</BridgeTwo>
		</div>
	);
}

export default Projects;
