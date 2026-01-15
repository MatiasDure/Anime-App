import axios from "axios";
import { AnimeFilter, AnimeRating, AnimeType, BASE_URL, RANDOM_ENDPOINT, RESULT_LIMIT, SEARCH_ENDPOINT, TOP_ENDPOINT } from "../constants/anime";

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
            limit: RESULT_LIMIT
        },
        signal,
    });
}

export function fetchTopAnime(signal?: AbortSignal) {
    return axiosClient.get(TOP_ENDPOINT, {
        params: {
            type: AnimeType.TV,
            filter: AnimeFilter.POPULARITY,
            limit: RESULT_LIMIT,
            sfw: true
        },
        signal
    }
    )
}