
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListDisplayScreen from './screens/TodoListDisplayScreen';
import AddNewTodoScreen from './screens/AddNewTodoScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            contentStyle: { backgroundColor: '#f1f5f0' },
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


