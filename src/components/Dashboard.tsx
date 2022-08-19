import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {statsData, palletteData} from '../data';
import HeartIcon from '../assets/svg/heart.svg';
import PointerIcon from '../assets/svg/pointer.svg';
import ShareIcon from '../assets/svg/share.svg';
import {Tabs} from './Tabs';

type DashboardProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  switchBtn: boolean;
  setSwitchBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Dashboard: React.FC<DashboardProps> = ({
  activeTab,
  setActiveTab,
  switchBtn,
  setSwitchBtn,
}) => {
  return (
    <View style={{padding: 20}}>
      <View style={styles.itemContainer}>
        <Text style={styles.dashboardTitle}>My dashboard</Text>
        <TouchableOpacity
          onPress={() => setSwitchBtn(!switchBtn)}
          activeOpacity={1}
          style={[
            styles.toggleButton,
            {backgroundColor: switchBtn ? '#44a33d' : '#d90034'},
          ]}>
          <View
            style={
              switchBtn
                ? [styles.circle, {right: 0}]
                : [styles.circle, {left: 0}]
            }>
            <View style={styles.innerCircle} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.statsContainer}>
        {statsData.map((item, index) => (
          <View key={index}>
            <Text style={styles.value}>{item.value}</Text>
            <Text style={styles.heading}>{item.heading}</Text>
          </View>
        ))}
      </View>
      <View style={styles.reactions}>
        <View style={styles.reactionContainer}>
          <HeartIcon />
          <Text style={styles.reactionText}>120</Text>
        </View>
        <View style={styles.reactionContainer}>
          <PointerIcon />
          <Text style={styles.reactionText}>43K</Text>
        </View>
        <View style={styles.reactionContainer}>
          <ShareIcon />
          <Text style={styles.reactionText}>2.3K</Text>
        </View>
      </View>
      <View style={styles.palleteContainer}>
        {palletteData.map((item, index) => (
          <View
            style={[styles.palleteItems, {backgroundColor: item.color}]}
            key={index}>
            {index === 0 && <Text style={styles.palleteText}>pallette</Text>}
          </View>
        ))}
      </View>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dashboardTitle: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'BarlowCondensed-Light',
  },
  toggleButton: {
    width: 50,
    height: 20,
    borderRadius: 10,
  },
  circle: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: -3,
    backgroundColor: '#fff',
    borderRadius: 13,
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15,
  },
  innerCircle: {
    height: 5,
    width: 5,
    borderRadius: 3,
    backgroundColor: '#275e23',
    position: 'absolute',
    top: 9.5,
    left: 9.5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
  },
  value: {
    fontFamily: 'BarlowCondensed-Light',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    lineHeight: 29,
  },
  heading: {
    fontFamily: 'BarlowCondensed-Light',
    fontSize: 15,
    lineHeight: 24,
    color: '#000',
    textAlign: 'center',
  },
  reactions: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  reactionText: {
    fontFamily: 'Barlow-ExtraLight',
    fontSize: 19,
    paddingLeft: 5,
    color: '#000',
  },
  palleteContainer: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
  },
  palleteItems: {
    width: '20%',
    justifyContent: 'center',
  },
  palleteText: {
    color: '#fff',
    textAlign: 'center',
  },
});
