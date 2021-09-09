import React from "react";
import styled from "styled-components";
// eslint-disable-next-line
import ak from "../Images/ak.png";

import {
	MainHeadingWrapper,
	ParagraphWrapper,
	// eslint-disable-next-line
	SubHeadingWrapper,
} from "../Elements/Elements";

const Wrapper = styled.div`
	padding: 50px 0;
	width: 100%;
	margin: 0px auto;
	background-color: ${(props) => props.theme.body};
	color: ${(props) => props.theme.fontColor};
`;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	margin: 0px auto;
	flex-wrap: wrap;

	> div:nth-child(1) {
		max-width: 900px;
		margin: 0px auto;
	}
`;
const Quote = styled.div`
	p {
		font-size: 22px;
		color: grey;
	}
	p::before {
		content: "“";
		margin-right: 5px;
	}
	p::after {
		content: "”";
		margin-left: 5px;
	}
	cite {
		font-size: 18px;
	}

	margin: 20px 0;
	@media (max-width: 768px) {
		p {
			font-size: 18px;
			color: grey;
		}
		cite {
			font-size: 16px;
		}
	}
`;

function About() {
	return (
		<Wrapper id="about">
			<MainHeadingWrapper>
				<h1>About Me</h1>
				<div></div>
			</MainHeadingWrapper>
			<Quote>
				<blockquote>
					<cite>&mdash;I believe in</cite>
					<p>Life always begins with one step outside of your comfort zone.</p>
				</blockquote>
			</Quote>
			<Content>
				<ParagraphWrapper justified={true}>
					<p>
						I am currently learning full stack web development at Masai School.
						I am passionate about solving real world problems and actively
						looking for opportunities in the field of web development and
						software engineering.
					</p>
				</ParagraphWrapper>
			</Content>
		</Wrapper>
	);
}

export default About;
