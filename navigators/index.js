import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './Drawer';

function Navigator() {
    return (
      <NavigationContainer>
        <StackNavigator />
        {/* <TabNavigator /> */}
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
    );
}

export default Navigator;