import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {styles.appContainer}>
      <View style={styles.container}>
        <Text style = {styles.heading}>My Todo List</Text>
      </View>
      <View style={styles.todoContainer}>
        <Text style={styles.todoItem}>Buy milk</Text>
        <Text style={styles.todoItem}>Buy bread</Text>
        <Text style={styles.todoItem}>Buy eggs</Text>
        <Text style={styles.todoItem}>Buy meat</Text>
        <Text style={styles.todoItem}>Buy towel</Text>
      </View>
      <View style={styles.addNewTodoContainer}>
        <Button title='Add New Todo'/>
      </View>
    </View>
      
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  todoContainer: {
    flex: 25,
    borderBottomColor : 'grey',
    borderBottomWidth: 2
  },
  addNewTodoContainer: {
    marginBottom: 50,
    padding: 10,
    backgroundColor: '#33FF64',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth : 3,
    borderBottomColor : 'black',
    paddingTop : 70,
    paddingBottom: 15
  },
  todoItem: {
    backgroundColor: '#33F6FF',
    padding: 5,
    margin: 5,
    borderRadius: 2
  },
  heading : {
    fontWeight : "bold",
    fontSize : 23
  }
});
