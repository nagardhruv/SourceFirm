import apiService from 'api/ApiService';
import { dispatchPageLoading, dispatchContentLoading } from 'utils/Common';

export function getJobPost(status, page = 1, pageSize = 10) {
    return (dispatch) => apiService.get(`job-post/?status=${status}&page=${page}&page_size=${pageSize}`).then((res) => {
        if (res.status === 200) {
            dispatch({ type: "GET_JOB_POST_LIST", payload: res.data });
            dispatchPageLoading(dispatch);
            dispatchContentLoading(dispatch);
        } else {
            dispatch({ type: "GET_JOB_POST_LIST", payload: [] });
            dispatchPageLoading(dispatch);
            dispatchContentLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: "GET_JOB_POST_LIST", payload: [] });
        dispatchPageLoading(dispatch);
        dispatchContentLoading(dispatch);
    });
}

export function deleteJobPost(id) {
    return () => apiService.delete(`job-post-draft/${id}/`)
}

export function saveJobPost(params, jobId = null) {
    if (jobId) {
        return () => apiService.put(`job-post/${jobId}/`, params);
    } else {
        return () => apiService.post('job-post/', params);
    }
}

export function saveJobPostAsDraft(params, jobId = null) {
    if (jobId) {
        return () => apiService.put(`job-post-draft/${jobId}/`, params);
    } else {
        return () => apiService.post('job-post-draft/', params);
    }
}

export function getSingleJobPost(jobId) {
    return () => apiService.get(`job-post/${jobId}/`);
}

export function getJobPostAllCandidates(jobPostId, page = 1, pageSize = 10) {
    return (dispatch) => apiService.get(`job-post/${jobPostId}/candidates/?page=${page}&page_size=${pageSize}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: "CANDIDATE_LIST", payload: response?.data });
            dispatchPageLoading(dispatch);
        } else {
            dispatch({ type: "CANDIDATE_LIST", payload: [] })
            dispatchPageLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: "CANDIDATE_LIST", payload: [] });
        dispatchPageLoading(dispatch);
    })
}

export function getJobPostCandidateProfile(jobPostId, candidateId) {
    return () => apiService.get(`job-post/${jobPostId}/candidates/${candidateId}/`)
}

export function getJobPostProposalById(proposalId) {
    return () => apiService.get(`job-post-proposal/${proposalId}/`)
}

export function getJobPostCandidateProjects(candidateId, page = 1, pageSize = 10) {
    return (dispatch) => apiService.get(`job-candidates/${candidateId}/projects/?page=${page}&page_size=${pageSize}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: "CANDIDATE_PROJECTS", payload: response?.data })
        } else {
            dispatch({ type: "CANDIDATE_PROJECTS", payload: [] })
        }
    }).catch(() => {
        dispatch({ type: "CANDIDATE_PROJECTS", payload: [] })
    })
}
export function getJobPostCandidateCertificates(candidateId, page = 1, pageSize = 10) {
    return (dispatch) => apiService.get(`job-candidates/${candidateId}/certifications/?page=${page}&page_size=${pageSize}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: "CANDIDATE_CERTIFICATES", payload: response?.data });
            dispatchPageLoading(dispatch);
        } else {
            dispatch({ type: "CANDIDATE_CERTIFICATES", payload: [] });
            dispatchPageLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: "CANDIDATE_CERTIFICATES", payload: [] });
        dispatchPageLoading(dispatch);
    })
}

export function jobpostCandidateActions(params, id = null) {
    if (!id) return () => apiService.post('job-post-proposal/', params);
    else return () => apiService.patch(`job-post-proposal/${id}/`, params);
}

export function getCandidatesByStatus(status, page = 1, pageSize = 10, search = '', ordering = '') {
    return (dispatch) => apiService.get(`job-post-proposal/?status=${status}&page=${page}&page_size=${pageSize}&search=${search}&ordering=${ordering}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: "REQUESTED_CANDIDATES", payload: response.data });
            dispatchContentLoading(dispatch);
            dispatchPageLoading(dispatch);
        } else {
            dispatch({ type: "REQUESTED_CANDIDATES", payload: [] });
            dispatchContentLoading(dispatch);
            dispatchPageLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: "REQUESTED_CANDIDATES", payload: [] });
        dispatchContentLoading(dispatch);
        dispatchPageLoading(dispatch);
    })
}

