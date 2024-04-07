import { Text, View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import TodoList from '../components/TodoList';
import colors from '../constants/colors';

function TodoListDisplayScreen() {

    return (
        <View style = {styles.appContainer}>
          <View style={styles.container}>
            <Text style = {styles.heading}>My Todo List</Text>
          </View>
          <TodoList />
          <AppButton icon="add-circle" iconColor="green" size={23} title='Add New Todo'/>
        </View>
          
      );
}

export default TodoListDisplayScreen;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
      },
      
      container: {
        backgroundColor: colors.header,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth : 3,
        borderBottomColor : 'black',
        marginTop : 60,
        paddingBottom: 20,
        paddingTop: 20
      },
      
      heading : {
        fontWeight : "bold",
        fontSize : 23
      }
})