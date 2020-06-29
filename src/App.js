import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
			<Router basename={`/`}>
				<Switch>
					<Route exact path="/">
						<Login styles={styles} />
					</Route>
					<Route path="/dashboard">
						<DashBoard
							usuarioAutenticado={state.usuarioAutenticado}
						/>
					</Route>
					<Route path>
						<NoMatch />
					</Route>
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
