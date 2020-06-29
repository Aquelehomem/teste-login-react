import React from "react";
import styled from "styled-components";
const Section = styled.section`
	padding: 25px 30px 13px 30px;
	background: linear-gradient(
			rgba(52, 85, 171, 0.85) 0%,
			rgba(52, 85, 171, 0.85) 100%
		),
		url("images/9284.png"),
		url("images/9284.svg") 0% 0% no-repeat padding-box;

	background-repeat: no-repeat;
	background-size: 100%;
	font-family: Lato;
	text-align: center;
	line-height: 1.5;
	color: #ffffff;
	img {
		margin: 0 auto 261px 0;
		display: block;
	}
	div {
		max-width: 654px;
		font-size: 16px;
		h1 {
			font-weight: bold;
			font-size: 28px;
			margin: 0 0 15px 0;
		}
		p {
			width: 599px;
		}
	}
	span {
		font-size: 14px;
		width: 514px;
		display: block;
		margin: auto auto 0 auto;
	}
`;
export default function Section1() {
	return (
		<Section>
			<img alt="mountains" src="images/photo-24px.svg" />

			<div>
				<h1>Lorem Ipsum</h1>
				<p>
					Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et
					justo duo dolores et ea rebum. Stet clita kasd gubegren, no
					sea takimata sanctus est Lorem ipsum dolor sit amet,
					consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et
				</p>
			</div>
			<span>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
				diam nonumy eirmod
			</span>
		</Section>
	);
}
