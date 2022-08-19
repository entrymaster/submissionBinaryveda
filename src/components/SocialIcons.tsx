import React from 'react';
import {StyleSheet, View} from 'react-native';
import FacebookIcon from '../assets/svg/Facebook.svg';
import InstagramIcon from '../assets/svg/Instagram.svg';

export const SocialIcons: React.FC = () => {
  return (
    <View style={styles.container}>
      <FacebookIcon style={{marginRight:12}} width={32} height={32} />
      <InstagramIcon width={32} height={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 25
  },
});
