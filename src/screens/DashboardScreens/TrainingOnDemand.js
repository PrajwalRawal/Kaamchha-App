import React from 'react';
import {View, Text} from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';

export default ({navigation}) => {
  return (
    <DashboardLayout
      title="TRAINING ON DEMAND"
      navigation={navigation}
      scrollview>
      <View style={{margin: 10}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
            Latest Training On Demand
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
            Training Requested By You
          </Text>
        </View>
      </View>
    </DashboardLayout>
  );
};
