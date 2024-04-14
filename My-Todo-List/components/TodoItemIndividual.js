import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import colors from "../constants/colors";
import { useState } from "react";
import Icon from "./Icon";

function TodoItemIndividual({item}) {

    const isExpanded = (id) => id === expandedId;
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpanded = (id) => {
        console.log("fsvxzdv")
        if(id === expandedId) {
          setExpandedId(null);
        } else {
          setExpandedId(id);
        }
    };
    
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
                  <Icon icon={"cloud-done"} size={20} color={"green"} style={styles.deleteAndFinishInner}/>
                  <Icon icon={"trash"} size={20} color={"red"} style={styles.deleteAndFinishInner}/>
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
        justifyContent: 'space-between',
        alignItems: 'center'
      },
})