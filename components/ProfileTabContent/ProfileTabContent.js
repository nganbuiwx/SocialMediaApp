import React from 'react';
import {Image, View} from 'react-native';
import style from './style';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContainer}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default.jpeg')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default.jpeg')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
