import axios from "axios"

export const getBooksApiCall = () => {
    return axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log("Get Books Response:", response.data);
            return response.data; 
        })
        .catch(error => {
            console.error("Get Books Error:", error.response ? error.response.data : error.message);
            return null; 
        });
};