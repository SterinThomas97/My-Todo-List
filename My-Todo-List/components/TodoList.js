import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { useEffect, useState } from "react";
import { loadData } from "../model/data";

function TodoList() {

    const [data, setData] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpanded = (id) => {
      console.log("fsvxzdv")
      if(id === expandedId) {
        setExpandedId(null);
      } else {
        setExpandedId(id);
      }
    };

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

    const isExpanded = (id) => id === expandedId;

    const display = ({item}) => (
       <View style={styles.todoItem}>
          <TouchableOpacity onPress={() => toggleExpanded(item.id)}>
            <Text>{item.title}</Text>
          
          {
            isExpanded(item.id) && (
              <View>
                <Text>{item.description}</Text>
              </View>
          )}
          </TouchableOpacity>
      </View>
    );
    
    return (
          
      <ScrollView style={styles.todoContainer}>
           <FlatList
            data={data}
            renderItem={display}
            keyExtractor={(item) => item.id}
          />
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
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
      }
})