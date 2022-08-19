import React from 'react';
import { View, StyleSheet} from 'react-native';
import AGCLogo from '../assets/svg/agcLogo.svg';
import ProfileIcon from '../assets/svg/group6Copy2.svg';
import PlusIcon from '../assets/svg/Plus.svg';
import BuggerIcon from '../assets/svg/Bugger.svg';

export const ProfilePageHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <AGCLogo width={86} height={28} />
      <View style={styles.iconContainer}>
        <View style={styles.profileIconContainer}>
          <ProfileIcon width={18} height={19} />
        </View>
        <PlusIcon width={17} height={17} />
        <BuggerIcon width={17} height={13} />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: '45%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIconContainer: {
    backgroundColor: '#d90034',
    padding: 7,
    borderRadius: 18,
    alignItems: 'center',
  },
});
