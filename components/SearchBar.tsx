import { useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { X, Search } from "lucide-react-native";
import { cancelText, textInputPlaceholder } from "../constants/searchBar";

type SearchBarProps = {
    userQuery: string,
    handleFocus: () => void,
    handleTextChange: (text: string) => void
    handleCancel: () => void
    handleClear: () => void
}

export default function SearchBar(
    {
        userQuery, 
        handleFocus, 
        handleTextChange, 
        handleCancel, 
        handleClear
    } : SearchBarProps) {
    const inputRef = useRef<TextInput>(null);
    const isTextPresent = userQuery.length > 0;

    const onCancelPressed = () => {
        inputRef.current?.blur();
        handleCancel();
    }

    return (
        <View style={[styles.container]}>
            <View style={styles.searchContainer}>
                <View style={styles.textContainer}>
                    <Search />
                    <TextInput
                        style={[styles.inputTextContainer]}
                        ref={inputRef}
                        onPress={() => {}}
                        placeholder={textInputPlaceholder}
                        value={userQuery}
                        onFocus={handleFocus}
                        onChangeText={handleTextChange}
                    />
                </View>
                <View style={styles.clearContainer}>
                    {isTextPresent &&
                        <X onPress={handleClear}/>
                    } 
                </View>
            </View>
            <Text onPress={onCancelPressed}>
                {cancelText}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        paddingInline: 16,
        backgroundColor: "lightgray",

    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        // backgroundColor: "red",
        alignItems: "center",
        gap: 8,
        height: "100%"
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        paddingBlock: 8,
    },
    inputTextContainer: {
        flex: 1,
        marginLeft: 8
    },
    clearContainer: {
        // backgroundColor: "lightgreen",
        marginRight: 8,
    }
});