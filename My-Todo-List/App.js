import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style = {styles.heading}>My Todo List</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth : 3,
    borderBottomColor : 'black',
    paddingTop : 70,
    paddingBottom: 15
  },

  heading : {
    fontWeight : "bold",
    fontSize : 23
  }
});
