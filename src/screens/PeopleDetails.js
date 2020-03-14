import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {View, Text} from 'react-native';

export default ({navigation}) => {
  return (
    <MainLayout title="Samsad Ansari" navigation={navigation}>
      <View
        style={{
          flex: 1,
          margin: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24}}>Hello World</Text>
      </View>
    </MainLayout>
  );
};
