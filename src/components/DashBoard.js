import React from "react";
import { withRouter } from "react-router-dom";
function DashBoard(props) {
	const text = "Hello world";
	return (
		<div
			style={{
				margin: "auto",
				fontSize: "30px",
				width: "300px",
				textAlign: "center",
			}}
		>
			{text}
		</div>
	);
}

export default withRouter(DashBoard);
