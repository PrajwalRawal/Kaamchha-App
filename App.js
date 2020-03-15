import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from './src/assets/colors';
import Icon from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Home from './src/screens/Home';
import CategoryScreen from './src/screens/CategoryScreen';
import PeopleListings from './src/screens/PeopleListings';
import PeopleDetails from './src/screens/PeopleDetails';
import Training from './src/screens/Training.js';
import Search from './src/screens/Search';
import Account from './src/screens/Account';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Category"
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {minHeight: 60},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({color, size}) => (
            <Icon name="grid" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarLabel: 'Training',
          tabBarIcon: ({color, size}) => (
            <Icon name="tools" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <IconF name="search" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Category = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="PeopleDetails">
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="PeopleListings" component={PeopleListings} />
      <Stack.Screen name="PeopleDetails" component={PeopleDetails} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
