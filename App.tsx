import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';


const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginLeft: 27,
          marginRight: 17,
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Title title={'Let’s Explore'} />
        <TouchableOpacity
          style={{padding: 14, borderRadius: 100, backgroundColor: '#F9FAFB'}}>
          <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
