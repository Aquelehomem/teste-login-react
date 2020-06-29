import React from "react";
import styled from "styled-components";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";
const Section = styled.section`
	padding: 25px 20px;
	font-family: "Lato";
	max-height: 762px;
	button {
		display: flex;
		flex-direction: space-between;
		width: 90px;
		height: 18px;
		background-color: transparent;
		cursor: pointer;
		border: none;
		margin: 0 0 0 auto;
		padding: 0;
		svg {
			width: 17px;
			display: block;
			align-self: center;
			margin-left: auto;
		}
		span.btnSpan {
			font-size: 15px;
			font-weight: 500;
			color: #263046;
		}
	}
`;
function Section2(props) {
	return (
		<Section>
			<button>
				<span className="btnSpan">Português</span>
				<MdArrowDropdown />
			</button>
			{props.children}
		</Section>
	);
}

export default Section2;
