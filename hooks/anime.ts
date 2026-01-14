import { useEffect, useState } from "react";
import { AnimeData } from "../types/anime";
import { fetchQueriedAnimes, fetchRandomAnime } from "../api/jikan";
import { mapAnimeData } from "../utils/anime";

export function useRandomAnime(intervalMs: number = 10000) {
    const [data, setData] = useState<AnimeData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();

        const getRandomAnime = async () => {
            setIsLoading(true);

            try {    
                const response = await fetchRandomAnime(controller.signal);
                setData(mapAnimeData(response.data.data));
            } catch(error) {
                setError("Something went wrong.");
            } finally {
                setIsLoading(false);
            }
        }
    
        getRandomAnime();
        // const interval = setInterval(getRandomAnime, intervalMs);

        return () => {
            controller.abort();
            // clearInterval(interval);
        }
      }, []);

    return {
        data,
        error,
        isLoading
    };
}

export function useLiveSearchAnime(userQuery: string, timeout: number = 350) {
    const [data, setData] = useState<AnimeData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if(userQuery.length < 2) return;
        
        const controller = new AbortController();

        const searchAnimes = async () => {
            setIsLoading(true);

            try {
                const response = await fetchQueriedAnimes(userQuery, controller.signal);
                setData(response.data.data.map((d: any) => mapAnimeData(d)));
            } catch (error) {
                setError("Something went wrong."); //extract as constant
            } finally {
                setIsLoading(false);
            }
        }

        const timeoutId = setTimeout(searchAnimes, timeout);
        
        return () => {
            controller.abort();
            clearTimeout(timeoutId);
        }
    }, [userQuery]);

    return {
        data,
        isLoading,
        error
    };
}