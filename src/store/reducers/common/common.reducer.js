const initialState = {
	countryList: [],
	experienceList: [],
	technologies: [],
	skillsList: [],
	subSkillsList: [],
	proficieny: [],
	profileTypes: [],
	userDashboard: null,
	candidatesList: [],
	candidate: null,
	candidatesProjectsList: [],
	candicateProject: null,
	candidatesCertificationsList: [],
	candicateCertification: null,
	pageLoading: true,
	contentLoading: false,
	skillsWithoutDepth: [],
	userStatuses: null,
};

const commonReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_COUNTRY_LIST': {
			return { ...state, countryList: action.payload };
		}
		case 'GET_EXPERIENCE_LIST': {
			return { ...state, experienceList: action.payload };
		}
		case 'GET_TECHNOLOGIES_LIST': {
			return { ...state, technologies: action.payload };
		}
		case 'GET_SKILLS_LIST': {
			return { ...state, skillsList: action.payload };
		}
		case 'GET_SUB_SKILLS_LIST': {
			return { ...state, subSkillsList: action.payload };
		}
		case 'GET_PROFICIENCY_LIST': {
			return { ...state, proficieny: action.payload };
		}
		case 'GET_PROFILE_TYPES': {
			return { ...state, profileTypes: action.payload };
		}
		case 'GET_USER_DASHBOARD': {
			return { ...state, userDashboard: action.payload };
		}
		case 'GET_CANDIDATES_LIST': {
			return { ...state, candidatesList: action.payload };
		}
		case 'GET_CANDIDATE': {
			return { ...state, candidate: action.payload };
		}
		case 'GET_CANDIDATE_PROJECTS_LIST': {
			return { ...state, candidatesProjectsList: action.payload };
		}
		case 'GET_CANDIDATE_PROJECT': {
			return { ...state, candicateProject: action.payload };
		}
		case 'GET_CANDIDATE_CERTIFICATIONS_LIST': {
			return { ...state, candidatesCertificationsList: action.payload };
		}
		case 'GET_CANDIDATE_CERTIFICATION': {
			return { ...state, candicateCertification: action.payload };
		}
		case 'PAGE_LOADING': {
			return { ...state, pageLoading: action.payload };
		}
		case 'CONTENT_LOADING': {
			return { ...state, contentLoading: action.payload };
		}
		case 'SKILLS_WITHOUT_DEPTH': {
			return { ...state, skillsWithoutDepth: action.payload };
		}
		case 'USER_STATUSES': {
			return { ...state, userStatuses: action.payload };
		}
		default:
			return { ...state };
	}
};
export default commonReducer;
