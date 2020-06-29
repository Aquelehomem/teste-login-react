import {
	EDIT_FORM,
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	HIDE_MODAL,
} from "./reducerTypes";

const initialState = {
	user: {
		account: "",
		username: "",
		password: "",
	},
	usuarioAutenticado: false,
	message: "",
	hideModal: true,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case EDIT_FORM:
			return {
				...state,
				user: action.value,
			};
		case FETCH_USER_REQUEST:
			console.log(FETCH_USER_REQUEST);
			return state;
		case FETCH_USER_SUCCESS:
			console.log(action.type);
			return {
				...state,
				message: action.payload,
				usuarioAutenticado: true,
				hideModal: false,
			};
		case FETCH_USER_FAILURE:
			alert(action.value);
			return {
				...state,
				message: action.payload,
				usuarioAutenticado: false,
				hideModal: true,
			};
		case HIDE_MODAL:
			return {
				...state,
				hideModal: true,
			};

		default:
			return state;
	}
};

export default rootReducer;
