import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen';
import SingleResultScreen from './src/screens/SingleResultScreen';
const navigator=createStackNavigator(
  {
  SearchScreen: SearchScreen,
  SingleResultScreen: SingleResultScreen
  },
  {
  initialRouteName: 'SearchScreen', 
  defaultNavigationOptions:{
    title:"Business Search"
  }
})

export default createAppContainer(navigator)

