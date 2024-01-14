import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import Hello from './Hello';

const DATA = [
  "red",
  "blue", 
  "green",
  "purple",
  "pink"
]

const ColorItem = ({ backgroundColor }) => <View style={[styles.colorItem, { backgroundColor }]}></View>

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {DATA?.map((dataItem) => <ColorItem backgroundColor={dataItem} />)}
      </ScrollView>
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
