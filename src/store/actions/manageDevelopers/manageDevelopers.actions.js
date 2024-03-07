import apiService from 'api/ApiService';

export function getDevelopersList(page, pageSize, params) {
    let url = `agency-user-developer/?page=${page}&page_size=${pageSize}`;
    return () => apiService.get(url, params);
}
export function deleteDevelopers(id) {
    return () => apiService.delete(`agency-user-developer/${id}/`);
}
export function addAgencyUserDeveloper(params) {
    return () => apiService.post(`agency-user-developer/`, params)
}
export function addProjectForAgencyDeveloper(developerId, params) {
    return () => apiService.post(`agency-user-developer/${developerId}/projects/`, params)
}
export function addCertificationForAgencyDeveloper(developerId, params) {
    return () => apiService.post(`agency-user-developer/${developerId}/certification/`, params)
}
export function agencyDeveloperUpdate(developerId, params) {
    return () => apiService.patch(`agency-user-developer/${developerId}/`, params)
}
export function getAgencyDeveloperById(developerId) {
    return (dispatch) => apiService.get(`agency-user-developer/${developerId}/`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'GET_AGENCY_DEVELOPER_DETAILS', payload: response.data });
        }
        else {
            dispatch({ type: 'GET_AGENCY_DEVELOPER_DETAILS', payload: null });
        }
    }).catch(() => {
        dispatch({ type: 'GET_AGENCY_DEVELOPER_DETAILS', payload: null });
    })
}
export function getAgencyDeveloperProjectById(developerId, page = 1, pageSize = 5) {
    return (dispatch) => apiService.get(`agency-user-developer/${developerId}/projects/?page=${page}&page_size=${pageSize}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'AGENCY_DEVELOPER_PROJECT_LIST', payload: response.data?.results ?? response.data });
            dispatch({ type: 'AGENCY_DEVELOPER_PROJECT_COUNT', payload: response.data?.count || 0 });
        }
        else {
            dispatch({ type: 'AGENCY_DEVELOPER_PROJECT_LIST', payload: [] });
            dispatch({ type: 'AGENCY_DEVELOPER_PROJECT_COUNT', payload: 0 });
        }
    }).catch(() => {
        dispatch({ type: 'AGENCY_DEVELOPER_PROJECT_LIST', payload: [] });
        dispatch({ type: 'AGENCY_DEVELOPER_PROJECT_COUNT', payload: 0 });
    })
}
export function getAgencyDeveloperCertificationById(developerId, page = 1, pageSize = 5) {
    return (dispatch) => apiService.get(`agency-user-developer/${developerId}/certification/?page=${page}&page_size=${pageSize}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: 'AGENCY_DEVELOPER_CERTIFICATE_LIST', payload: response.data?.results ?? response.data });
            dispatch({ type: 'AGENCY_DEVELOPER_CERTIFICATE_COUNT', payload: response.data?.count || 0 });
        }
        else {
            dispatch({ type: 'AGENCY_DEVELOPER_CERTIFICATE_LIST', payload: [] });
            dispatch({ type: 'AGENCY_DEVELOPER_CERTIFICATE_COUNT', payload: 0 });
        }
    }).catch(() => {
        dispatch({ type: 'AGENCY_DEVELOPER_CERTIFICATE_LIST', payload: [] });
        dispatch({ type: 'AGENCY_DEVELOPER_CERTIFICATE_COUNT', payload: 0 });
    })
}
export function getAgencyDeveloperProjectByProjectId(developerId, projectId) {
    return () => apiService.get(`agency-user-developer/${developerId}/project/${projectId}/`);
}
export function agencyDeveloperProjectUpdate(developerId, projectId, params) {
    return () => apiService.patch(`agency-user-developer/${developerId}/project-update/${projectId}/`, params)
}
export function deleteDevelopersProject(devId, projectId) {
    return () => apiService.delete(`agency-user-developer/${devId}/projects/${projectId}/`);
}

export function deleteDevelopersCertificate(devId, projectId) {
    return () => apiService.delete(`agency-user-developer/${devId}/certification/${projectId}/`);
}

export function uploadDeveloperProfileImage(devId, params) {
    return () => apiService.put(`agency-user-developer/${devId}/profile-image/`, params);
}

export function submitDeveloperStepper(url, params) {
    return () => apiService.post(`${url}`, params);
}
export function getDeveloperDetails(url) {
    return () => apiService.get(`${url}`);
}