import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { styles } from "./styles/styles";
import styled from "styled-components";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import NoMatch from "./components/NoMatch";
import { connect } from "react-redux";

const Div = styled.div`
	position: relative;
`;
function App(state) {
	return (
		<Div className="App">
			<Router>
				<Switch>
					<Router exact path="/">
						<Login styles={styles} />
					</Router>
					<Router path="/dashboard">
						<DashBoard
							usuarioAutenticado={state.usuarioAutenticado}
						/>
					</Router>
					<Router path>
						<NoMatch />
					</Router>
				</Switch>
			</Router>
		</Div>
	);
}
const mapStateToProps = (state) => {
	return {
		usuarioAutenticado: state.usuarioAutenticado,
	};
};
export default connect(mapStateToProps)(App);
