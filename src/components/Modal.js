import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { hideModalFn } from "../redux/reducer/reducerActions";
import { useHistory } from "react-router-dom";
const Div = styled.div`
	width: 500px;
	height: 212px;
	transition: opacity 0.5s;
	background-color: #ffffff;
	z-index: ${(props) => (props.hideModal ? "-1" : "5")};
	opacity: ${(props) => (props.hideModal ? "0" : "1")};
	margin: 0 auto;
	border: 1px solid #dadadb;
	border-radius: 2px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-family: "Lato";
	div.title {
		color: #263046;
		font-weight: 700;
		font-size: 18px;
		padding: 28px 26px;
		border-bottom: 1px solid #dadadb;
	}
	div.text {
		padding: 16px 26px;
		border-bottom: 0.5px solid #dadadb;
		font-size: 14px;
		font-weight: 400;
		p {
			width: 441px;
			color: #263046;
		}
	}
	div.buttonContainer {
		border-radius: 3px;
		padding: 14px;
		display: flex;
		justify-content: flex-end;
		div {
			height: 40px;
			width: 220px;
			display: flex;
			justify-content: space-between;
			input {
				width: 47%;
				height: 100%;
				align-self: center;
				background: none;
				border: none;
				font-size: 12px;
				border-radius: 5px;
				color: #a6acb1;
				font-weight: 300;
				cursor: pointer;
			}
			input:nth-of-type(2) {
				background-color: #3455ab;
				color: #ffffff;
				font-weight: 700;
				width: 110px;
				height: 100%;
			}
		}
	}
`;
function Modal({ styles, hideModal, hideModalFn, usuarioAutenticado }) {
	const history = useHistory();
	const routeChange = () => {
		let path = `/dashboard`;
		history.push(path);
		history.push({ state: usuarioAutenticado });
		history.go();
	};
	return (
		<Div styles={styles} hideModal={hideModal}>
			<div className="title">
				<span>Sessão em Andamento</span>
			</div>
			<div className="text">
				Existe outra sessão em andamento com esse usuário. Se você
				continuar, a sessão será encerrada. Deseja encerrar a outra
				sessão?
			</div>
			<div className="buttonContainer">
				<div>
					<input
						type="button"
						onClick={() => hideModalFn()}
						value="cancelar"
					/>
					<input
						type="button"
						onClick={() => routeChange()}
						value="confirmar"
					/>
				</div>
			</div>
		</Div>
	);
}

const mapStateToProps = (state) => {
	return {
		hideModal: state.hideModal,
		usuarioAutenticado: state.usuarioAutenticado,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		hideModalFn: () => dispatch(hideModalFn()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
