import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MdEye from "react-ionicons/lib/MdEye";
import MdEyeOff from "react-ionicons/lib/MdEyeOff";
import Modal from "./Modal";
import { editForm } from "../redux/reducer/reducerActions";
import { fetchUser } from "../redux/reducer/reducerActions";

const DivForm = styled.div`
	height: 512px;
	width: 350px;
	margin: auto;
	padding: 12px;
	color: ${(props) => props.styles.blackHexCode};
	font-family: "Lato";
	position: relative;
	z-index: 0;
	.title {
		display: block;
		font-size: ${(props) => props.styles.h1}px;
		margin: 0 0 73px 0;
		font-weight: 800;
	}
	.labelContainers {
		display: flex;
		flex-direction: column;
		font-weight: 600;
		font-size: 14px;
		margin: 20px 0;
		width: 100%;
		display: flex;
		position: relative;
		z-index: 0;
		input {
			margin: 10px 0 0 0;
			padding: 15px;
			border: solid 0.1px ${(props) => props.styles.RGB};
			border-radius: 5px;
			::placeholder {
				color: ${(props) => props.styles.RGBplaceholder};
				font-size: 15px;
				font-weight: 500;
			}
		}
	}
	.checkBox_RememberMe {
		margin: 30px 0 0 0;
		display: flex;
		justify-content: space-between;
		color: ${(props) => props.styles.Hex};
		div {
			display: flex;
			width: 120px;
			justify-content: space-between;
		}
		.forgotPassword {
			border-bottom: 1px solid;
			padding: 0 0 3px 0;
			text-decoration: none;
			color: unset;
		}
	}
	input.submit {
		width: 100%;
		padding: 10px;
		margin: 40px 0 0 0;
		border: none;
		border-radius: 5px;
		color: #ccd5ea;
		font-weight: 600;
		background-color: ${(props) => props.styles.RGB};
		:hover {
			color: white;
			background-color: ${(props) => props.styles.blackHexCode};
		}
	}
	input.active {
		color: white;
		background-color: ${(props) => props.styles.Hex};
	}
`;

const MdEyeStyle = {
	position: "absolute",
	top: "40px",
	left: "300px",
	cursor: "pointer",
	fill: "rgba(52,85,171,40%)",
};

const Login = ({ styles, user, editForm, fetchUser, usuarioAutenticado }) => {
	const [activeState, setActiveState] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [account, setAccount] = useState("101694"); //101694
	const [username, setUserName] = useState("fmgusmao"); //fmgusmao
	const [password, setPassword] = useState("12345"); //12345

	useEffect(() => {
		handleOnChange();
	}, [account, username, password]);

	const handleOnChange = () => {
		editForm({
			account: account,
			username: username,
			password: password,
		});
	};
	const sendForm = (e) => {
		e.preventDefault();
		if (
			user.account === "" ||
			user.username === "" ||
			user.password === ""
		) {
			alert("campo(s) vazio(s)");
			return;
		}

		fetchUser({ account: account, username: username, password: password });
	};

	return (
		<>
			<DivForm styles={styles} active={activeState}>
				<span className="title">Dados de Acesso</span>
				<form onSubmit={(e) => sendForm(e)}>
					<div className="labelContainers">
						<label htmlFor="contratante">Contratante</label>
						<input
							onFocus={() => setActiveState(true)}
							type="text"
							id="contratante"
							placeholder="Digite o ID contratante"
							name="contratante"
							value={account}
							onChange={(e) => {
								setAccount(e.target.value);
								handleOnChange();
							}}
						/>
					</div>
					<div className="labelContainers">
						<label htmlFor="usuario">Usuário</label>
						<input
							onFocus={() => setActiveState(true)}
							type="text"
							id="usuario"
							placeholder="Digite seu usuário"
							name="usuario"
							value={username}
							onChange={(e) => {
								setUserName(e.target.value);
								handleOnChange();
							}}
						/>
					</div>
					<div className="labelContainers">
						<label htmlFor="senha">Senha</label>
						<input
							onFocus={() => setActiveState(true)}
							type={showPassword ? "text" : "password"}
							id="senha"
							placeholder="Digite sua senha"
							name="senha"
							className="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								handleOnChange();
							}}
						/>

						{showPassword ? (
							<MdEyeOff
								style={MdEyeStyle}
								onClick={() => setShowPassword(false)}
							/>
						) : (
							<MdEye
								style={MdEyeStyle}
								onClick={() => setShowPassword(true)}
							/>
						)}
					</div>
					<div className="checkBox_RememberMe">
						<div>
							<label htmlFor="lembrar_me">
								<input
									type="checkbox"
									id="lembrar_me"
									name="lembrar_me"
								/>
							</label>
							<span>Lembrar-me</span>
						</div>
						<a href="#" className="forgotPassword">
							Esqueceu sua senha?
						</a>
					</div>
					<input
						type="submit"
						className={activeState ? "active submit" : "submit"}
						value="Entrar"
					/>
				</form>
			</DivForm>
			<Modal styles={styles} />
		</>
	);
};
const mapStateToProps = (state) => {
	return {
		user: state.user,
		usuarioAutenticado: state.usuarioAutenticado,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		editForm: (value) => dispatch(editForm(value)),
		fetchUser: (value) => dispatch(fetchUser(value)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
