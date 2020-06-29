import React from "react";
import { withRouter } from "react-router-dom";
function DashBoard(props) {
	const text = props.location.state ? "Hello world" : "não autenticado!";
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
