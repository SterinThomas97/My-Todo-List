import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultData = {};

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