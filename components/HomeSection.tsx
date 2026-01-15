import { ActivityIndicator, View } from "react-native";
import Section from "./Section";
import { useTopAnime } from "../hooks/anime";

export default function HomeSection() {
    const { data: topAnimes, isLoading: topAnimesLoading, error: topAnimeError } = useTopAnime();

    return (
        <View>
            {
                topAnimesLoading ? 
                    <ActivityIndicator /> :
                    <Section 
                        headerTitle="Top Rated"
                        animeList={topAnimes}
                    />
            }
        </View>
    )
}