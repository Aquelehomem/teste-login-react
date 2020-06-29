import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { styles } from "./styles/styles";
import styled from "styled-components";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import { connect } from "react-redux";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import NoMatch from "./components/NoMatch";
const Div = styled.div`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height: 100%;
	.overlay {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: ${(props) => (props.hideModal ? -1 : 4)};
		position: absolute;
		background-color: ${(props) =>
			props.hideModal ? "" : "rgba(0, 0, 0, 0.4)"};
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
	}
`;
function App(state) {
	return (
		<Div hideModal={state.hideModal} className="App">
			<div className="overlay"></div>
			<HashRouter basename="/">
				<Switch>
					<Route exact path="/">
						<Section1 />
						<Section2>
							<Login styles={styles} />
						</Section2>
					</Route>
					<Route path="/dashboard">
						<DashBoard
							usuarioAutenticado={state.usuarioAutenticado}
						/>
					</Route>
					<Route path={""}>
						<NoMatch />
					</Route>
				</Switch>
			</HashRouter>
		</Div>
	);
}
const mapStateToProps = (state) => {
	return {
		usuarioAutenticado: state.usuarioAutenticado,
		hideModal: state.hideModal,
	};
};
export default connect(mapStateToProps)(App);
