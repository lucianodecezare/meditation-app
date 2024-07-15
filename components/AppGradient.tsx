import { LinearGradient } from 'expo-linear-gradient';
import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppGradientComponent = ({ children, colors }: { children: any; colors: string[] }) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>
    </LinearGradient>
  );
};

export const AppGradient = memo(AppGradientComponent);
