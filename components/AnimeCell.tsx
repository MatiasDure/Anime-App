import { Image, View, StyleSheet, Dimensions } from "react-native";

type AnimeCellProps = {
    animeUrl: string
}

const { width } = Dimensions.get("window");

export default function AnimeCell({animeUrl} : AnimeCellProps) {
    
    return(
        <View style={[styles.container]}>
            <Image
                source={{uri: animeUrl}}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width / 3,
        aspectRatio: 2 / 3
    },
    image: {
        flex: 1,
        borderRadius: 10,
        resizeMode: "cover"
    }
})

