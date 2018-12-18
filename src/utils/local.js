export const getToken = () => {
    return localStorage.getItem('token');
}

export const setToken = (data) => {
    // set token to local storage
    localStorage.setItem('token', data);
}

export const setOrder = (data) => {
    // set order to local storage
}

export const getOrder = () => {
    // get order from local storage
}

export const clearOrder = () => {
    // clear orde from local storage
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const setUser = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
}

export const clearCred = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}