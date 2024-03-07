const initialState = {
	getDevelopersList: [],
	agencyDeveloperFormDetails: null,
	agencyDeveloperProjectList: [],
	agencyDeveloperCertificationList: [],
	agencyDeveloperDetails: null,
	agencyDeveloperProjectCount: 0,
	agencyDeveloperCertificateCount: 0,
	remoteData: { currentForm: 0, previousForm: 0, update_data: [], delete_data: [], files: [] },
	currentTab: 0,
	imageLoaders: [],
};

const manageDevelopersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_DEVELOPERS_LIST': {
			return { ...state, getDevelopersList: action.payload };
		}
		case 'AGENCY_DEVELOPER_DETAILS': {
			return { ...state, agencyDeveloperFormDetails: action.payload };
		}
		case 'AGENCY_DEVELOPER_PROJECT_LIST': {
			return { ...state, agencyDeveloperProjectList: action.payload };
		}
		case 'AGENCY_DEVELOPER_CERTIFICATE_LIST': {
			return { ...state, agencyDeveloperCertificationList: action.payload };
		}
		case 'AGENCY_DEVELOPER_PROJECT_COUNT': {
			return { ...state, agencyDeveloperProjectCount: action.payload };
		}
		case 'AGENCY_DEVELOPER_CERTIFICATE_COUNT': {
			return { ...state, agencyDeveloperCertificateCount: action.payload };
		}
		case 'GET_AGENCY_DEVELOPER_DETAILS': {
			return { ...state, agencyDeveloperDetails: action.payload };
		}
		case 'GET_DEVELOPER_REMOTE_DATA': {
			return { ...state, remoteData: action.payload };
		}
		case 'GET_DEVELOPER_CURRENT_TAB': {
			return { ...state, currentTab: action.payload };
		}
		case 'IMAGE_LOADERS': {
			return { ...state, imageLoaders: action.payload };
		}
		default:
			return { ...state };
	}
};
export default manageDevelopersReducer;
