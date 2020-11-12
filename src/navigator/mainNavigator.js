import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen59171904Navigator from '../features/BlankScreen59171904/navigator';
import UserProfile171820Navigator from '../features/UserProfile171820/navigator';
import Maps171801Navigator from '../features/Maps171801/navigator';
import Settings171779Navigator from '../features/Settings171779/navigator';
import Settings171764Navigator from '../features/Settings171764/navigator';
import NotificationList171763Navigator from '../features/NotificationList171763/navigator';
import Maps171762Navigator from '../features/Maps171762/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen59171904: { screen: BlankScreen59171904Navigator },
UserProfile171820: { screen: UserProfile171820Navigator },
Maps171801: { screen: Maps171801Navigator },
Settings171779: { screen: Settings171779Navigator },
Settings171764: { screen: Settings171764Navigator },
NotificationList171763: { screen: NotificationList171763Navigator },
Maps171762: { screen: Maps171762Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
