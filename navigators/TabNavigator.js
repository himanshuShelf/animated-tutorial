import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
          headerShown: false
        }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Settings} initialParams={{
            test: "Hello World"
          }} />
        </Tab.Navigator>
    );
}

export default TabNavigator;