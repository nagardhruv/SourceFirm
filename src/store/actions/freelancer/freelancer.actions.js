import apiService from 'api/ApiService';

export function getDetails(url) {
    return () => apiService.get(`${url}`);
}
export function submitStepper(url, params) {
    return () => apiService.post(`${url}`, params);
}

export function addDetails(url, params) {
    return () => apiService.post(`${url}`, params);
}

export function deleteProject(id) {
    return () => apiService.delete(`projects/${id}/`);
}
export function createProject(params) {
    return () => apiService.post(`project/`, params);
}

export function updateProject(id, params) {
    return () => apiService.patch(`project/${id}/`, params);
}

export function getProject(id) {
    return () => apiService.get(`project/${id}/`);
}

export function getProfessionalDetails() {
    return (dispatch) => apiService.get(`portfolio/`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_PORTFOLIO', payload: response.data.results });
        } else {
            dispatch({ type: 'GET_PORTFOLIO', payload: null });
        }
    }).catch(() => {
        dispatch({ type: 'GET_PORTFOLIO', payload: null });
    });
}
export function addProfessionalDetails(params) {
    return () => apiService.post(`portfolio/`, params);
}

export function updateProfessionalDetails(id, params) {
    return () => apiService.patch(`portfolio/${id}/`, params);
}

export function getProjects(page = 1, pageSize = 5) {
    return (dispatch) => apiService.get(`projects/?page=${page}&page_size=${pageSize}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_PROJECT', payload: response.data?.results ?? response.data });
            dispatch({ type: 'GET_PROJECT_COUNT', payload: response.data?.count || 0 });
        } else {
            dispatch({ type: 'GET_PROJECT', payload: [] });
            dispatch({ type: 'GET_PROJECT_COUNT', payload: 0 });
        }
    }).catch(() => {
        dispatch({ type: 'GET_PROJECT', payload: [] });
        dispatch({ type: 'GET_PROJECT_COUNT', payload: 0 });
    });
}
// export function getTechnologies() {
//     return (dispatch) => apiService.get(`technologies/`).then(response => {
//         if (response.status === 200) {
//             dispatch({ type: 'GET_TECHNOLOGY_LIST', payload: response.data });
//         } else {
//             dispatch({ type: 'GET_TECHNOLOGY_LIST', payload: [] });
//         }
//     }).catch(() => {
//         dispatch({ type: 'GET_TECHNOLOGY_LIST', payload: [] });
//     });
// }
export function getProfileType() {
    return (dispatch) => apiService.get(`profiletypes/`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_PROFILE_TYPE', payload: response.data });
        } else {
            dispatch({ type: 'GET_PROFILE_TYPE', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'GET_PROFILE_TYPE', payload: [] });
    });
}
// export function getLanguages(search) {
//     return (dispatch) => apiService.get(`languages/?search=${search}`).then(response => {
//         if (response.status === 200) {
//             dispatch({ type: 'GET_LANGUAGE_LIST', payload: response.data });
//         } else {
//             dispatch({ type: 'GET_LANGUAGE_LIST', payload: [] });
//         }
//     }).catch(() => {
//         dispatch({ type: 'GET_LANGUAGE_LIST', payload: [] });
//     });
// }

export function getLanguagesList(search) {
    return () => apiService.get(`languages/?search=${search}`);
}

export function get_Main_Sub_Technologies(url, type) {
    return (dispatch) => apiService.get(`${url}`).then(response => {
        if (response.status === 200) {
            if (type === 'main')
                dispatch({ type: 'GET_SKILL', payload: response.data });
            else
                dispatch({ type: 'GET_SUB_SKILL', payload: response.data });
        } else {
            if (type === 'main')
                dispatch({ type: 'GET_SKILL', payload: [] });
            else
                dispatch({ type: 'GET_SUB_SKILL', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'GET_SUB_SKILL', payload: [] });
    });
}
export function uploadProfileImage(params) {
    return () => apiService.post(`update-user-profile-image/`, params);
}
export function getWorkExperience() {
    return (dispatch) => apiService.get(`work-experience/`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_WORK_EXPERIENCE', payload: response.data.results });
        } else {
            dispatch({ type: 'GET_WORK_EXPERIENCE', payload: [] });
        }
    }).catch(() => {
        dispatch({ type: 'GET_WORK_EXPERIENCE', payload: [] });
    });
}

export function addWorkExperience(params) {
    return () => apiService.post(`work-experience/`, params);
}
export function deleteCertification(id) {
    return () => apiService.delete(`certification/${id}/`);
}
export function deleteWorkExperience(id) {
    return () => apiService.delete(`work-experience/${id}/`);
}
export function getCertificationList(page = 1, pageSize = 5) {
    return (dispatch) => apiService.get(`certification/?page=${page}&page_size=${pageSize}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_CERTIFICATE', payload: response.data?.results ?? response.data });
            dispatch({ type: 'GET_CERTIFICATE_COUNT', payload: response.data?.count || 0 });
        } else {
            dispatch({ type: 'GET_CERTIFICATE', payload: [] });
            dispatch({ type: 'GET_CERTIFICATE_COUNT', payload: 0 });
        }
    }).catch(() => {
        dispatch({ type: 'GET_CERTIFICATE', payload: [] });
        dispatch({ type: 'GET_CERTIFICATE_COUNT', payload: 0 });
    });
}

export function getCurrentTab(currentTab) {
    return {
        type: "GET_CURRENT_TAB",
        data: currentTab
    }
}