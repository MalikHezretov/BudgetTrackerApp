import React from 'react';
import T from 'prop-types';
import { StyleSheet, View, Text, Image, ViewPropTypes } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';
import fontWeights from '../../styles/fontWeights';


const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    paddingTop: dimensions.halfIndent,
    textAlign: 'center',
    fontSize: fontSizes.medium,
    color: colors.greyDarker,
    fontWeight: fontWeights.semiBold,
  },
  image: {
    height: 100,
    opacity: 0.5,
    marginTop: 50
  },

});

const sadSmile = require('../../assets/images/noTransaction.png');

const EmptyList = ({ containerStyle, text = 'No transactions so far' }) => (
  <View style={[s.container, containerStyle]}>
    <Image
      style={s.image}
      resizeMode="contain"
      source={sadSmile}
    />
    <Text style={s.emptyText}>{text}</Text>

  </View>
);

EmptyList.propTypes = {
  text: T.string,
  containerStyle: ViewPropTypes.style,
};

export default EmptyList;
