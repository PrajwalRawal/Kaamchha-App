import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import colors from '../assets/colors';

export default ({navigation}) => {
  const CategoriesData = [
    {
      id: 1,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 2,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 3,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 4,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 5,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 6,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 7,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 8,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 9,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 10,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 11,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 12,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 13,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 14,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 15,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 16,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 17,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 18,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 19,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
    {
      id: 20,
      image: require('../assets/Carpenter.png'),
      label: 'Carpenter',
    },
  ];

  return (
    <MainLayout title="Categories" navigation={navigation} scrollview>
      <FlatList
        style={{
          marginLeft: -10,
          marginRight: -10,
          marginBottom: 20,
          backgroundColor: colors.white,
        }}
        data={CategoriesData}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: '25%',
                borderRightWidth: 1,
                borderRightColor: '#eaeaea',
                borderBottomWidth: 1,
                borderBottomColor: '#eaeaea',
                padding: 15,
                backgroundColor: colors.white,
              }}>
              <TouchableOpacity
                style={{backgroundColor: 'white', alignItems: 'center'}}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('PeopleListings')}>
                <Image
                  source={item.image}
                  style={{height: 70, width: 100, resizeMode: 'contain'}}
                />
                <Text style={{marginTop: 15, color: '#555', fontSize: 14}}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </MainLayout>
  );
};
