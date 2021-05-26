import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4be1399f-6b25-4ed3-86bb-d2472b66c8be"
    }
})

const baseUrl = "https://social-network.samuraijs.com/api/1.0/"

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count${pageSize}`)
            .then(response => {
                return response.data.items
            })
    },

    getUsers2(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count${pageSize}`)
            .then(response => {
                return response.data.items
            })
    }

}