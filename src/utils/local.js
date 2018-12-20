export const getToken = () => {
    return localStorage.getItem('token');
}

export const setToken = (data) => {
    // set token to local storage
    localStorage.setItem('token', data);
}

export const setOrder = (data) => {
    localStorage.setItem('order', JSON.stringify(data));
}

export const getOrder = () => {
    return JSON.parse(localStorage.getItem('order'));
}

export const clearOrder = () => {
    localStorage.removeItem('order');
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