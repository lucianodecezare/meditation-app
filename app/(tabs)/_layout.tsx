import { COLORS } from '@/constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: COLORS.primary }}>
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: 'Meditate',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="flower-tulip" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
