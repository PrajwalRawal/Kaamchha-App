import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import colors from '../assets/colors';
import MainLayout from '../layouts/MainLayout';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  const HomeSlider = [
    {
      title: 'Building Trust',
      body:
        'Kaamchha builds relationships between the service provider and service seeker by rewarding and appreciating work',
      image: require('../assets/Slider1.png'),
    },
    {
      title: 'Managing Labours',
      body:
        'Kaamchha links you to a new way to manage labour by providing a detailed information of an individual',
      image: require('../assets/Slider2.png'),
    },
    {
      title: 'Ensuring Growth',
      body:
        'Kaamchha promotes individual growth by providing international quality skill trainings and apprenticeship opportunities',
      image: require('../assets/Slider3.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={{position: 'relative'}}>
        <Image
          source={item.image}
          style={{
            position: 'relative',
            height: Dimensions.get('screen').height / 3.5,
            width: Dimensions.get('screen').width,
          }}
        />
        <View
          style={{
            position: 'absolute',
            // backgroundColor: 'rgba(0,0,0,0.1)',
            height: Dimensions.get('screen').height / 3.5,
            width: Dimensions.get('screen').width,
            justifyContent: 'flex-end',
            left: 10,
            bottom: 30,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            {item.title}
          </Text>
          <Text style={{color: 'white', fontSize: 14}}>{item.body}</Text>
        </View>
      </View>
    );
  };

  const [active, setActive] = useState(0);

  const StatsData = [
    {
      id: 1,
      label: 'Top Rated User',
      image: require('../assets/TopRatedUser.png'),
    },
    {
      id: 2,
      label: 'Top Rated User',
      image: require('../assets/TopRatedUser.png'),
    },
    {
      id: 3,
      label: 'Top Rated User',
      image: require('../assets/TopRatedUser.png'),
    },
    {
      id: 4,
      label: 'Top Rated User',
      image: require('../assets/TopRatedUser.png'),
    },
    {
      id: 5,
      label: 'Top Rated User',
      image: require('../assets/TopRatedUser.png'),
    },
  ];

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
  ];

  const LatestNewsData = [
    {
      id: 1,
      image: require('../assets/LatestNews.jpg'),
      title: 'Kaamchha Launch Program',
      date: 'May 31,2019',
      publisher: 'Kaamchha.org',
    },
    {
      id: 2,
      image: require('../assets/LatestNews.jpg'),
      title: 'Kaamchha Launch Program',
      date: 'May 31,2019',
      publisher: 'Kaamchha.org',
    },
    {
      id: 3,
      image: require('../assets/LatestNews.jpg'),
      title: 'Kaamchha Launch Program',
      date: 'May 31,2019',
      publisher: 'Kaamchha.org',
    },
    {
      id: 4,
      image: require('../assets/LatestNews.jpg'),
      title: 'Kaamchha Launch Program',
      date: 'May 31,2019',
      publisher: 'Kaamchha.org',
    },
    {
      id: 5,
      image: require('../assets/LatestNews.jpg'),
      title: 'Kaamchha Launch Program',
      date: 'May 31, 2019',
      publisher: 'Kaamchha.org',
    },
  ];

  const LatestTrainingsData = [
    {
      id: 1,
      title: 'Advanced Training In Bike Repair',
      image: require('../assets/Training.png'),
      seatCount: 10,
    },
    {
      id: 2,
      title: 'Advanced Training In Bike Repair',
      image: require('../assets/Training.png'),
      seatCount: 10,
    },
    {
      id: 3,
      title: 'Advanced Training In Bike Repair',
      image: require('../assets/Training.png'),
      seatCount: 10,
    },
    {
      id: 4,
      title: 'Advanced Training In Bike Repair',
      image: require('../assets/Training.png'),
      seatCount: 10,
    },
    {
      id: 5,
      title: 'Advanced Training In Bike Repair',
      image: require('../assets/Training.png'),
      seatCount: 10,
    },
  ];

  const RecentEventsData = [
    {
      id: 1,
      image: require('../assets/Events.png'),
      title: 'Skin and hair checkup/consultation',
      date: 'April 20, 2019',
      address: 'City Scape Apartment, Hattiban',
    },
    {
      id: 2,
      image: require('../assets/Events.png'),
      title: 'Skin and hair checkup/consultation',
      date: 'April 20, 2019',
      address: 'City Scape Apartment, Hattiban',
    },
    {
      id: 3,
      image: require('../assets/Events.png'),
      title: 'Skin and hair checkup/consultation',
      date: 'April 20, 2019',
      address: 'City Scape Apartment, Hattiban',
    },
    {
      id: 4,
      image: require('../assets/Events.png'),
      title: 'Skin and hair checkup/consultation',
      date: 'April 20, 2019',
      address: 'City Scape Apartment, Hattiban',
    },
    {
      id: 5,
      image: require('../assets/Events.png'),
      title: 'Skin and hair checkup/consultation',
      date: 'April 20, 2019',
      address: 'City Scape Apartment, Hattiban',
    },
  ];

  const DevelopmentPartnersData = [
    {
      id: 1,
      image: require('../assets/Nibl.png'),
    },
    {
      id: 2,
      image: require('../assets/Nibl.png'),
    },
    {
      id: 3,
      image: require('../assets/Nibl.png'),
    },
  ];

  const ProjectPartnersData = [
    {
      id: 1,
      image: require('../assets/Acton.png'),
    },
    {
      id: 2,
      image: require('../assets/AnnapurnaBikes.png'),
    },
    {
      id: 3,
      image: require('../assets/AquaTab.png'),
    },
    {
      id: 4,
      image: require('../assets/Bialetti.png'),
    },
    {
      id: 5,
      image: require('../assets/KitchenPlus.png'),
    },
    {
      id: 6,
      image: require('../assets/Snv.png'),
    },
  ];

  return (
    <MainLayout scrollview>
      <View
        style={{
          backgroundColor: colors.bgColor,
        }}>
        <View style={{position: 'relative', alignItems: 'center'}}>
          <Carousel
            ref={c => (slider1Ref = c)}
            data={HomeSlider}
            renderItem={renderItem}
            firstItem={0}
            sliderHeight={Dimensions.get('screen').height / 3.5}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={Dimensions.get('screen').width}
            itemHeight={Dimensions.get('screen').height / 3.5}
            autoplay={true}
            loop={true}
            autoplayDelay={5000}
            onSnapToItem={index => setActive(index)}
            inactiveSlideScale={1}
            inactiveSlideOpacity={0.7}
          />
          <Pagination
            dotsLength={HomeSlider.length}
            activeDotIndex={active}
            containerStyle={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              paddingVertical: 8,
              position: 'absolute',
              bottom: 0,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: colors.primary,
            }}
            inactiveDotStyle={{backgroundColor: 'white'}}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 20,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Kaamchha Stats
          </Text>
          <FlatList
            style={{
              marginLeft: -10,
              marginRight: -10,
              paddingLeft: 10,
              marginBottom: 20,
            }}
            data={StatsData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginRight: 30,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.white,
                      borderRadius: 70,
                      width: 80,
                      height: 80,
                    }}
                    activeOpacity={0.6}>
                    <Image
                      style={{height: 80, width: 80, resizeMode: 'contain'}}
                      source={item.image}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 10,
                      color: '#555',
                      fontSize: 12,
                      textAlign: 'center',
                    }}>
                    {item.label}
                  </Text>
                </View>
              );
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Categories
          </Text>
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
                    flex: 1,
                    flexDirection: 'column',
                    borderWidth: 1,
                    borderColor: '#eaeaea',
                    padding: 10,
                  }}>
                  <TouchableOpacity
                    style={{backgroundColor: 'white', alignItems: 'center'}}
                    activeOpacity={0.7}>
                    <Image
                      source={item.image}
                      style={{height: 60, width: 60, resizeMode: 'contain'}}
                    />
                    <Text style={{marginTop: 15, color: '#555'}}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Latest News
          </Text>
          <FlatList
            style={{
              marginLeft: -10,
              marginRight: -10,
              paddingLeft: 10,
              marginBottom: 20,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={LatestNewsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginRight: 15,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: '#eaeaea',
                      borderRadius: 5,
                    }}
                    activeOpacity={0.7}>
                    <Image
                      source={item.image}
                      style={{
                        height: 200,
                        width: 300,
                        resizeMode: 'cover',
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      }}
                    />
                    <View style={{padding: 10}}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 16,
                          color: colors.primary,
                        }}>
                        {item.title.length > 25
                          ? item.title.slice(0, 25) + '..'
                          : item.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: 15,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Icon name="calendar-o" size={15} />
                          <Text style={{marginLeft: 5, color: '#9E9FA0'}}>
                            {item.date}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Icon name="user-o" size={15} />
                          <Text style={{marginLeft: 5, color: '#9E9FA0'}}>
                            {item.publisher}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Latest Trainings
          </Text>
          <FlatList
            style={{
              marginLeft: -10,
              marginRight: -10,
              paddingLeft: 10,
              marginBottom: 20,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={LatestTrainingsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginRight: 15,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: '#eaeaea',
                      borderRadius: 5,
                    }}
                    activeOpacity={0.7}>
                    <Image
                      source={item.image}
                      style={{
                        height: 200,
                        width: 300,
                        resizeMode: 'contain',
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      }}
                    />
                    <View style={{padding: 10}}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.primary,
                        }}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 10,
                        }}>
                        <Icon name="user-o" size={15} />
                        <Text style={{marginLeft: 5, color: '#9E9FA0'}}>
                          Seats Remaining :{' '}
                          <Text style={{color: 'black'}}>{item.seatCount}</Text>
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          marginTop: 10,
                          backgroundColor: colors.primary,
                          padding: 5,
                          borderRadius: 5,
                          height: 35,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{color: colors.white}}>Book Now</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Recent Events
          </Text>
          <FlatList
            style={{
              marginLeft: -10,
              marginRight: -10,
              paddingLeft: 10,
              marginBottom: 20,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={RecentEventsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginRight: 15,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: '#eaeaea',
                      borderRadius: 5,
                    }}
                    activeOpacity={0.7}>
                    <Image
                      source={item.image}
                      style={{
                        height: 200,
                        width: 300,
                        resizeMode: 'contain',
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      }}
                    />
                    <View style={{padding: 10}}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.primary,
                        }}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 15,
                        }}>
                        <Icon name="calendar-o" size={15} />
                        <Text style={{marginLeft: 5, color: '#9E9FA0'}}>
                          {item.date}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 15,
                        }}>
                        <Icon name="location-arrow" size={15} />
                        <Text style={{marginLeft: 5, color: '#9E9FA0'}}>
                          {item.address}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Kaamchha Apprenticeship
          </Text>
          <Image
            source={require('../assets/Apprenticeship.png')}
            style={{
              height: 60,
              marginBottom: 20,
              width: Dimensions.get('screen').width - 20,
              resizeMode: 'cover',
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Development Partners
          </Text>
          <FlatList
            style={{
              marginLeft: -10,
              marginRight: -10,
              marginBottom: 20,
              paddingLeft: 10,
              backgroundColor: colors.white,
            }}
            data={DevelopmentPartnersData}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    padding: 5,
                    marginRight: 15,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 280,
                      height: 100,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Project Partners
          </Text>
          <FlatList
            style={{
              marginLeft: -10,
              marginRight: -10,
              marginBottom: 20,
              paddingLeft: 10,
              backgroundColor: colors.white,
            }}
            data={ProjectPartnersData}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    // borderWidth: 1,
                    // borderColor: '#eaeaea',
                    padding: 5,
                    marginRight: 15,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: Dimensions.get('screen').width / 3.2,
                      height: 100,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </MainLayout>
  );
};
