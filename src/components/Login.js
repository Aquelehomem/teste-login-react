import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MdEye from "react-ionicons/lib/MdEye";
import MdEyeOff from "react-ionicons/lib/MdEyeOff";
import Modal from "./Modal";
import { editForm } from "../redux/reducer/reducerActions";
import { fetchUser } from "../redux/reducer/reducerActions";

const DivForm = styled.div`
	height: 471px;
	width: 328px;
	margin: 126px auto 0 auto;

	font-family: "Lato";
	position: relative;
	z-index: 0;
	.title {
		display: block;
		color: #263046;
		margin: 0 0 73px 0;
		font-weight: 800;
		font-size: 24px;
	}
	.labelContainers {
		display: flex;
		flex-direction: column;
		font-weight: 600;
		font-size: 13px;
		margin: 20px 0;
		width: 100%;
		display: flex;
		position: relative;
		z-index: 0;
		color: #333333de;
		input {
			margin: 10px 0 0 0;
			padding: 15px;
			border: solid 1px #dededf;
			border-radius: 5px;
			::placeholder {
				color: #b5b5b5;
				font-size: 14px;
				font-weight: 400;
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
			width: 115px;
			justify-content: space-between;
			color: #284271;
			align-items: center;
			label {
				display: block;
				position: relative;
				padding-left: 35px;
				margin-bottom: 12px;
				cursor: pointer;
				font-size: 22px;
				input.checkbox {
					position: absolute;
					opacity: 0;
					cursor: pointer;
					height: 0;
					width: 0;
					:checked ~ .checkmark {
						background-color: #ffffff;
						border: 1px solid #284271;
					}
					:checked ~ .checkmark:after {
						display: block;
					}
				}
				span.checkmark {
					transition: all 1s;
					position: absolute;
					top: 0;
					left: 0;
					height: 18px;
					width: 18px;
					border: 1px solid #d4d4d5;
					border-radius: 5px;
					background-color: #ffffff;
				}
				span.checkmark:after {
					content: "";
					position: absolute;
					display: none;
				}
				span.checkmark:after {
					left: 6px;
					top: 1px;
					width: 5px;
					height: 10px;
					border: 1px solid #284271;
					border-width: 0 3px 3px 0;
					transform: rotate(45deg);
				}
			}
		}
		.rememberPassword {
			color: #284271;
			font-size: 14px;
			margin-top: 8px;
		}
		.forgotPassword {
			margin-top: 8px;
			border-bottom: 1px solid #284271;
			padding: 0 0 3px 0;
			text-decoration: none;
			color: #284271;
			font-size: 14px;
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
		box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.3);
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
	top: "38px",
	left: "290px",
	cursor: "pointer",
	fill: "#B5BABE ",
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
		if (account.length > 0 && username.length > 0 && password.length > 0) {
			setActiveState(true);
		} else {
			setActiveState(false);
		}
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
									className="checkbox"
								/>
								<span className="checkmark"></span>
							</label>
							<span className="rememberPassword">Lembrar-me</span>
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
