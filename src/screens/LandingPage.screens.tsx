import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderImage from '../assets/svg/combinedShape.svg';
import BannerImage from '../assets/svg/Test_2.svg';
import RightArrowIcon from '../assets/svg/group3Copy.svg';
import RightArrowIconBlue from '../assets/svg/group3Copy3.svg';
import {useNavigation} from '@react-navigation/native';
import {Features} from '../components/Features';
import {featuresData} from '../data';
import {SocialIcons} from '../components/SocialIcons';
import {Footer} from '../components/Footer';

export const LandingPage: React.FC = () => {
  const navigation = useNavigation();
  const scale = Dimensions.get('window').width / 375;

  return (
    <ScrollView style={styles.container}>
      <View style={{paddingTop: 31, paddingBottom: 7, paddingLeft: 24}}>
        <HeaderImage width={212 * scale} />
      </View>
      <View style={{alignItems: 'center'}}>
        <BannerImage width={375 * scale} />
      </View>
      <Text style={styles.imageText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Text>
      <View style={styles.registerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfilePage')}
          style={styles.registerBtn}>
          <RightArrowIcon width={20} height={18} />
          <Text style={styles.registerBtnText}>register</Text>
        </TouchableOpacity>
        <Text style={styles.registerBtnSideText}>me as a collector</Text>
      </View>
      <View style={styles.trackContainer}>
        <RightArrowIconBlue width={12} height={11} />
        <Text style={styles.trackText}>track my application</Text>
      </View>
      {featuresData.map((item, index) => (
        <Features
          key={index}
          image={item.image}
          heading={item.heading}
          text={item.text}
        />
      ))}
      <SocialIcons />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageText: {
    width: '80%',
    paddingTop: 33,
    alignSelf: 'center',
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'Barlow-ExtraLight',
    letterSpacing: -0.6,
    fontSize: 17,
    color: '#000',
  },
  registerContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 40,
  },
  registerBtn: {
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb5453',
    borderRadius: 9,
  },
  registerBtnText: {
    letterSpacing: -1.17,
    paddingBottom: 10,
    paddingLeft: 8,
    fontFamily: 'BarlowCondensed-ExtraLight',
    color: '#fff',
    fontSize: 33,
  },
  registerBtnSideText: {
    letterSpacing: -1.17,
    paddingLeft: 7,
    fontFamily: 'BarlowCondensed-ExtraLight',
    color: '#000',
    fontSize: 33,
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 33,
  },
  trackText: {
    letterSpacing: -0.88,
    paddingLeft: 7,
    paddingBottom: 10,
    fontFamily: 'BarlowCondensed-ExtraLight',
    color: '#577bdf',
    fontSize: 25,
  },
});
