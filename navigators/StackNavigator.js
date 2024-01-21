import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

function StackNavigator() {
    return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
}

export default StackNavigator;