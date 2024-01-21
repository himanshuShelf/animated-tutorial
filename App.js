import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import usePagination from './usePagination';
import Hello from './Hello';
import { useState } from 'react';
import Navigator from './navigators';

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

  return (
    <Navigator />
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
