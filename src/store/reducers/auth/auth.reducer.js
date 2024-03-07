const initialState = {
	user: null,
	tempUser: null,
	tempUserDetails: null,
	userDetails: { is_profile_in_review: false },
	userPermissions: [],
	userProfile: '',
	city: {},
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_USER': {
			return { ...state, user: action.payload };
		}
		case 'LOGOUT_USER': {
			return { ...state = initialState };
		}
		case 'FORGOT_PASSWORD': {
			return { ...state };
		}
		case 'RESET_PASSWORD': {
			return { ...state };
		}
		case 'UPDATE_USER': {
			return { ...state, user: action.payload };
		}
		case 'GET_USER_PROFILE': {
			return { ...state, userProfile: action.payload };
		}
		case 'GET_CITY': {
			return { ...state, city: action.payload };
		}
		case 'GET_USER_DETAILS': {
			return { ...state, userDetails: action.payload };
		}
		case 'GET_USER_PERMISSIONS': {
			return { ...state, userPermissions: action.payload };
		}
		case 'LOGIN_TEMP_USER': {
			return { ...state, tempUser: action.payload };
		}
		case 'USER_TEMP_DETAILS': {
			return { ...state, tempUserDetails: action.payload };
		}
		default:
			return { ...state };
	}
};
export default authReducer;
