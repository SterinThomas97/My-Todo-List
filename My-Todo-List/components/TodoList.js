import { Text, View, ScrollView, StyleSheet } from "react-native";
import colors from "../constants/colors";

function TodoList() {

    return (
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
    )
}

export default TodoList;

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: colors.todoItem,
        padding: 15,
        margin: 5,
        borderRadius: 5
      },
      todoContainer: {
        marginBottom: 5,
        marginTop: 5
      }
})