import axios from 'axios';
import { toast } from 'react-toastify';
import history from 'utils/history';
import { getToken } from "utils/Storage";
import { persistor } from "../store";

/* eslint-disable camelcase */

let baseUrl = process.env.REACT_APP_API_KEY;
class ApiService {

    authGet = (route, params = {}) => {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + route, { params }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                this.handleError(response, resolve, reject);

            });
        });
    };
    get = (route) => {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + route, {
                headers: {
                    Authorization: "Token " + getToken(),
                }
            }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                this.handleError(response, resolve, reject);

            });
        });
    };
    authPost = (route, params) => {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + route, params).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                this.handleError(response, resolve, reject);
            });
        });
    }
    post = (route, params) => {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + route, params, {
                headers: {
                    Authorization: "Token " + getToken(),
                }
            }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                this.handleError(response, resolve, reject);
            });
        });
    }
    put = (route, params) => {
        return new Promise((resolve, reject) => {
            axios.put(baseUrl + route, params, {
                headers: {
                    Authorization: "Token " + getToken(),
                }
            }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                this.handleError(response, resolve, reject);
            });
        });
    }
    delete = (route) => {
        return new Promise((resolve, reject) => {
            axios.delete(baseUrl + route, {
                headers: {
                    Authorization: "Token " + getToken(),
                }
            }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                this.handleError(response, resolve, reject);
            });
        });
    }
    patch = (route, params) => {
        return new Promise((resolve, reject) => {
            axios.patch(baseUrl + route, params, {
                headers: {
                    Authorization: "Token " + getToken(),
                }
            }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                this.handleError(response, resolve, reject);
            });
        });
    }

    getWithToken = (route, token) => {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + route, {
                headers: {
                    Authorization: "Token " + token,
                }
            }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                this.handleError(response, resolve, reject);
            });
        });
    };
    deleteWithToken = (route, token) => {
        return new Promise((resolve, reject) => {
            axios.delete(baseUrl + route, {
                headers: {
                    Authorization: "Token " + token,
                }
            }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                this.handleError(response, resolve, reject);
            });
        });
    }
    getAny = (url, params = {}) => {
        return new Promise((resolve, reject) => {
            axios.get(url, { params }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                if (response && response.status === 400) {
                    resolve(response);
                }
                if (response && response.status === 401) {
                    persistor.purge();
                    window.location.assign('/login');
                    reject(response);
                }
                reject(response);
            });
        });
    };
    patchWithToken = (route, params) => {
        return new Promise((resolve, reject) => {
            axios.patch(baseUrl + route, params, {

            }).then(response => {
                resolve(response);
            }).catch(({ response }) => {
                if (response.status === 401) {
                    reject(new Error("Invalid Token"));
                } else if (response.status === 500 || response.status === 502) {
                    reject(new Error("Internal server error"));
                } else if (response.status === 404) {
                    reject(new Error("Not found"));
                } else {
                    reject(new Error('Something went wrong'));
                }

            });
        });
    };
    handleError = (response, resolve, reject) => {
        if (response && response.status === 400) {
            resolve(response);
        } else if (response && response.status === 401) {
            persistor.pause();
            persistor.flush().then(() => {
                return persistor.purge();
            });
            localStorage.removeItem("persist:root");
            reject(new Error("Unauthorized"));
            window.location.assign('/login');
        } else if (response && response.status === 403) {
            resolve(response);
        } else if (response && response.status === 500) {
            reject(new Error("Internal server error"));
            toast.error("Internal server error.")
        } else {
            if (response && response.status === 404) {
                history.push('/page-not-found');
                // reject(new Error("Not Found"));
            } else if (response && response.status === 502) {
                reject(new Error("Internal server error."));
            } else {
                reject(new Error("Something went wrong"));
            }
        }
    }
}


const instance = new ApiService();
export default instance;
