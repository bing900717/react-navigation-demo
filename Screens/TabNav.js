import React from 'react';
import { Button, Text, View ,Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {

  static navigationOptions = () => ({
    title: 'Home',
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {

  static navigationOptions = () => ({
    title: 'My',
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = () => ({
    title: 'Detail',
    tabBarVisible: false,
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen},
});


HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};



const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});


SettingsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};




export default createBottomTabNavigator(
  {
    Home: { 
      screen: HomeStack , 
      navigationOptions: {
        showIcon: true,
        showLabel: true,
        tabBarLabel: 'HOME',
        tabBarIcon: ({ tintColor, focused }) => {
            let normalIamge = require('../Images/tab_home_normal.png');
            let focusIamge = require('../Images/tab_home_focused.png');

            image = focused ? focusIamge : normalIamge;

            return (<Image
              style={{width:24, height:24, backgroundColor: 'red'}}
              source={image}
            />)      
          },
    }
  },
    Settings: { screen: SettingsStack,
      navigationOptions: {
        showIcon: true,
        showLabel: true,
        tabBarLabel: 'MY',
        tabBarIcon: ({ tintColor, focused }) => {
            let normalIamge = require('../Images/tab_my_normal.png');
            let focusIamge = require('../Images/tab_my_focused.png');
  
            image = focused ? focusIamge : normalIamge;
  
            return (<Image
              style={{width:24, height:24, backgroundColor: 'red'}}
              source={image}
            />)      
          },
      }
    
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showIcon: true,
      showLabel: true,
      tabBarVisible: ({navigation}) => {
        console.log(navigation);
        return true;
      },
      style: {
        backgroundColor: 'cyan',
      },
      iconStyle:{
        width: 24,
        height: 24,
      }
    },
  }
);
