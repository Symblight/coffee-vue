export const login = (data) => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        const url = "http://localhost:5000/api/login";
        const params =`username=${data.username}&password=${data.password}`;  

        xhr.open("POST", url, true); 

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       
        xhr.onreadystatechange = function() {//Call a function when the state changes.
            resolve(xhr.response);
        }

        xhr.send(params);
    })
}

export const signUp = (data) => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        const url = "http://localhost:5000/api/signup";
        const params =`username=${data.username}&password=${data.password}&lastName=${data.lastName}&firstName=${data.firstName}&adress=${data.adress}&`;
        
        xhr.open("POST", url, true); 

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       
        xhr.onreadystatechange = function() {//Call a function when the state changes.
            resolve(xhr.response);
        }

        xhr.send(params);
    })
}

export const getDrinks = () => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        const url = "http://localhost:5000/api/drinks";

        xhr.open("GET", url, true);
        xhr.onload = function(){
            resolve(JSON.parse(xhr.response));
        };
        xhr.send();
    })
}

export const getFoods = () => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        const url = "http://localhost:5000/api/foods";

        xhr.open("GET", url, true);
        xhr.onload = function(){
            resolve(JSON.parse(xhr.response));
        };
        xhr.send();
    })
}

export const updateOrderUser = (data) => {
    // set order
}