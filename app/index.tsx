import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Platform, SafeAreaView, Text, View, StatusBar as sb } from 'react-native';

import beachImage from '@/assets/meditation-images/beach.webp';
import { CustomButton } from '@/components';

const App = () => {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <ImageBackground className="flex-1" resizeMode="cover" source={beachImage}>
        <LinearGradient className="flex-1" colors={['rgba(0, 0, 0, 0.4', 'rgba(0, 0, 0, 0.8']}>
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View
              style={{
                backgroundColor: 'transparent',
                paddingTop: Platform.OS === 'android' ? sb.currentHeight : 0,
              }}
            >
              <Text className="font-bold text-4xl text-center text-white">Simple Meditation</Text>
              <Text className="font-2xl mt-3 text-center text-white">
                Simplifying Meditation For Everyone
              </Text>
            </View>
            <View>
              <CustomButton title="Get Started" onPress={() => console.log('tapped')} />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
