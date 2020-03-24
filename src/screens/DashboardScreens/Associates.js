import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
import {Table, Row, Rows} from 'react-native-table-component';
import colors from '../../assets/colors';

export default ({navigation}) => {
  const AssociatesHeading = [
    'S.N',
    'FULL NAME',
    'STATUS',
    'IMAGE',
    'PHONE NUMBER',
  ];
  const AssociatesData = [
    [
      '1',
      'Test Test',
      'Active',
      <Image
        source={require('../../assets/Person.jpg')}
        style={{
          width: 50,
          height: 50,
          marginLeft: 20,
          resizeMode: 'cover',
          borderRadius: 5,
        }}
      />,
      '9876543210',
    ],
    [
      '2',
      'Test Test',
      'Active',
      <Image
        source={require('../../assets/Person.jpg')}
        style={{
          width: 50,
          height: 50,
          marginLeft: 20,
          resizeMode: 'cover',
          borderRadius: 5,
        }}
      />,
      '9876543210',
    ],
  ];

  const PendingAssociatesHeading = [
    'S.N',
    'FULL NAME',
    'STATUS',
    'IMAGE',
    'PHONE NUMBER',
  ];
  const PendingAssociatesData = [
    [
      '1',
      'Test Test',
      'Active',
      <Image
        source={require('../../assets/Person.jpg')}
        style={{
          width: 50,
          height: 50,
          marginLeft: 20,
          resizeMode: 'cover',
          borderRadius: 5,
        }}
      />,
      '9876543210',
    ],
    [
      '2',
      'Test Test',
      'Active',
      <Image
        source={require('../../assets/Person.jpg')}
        style={{
          width: 50,
          height: 50,
          marginLeft: 20,
          resizeMode: 'cover',
          borderRadius: 5,
        }}
      />,
      '9876543210',
    ],
  ];

  return (
    <DashboardLayout title="MY ASSOCIATES" navigation={navigation} scrollview>
      <View style={{margin: 10}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
            Associates
          </Text>
          <Table
            style={{backgroundColor: colors.white}}
            borderStyle={{
              borderWidth: 1,
              borderColor: colors.primary,
            }}>
            <Row
              data={AssociatesHeading}
              flexArr={[0.7, 1.5, 1, 1.5, 1.5]}
              style={{height: 40}}
              textStyle={{textAlign: 'center'}}
            />
            <Rows
              data={AssociatesData}
              flexArr={[0.7, 1.5, 1, 1.5, 1.5]}
              style={{height: 60}}
              textStyle={{fontSize: 12, textAlign: 'center'}}
            />
          </Table>
          <TouchableOpacity
            style={{
              height: 40,
              width: Dimensions.get('screen').width - 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.primary,
              borderRadius: 5,
              marginTop: 15,
            }}
            activeOpacity={0.7}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: colors.white}}>
              Add Associate
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
            Pending Associates
          </Text>
          <Table
            style={{backgroundColor: colors.white}}
            borderStyle={{
              borderWidth: 1,
              borderColor: colors.primary,
            }}>
            <Row
              data={PendingAssociatesHeading}
              flexArr={[0.7, 1.5, 1, 1.5, 1.5]}
              style={{height: 40}}
              textStyle={{textAlign: 'center'}}
            />
            <Rows
              data={PendingAssociatesData}
              flexArr={[0.7, 1.5, 1, 1.5, 1.5]}
              style={{height: 60}}
              textStyle={{fontSize: 12, textAlign: 'center'}}
            />
          </Table>
        </View>
      </View>
    </DashboardLayout>
  );
};
