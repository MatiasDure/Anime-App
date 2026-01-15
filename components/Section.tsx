import { ScrollView, Text, View, StyleSheet, Dimensions } from "react-native";
import AnimeCell from "./AnimeCell";
import { AnimeData } from "../types/anime";

type SectionProps = {
    headerTitle: string,
    animeList: AnimeData[] 
}

const { height } = Dimensions.get("window");

export default function Section({ headerTitle, animeList} : SectionProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{headerTitle}</Text>
            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollViewContainer}
                style={styles.scrollView}
            >
                {animeList.map((data) => <AnimeCell key={data.title} animeUrl={data.imageUrl} />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height / 3,
    },
    header: {
        fontSize: 24,
    },
    scrollView: {
        flexGrow: 0
    },
    scrollViewContainer: {
        paddingVertical: 16,
        gap: 12,
    }
}) 