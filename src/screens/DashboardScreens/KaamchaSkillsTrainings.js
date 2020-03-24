import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import DashboardLayout from '../../layouts/DashboardLayout';
import colors from '../../assets/colors';

export default ({navigation}) => {
  const TrainingsData = [
    {
      id: 1,
      image: require('../../assets/KaamchhaTraining.png'),
      title: 'MSP-002 (DYIDIY Training - Sofa and Chair Fitting)',
      provider: 'Kaamchha',
      date: '2019-06-22',
    },
    {
      id: 2,
      image: require('../../assets/KaamchhaTraining.png'),
      title: 'MSP-001-DYI (DIY Training on Modular Furniture)',
      provider: 'Kaamchha',
      date: '2019-06-22',
    },
  ];
  return (
    <DashboardLayout
      title="KAAMCHHA SKILLS & TRAININGS"
      navigation={navigation}
      scrollview>
      <View style={{margin: 10}}>
        <FlatList
          data={TrainingsData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.trainingWrapper}>
                <Image source={item.image} style={styles.trainingImage} />
                <View
                  style={{
                    marginLeft: 10,
                    width: Dimensions.get('screen').width - 175,
                  }}>
                  <Text style={{fontWeight: 'bold', color: '#7e7e7e'}}>
                    Title:{' '}
                    <Text
                      style={{
                        fontWeight: 'normal',
                        color: 'black',
                      }}>
                      {item.title}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#7e7e7e',
                      marginTop: 5,
                    }}>
                    Provider:{' '}
                    <Text
                      style={{
                        fontWeight: 'normal',
                        color: 'black',
                      }}>
                      {item.provider}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#7e7e7e',
                      marginTop: 5,
                    }}>
                    Provided Date:{' '}
                    <Text
                      style={{
                        fontWeight: 'normal',
                        color: 'black',
                      }}>
                      {item.date}
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      backgroundColor: colors.primary,
                      height: 35,
                      width: 100,
                      marginTop: 10,
                    }}
                    activeOpacity={0.8}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: colors.white,
                      }}>
                      Details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </DashboardLayout>
  );
};

const styles = StyleSheet.create({
  trainingWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    borderColor: '#eaeaea',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  trainingImage: {
    height: Platform.OS === 'ios' ? 110 : 130,
    width: Platform.OS === 'ios' ? 110 : 130,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});
