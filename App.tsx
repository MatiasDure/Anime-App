import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import Grid from './components/Grid';
import RandomAnime from './components/RandomAnime';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [isUserSearching, setIsUserSearching] = useState<boolean>(false);
  const [userQuery, setUserQuery] = useState<string>("");
  
  const handleCancel = () => {
    setIsUserSearching(false);
    setUserQuery("");
  }
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <SearchBar 
            userQuery={userQuery}
            handleFocus={() => setIsUserSearching(true)}
            handleTextChange={(text: string) => setUserQuery(text)}
            handleCancel={() => handleCancel()}
            handleClear={() => setUserQuery("")}
            />
          {
            isUserSearching
            ? 
              <>
                <Grid 
                  // handleClicked={}
                  userQuery={userQuery} 
                  style={{marginTop: 10}}  
                  /> 
              </>
            : <RandomAnime />
          }
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
