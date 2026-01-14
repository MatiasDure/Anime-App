import { AnimeData } from "../types/anime";

export function mapAnimeData(rawAnimeData: any): AnimeData {
    return {
        title: rawAnimeData.title,
        imageUrl: rawAnimeData.images.jpg.image_url,
        rating: rawAnimeData.rating,
        episodesCount: rawAnimeData.episodes,
    }
}