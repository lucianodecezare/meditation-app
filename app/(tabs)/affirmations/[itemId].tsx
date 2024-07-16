import { AppGradient } from '@/components/AppGradient';
import { AFFIRMATION_GALLERY } from '@/constants/affirmation-gallery';
import { GalleryPreviewData } from '@/constants/models/affirmation-category';
import { AntDesign } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>();

  useEffect(() => {
    for (let index = 0; index < AFFIRMATION_GALLERY.length; index++) {
      const affirmationsData = AFFIRMATION_GALLERY[index].data;
      const affirmationToStart = affirmationsData.find(
        (affirmation) => affirmation.id === Number(itemId)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmationsArray = affirmationToStart.text.split('.');

        if (affirmationsArray[affirmationsArray.length - 1] === '') {
          affirmationsArray.pop();
        }

        setSentences(affirmationsArray);

        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground source={affirmation?.image} resizeMode="cover" className="flex-1">
        <AppGradient colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.9)']}>
          <Pressable onPress={() => router.back()} className="absolute top-14 left-6">
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentences?.map((sentence, index) => (
                  <Text key={index} className="text-white text-3xl mb-6 font-bold text-center">
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;