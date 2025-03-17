import axios from "axios"

interface signupPayload {
    fullName: string;
    email: string;
    password: string;
    phone: string;
}

export const signupApiCall = (payload: signupPayload) => {
    return axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration', payload,
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log("Signup Response:", response.data);
            return response.data; 
        })
        .catch(error => {
            console.error("Signup Error:", error.response ? error.response.data : error.message);
            return null; 
        });
};




interface loginPayload {
    email: string;
    password: string;
}


export const loginApiCall = (payload: loginPayload) => {
    return axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login', payload,
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log("Login Response:", response.data);
            return response.data; 
        })
        .catch(error => {
            console.error("Login Error:", error.response ? error.response.data : error.message);
            return null; 
        });
};