export function getJobRequestDetails(id) {
    return (dispatch) => apiService.get(`get-job-request-details/${id}`).then((response) => {
        //action.type not created in reducer
        if (response.status === 200) {
            dispatch({ type: "REQUESTED_REQUEST_DETAILS", payload: response.data });
        } else {
            dispatch({ type: "REQUESTED_REQUEST_DETAILS", payload: [] });
        }
    }).catch(() => {
        dispatch({ type: "REQUESTED_REQUEST_DETAILS", payload: [] });
    })
}

export function getRequestedCandidatesForAgency(status, page = 1, pageSize = 10, search = '', ordering = '') {
    return (dispatch) => apiService.get(`job-post-proposal/developers/?status=${status}&page=${page}&page_size=${pageSize}&search=${search}&ordering=${ordering}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: "REQUESTED_CANDIDATES_FOR_AGENCY", payload: response?.data });
            dispatchContentLoading(dispatch);
            dispatchPageLoading(dispatch);
        } else {
            dispatch({ type: "REQUESTED_CANDIDATES_FOR_AGENCY", payload: [] });
            dispatchContentLoading(dispatch);
            dispatchPageLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: "REQUESTED_CANDIDATES_FOR_AGENCY", payload: [] });
        dispatchContentLoading(dispatch);
        dispatchPageLoading(dispatch);
    })
}

export function getRequestedCandidatesJobs(candidateId, status, page = 1, pageSize = 10, search = '', ordering = '') {
    return (dispatch) => apiService.get(`job-post-proposal/developers/${candidateId}/?status=${status}&page=${page}&page_size=${pageSize}&search=${search}&ordering=${ordering}`).then(response => {
        if (response.status === 200) {
            dispatch({ type: "REQUESTED_CANDIDATES_JOBS", payload: response?.data });
            dispatchContentLoading(dispatch);
            dispatchPageLoading(dispatch);
        } else {
            dispatch({ type: "REQUESTED_CANDIDATES_JOBS", payload: [] });
            dispatchContentLoading(dispatch);
            dispatchPageLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: "REQUESTED_CANDIDATES_JOBS", payload: [] });
        dispatchContentLoading(dispatch);
        dispatchPageLoading(dispatch);
    })
}

export function getJobPostForInterviewAndOffer(status, page = 1, pageSize = 10, opponentId = null) {
    return (dispatch) => apiService.get(`job-post/?status=${status}&page=${page}&page_size=${pageSize}&opponent_id=${opponentId}`).then((res) => {
        if (res.status === 200) {
            dispatch({ type: "GET_JOB_POST_LIST", payload: res?.data?.results || res?.data });
            // dispatch({ type: 'SET_CURRENT_PAGE', payload: status })
        } else {
            dispatch({ type: "GET_JOB_POST_LIST", payload: [] });
        }
    }).catch(() => {
        dispatch({ type: "GET_JOB_POST_LIST", payload: [] });
    });
}

export function getDeveloperForJobPostProcess(jobpostId, AgencyId) {
    return (dispatch) => apiService.get(`job-post/${jobpostId}/${AgencyId}/developers/`).then(response => {
        if (response.status === 200) {
            dispatch({ type: "PROCESSED_CANDIDATES_LIST", payload: response?.data?.results || response?.data });
        } else {
            dispatch({ type: "PROCESSED_CANDIDATES_LIST", payload: [] });
        }
    }).catch(() => {
        dispatch({ type: "PROCESSED_CANDIDATES_LIST", payload: [] });
    });
}

export function scheduleAnInterview(params, id = null) {
    if (!id) return () => apiService.post('job-interview/', params);
    else return () => apiService.put(`job-interview/${id}/`, params);
}
export function submitOffer(params, id = null) {
    if (!id) return () => apiService.post('job-offer/', params);
    else return () => apiService.put(`job-offer/${id}/`, params);
}

export function updateInterviewWithEmail(params, interviewId) {
    return () => apiService.patchWithToken(`extend-interview-days/${interviewId}/`, params);
}

export function closeJobPost(id, params) {
    return () => apiService.patch(`job-post/${id}/`, params);
}