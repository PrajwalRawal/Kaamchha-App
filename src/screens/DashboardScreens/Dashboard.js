import React from 'react';
import {View, Text} from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
import {Table, Row, Rows} from 'react-native-table-component';
import colors from '../../assets/colors';

export default ({navigation}) => {
  const ClientBookingsHeading = [
    'S.N',
    'BOOKED BY',
    'BOOKINGS DATE',
    'BOOKINGS STATUS',
  ];
  const ClientBookingsData = [
    ['1', 'Test', '2019-02-10', 'Active'],
    ['2', 'Test', '2019-02-10', 'Active'],
  ];

  const MyBookingsHeading = [
    'S.N',
    'BOOKED SERVICE PROVIDER',
    'BOOKINGS DATE',
    'BOOKINGS STATUS',
  ];
  const MyBookingsData = [
    ['1', 'Test', '2019-02-10', 'Active'],
    ['2', 'Test', '2019-02-10', 'Active'],
  ];

  return (
    <DashboardLayout title="MY DASHBOARD" navigation={navigation} scrollview>
      <View style={{margin: 10}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
            Client Bookings
          </Text>
          <Table
            style={{backgroundColor: colors.white}}
            borderStyle={{
              borderWidth: 1,
              borderColor: colors.primary,
            }}>
            <Row
              data={ClientBookingsHeading}
              flexArr={[0.7, 2, 2, 2]}
              style={{height: 40}}
              textStyle={{textAlign: 'center'}}
            />
            <Rows
              data={ClientBookingsData}
              flexArr={[0.7, 2, 2, 2]}
              style={{height: 40}}
              textStyle={{fontSize: 12, textAlign: 'center'}}
            />
          </Table>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
            My Bookings
          </Text>
          <Table
            style={{backgroundColor: colors.white}}
            borderStyle={{
              borderWidth: 1,
              borderColor: colors.primary,
            }}>
            <Row
              data={MyBookingsHeading}
              flexArr={[0.7, 2.5, 1.75, 1.75]}
              style={{height: 40}}
              textStyle={{textAlign: 'center'}}
            />
            <Rows
              data={MyBookingsData}
              flexArr={[0.7, 2.5, 1.75, 1.75]}
              style={{height: 40}}
              textStyle={{fontSize: 12, textAlign: 'center'}}
            />
          </Table>
        </View>
      </View>
    </DashboardLayout>
  );
};
