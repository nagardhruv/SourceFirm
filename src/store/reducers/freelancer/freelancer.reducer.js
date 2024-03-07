const initialState = {
	portFolioList: [],
	projectList: [],
	workExperience: [],
	certificateList: [],
	profileType: [], technologyList: [],
	skill: [], sub_skill: [], language: [],
	remoteData: { currentForm: 0, previousForm: 0, update_data: [], delete_data: [], files: [] },
	currentTab: 0,
	projectCount: 0,
	certificateCount: 0,
};

const freelancerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PORTFOLIO': {
			return { ...state, portFolioList: action.payload };
		}
		case 'GET_PROJECT': {
			return { ...state, projectList: action.payload };
		}
		case 'GET_WORK_EXPERIENCE': {
			return { ...state, workExperience: action.payload };
		}
		case 'GET_CERTIFICATE': {
			return { ...state, certificateList: action.payload };
		}
		case 'GET_PROFILE_TYPE': {
			return { ...state, profileType: action.payload };
		}
		case 'GET_SUB_SKILL': {
			return { ...state, sub_skill: action.payload };
		}
		case 'GET_SKILL': {
			return { ...state, skill: action.payload };
		}
		case 'GET_TECHNOLOGY_LIST': {
			return { ...state, technologyList: action.payload };
		}
		case 'GET_LANGUAGE_LIST': {
			return { ...state, language: action.payload };
		}
		case 'GET_REMOTE_DATA': {
			return { ...state, remoteData: action.payload };
		}
		case 'GET_CURRENT_TAB': {
			return { ...state, currentTab: action.data };
		}
		case 'GET_PROJECT_COUNT': {
			return { ...state, projectCount: action.payload };
		}
		case 'GET_CERTIFICATE_COUNT': {
			return { ...state, certificateCount: action.payload };
		}
		default:
			return { ...state };
	}
};
export default freelancerReducer;
