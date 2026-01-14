import { StyleSheet, Image, Text, View } from "react-native";
import { AnimeData } from "../types/anime";

type AnimeCardProps = {
    data: AnimeData
}

export default function AnimeCard({
    data
}: AnimeCardProps) {
    return(
        <View>
            <Text>Anime title: {data.title}</Text>
            <Text>Episodes: {data.episodesCount}</Text>
            <Text>Rating: {data.rating}</Text>
            <Image 
                source={{uri: data.imageUrl}}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100
    }
})