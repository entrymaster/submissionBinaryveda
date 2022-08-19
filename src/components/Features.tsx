import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

type ProgramTileProps = {
  image: Element;
  heading: string;
  text: string;
};

export const Features: React.FC<ProgramTileProps> = ({
  image,
  heading,
  text,
}) => {
  return (
    <View style={styles.container}>
      {image}
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,
    paddingVertical: 50
  },
  heading: {
    paddingVertical: 30,
    width: 140,
    fontFamily: 'BarlowCondensed-Light',
    color: '#000',
    fontSize: 29,
  },
  description: {
    width: '95%',
    fontFamily: 'Barlow-ExtraLight',
    color: '#949494',
    fontSize: 17.5,
    lineHeight: 25,
  },
});
