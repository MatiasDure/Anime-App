export const BASE_URL = "https://api.jikan.moe/v4/";
export const RANDOM_ENDPOINT = "random/anime";
export const SEARCH_ENDPOINT = "anime";
export const TOP_ENDPOINT = "top/anime"

export const RESULT_LIMIT = 6;

export enum AnimeType {
    TV = "tv",
    MOVIE = "movie",
    OVA = "ova",
    SPECIAL = "special",
    ONA = "ona",
    MUSIC = "music",
    CM = "cm",
    PV = "pv",
    TV_SPECIAL = "tv_special"
}

export enum AnimeFilter {
    AIRING = "airing",
    UPCOMING = "upcoming",
    POPULARITY = "bypopularity",
    FAVORITE = "favorite"
}

export enum AnimeRating {
    G = "g",
    PG = "pg",
    PG_13 = "pg13",
    R_17 = "r17",
    R = "r",
    HENTAI = "rx"
}