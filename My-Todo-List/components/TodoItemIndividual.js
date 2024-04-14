import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import colors from "../constants/colors";
import { useState } from "react";
import Icon from "./Icon";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TodoItemIndividual({item, data, updateData}) {

    const isExpanded = (id) => id === expandedId;
    const [expandedId, setExpandedId] = useState(null);
  
    const toggleExpanded = (id) => {
        if(id === expandedId) {
          setExpandedId(null);
        } else {
          setExpandedId(id);
        }
    };
    
    const deleteTodoItem = async(id) => {
      try {
        await AsyncStorage.removeItem(id);
      } catch (error) {
        console.log("Error deleting item: ", error)
      }
    }

    const updateTodoItemStatus = async(id) => {
      try {
        const existingData = await AsyncStorage.getItem(id);
        if (existingData != null) {
          const parsedExistingData = JSON.parse(existingData);
          const updatedTodoItem = {
            ...parsedExistingData, isFinished : true
          }
          await AsyncStorage.setItem(id, JSON.stringify(updatedTodoItem));
        }
      } catch (error) {
        console.log('Error updating object:', error);
      }
    }
    return (
        <View style={styles.todoItem}>
          
            <View style={styles.collapseItemIcon}>
              <Text>{item.title}</Text>
              <TouchableOpacity onPress={() => toggleExpanded(item.id)}>
                <Ionicons name={expandedId === item.id ? "caret-up" : "caret-down"} size={14} color="green" />
              </TouchableOpacity>
            </View>
          
          {
            isExpanded(item.id) && (
              <View>
                <Text>{item.description}</Text>
                <View style={styles.deleteAndFinish}>
                 { !item.isFinished && (<Icon icon={"cloud-done"} size={20} color={"green"} style={styles.deleteAndFinishInner} onPress={() => updateTodoItemStatus(item.id)}/>)}
                  <Icon icon={"trash"} size={20} color={"red"} style={styles.deleteAndFinishInner} onPress={() => deleteTodoItem(item.id)}/>
                </View>
              </View>
          )}
         
      </View>
    )
}

export default TodoItemIndividual;

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: colors.todoItem,
        padding: 15,
        margin: 5,
        borderRadius: 5
      },
      collapseItemIcon: {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      deleteAndFinishInner: {
        marginHorizontal: 80,
        marginVertical: 5
      },
    
      deleteAndFinish: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
})