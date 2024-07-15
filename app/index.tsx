import beachImage from '@/assets/meditation-images/beach.webp';
import { CustomButton } from '@/components';
import { AppGradient } from '@/components/AppGradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Platform, SafeAreaView, Text, View, StatusBar as sb } from 'react-native';

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <ImageBackground className="flex-1" resizeMode="cover" source={beachImage}>
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <SafeAreaView className="flex-1 px-1 justify-between">
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
              <CustomButton
                title="Get Started"
                onPress={() => router.navigate('/nature-meditate')}
              />
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
