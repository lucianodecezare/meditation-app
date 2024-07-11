import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  containerStyles?: string;
  onPress: () => void;
  textStyles?: string;
  title: string;
}

export const CustomButton = ({
  containerStyles = '',
  onPress,
  textStyles = '',
  title,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white items-center justify-center min-h-[62px] rounded-xl ${containerStyles}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};
