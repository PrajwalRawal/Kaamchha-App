import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
import {Table, Row, Rows} from 'react-native-table-component';
import colors from '../../assets/colors';

export default ({navigation}) => {
  const Heading = [
    'S.N',
    'DATE',
    'SERVICE PROVIDER',
    'SERVICE CATEGORY',
    'STATUS',
  ];
  const Data = [
    ['1', '2019-06-22', 'Test Test', 'Test', 'Active'],
    ['2', '2019-06-22', 'Test Test', 'Test', 'Active'],
  ];

  return (
    <DashboardLayout title="My Bookings" navigation={navigation} scrollview>
      <View style={{margin: 10}}>
        <View style={{marginBottom: 20}}>
          <Table
            style={{backgroundColor: colors.white}}
            borderStyle={{
              borderWidth: 1,
              borderColor: colors.primary,
            }}>
            <Row
              data={Heading}
              flexArr={[0.7, 1.5, 2, 1.5, 1.5]}
              style={{height: 40}}
              textStyle={{textAlign: 'center'}}
            />
            <Rows
              data={Data}
              flexArr={[0.7, 1.5, 2, 1.5, 1.5]}
              style={{height: 50}}
              textStyle={{fontSize: 12, textAlign: 'center'}}
            />
          </Table>
        </View>
      </View>
    </DashboardLayout>
  );
};
