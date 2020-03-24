import React from 'react';
import {View, Text} from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';

export default ({navigation}) => {
  return (
    <DashboardLayout title="LOGOUT" navigation={navigation} scrollview>
      <View>
        <Text>Hello World</Text>
      </View>
    </DashboardLayout>
  );
};
