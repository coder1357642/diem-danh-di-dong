import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ThoiKhoaBieuScreen from './ThoiKhoaBieu';  // Đảm bảo đường dẫn đúng
import BuoiHocScreen from './BuoiHoc';  // Đảm bảo đường dẫn đúng
import BuoiHoc2Screen from './BuoiHoc2';  // Đảm bảo đường dẫn đúng

const Stack = createStackNavigator(); // Khai báo Stack

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === 'password') {
      navigation.navigate('ThoiKhoaBieu');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/random/800x600' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.title}>Đăng Nhập</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#888"
          />
          <Button title="Đăng nhập" onPress={() => handleLogin(email, password)} color="#007BFF" />
        </View>
      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Đăng Nhập' }}
        />
        <Stack.Screen 
          name="ThoiKhoaBieu" 
          component={ThoiKhoaBieuScreen} 
          options={{ title: 'Thời Khóa Biểu' }}
        />
        <Stack.Screen 
          name="BuoiHoc" 
          component={BuoiHocScreen} 
          options={{ title: 'Buổi Học' }}
        />
        <Stack.Screen 
          name="BuoiHoc2" 
          component={BuoiHoc2Screen} 
          options={{ title: 'Buổi Học 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loginBox: {
    width: '100%',
    maxWidth: 360,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
