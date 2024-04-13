
import { View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import { useNavigation } from "@react-navigation/native";
import TextInputContainer from '../components/TextInputContainer';

function AddNewTodoScreen() {
    
    const navigation = useNavigation();

    function cancelButtonHandler() {
        navigation.navigate('TodoListDisplay');
    }
    return (
      <View style={styles.appContainer}>
        <Header title="Add New Todo" />
        <TextInputContainer text="Title" isMultiline={false} />
        <TextInputContainer
          text="Description"
          isMultiline={true}
          numberOfLines="4"
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
            <AppButton icon="save" iconColor="green" size={23} title="Save" />
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