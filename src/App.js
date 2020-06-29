import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { styles } from "./styles/styles";
import styled from "styled-components";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import { connect } from "react-redux";

const Div = styled.div`
	position: relative;
`;
function App(state) {
	return (
		<Div className="App">
			<HashRouter basename="/">
				<Switch>
					<Route exact path="/">
						<Login styles={styles} />
					</Route>
					<Route path="/dashboard">
						<DashBoard
							usuarioAutenticado={state.usuarioAutenticado}
						/>
					</Route>
				</Switch>
			</HashRouter>
		</Div>
	);
}
const mapStateToProps = (state) => {
	return {
		usuarioAutenticado: state.usuarioAutenticado,
	};
};
export default connect(mapStateToProps)(App);
