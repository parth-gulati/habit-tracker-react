import axios from 'axios'
const base_url = import.meta.env.VITE_BASE_URL

export const login = async (data) => {
    try {
        console.log(data)
        const res = await axios.post(
            `${base_url}/user/signin`,
            data,
            { headers: { 'Content-Type': 'application/json' } }
        );
        return {data: res.data, status: res.status} ;
    } catch (error) {
        console.log(error.response)
        return {data: error.response.data, status: error.response.status}
    }
};

export const signup = async (data) => {
    try {
        const res = await axios.post(
            `${base_url}/user/signup`,
            {
                first_name: data.firstName,
                last_name: data.last_name,
                email: data.email,
                password: data.password
            },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return {data: res.data, status: res.status} ;
    } catch (error) {
        console.log(error.response)
        return {data: error.response.data, status: error.response.status}
    }
};