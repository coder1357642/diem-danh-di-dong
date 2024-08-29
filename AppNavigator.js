// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './App'; // Trang Đăng Nhập
import ThoiKhoaBieu from './ThoiKhoaBieu'; // Trang Lịch Học

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={App} options={{ title: 'Đăng Nhập' }} />
        <Stack.Screen name="ThoiKhoaBieu" component={ThoiKhoaBieu} options={{ title: 'Lịch Học' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
