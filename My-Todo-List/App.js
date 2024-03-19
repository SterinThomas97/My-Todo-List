import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {styles.appContainer}>
      <View style={styles.container}>
        <Text style = {styles.heading}>My Todo List</Text>
      </View>
      <ScrollView style={styles.todoContainer}>
        <View style={styles.todoItem}>
          <Text >Buy milk</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy bread</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy dress</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy mobile</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy groceries</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Do Assignment</Text>
        </View>
        <View style={styles.todoItem}>
          <Text>Call parents</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy food</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy headset</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy drinks</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy charger</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy charger</Text>
        </View>
        <View style={styles.todoItem}>
          <Text >Buy charger</Text>
        </View>
      </ScrollView>
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
    marginBottom: 5,
    marginTop: 5
  },
  addNewTodoContainer: {
    marginBottom: 50,
    padding: 10,
    backgroundColor: '#33FF64',
    borderTopColor: 'grey',
    borderTopWidth: 2
  },
  container: {
    backgroundColor: '#dfede7',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth : 3,
    borderBottomColor : 'black',
    marginTop : 60,
    paddingBottom: 20,
    paddingTop: 20
  },
  todoItem: {
    backgroundColor: '#6dd1fc',
    padding: 15,
    margin: 5,
    borderRadius: 5
  },
  heading : {
    fontWeight : "bold",
    fontSize : 23
  }
});
