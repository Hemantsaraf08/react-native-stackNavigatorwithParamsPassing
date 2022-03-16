# react-native-stackNavigatorwithParamsPassing

### Passing state/prop/data between Screens
Params can be passed with navigation.navigate('ScreenName', {key: dataToPassToOtherScreen}) <br/>
by default navigation obj is given by react-navaigation's createStackNavigator to Screen only, if we want components to use it, <br/>
we make use of withNavigation HOC given by react-navigation which puts the navigation prop for us, refer src/components/ResultsList.js <br/>

To use the passed parameters we call the getParam() method on navigation obj given by createStackNavigator. Refer src/screens/SingleResultScreen


### Custom hook example 
Implementation of useResult custom hook with returns <br/>
1. function with calls setterFn in its body <br/>
2. result state (array of obj)
3. error state (string)

refer: <br/>
src/screens/SearchScreen.js <br/>
src/hooks/useResult.js
