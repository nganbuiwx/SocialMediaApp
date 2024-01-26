import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  const userStories = [
    {
      firstName: 'John',
      id: 1,
      profileImage: require('./assets/images/default.jpeg'),
    },
    {
      firstName: 'Joseph',
      id: 2,
      profileImage: require('./assets/images/default.jpeg'),
    },
    {
      firstName: 'Jenny',
      id: 3,
      profileImage: require('./assets/images/default.jpeg'),
    },
    {
      firstName: 'Lisa',
      id: 4,
      profileImage: require('./assets/images/female.jpeg'),
    },
    {
      firstName: 'Johnson',
      id: 5,
      profileImage: require('./assets/images/default.jpeg'),
    },
    {
      firstName: 'Lona',
      id: 6,
      profileImage: require('./assets/images/default.jpeg'),
    },
    {
      firstName: 'Russian',
      id: 7,
      profileImage: require('./assets/images/female.jpeg'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={'Let’s Explore'} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
