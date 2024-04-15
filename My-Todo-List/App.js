
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListDisplayScreen from './src/screens/TodoListDisplayScreen';
import AddNewTodoScreen from './src/screens/AddNewTodoScreen';
import colors from './src/constants/colors';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            contentStyle: { backgroundColor: colors.appBackground },
          }}>
        <Stack.Screen name="TodoListDisplay" component={TodoListDisplayScreen} options={
          {
            title: 'Home'
          }
        }/>

        <Stack.Screen name="AddNewTodo" component={AddNewTodoScreen} options={
          {
            title: 'Add New Todo'
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>

  );
      
  
}


