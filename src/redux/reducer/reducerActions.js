import {
	EDIT_FORM,
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	HIDE_MODAL,
} from "./reducerTypes";

export const editForm = (value) => {
	return { type: EDIT_FORM, value: value };
};

export const fetchUserRequest = () => {
	return {
		type: FETCH_USER_REQUEST,
	};
};

export const fetchUserSuccess = (value) => {
	return {
		type: FETCH_USER_SUCCESS,
		payload: value,
	};
};

export const fetchUserFailure = (value) => {
	return {
		type: FETCH_USER_FAILURE,
		value: value,
	};
};

export const fetchUser = (values) => {
	return async (dispatch) => {
		dispatch(fetchUserRequest("fetching data"));
		let urlLogin = `http://ec2-18-231-156-69.sa-east-1.compute.amazonaws.com/v1/users/token`;
		let res = await fetch(urlLogin, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Accept: "application/json",
				"Content-Security-Policy-Report-Only":
					"default-src https:; report-uri /csp-violation-report-endpoint/",
			},
			body: JSON.stringify(values),
		})
			.then((result) => {
				return result.json();
			})
			.catch((err) => console.log(err + "servidor não disponivel"));
		let data = await res;
		if (data.success) {
			dispatch(fetchUserSuccess("usuario autenticado"));
			console.log("autenticado");
		} else {
			dispatch(fetchUserFailure(data.data.message));
			console.log("falhou");
		}
	};
};

export const hideModalFn = () => {
	return {
		type: HIDE_MODAL,
	};
};
