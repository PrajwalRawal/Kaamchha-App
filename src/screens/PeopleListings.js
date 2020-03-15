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
    <MainLayout title="Carpenter" navigation={navigation}>
      <View
        style={{
          position: 'relative',
          width: Dimensions.get('screen').width,
        }}>
        <FlatList
          style={{marginBottom: 60}}
          data={PeopleListData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
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
                    width: Dimensions.get('screen').width - 140,
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
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: Dimensions.get('screen').width,
          height: 60,
          padding: 10,
        }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.5}
          onPress={() => ''}>
          <Icon name="sort-variant" size={25} style={{color: colors.primary}} />
          <Text
            style={{
              fontSize: 18,
              marginLeft: 15,
              color: colors.primary,
            }}>
            Sort
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.buttonContainer, paddingLeft: 0}}
          onPress={() => ''}
          activeOpacity={0.5}>
          <Icon
            name="filter-outline"
            size={25}
            style={{color: colors.primary}}
          />
          <Text
            style={{
              fontSize: 18,
              marginLeft: 15,
              color: colors.primary,
            }}>
            Filter
          </Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  peopleWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: (Dimensions.get('screen').width - 30) / 2,
    borderRadius: 5,
    backgroundColor: '#d3e7f5',
    borderWidth: 1,
    borderColor: '#d3e7f5',
  },
});
