import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import styled from "styled-components";

const CardHead = styled.h3`
	margin-bottom: 5px;
`;

const CardSubHead = styled.h4`
	margin-bottom: 10px;
	color: #131010;
	font-weight: 600;
`;

const CardDetailText = styled.li`
	color: #141313;
	margin: 5px;
`;
// eslint-disable-next-line
const Responsibilities = styled.div`
	color: #000000;
	font-size: 16px;
	font-weight: 600;
	margin: 10px 0;
	letter-spacing: 0.2ch;
`;

function ChronoTimeline({ currentTheme }) {
	const items = [
		{
			title: "Jan 2020 - Present",
			cardSubtitle: "Masai School",
			cardTitle: "Full Stack Web Development",
		},
		{
			title: "June 2015 - May 2019",
			cardSubtitle: "Audi sankara College of Engineering and Technology",
			cardTitle: "B.Tech Electronics and Communication Enginerring",
		},
		{
			title: "June 2013- May 2015",
			cardTitle: "Intermediate",
			cardSubtitle: "N.R.I.Junior College",
		},
		{
			title: "June 2012- May 2013",
			cardTitle: "Secondary School Certification",
			cardSubtitle: "Z.P.High School",
		},
	];

	return (
		<VerticalTimeline animate={false} position="left">
			{items?.map((history) => (
				<EducationTimelineCard
					key={history.school}
					currentTheme={currentTheme}
					{...history}
				/>
			))}
		</VerticalTimeline>
	);
}

function EducationTimelineCard({
	title,
	cardTitle,
	cardSubtitle,
	cardDetailedText,
	currentTheme,
}) {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{
				textAlign: "left",
				background: "#ffffff",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
			date={title}
			iconStyle={{
				background: `${currentTheme === "light" ? "#FEC107" : "#C50E6A"}`,
				color: "#1a1111",
				transform: "scale(0.4)",
			}}
		>
			<CardHead
				style={{ color: "#000000" }}
				className="vertical-timeline-element-title"
			>
				{cardTitle}
			</CardHead>
			<CardSubHead
				style={{ color: "#393e46" }}
				className="vertical-timeline-element-subtitle"
			>
				{cardSubtitle}
			</CardSubHead>
			{/* {internship && (
        <Responsibilities>
          <b>Responsibilities</b>
        </Responsibilities>
      )} */}

			<ul>
				{cardDetailedText?.map((item) => (
					<CardDetailText key={item.title}>{item}</CardDetailText>
				))}
			</ul>
		</VerticalTimelineElement>
	);
}

export { ChronoTimeline };
