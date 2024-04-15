// Component for displaying the todo items in the home screen

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

    function updateData(todoItems) {
      setData(todoItems);
    }
    const display = ({item}) => {
      if(item) {
        return <TodoItemIndividual item={item} data={data} updateData={updateData}/>
      }
   
    }

    return (

      <View style={styles.todoContainer}>
           <FlatList
            data={data}
            renderItem={display}
            keyExtractor={(item) => item?item.id:""}
          />
      </View>
         
          
    );
}

export default TodoList;

const styles = StyleSheet.create({
      todoContainer: {
        flex: 1,
        marginBottom: 5,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
      }
})