export const login = (data) => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        const url = "http://localhost:5000/api/login";
        const params =`username=${data.username}&password=${data.password}`;  

        xhr.open("POST", url, true); 

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       
        xhr.onreadystatechange = function() {//Call a function when the state changes.
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
              } else {
                reject({
                  status: this.status,
                  statusText: xhr.statusText
                });
              }
            };
            xhr.onerror = function () {
              reject({
                status: this.status,
                statusText: xhr.statusText
              });
            };

        xhr.send(params);
    })
}

export const signUp = (data) => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        const url = "http://localhost:5000/api/signup";
        
        xhr.open("POST", url, true); 

        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
       
        xhr.onreadystatechange = function() {//Call a function when the state changes.
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
              } else {
                reject({
                  status: this.status,
                  statusText: xhr.statusText
                });
              }
            };
            xhr.onerror = function () {
              reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }

        xhr.send(JSON.stringify({user: data}));
    })
}

export const getUser = (id) => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        const url = `http://localhost:5000/api/user`;
        
        xhr.open("POST", url, true); 

        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhr.onreadystatechange = function() {//Call a function when the state changes.
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
              } else {
                reject({
                  status: this.status,
                  statusText: xhr.statusText
                });
              }
            };
            xhr.onerror = function () {
              reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }

        xhr.send(JSON.stringify({userId: id}));
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