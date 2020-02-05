import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

// 3 Types of in built navigation - stack, bottom-tab, side-drawer
// Stack navigator function takes two arguments
const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

// Some react component must always be exported at the end of this file to be shown on device
// We pass a 'navigator' which generates a react component to export for the file
export default createAppContainer(navigator);