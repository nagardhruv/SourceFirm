const initialState = {
    jobPostList: [],
    jobPostData: {
        title: "",
        description: "",
        positions: null,
        availability: '2',
        skills: [],
        technologies: [],
        experience: null,
        salary_type: '1',
        budget_from: null,
        budget_to: null,
        payment_platform: '1',
    },
    jobPostDetail: null,
    proposalData: null,
    currentStatus: 0,
    saveDraftClick: false,
    candidateList: [],
    candidateProfile: null,
    candidateProjects: [],
    candidateCertificates: [],
    requestedCandidates: [],
    requestedCandidatesForAgency: [],
    requestedCandidatesJobs: [],
    processedCandidatesList: [],
};

const jobPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_JOB_POST_LIST': {
            return { ...state, jobPostList: action.payload };
        }
        case 'JOBPOST_DATA': {
            return { ...state, jobPostData: action.payload };
        }
        case 'SAVE_DRAFT_CLICK': {
            return { ...state, saveDraftClick: action.payload };
        }
        case 'JOBPOST_DETAIL': {
            return { ...state, jobPostDetail: action.payload };
        }
        case 'PROPOSAL_DATA': {
            return { ...state, proposalData: action.payload };
        }
        case 'SET_CURRENT_PAGE': {
            return { ...state, currentStatus: action.payload }
        }
        case "CANDIDATE_LIST": {
            return { ...state, candidateList: action.payload }
        }
        case "CANDIDATE_PROFILE": {
            return { ...state, candidateProfile: action.payload }
        }
        case "CANDIDATE_PROJECTS": {
            return { ...state, candidateProjects: action.payload }
        }
        case "CANDIDATE_CERTIFICATES": {
            return { ...state, candidateCertificates: action.payload }
        }
        case "REQUESTED_CANDIDATES": {
            return { ...state, requestedCandidates: action.payload }
        }
        case "REQUESTED_CANDIDATES_FOR_AGENCY": {
            return { ...state, requestedCandidatesForAgency: action.payload }
        }
        case "REQUESTED_CANDIDATES_JOBS": {
            return { ...state, requestedCandidatesJobs: action.payload }
        }
        case "PROCESSED_CANDIDATES_LIST": {
            return { ...state, processedCandidatesList: action.payload }
        }
        default:
            return { ...state };
    }
}

export default jobPostReducer;