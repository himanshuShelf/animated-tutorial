import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import Notification from '../screens/Notification';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;