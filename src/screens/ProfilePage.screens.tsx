import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {ProfilePageHeader} from '../components/ProfilePageHeader';
import EditIcon from '../assets/svg/group6Copy.svg';
import UploadIcon from '../assets/svg/group10Copy.svg';
import ProfilePicture from '../assets/svg/bitmap@3x.svg';
import {Dashboard} from '../components/Dashboard';
import {theme} from '../theme';
import { ImageGallery } from '../components/ImageGallery';

export const ProfilePage: React.FC = () => {
  const [switchBtn, setSwitchBtn] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('uploads');
  return (
    <ScrollView style={styles.container}>
      <ProfilePageHeader />
      <View style={styles.profileContainer}>
        <View style={styles.buttonContainer}>
          <UploadIcon />
          <Text style={styles.buttonText}>Upload</Text>
        </View>

        <ProfilePicture width={127} height={127} />
        <View style={styles.buttonContainer}>
          <EditIcon />
          <Text style={styles.buttonText}>Edit</Text>
        </View>
      </View>
      <Text style={styles.nameText}>john.doe</Text>
      <Dashboard
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        switchBtn={switchBtn}
        setSwitchBtn={setSwitchBtn}
      />
      <ImageGallery />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary.backgroundColor,
  },
  profileContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'BarlowCondensed-Light',
    fontSize: 15,
    color: '#5c78cf',
  },
  nameText: {
    fontFamily: 'BarlowCondensed-ExtraLight',
    fontSize: 37,
    letterSpacing: -1.32,
    color: '#000',
    textAlign: 'center',
  },
});
