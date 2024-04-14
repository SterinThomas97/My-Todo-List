import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity, Pressable } from "react-native";

import { useEffect, useState } from "react";
import { loadData } from "../model/data";
import TodoItemIndividual from "./TodoItemIndividual";

function TodoList() {

    const [data, setData] = useState([]);

    useEffect(() => {
      const firstLoad = async () => {
        const todoData = await loadData();
        if (todoData && todoData.length > 0) {
          setData(todoData);
        }
      };
      firstLoad();
    },[]);

    useEffect(() => {
      const load = async () => {
        const todoData = await loadData();
        if (todoData) {
          setData(todoData);
        }
      };
      load();
    },[data]);


    const display = ({item}) => (
    
      <TodoItemIndividual item={item}/>
   
     );

    return (
          
      <ScrollView style={styles.todoContainer}>
           <FlatList
            data={data}
            renderItem={display}
            keyExtractor={(item) => item.id}
          />
      </ScrollView>
         
          
    );
}

export default TodoList;

const styles = StyleSheet.create({

      todoContainer: {
        marginBottom: 5,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
      }
})