/* This component is for the second screen : Add New Todo Screen */

import { View, StyleSheet, Alert } from 'react-native';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import { useNavigation } from "@react-navigation/native";
import TextInputContainer from '../components/TextInputContainer';
import { saveData } from '../model/data';
import { useState } from 'react';
import TodoItem from '../model/TodoItem';

function AddNewTodoScreen() {
  
    
    const [todoItem, setTodoItem] = useState({});
    const navigation = useNavigation();

    // Function for generating unique id to be kept as key in Async Storage
    function generateUniqueId() {
      return Math.random().toString(36).substr(2, 9); 
    }

    // Function for back button to move back to home screen
    function cancelButtonHandler() {
        navigation.navigate('TodoListDisplay');
    }

    // Function for handling save functionality in Add Todo Item screen
    function saveButtonHandler() {
      console.log(todoItem);
      const newTodoItem = new TodoItem(generateUniqueId(),todoItem.title, todoItem.description, false);
      console.log(newTodoItem);
      const saved = saveData(newTodoItem);
      if (saved) {
        setTodoItem({});
        Alert.alert("Success", "Todo Added Successfully");
      }
    }

    // Function for updating the todo item object when title is changed by the user in the second screen.
    const changeTitle = (val) => {
      const data = {...todoItem, title:val};
      setTodoItem(data);
    }

     // Function for updating the todo item object when description is changed by the user in the second screen.
    const changeDescription = (val) => {
      const data = {...todoItem, description:val};
      setTodoItem(data);
    }

    return (
      <View style={styles.appContainer}>
        <Header title="Add New Todo" />
        <TextInputContainer
          placeHolder="Enter Title"
          onChangeText={changeTitle}
          text="Title"
          value={todoItem?.title}
          isMultiline={false}
        />

        <TextInputContainer
          placeHolder="Enter Description"
          text="Description"
          isMultiline={true}
          numberOfLines="4"
          value={todoItem?.description}
          onChangeText={changeDescription}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <AppButton
              icon="backspace"
              iconColor="green"
              size={23}
              title="Back"
              onPress={cancelButtonHandler}
            />
          </View>
          <View style={styles.button}>
            <AppButton
              icon="save"
              iconColor="green"
              size={23}
              title="Save"
              isDisabled={Object.keys({...todoItem}).length == 0 || {...todoItem}.title === "" || {...todoItem}.description === "" || {...todoItem}.title === undefined || {...todoItem}.description === undefined}
              onPress={saveButtonHandler}
            />
          </View>
        </View>
      </View>
    );
}

export default AddNewTodoScreen;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
      },

      buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
      },

      button: {
        margin: 55
      },
      
});