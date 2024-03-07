import apiService from 'api/ApiService';
import { toast } from 'react-toastify';
import { dispatchPageLoading, dispatchContentLoading } from 'utils/Common';
import history from 'utils/history';

export function getCountryList(search) {
    return () => apiService.authGet(`country/?name=${search}`);
}
export function getCityList(params) {
    return () => apiService.authGet('city/', params);
}
export function getSkills() {
    return (dispatch) => apiService.get(`skills/?depth=1`).then(response => {
        if (response.status === 200 && response.data.length > 0) {
            dispatch({ type: 'GET_SKILLS_LIST', payload: response.data });
        }
        else {
            dispatch({ type: 'GET_SKILLS_LIST', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'GET_SKILLS_LIST', payload: [] });
    })
}
export function getSkillsWithoutDepth() {
    return (dispatch) => apiService.get(`skills/`).then(response => {
        if (response.status === 200 && response.data.length > 0) {
            dispatch({ type: 'SKILLS_WITHOUT_DEPTH', payload: response.data });
        }
        else {
            dispatch({ type: 'SKILLS_WITHOUT_DEPTH', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'SKILLS_WITHOUT_DEPTH', payload: [] });
    })
}
export function getSubSkills(parent) {
    return () => apiService.get(`skills/?parent=${parent}`);
}
export function getLanguages(params) {
    return () => apiService.get(`languages/?search=${params}`);
}
export function getProfileTypes(params = {}) {
    return () => apiService.get(`profiletypes`, params);
}
export function getTechnologies(params) {
    return (dispatch) => apiService.get(`technologies/?search=${params}`).then(response => {
        if (response.status === 200 && response.data.length > 0) {
            dispatch({ type: 'GET_TECHNOLOGIES_LIST', payload: response.data });
        }
        else {
            dispatch({ type: 'GET_TECHNOLOGIES_LIST', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'GET_TECHNOLOGIES_LIST', payload: [] });
    })
}

export function getTechnologiesList() {
    return (dispatch) => apiService.get(`technologies`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_TECHNOLOGIES_LIST', payload: response.data });
        }
        else {
            dispatch({ type: 'GET_TECHNOLOGIES_LIST', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'GET_TECHNOLOGIES_LIST', payload: [] });
    })
}
export function fileUpload(params) {
    return () => apiService.post(`upload_file/`, params)
}
export function uploadImage(params) {
    return () => apiService.post(`upload_file/`, params);
}
export function changeOnBaordingStep(params) {
    return () => apiService.patch(`users/`, params);
}

export function getExperience() {
    return (dispatch) => apiService.get('experience/').then(response => {
        if (response.status === 200 && response.data.length > 0) {
            dispatch({ type: 'GET_EXPERIENCE_LIST', payload: response.data });
        }
        else {
            dispatch({ type: 'GET_EXPERIENCE_LIST', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'GET_EXPERIENCE_LIST', payload: [] });
    })
}

export function getProficiency() {
    return (dispatch) => apiService.get('proficiencies/').then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_PROFICIENCY_LIST', payload: response.data });
        }
        else {
            dispatch({ type: 'GET_PROFICIENCY_LIST', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'GET_PROFICIENCY_LIST', payload: [] });
    })
}

export function newAgencyRequest(params) {
    return () => apiService.post(`new-agency-request/`, params)
}

export function getDashboard() {
    return (dispatch) => apiService.get('user-dashboard/').then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_USER_DASHBOARD', payload: response.data });
            dispatchPageLoading(dispatch);
        }
        else {
            dispatch({ type: 'GET_USER_DASHBOARD', payload: [] });
            dispatchPageLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: 'GET_USER_DASHBOARD', payload: [] });
        dispatchPageLoading(dispatch);
    })
}

/** CANDIDATE API (START) */
export function getCandidates(page, pageSize, profileType, availability) {
    let url = `candidates/?page=${page}&page_size=${pageSize}`;
    if (profileType) url += `&profile_type=${profileType}`;
    if (availability) url += `&availability=${availability}`;
    return (dispatch) => apiService.get(url).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_CANDIDATES_LIST', payload: response.data?.result ?? response.data });
            dispatchContentLoading(dispatch);
        }
        else {
            dispatch({ type: 'GET_CANDIDATES_LIST', payload: [] });
            dispatchContentLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: 'GET_CANDIDATES_LIST', payload: [] });
        dispatchContentLoading(dispatch);
    })
}

export function getCandidateById(candidateId) {
    return (dispatch) => apiService.get(`candidates/${candidateId}/`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_CANDIDATE', payload: response.data });
            dispatchPageLoading(dispatch);
        }
        else {
            dispatch({ type: 'GET_CANDIDATE', payload: null });
            dispatchPageLoading(dispatch);
        }
    }).catch((error) => {
        dispatch({ type: 'GET_CANDIDATE', payload: null });
        dispatchPageLoading(dispatch);
        toast.error(error.message);
        // history.push('/user-dashboard')
        history.push('/')
    })
}

export function getCandidateProjects(candidateId, page, pageSize) {
    return (dispatch) => apiService.get(`candidates/${candidateId}/projects/?page=${page}&page_size=${pageSize}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_CANDIDATE_PROJECTS_LIST', payload: response.data?.result ?? response.data });
            dispatchContentLoading(dispatch);
        }
        else {
            dispatch({ type: 'GET_CANDIDATE_PROJECTS_LIST', payload: [] });
            dispatchContentLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: 'GET_CANDIDATE_PROJECTS_LIST', payload: [] });
        dispatchContentLoading(dispatch);
    })
}

export function getCandidateProjectById(candidateId, projectId) {
    return (dispatch) => apiService.get(`candidates/${candidateId}/projects/${projectId}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_CANDIDATE_PROJECT', payload: response.data?.result ?? response.data });
        }
        else {
            dispatch({ type: 'GET_CANDIDATE_PROJECT', payload: null });
        }
    }).catch(() => {
        dispatch({ type: 'GET_CANDIDATE_PROJECT', payload: null });
    })
}

export function getCandidateCertifications(candidateId, page, pageSize) {
    return (dispatch) => apiService.get(`candidates/${candidateId}/certifications/?page=${page}&page_size=${pageSize}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_CANDIDATE_CERTIFICATIONS_LIST', payload: response.data?.result ?? response.data });
        }
        else {
            dispatch({ type: 'GET_CANDIDATE_CERTIFICATIONS_LIST', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'GET_CANDIDATE_CERTIFICATIONS_LIST', payload: [] });
    })
}

export function getCandidateCertificationById(candidateId, projectId) {
    return (dispatch) => apiService.get(`candidates/${candidateId}/certification/${projectId}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_CANDIDATE_CERTIFICATION', payload: response.data?.result ?? response.data });
        }
        else {
            dispatch({ type: 'GET_CANDIDATE_CERTIFICATION', payload: null });
        }
    }).catch(() => {
        dispatch({ type: 'GET_CANDIDATE_CERTIFICATION', payload: null });
    })
}

export function getCandidateAllCertificate(candidateId, page, pageSize) {
    return () => apiService.get(`candidates/${candidateId}/certifications/?page=${page}&page_size=${pageSize}`);
}

export function getAny(url) {
    return () => apiService.getAny(url);
}

export function rejectionStatusChange(userId) {
    return () => apiService.patch(`rejection_message/${userId}/`);
}

/** CANDIDATE API (END) */
