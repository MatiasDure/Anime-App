import { ActivityIndicator, Text, View } from "react-native";
import { useRandomAnime } from "../hooks/anime";
import AnimeCard from "./AnimeCard";

export default function RandomAnime() {
    const {data, error, isLoading} = useRandomAnime();

    if(!data || error) return;
    if(isLoading) return <ActivityIndicator />

    return (
        <View>
            <Text>Random Anime:</Text>
            <AnimeCard data={data} />
        </View>
    )
}