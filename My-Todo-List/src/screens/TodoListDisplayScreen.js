// This component is for the Home Screen

import { View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import TodoList from '../components/TodoList';
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';

function TodoListDisplayScreen() {

    const navigation = useNavigation();

    function addNewTodoItem() {
        navigation.navigate('AddNewTodo');
    }

    return (
        <View style = {styles.appContainer}>
          <Header title="My Todo List"/>
          <TodoList />
          <AppButton icon="add-circle" iconColor="green" size={23} title='Add New Todo' onPress={addNewTodoItem}/>
        </View>
          
      );
}

export default TodoListDisplayScreen;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
      }
})