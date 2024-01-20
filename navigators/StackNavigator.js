import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
const Stack = createStackNavigator();

function StackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    );
}

export default StackNavigator;