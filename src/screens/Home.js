import React from 'react';
import {View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default () => {
  return (
    <MainLayout>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Home</Text>
      </View>
    </MainLayout>
  );
};
