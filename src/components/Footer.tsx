import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FooterLogo from '../assets/svg/combinedShape_2x.svg';
import CopyrightIcon from '../assets/svg/invalidName_3x.svg';

export const Footer: React.FC = () => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <View style={styles.itemContainer}>
        <FooterLogo
          style={{alignSelf: 'center', marginVertical: 23}}
          width={255}
          height={28}
        />
        <View style={styles.linksContainer}>
          <View>
            <Text style={styles.footerLinks}>About Us.</Text>
            <Text style={styles.footerLinks}>Team.</Text>
            <Text style={styles.footerLinks}>Reach Us.</Text>
          </View>
          <View style={{paddingRight: 30}}>
            <Text style={styles.footerLinks}>Affiliattions.</Text>
            <Text style={styles.footerLinks}>Disclaimers.</Text>
            <Text style={styles.footerLinks}>Privacy Policy.</Text>
          </View>
        </View>
      </View>
      <View style={styles.copyRightContainer}>
        <CopyrightIcon width={24} />
        <Text style={styles.copyRightText}> Content Copyright reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#d8d8d8',
  },
  copyRightContainer: {
    flexDirection: 'row',
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 45,
    paddingBottom: 25,
  },
  footerLinks: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 17,
    color: '#000',
    lineHeight: 40,
  },
  copyRightText: {
    fontFamily: 'BarlowCondensed-Light',
    color: '#000',
    fontSize: 17,
  },
});
