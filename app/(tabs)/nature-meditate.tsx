import { AppGradient } from '@/components/AppGradient';
import { MEDITATION_IMAGES } from '@/constants/images/meditations';
import { MEDITATION_DATA } from '@/constants/meditation-data';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ImageBackground, Pressable, Text, View } from 'react-native';

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">Welcome Luciano</Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                className="h-48 my-3 rounded-md overflow-hidden"
                onPress={() => console.log('pressed')}
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center"
                >
                  <LinearGradient
                    className="flex-1 justify-center items-center"
                    colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>

      <StatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;
