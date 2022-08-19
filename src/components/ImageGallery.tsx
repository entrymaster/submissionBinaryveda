import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';

export const ImageGallery: React.FC = () => {
  const windowWidth = Dimensions.get('window').width;
  const edge = (windowWidth - 40 - 6) / 2;
  return (
    <View style={{padding: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          style={{width: edge, height: edge}}
          source={require('../assets/gallery-1.png')}
        />
        <Image
          style={{width: edge, height: edge}}
          source={require('../assets/gallery-2.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 6,
        }}>
        <Image
          style={{width: edge, height: edge}}
          source={require('../assets/gallery-3.png')}
        />
        <Image
          style={{width: edge, height: edge}}
          source={require('../assets/gallery-4.png')}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          style={{width: edge, height: edge}}
          source={require('../assets/gallery-5.png')}
        />
        <Image
          style={{width: edge, height: edge}}
          source={require('../assets/gallery-6.png')}
        />
      </View>
    </View>
  );
};
