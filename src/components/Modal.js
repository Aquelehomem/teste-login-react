import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { hideModalFn } from "../redux/reducer/reducerActions";
import { useHistory } from "react-router-dom";
const Div = styled.div`
	width: 501px;
	height: 230px;
	transition: all 0.5s;
	background-color: white;
	z-index: ${(props) => (props.hideModal ? "-1" : "5")};
	opacity: ${(props) => (props.hideModal ? "0" : "1")};
	margin: 0 auto;
	border: 1px;
	//border: 1px solid gray;
	border-radius: 3px;
	box-shadow: 0px 0px 13px -2px rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-family: "Lato";
	div.title {
		color: ${(props) => props.styles.blackHexCode};
		font-weight: 800;
		font-size: ${(props) => props.styles.h1}px;
		padding: 28px 26px;
		border-bottom: 1px solid #ccd5ea;
	}
	div.text {
		padding: 16px 26px;
		border-bottom: 0.5px solid #ccd5ea;
		font-size: ${(props) => props.styles.h5}px;
		font-weight: 500;
		color: #69707f;
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
				border-radius: 5px;
				color: #ccd5ea;
				font-weight: 400;
				cursor: pointer;
			}
			input:nth-of-type(2) {
				background-color: ${(props) => props.styles.Hex};
				color: white;
				font-weight: 700;
				:hover {
					background: ${(props) => props.styles.blackHexCode};
				}
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
