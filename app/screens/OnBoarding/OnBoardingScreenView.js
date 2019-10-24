import React from 'react';
import T from 'prop-types';
import { View, Text, Image, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';

import s from './styles';
import { Button } from '../../components';
import { colors } from '../../styles';

const slides = [{
  source: require('../../assets/images/consultation.png'),
  text: 'Easily track your expenses',
}, {
  source: require('../../assets/images/target.png'),
  text: 'Concentrate on your goals, not budgeting',
}, {
  source: require('../../assets/images/graph.png'),
  text: 'New era for your finance',
}];


const OnBoarding = ({
   onSignIn,
}) => (
  <View style={s.root}>
    <StatusBar translucent={true} backgroundColor={colors.blue} />
    <Swiper
      style={s.container}
      dot={<View style={s.dot} />}
      activeDot={<View style={[s.dot, s.activeDot]} />}
      paginationStyle={s.paginationStyle}
      loop={false}
    >
      {slides.map(({ source, text }) => (
        <View style={s.slide} key={source}>
          <Image
            style={[s.image, {height: 180, width: 180}]}
            resizeMode="contain"
            source={source}
          />
          <Text style={[s.text, {marginTop: 10}]}>{text}</Text>
        </View>
      ))}
    </Swiper>
    <Button secondaryOpacity title="Let's go" onPress={onSignIn} />
  </View>
  );

OnBoarding.navigationOptions = ({
  header: null,
});

OnBoarding.propTypes = {
  onSignIn: T.func,
};

export default OnBoarding;
