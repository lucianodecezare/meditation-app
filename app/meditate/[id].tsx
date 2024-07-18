import { CustomButton } from '@/components';
import { AppGradient } from '@/components/AppGradient';
import { MEDITATION_IMAGES } from '@/constants/images/meditations';
import { AUDIO_FILES, MEDITATION_DATA } from '@/constants/meditation-data';
import { TimerContext } from '@/context/TimerContext';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const { duration: secondsRemaining, setDuration } = useContext(TimerContext);
  const [isMeditating, setMeditating] = useState(false);
  const [isPlayingAudio, setPlayingAudio] = useState(false);
  const [audioSound, setSound] = useState<Audio.Sound>();
  const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, '0');
  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, '0');

  const handleAdjustDuration = () => {
    if (isMeditating) {
      toggleMeditationSessionStatus();
    }

    router.push('/(modal)/adjust-meditation-duration');
  };

  const toggleMeditationSessionStatus = async () => {
    if (secondsRemaining === 0) {
      setDuration(10);
    }

    setMeditating(!isMeditating);

    await toggleSound();
  };

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound();
    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !!isPlayingAudio) {
      await sound.playAsync();

      setPlayingAudio(true);
    } else {
      await sound.pauseAsync();

      setPlayingAudio(false);
    }
  };

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

    setSound(sound);

    return sound;
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      setMeditating(false);

      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      setDuration(10);
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']}>
          <Pressable onPress={() => router.back()} className="absolute top-14 left-6">
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButton title="Adjust Duration" onPress={handleAdjustDuration} />
            <CustomButton
              containerStyles="mt-4"
              title={isMeditating ? 'Stop' : 'Start Meditation'}
              onPress={toggleMeditationSessionStatus}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
