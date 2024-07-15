import { AppGradient } from '@/components/AppGradient';
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery';
import { AFFIRMATION_GALLERY } from '@/constants/affirmation-gallery';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((affirmation) => (
              <GuidedAffirmationsGallery
                key={affirmation.title}
                title={affirmation.title}
                previews={affirmation.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
