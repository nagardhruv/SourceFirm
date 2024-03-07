import apiService from 'api/ApiService';

export function loginUser(params) {
    return () => apiService.authPost(`user-login/`, params);
}
export function logoutUser(params) {
    return () => apiService.post(`logout/`, params);
}
export function signUp(params) {
    return () => apiService.authPost(`users/`, params);
}
export function forgotPassword(params) {
    return () => apiService.authPost(`reset-password/`, params);
}
export function resetPassword(params) {
    return () => apiService.authPost(`password-reset-confirm/`, params);
}
export function updateUserProfile(id, params) {
    return () => apiService.patch(`users/${id}/`, params)
}
export function changePassword(params) {
    return () => apiService.post(`change-password/`, params)
}
export function getUserProfile() {
    return () => apiService.get(`user-profile/`);
}
export function addUserProfile(params) {
    return () => apiService.post(`user-profile/`, params);
}
export function getUserDetails() {
    return () => apiService.get(`users/`);
}
export function getCity(id) {
    return () => apiService.get(`city/${id}/`);
}
export function getUserPermissions() {
    return () => apiService.get(`user-permissions/`);
}
export function setUserDetails(params) {
    return () => apiService.authPost(`accept-user-invitation-confirm/`, params);
}
export function signWithGoogle(params) {
    return () => apiService.authPost(`social-login/google/`, params);
}
export function updateUserType(params) {
    return () => apiService.post(`update-user-type/`, params);
}
export function resendVerifyEmail() {
    return () => apiService.get(`resend-verify-email/`);
}
export function verifyUser(params) {
    return () => apiService.authPost(`verify-email/`, params);
}
export function validateToken(params) {
    return () => apiService.authPost(`validate-token/`, params);
}
export function deleteUser(id) {
    return () => apiService.delete(`users/${id}`);
}
export function addBankDetails(params) {
    return () => apiService.post(`bank-details/`, params);
}
export function getBankDetails() {
    return () => apiService.get(`bank-details/`);
}
export function editBankDetails(id, params) {
    return () => apiService.put(`bank-details/${id}/`, params);
}

//for email verification page..
export function getUserDetailsWithToken(token) {
    return () => apiService.getWithToken(`users/`, token);
}
export function resendVerifyEmailWithToken(token) {
    return () => apiService.getWithToken(`resend-verify-email/`, token);
}
export function deleteUserWithToken(id, token) {
    return () => apiService.deleteWithToken(`users/${id}`, token);
}

/* Contact Us */
export function submitContactUs(params = null) {
    return () => apiService.authPost(`contact-us/`, params);
}

