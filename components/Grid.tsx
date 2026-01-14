import { ActivityIndicator, FlatList, Pressable, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { useLiveSearchAnime } from '../hooks/anime';
import { AnimeData } from '../types/anime';

type GridProps = {
    userQuery: string,
    style?: StyleProp<ViewStyle>,
    // handleClicked: (anime: AnimeData) => void
}

const animeCell = (anime: AnimeData)=>{//, handleClicked: (anime: AnimeData) => void) => {
    return (
        <Pressable
            style={styles.cellContainer}
            // onPress={() => handleClicked(anime)}
        >
            <Image 
                style={styles.cellImage}
                source={{uri: anime.imageUrl}}
            />
        </Pressable>
    );
}

export default function Grid({userQuery, style} : GridProps) {
    const {data, isLoading, error} = useLiveSearchAnime(userQuery);

    if(isLoading) return <ActivityIndicator />
    if(error) return;

    return (
        <FlatList
            style={[style, {}]}
            data={data}
            renderItem={({item}) => animeCell(item) }
            keyExtractor={item => item.imageUrl}
            numColumns={3}
            contentContainerStyle={{gap: 10}}
            columnWrapperStyle={{justifyContent: "space-between"}}
        />
    );
}

const styles = StyleSheet.create({
    cellImage: {
        width: 100,
        height: 100
    },
    cellContainer: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "green"
    }
})