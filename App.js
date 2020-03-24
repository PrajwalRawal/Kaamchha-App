import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from './src/assets/colors';
import Icon from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Screens
import Home from './src/screens/Home';
import CategoryScreen from './src/screens/CategoryScreen';
import PeopleListings from './src/screens/PeopleListings';
import PeopleDetails from './src/screens/PeopleDetails';
import Training from './src/screens/Training.js';
import Search from './src/screens/Search';

//Dashboard Screens
import Dashboard from './src/screens/DashboardScreens/Dashboard';
import Profile from './src/screens/DashboardScreens/Profile';
import Associates from './src/screens/DashboardScreens/Associates';
import SkillsTrainings from './src/screens/DashboardScreens/SkillsTrainings';
import ClientBookings from './src/screens/DashboardScreens/ClientBookings';
import TrainingOnDemand from './src/screens/DashboardScreens/TrainingOnDemand';
import KaamchhaSkillsTrainings from './src/screens/DashboardScreens/KaamchaSkillsTrainings';
import Bookings from './src/screens/DashboardScreens/Bookings';
import Credentials from './src/screens/DashboardScreens/Credentials';
import Logout from './src/screens/DashboardScreens/Logout';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="PeopleListings" component={PeopleListings} />
      <Stack.Screen name="PeopleDetails" component={PeopleDetails} />
    </Stack.Navigator>
  );
};

const Account = () => {
  let routes = [
    {
      name: 'MY DASHBOARD',
      component: Dashboard,
    },
    {
      name: 'MY PROFILE',
      component: Profile,
    },
    {
      name: 'MY ASSOCIATES',
      component: Associates,
    },
    {
      name: 'SKILLS & TRAININGS',
      component: SkillsTrainings,
    },
    {
      name: 'CLIENT BOOKINGS',
      component: ClientBookings,
    },
    {
      name: 'TRAINING ON DEMAND',
      component: TrainingOnDemand,
    },
    {
      name: 'KAAMCHHA SKILLS & TRAININGS',
      component: KaamchhaSkillsTrainings,
    },
    {
      name: 'MY BOOKINGS',
      component: Bookings,
    },
    {
      name: 'CHANGE CREDENTIALS',
      component: Credentials,
    },
    {
      name: 'LOGOUT',
      component: Logout,
    },
  ];
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerStyle={{
        backgroundColor: 'black',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: StatusBar.currentHeight,
      }}
      drawerContentOptions={{
        marginTop: 10,
        labelStyle: {
          color: colors.white,
          fontSize: 14,
          fontWeight: 'bold',
        },
        activeBackgroundColor: colors.primary,
        activeTintColor: colors.white,
      }}>
      {routes.map((route, i) => (
        <Drawer.Screen key={i} {...route} />
      ))}
    </Drawer.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
