// This component is for handling the loading and saving of data from Async Storage

import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultData = {};

// Function for hadling the loading of all data from the Async Storage
export async function loadData() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const allData = await AsyncStorage.multiGet(keys);
    const extractedData = allData.map(([key, value]) => JSON.parse(value));
    if (extractedData) {
      return extractedData;
    }
    return defaultData;
  } catch (e) { 
    console.error("Error in loadData:", e);
    return defaultData;
  }
};

// Function for handling the saving of the Todo item to the Async Storage.
export async function saveData(data) {
  try {
    const id = data.id;
    const myDataStr = JSON.stringify(data);
    await AsyncStorage.setItem(id, myDataStr);
  } catch (e) {
    console.error("Error in saveData:", e);
    return;
  }
  return true;
};

 // Function for deleting a todo item from Async storage.
export async function deleteTodoItem(id) {
  try {
    await AsyncStorage.removeItem(id);
  } catch (error) {
    console.log("Error deleting item: ", error)
  }
}

// Function for updating the status of a todo item in Async storage.
export async function updateTodoItemStatus(id) {
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