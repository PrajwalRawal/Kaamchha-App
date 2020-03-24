import React from 'react';
import {View} from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
import {Table, Row, Rows} from 'react-native-table-component';
import colors from '../../assets/colors';

export default ({navigation}) => {
  const Heading = [
    'S.N',
    'BOOKINGS DATE',
    'BOOKED BY',
    'CLIENT PHONE NUMBER',
    'BOOKINGS STATUS',
  ];
  const Data = [
    ['1', '2019-02-06', 'Test Test', '9876543210', 'Active'],
    ['2', '2019-02-06', 'Test Test', '9876543210', 'Active'],
  ];

  return (
    <DashboardLayout title="Client Bookings" navigation={navigation} scrollview>
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
              flexArr={[0.7, 2, 2, 2.5, 2]}
              style={{height: 40}}
              textStyle={{textAlign: 'center'}}
            />
            <Rows
              data={Data}
              flexArr={[0.7, 2, 2, 2.5, 2]}
              style={{height: 50}}
              textStyle={{fontSize: 12, textAlign: 'center'}}
            />
          </Table>
        </View>
      </View>
    </DashboardLayout>
  );
};
