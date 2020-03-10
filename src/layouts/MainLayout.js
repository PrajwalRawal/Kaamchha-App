import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
  Text,
  Image,
} from 'react-native';
import {Root, ActionSheet, Button} from 'native-base';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/AntDesign';

export default ({children, scrollview}) => {
  const options = ['EN', 'NP', 'Cancel'];
  const images = [
    require('../assets/English.png'),
    require('../assets/Nepali.png'),
    'Cancel',
  ];

  const [lang, setLang] = useState('EN');
  const [image, setImage] = useState(require('../assets/English.png'));

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar translucent barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: colors.white,
            height: 60,
            borderBottomColor: colors.grey,
            borderBottomWidth: 1,
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}>
          <View
            style={{
              margin: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: 45,
                backgroundColor: colors.grey,
                borderRadius: 5,
                padding: 10,
                width: Dimensions.get('screen').width - 100,
              }}>
              <Icon name="search1" size={25} color={colors.primary} />
              <TextInput
                style={{
                  color: 'black',
                  fontSize: 14,
                  marginLeft: 10,
                  width: Dimensions.get('screen').width - 120,
                }}
                placeholder="Search"
              />
            </View>
            <View>
              <Root>
                <Button
                  style={{
                    width: 60,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: colors.grey,
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: 10,
                  }}
                  onPress={() =>
                    ActionSheet.show(
                      {
                        options: options,
                        cancelButtonIndex: 2,
                        title: 'Choose Your Preferred Language',
                      },
                      args => {
                        if (args !== 2) {
                          setLang(options[args]);
                          setImage(images[args]);
                        }
                      },
                    )
                  }>
                  <Image source={image} style={{width: 15, height: 15}} />
                  <Text
                    style={{
                      color: colors.white,
                      fontSize: 16,
                      marginLeft: 5,
                    }}>
                    {lang}
                  </Text>
                </Button>
              </Root>
            </View>
          </View>
        </View>
      </SafeAreaView>
      {scrollview ? (
        <ScrollView
          style={{
            height:
              Platform.OS === 'ios'
                ? Dimensions.get('screen').height - 140
                : Dimensions.get('screen').height -
                  120 -
                  StatusBar.currentHeight,
          }}>
          {children}
        </ScrollView>
      ) : (
        <View
          style={{
            height:
              Platform.OS === 'ios'
                ? Dimensions.get('screen').height - 140
                : Dimensions.get('screen').height -
                  120 -
                  StatusBar.currentHeight,
          }}>
          {children}
        </View>
      )}
    </View>
  );
};
