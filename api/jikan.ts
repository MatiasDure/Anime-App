import axios from "axios";
import { BASE_URL, RANDOM_ENDPOINT, SEARCH_ENDPOINT } from "../constants/api";

const axiosClient = axios.create({
    baseURL: BASE_URL
});

export function fetchRandomAnime(signal?: AbortSignal) {
    return axiosClient.get(RANDOM_ENDPOINT, { signal });
}

export function fetchQueriedAnimes(userQuery: string, signal?: AbortSignal) {
    return axiosClient.get(SEARCH_ENDPOINT, { 
        params: {
            q: userQuery,
            limit: 15 // extract this as a constant
        },
        signal,
    });
}