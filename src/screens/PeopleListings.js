import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors';

export default ({navigation}) => {
  const PeopleListData = [
    {
      id: 1,
      image: require('../assets/Person.jpg'),
      name: 'Samsad Ansari',
      location: 'New Road',
      city: 'Kathmandu',
      district: 'Kathmandu',
    },
    {
      id: 2,
      image: require('../assets/Person.jpg'),
      name: 'Samsad Ansari',
      address: 'New Road, Kathmandu',
      location: 'New Road',
      city: 'Kathmandu',
      district: 'Kathmandu',
    },
    {
      id: 3,
      image: require('../assets/Person.jpg'),
      name: 'Samsad Ansari',
      address: 'New Road, Kathmandu',
      location: 'New Road',
      city: 'Kathmandu',
      district: 'Kathmandu',
    },
    {
      id: 4,
      image: require('../assets/Person.jpg'),
      name: 'Samsad Ansari',
      address: 'New Road, Kathmandu',
      location: 'New Road',
      city: 'Kathmandu',
      district: 'Kathmandu',
    },
    {
      id: 5,
      image: require('../assets/Person.jpg'),
      name: 'Samsad Ansari',
      address: 'New Road, Kathmandu',
      location: 'New Road',
      city: 'Kathmandu',
      district: 'Kathmandu',
    },
  ];

  return (
    <MainLayout title="Carpenter" navigation={navigation} scrollview>
      <View style={{margin: 10}}>
        <FlatList
          data={PeopleListData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => ''}
                style={styles.peopleWrapper}
                onPress={() => navigation.navigate('PeopleDetails')}>
                <Image
                  source={item.image}
                  //   defaultSource={require('../../assets/Agent.jpg')}
                  style={styles.peopleImage}
                />
                <View
                  style={{
                    marginLeft: 10,
                    width: Dimensions.get('screen').width - 160,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: '#454341',
                      }}>
                      {item.name}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => navigation.navigate('PeopleDetails')}>
                      <Text style={{color: colors.primary}}>View Profile</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={{marginTop: 5}}>
                    Location:{' '}
                    <Text style={{color: '#555'}}>{item.location}</Text>
                  </Text>
                  <Text style={{marginTop: 5}}>
                    City: <Text style={{color: '#555'}}>{item.city}</Text>
                  </Text>
                  <Text style={{marginTop: 5}}>
                    District:{' '}
                    <Text style={{color: '#555'}}>{item.district}</Text>
                  </Text>
                  <View style={{marginTop: 20, flexDirection: 'row-reverse'}}>
                    <Stars
                      default={5}
                      count={5}
                      half={true}
                      starSize={20}
                      fullStar={
                        <Icon name={'star'} size={15} color={colors.orange} />
                      }
                      emptyStar={<Icon name={'star'} size={15} color="#555" />}
                      halfStar={
                        <Icon
                          name={'star-half'}
                          size={15}
                          color={colors.orange}
                        />
                      }
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  peopleWrapper: {
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    borderColor: '#eaeaea',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  peopleImage: {
    height: 110,
    width: 110,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});
