import React from 'react';
import {SafeAreaView, Text, ScrollView, Image, View} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import style from './style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView contentContainerStyle={globalStyles.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default.jpeg')}
            />
          </View>
        </View>

        <Text style={style.userName}>Emmanuel Robertsen</Text>
        <View style={style.statContainer}>
          {/* Following */}
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>

          {/* Border */}
          <View style={style.statBorder} />

          {/* Followers */}
          <View>
            <Text style={style.statAmount}>30M</Text>
            <Text style={style.statType}>Followers</Text>
          </View>

          {/* Border */}
          <View style={style.statBorder} />

          {/* Posts */}
          <View>
            <Text style={style.statAmount}>100</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>

        <View style={globalStyles.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
