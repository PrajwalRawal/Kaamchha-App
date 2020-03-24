import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';

export default ({children, scrollview, title, navigation}) => {
  return (
    <View style={{backgroundColor: colors.white}}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: colors.white,
            height: 60,
            borderBottomColor: colors.grey,
            borderBottomWidth: 1,
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon name="menu" size={30} />
          </TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 20}}>
            {title.toUpperCase()}
          </Text>
        </View>
        <View style={{backgroundColor: colors.bgColor}}>
          {scrollview ? (
            <ScrollView
              style={{
                height:
                  Platform.OS === 'ios'
                    ? Dimensions.get('window').height - 188
                    : Dimensions.get('screen').height -
                      150 -
                      StatusBar.currentHeight,
                marginBottom: 60,
                paddingBottom: 15,
              }}>
              {children}
            </ScrollView>
          ) : (
            <View
              style={{
                height:
                  Platform.OS === 'ios'
                    ? Dimensions.get('window').height - 188
                    : Dimensions.get('screen').height -
                      150 -
                      StatusBar.currentHeight,
                marginBottom: 60,
                paddingBottom: 15,
              }}>
              {children}
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};
