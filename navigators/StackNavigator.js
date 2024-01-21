import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Settings from "../screens/Settings";
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
      <Stack.Navigator initialRouteName='HomeTab' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="HomeTab" component={TabNavigator}  />
      </Stack.Navigator>
    );
}

export default StackNavigator;