import axios from "axios"

const baseUrl = "https://fakestoreapi.com/"

const api = axios.create({
    baseURL: "https://fakestoreapi.com/",
    timeout: 3000
})


export const fetchApi = async (endpointUrl, method, payload) => {

    try {
        const url = baseUrl + endpointUrl
        const option = {
            method: method.toUpperCase(),
            headers: {
                "Content-Type": "application/json"
            }
        }
        if ((method.toLowerCase() !== "get" &&  method.toLowerCase() !== "delete") && payload) {
            option['body'] = JSON.stringify(payload)
        }
        const response = await fetch(url, option)
        const responseData = await response.json()
        return responseData
    }
    catch (error) {
        console.log("error===>", error)
    }


}

export const axiosCall = async (endpointUrl, method, payload) => {
    try {
        let response = {}
        if (method.toUpperCase() === "GET")
            response = await api.get(endpointUrl)
        else if (method.toUpperCase() === "POST")
            response = await api.get(endpointUrl, payload)
        else if (method.toUpperCase() === "PUT")
            response = await api.get(endpointUrl, payload)

        return response
    }
    catch (error) {
        console.error("Error===>", error)
    }

}