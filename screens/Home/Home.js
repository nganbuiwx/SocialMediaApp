import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'John',
      id: 1,
      profileImage: require('../../assets/images/default.jpeg'),
    },
    {
      firstName: 'Joseph',
      id: 2,
      profileImage: require('../../assets/images/default.jpeg'),
    },
    {
      firstName: 'Jenny',
      id: 3,
      profileImage: require('../../assets/images/default.jpeg'),
    },
    {
      firstName: 'Lisa',
      id: 4,
      profileImage: require('../../assets/images/female.jpeg'),
    },
    {
      firstName: 'Johnson',
      id: 5,
      profileImage: require('../../assets/images/default.jpeg'),
    },
    {
      firstName: 'Lona',
      id: 6,
      profileImage: require('../../assets/images/default.jpeg'),
    },
    {
      firstName: 'Russian',
      id: 7,
      profileImage: require('../../assets/images/female.jpeg'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Russian',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
      image: require('../../assets/images/female.jpeg'),
      profileImage: require('../../assets/images/female.jpeg'),
    },
    {
      firstName: 'Lona',
      lastName: 'Doe',
      location: 'Los Anglos, MA',
      likes: 2204,
      comments: 10,
      bookmarks: 11,
      id: 2,
      image: require('../../assets/images/post.jpeg'),
      profileImage: require('../../assets/images/default.jpeg'),
    },
    {
      firstName: 'Johnson',
      lastName: 'Leda',
      location: 'Washington, US',
      likes: 1123,
      comments: 122,
      image: require('../../assets/images/post.jpeg'),
      bookmarks: 25,
      id: 3,
      profileImage: require('../../assets/images/default.jpeg'),
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'Washington, US',
      likes: 1123,
      comments: 122,
      image: require('../../assets/images/female.jpeg'),
      bookmarks: 25,
      id: 4,
      profileImage: require('../../assets/images/default.jpeg'),
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'Washington, US',
      likes: 1123,
      comments: 122,
      image: require('../../assets/images/female.jpeg'),
      bookmarks: 25,
      id: 5,
      profileImage: require('../../assets/images/default.jpeg'),
    },
  ];
  // User stories list
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  // User posts list
  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  // Pagination
  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    //user stories
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    //user posts
    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserStories(false);
  }, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      {/* User post */}
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              {/* Header */}
              <View style={style.header}>
                <Title title={'Let’s Explore'} />
                <TouchableOpacity
                  style={style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={20}
                    color={'#898DAE'}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* User story */}
              <View style={style.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) return;
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={userPosts}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                location={item.location}
                profileImage={item.profileImage}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
