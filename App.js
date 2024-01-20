import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import usePagination from './usePagination';
import Hello from './Hello';
import { useState } from 'react';

const DATA = [
  "red",
  "blue", 
  "green",
  "purple",
  "pink"
]

const ColorItem = ({ backgroundColor }) => <View style={[styles.colorItem, { backgroundColor }]}></View>

export default function App() {

  const [page, setPage] = useState(0);
  const isLoading = false;

  const handlePageUpdate = () => {
    setPage(prevPage => prevPage + 1);
  }

  const { data } = usePagination({ pageNumber: page })
  console.log(data)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList 
        data={data}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => console.log('REFRESHINg')}  />}
        renderItem={({ item }) => {
          return <Text style={{height: 100, width: 100, fontSize: 18, fontWeight: '600'}}>{item.todo}</Text>
        }}
        keyExtractor={(props) => {
          return props?.id
        }}
        onEndReached={handlePageUpdate}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  colorItem: {
    height: 200,
    width: 200,
    marginVertical: 24
  }
});
