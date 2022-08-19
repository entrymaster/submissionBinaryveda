import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import UploadIcon from '../assets/svg/blackUpload.svg';
import ImgIcon from '../assets/svg/imgIcon.svg';
import ImgIconBlack from '../assets/svg/imgIconBlack.svg';
import RevenueIconBlack from '../assets/svg/revenueBlack.svg';
import RevenueIcon from '../assets/svg/revenueIcon.svg';

type TabsProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export const Tabs: React.FC<TabsProps> = ({activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setActiveTab('uploads')}
        style={[
          styles.tabs,
          {borderBottomColor: activeTab === 'uploads' ? '#f9b205' : '#fff'},
        ]}>
        <UploadIcon
          fill={activeTab === 'uploads' ? '#000' : '#878787'}
          height={35}
          width={29}
        />
        <Text
          style={[
            styles.tabText,
            {
              paddingBottom: 5,
              color: activeTab === 'uploads' ? '#000' : '#878787',
            },
          ]}>
          Uploads
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab('exhibitions')}
        style={[
          styles.tabs,
          {borderBottomColor: activeTab === 'exhibitions' ? '#f9b205' : '#fff'},
        ]}>
        {activeTab === 'exhibitions' ? <ImgIconBlack width={31} height={31} /> : <ImgIcon />}
        <Text
          style={[
            styles.tabText,
            {color: activeTab === 'exhibitions' ? '#000' : '#878787'},
          ]}>
          Exhibitions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab('revenue')}
        style={[
          styles.tabs,
          {borderBottomColor: activeTab === 'revenue' ? '#f9b205' : '#fff'},
        ]}>
        {activeTab === 'revenue' ? <RevenueIconBlack width={33} height={28} /> : <RevenueIcon />}
        <Text
          style={[
            styles.tabText,
            {color: activeTab === 'revenue' ? '#000' : '#878787'},
          ]}>
          Revenue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  tabs: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '25%',
    borderBottomWidth: 2,
  },
  tabText: {
    // textAlign:'center',
    fontFamily: 'Barlow-Medium',
    paddingTop: 5,
    fontSize: 15,
  },
});
