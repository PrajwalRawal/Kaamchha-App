import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
import colors from '../../assets/colors';

export default ({navigation}) => {
  return (
    <DashboardLayout title="Change Password" navigation={navigation} scrollview>
      <View style={{margin: 10}}>
        <Text style={{marginBottom: 10, fontSize: 16}}>Old Password:</Text>
        <TextInput
          style={{
            height: 50,
            width: Dimensions.get('screen').width - 20,
            backgroundColor: colors.white,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.primary,
            marginBottom: 20,
            fontSize: 20,
            paddingLeft: 10,
          }}
          secureTextEntry={true}
        />
        <Text style={{marginBottom: 10, fontSize: 16}}>New Password:</Text>
        <TextInput
          style={{
            height: 50,
            width: Dimensions.get('screen').width - 20,
            backgroundColor: colors.white,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.primary,
            marginBottom: 20,
            fontSize: 20,
            paddingLeft: 10,
          }}
          secureTextEntry={true}
        />
        <Text style={{marginBottom: 10, fontSize: 16}}>Confirm Password:</Text>
        <TextInput
          style={{
            height: 50,
            width: Dimensions.get('screen').width - 20,
            backgroundColor: colors.white,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.primary,
            marginBottom: 20,
            fontSize: 20,
            paddingLeft: 10,
          }}
          secureTextEntry={true}
        />
      </View>
    </DashboardLayout>
  );
};
