import React, {useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/Feather';
import Stars from 'react-native-stars';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from 'react-native-slider';
import {Tabs, TabHeading, Tab} from 'native-base';
import {Table, Row, Rows} from 'react-native-table-component';

export default ({navigation}) => {
  const [index, setIndex] = useState(70);

  const handleIndexChange = val => {
    setIndex(val);
  };

  const Tab1 = () => {
    const AssociationsData = [
      {
        id: 1,
        image: require('../assets/Associate1.png'),
        name: 'Dharam Chand Sharma',
        age: '21',
        experience: '2',
        rating: 4,
      },
      {
        id: 2,
        image: require('../assets/Associate2.png'),
        name: 'Suresh Mukhiya',
        age: '37',
        experience: '10',
        rating: 2,
      },
    ];
    return (
      <View style={{margin: 10}}>
        <FlatList
          data={AssociationsData}
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
                        fontSize: 14,
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
                    Age: <Text style={{color: '#555'}}>{item.age}</Text>
                  </Text>
                  <Text style={{marginTop: 5}}>
                    Experience:{' '}
                    <Text style={{color: '#555'}}>{item.experience} yrs</Text>
                  </Text>
                  <View style={{flexDirection: 'row-reverse'}}>
                    <Stars
                      default={item.rating}
                      count={5}
                      half={true}
                      starSize={15}
                      fullStar={
                        <IconM name={'star'} size={15} color={colors.orange} />
                      }
                      emptyStar={<IconM name={'star'} size={15} color="#555" />}
                      halfStar={
                        <IconM
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
    );
  };

  const Tab2 = () => {
    const SkillsHeading = [
      'S.N',
      'NAME',
      'PROVIDING ORGANIZATION',
      'RECEIVED DATE',
    ];
    const SkillsData = [
      ['1', 'S.L.C', 'Nepal Government', '2019-02-10'],
      ['2', '+2', 'HSEB', '2019-02-10'],
    ];
    return (
      <View style={{margin: 10}}>
        <Table
          borderStyle={{
            borderWidth: 1,
            borderColor: colors.primary,
          }}>
          <Row
            data={SkillsHeading}
            flexArr={[0.7, 0.8, 2.5, 1.5]}
            style={{height: 40}}
            textStyle={{textAlign: 'center'}}
          />
          <Rows
            data={SkillsData}
            flexArr={[0.7, 0.8, 2.5, 1.5]}
            style={{height: 40}}
            textStyle={{fontSize: 12, textAlign: 'center'}}
          />
        </Table>
      </View>
    );
  };

  const Tab3 = () => {
    const TrainingsData = [
      {
        id: 1,
        image: require('../assets/KaamchhaTraining.png'),
        title: 'MSP-002 (DYIDIY Training - Sofa and Chair Fitting)',
        provider: 'Kaamchha',
        date: '2019-06-22',
      },
      {
        id: 2,
        image: require('../assets/KaamchhaTraining.png'),
        title: 'MSP-001-DYI (DIY Training on Modular Furniture)',
        provider: 'Kaamchha',
        date: '2019-06-22',
      },
    ];
    return (
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
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <MainLayout title="Samsad Ansari" navigation={navigation} scrollview>
      <View
        style={{
          margin: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: Dimensions.get('screen').width - 20,
          }}>
          <Image
            source={require('../assets/Person.jpg')}
            style={{
              height: 160,
              width: 140,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
          <View
            style={{
              marginLeft: 10,
              width: Dimensions.get('screen').width - 170,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Devender Sharma
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  padding: 5,
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 35,
                }}>
                <Icon name="thumbs-up" size={15} color={colors.white} />
                <Text style={{marginLeft: 5, color: colors.white}}>
                  Hire Me
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 16, color: '#7e7e7e', fontWeight: 'bold'}}>
              Phone:{' '}
              <Text style={{color: '#7e7e7e', fontWeight: 'normal'}}>
                9851221874
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#7e7e7e',
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              Gender:{' '}
              <Text style={{color: '#7e7e7e', fontWeight: 'normal'}}>Male</Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#7e7e7e',
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              Age:{' '}
              <Text style={{color: '#7e7e7e', fontWeight: 'normal'}}>
                39 yrs
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#7e7e7e',
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              Experience:{' '}
              <Text style={{color: '#7e7e7e', fontWeight: 'normal'}}>
                15 yrs
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#7e7e7e',
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                Status:{' '}
                <Text style={{color: 'green', fontWeight: 'normal'}}>
                  Active
                </Text>
              </Text>
              <Stars
                default={4}
                count={5}
                half={true}
                starSize={20}
                fullStar={
                  <IconM name={'star'} size={15} color={colors.orange} />
                }
                emptyStar={<IconM name={'star'} size={15} color="#555" />}
                halfStar={
                  <IconM name={'star-half'} size={15} color={colors.orange} />
                }
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Address</Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{marginTop: 10, width: '50%'}}>
              <Text style={{fontSize: 16, color: '#7e7e7e'}}>Location</Text>
              <Text>Gwarko</Text>
            </View>
            <View style={{marginTop: 10, width: '50%'}}>
              <Text style={{fontSize: 16, color: '#7e7e7e'}}>City</Text>
              <Text>Lalitpur</Text>
            </View>
            <View style={{marginTop: 10, width: '50%'}}>
              <Text style={{fontSize: 16, color: '#7e7e7e'}}>District</Text>
              <Text>Lalitpur</Text>
            </View>
            <View style={{marginTop: 10, width: '50%'}}>
              <Text style={{fontSize: 16, color: '#7e7e7e'}}>Zone</Text>
              <Text>Central Development Zone</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Skill Index</Text>
            <Text style={{fontSize: 20, color: colors.primary}}>
              {index.toFixed(0)}
            </Text>
          </View>
          <Slider
            style={{
              marginTop: 10,
              width: Dimensions.get('screen').width - 40,
              height: 40,
            }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor="#ccc"
            thumbTintColor={colors.primary}
            onValueChange={val => handleIndexChange(val)}
            value={index}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>0</Text>
            <Text>100</Text>
          </View>
        </View>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Tabs tabBarUnderlineStyle={{backgroundColor: colors.primary}}>
            <Tab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: colors.white,
                  }}>
                  <Text style={{fontSize: 12}}>Associations</Text>
                </TabHeading>
              }>
              <Tab1 />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: colors.white}}>
                  <Text style={{fontSize: 12}}>Skills & Certificates</Text>
                </TabHeading>
              }>
              <Tab2 />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: colors.white}}>
                  <Text style={{fontSize: 12}}>Kaamchha Trainings</Text>
                </TabHeading>
              }>
              <Tab3 />
            </Tab>
          </Tabs>
        </View>
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
    marginBottom: 5,
    backgroundColor: 'white',
  },
  peopleImage: {
    height: 75,
    width: 75,
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
  trainingWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    borderColor: '#eaeaea',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  trainingImage: {
    height: 110,
    width: 110,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});
