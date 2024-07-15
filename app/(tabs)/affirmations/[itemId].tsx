import { AFFIRMATION_GALLERY } from '@/constants/affirmation-gallery';
import { GalleryPreviewData } from '@/constants/models/affirmation-category';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();

  useEffect(() => {
    for (let index = 0; index < AFFIRMATION_GALLERY.length; index++) {
      const affirmationsData = AFFIRMATION_GALLERY[index].data;
      const affirmationToStart = affirmationsData.find(
        (affirmation) => affirmation.id === Number(itemId)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <Text>AffirmationPractice</Text>
    </View>
  );
};

export default AffirmationPractice;
