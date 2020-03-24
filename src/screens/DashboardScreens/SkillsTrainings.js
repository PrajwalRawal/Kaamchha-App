import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
import {Table, Row, Rows} from 'react-native-table-component';
import colors from '../../assets/colors';

export default ({navigation}) => {
  const Heading = ['S.N', 'TITLE', 'PROVIDING ORGANIZATION', 'IMAGE'];
  const Data = [
    [
      '1',
      'S.L.C',
      'Nepal Government',
      <Image
        source={require('../../assets/Certificate.png')}
        style={{
          width: 50,
          height: 50,
          marginLeft: 20,
          resizeMode: 'cover',
          borderRadius: 5,
        }}
      />,
    ],
    [
      '2',
      '+2',
      'HSEB',
      <Image
        source={require('../../assets/Certificate.png')}
        style={{
          width: 50,
          height: 50,
          marginLeft: 20,
          resizeMode: 'cover',
          borderRadius: 5,
        }}
      />,
    ],
  ];

  return (
    <DashboardLayout
      title="Skills & Trainings"
      navigation={navigation}
      scrollview>
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
              flexArr={[0.7, 1.5, 2.5, 1.5]}
              style={{height: 40}}
              textStyle={{textAlign: 'center'}}
            />
            <Rows
              data={Data}
              flexArr={[0.7, 1.5, 2.5, 1.5]}
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
              Add New Skills Or Trainings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DashboardLayout>
  );
};
