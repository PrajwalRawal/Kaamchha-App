import React, {useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/Feather';
import Stars from 'react-native-stars';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from 'react-native-slider';
import {Container, Tabs, TabHeading, Tab} from 'native-base';

export default ({navigation}) => {
  const [index, setIndex] = useState(0);

  const handleIndexChange = val => {
    setIndex(val);
  };

  const Tab1 = () => {
    return (
      <View style={{margin: 10}}>
        <Text>Associations</Text>
      </View>
    );
  };

  const Tab2 = () => {
    return (
      <View style={{margin: 10}}>
        <Text>Skills & Certificates</Text>
      </View>
    );
  };

  const Tab3 = () => {
    return (
      <View style={{margin: 10}}>
        <Text>Kaamchha Training</Text>
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
                Samsad Ansari
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
                9880158777
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
              <Text style={{color: '#7e7e7e', fontWeight: 'normal'}}>N/A</Text>
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
                0 yrs
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
                default={5}
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
              <Text>New Road</Text>
            </View>
            <View style={{marginTop: 10, width: '50%'}}>
              <Text style={{fontSize: 16, color: '#7e7e7e'}}>City</Text>
              <Text>Kathmandu</Text>
            </View>
            <View style={{marginTop: 10, width: '50%'}}>
              <Text style={{fontSize: 16, color: '#7e7e7e'}}>District</Text>
              <Text>Kathmandu</Text>
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
        <Container>
          <Tabs tabBarUnderlineStyle={{backgroundColor: colors.primary}}>
            <Tab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: colors.bgColor,
                  }}>
                  <Text style={{fontSize: 12}}>Associations</Text>
                </TabHeading>
              }>
              <Tab1 />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: colors.bgColor}}>
                  <Text style={{fontSize: 12}}>Skills & Certificates</Text>
                </TabHeading>
              }>
              <Tab2 />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: colors.bgColor}}>
                  <Text style={{fontSize: 12}}>Kaamchha Trainings</Text>
                </TabHeading>
              }>
              <Tab3 />
            </Tab>
          </Tabs>
        </Container>
      </View>
    </MainLayout>
  );
};
