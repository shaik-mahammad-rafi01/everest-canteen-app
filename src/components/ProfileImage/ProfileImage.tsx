import React, { useState } from 'react';
import { Alert, Image, Platform, View } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { ProfileImageStyles } from './ProfileImageStyles';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

export const ProfileImage = () => {
  const [image, setImage] = useState<string | undefined>();

  const handleProfileImage = async () => {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;

    try {
      const result = await request(permission);
      const options: ImageLibraryOptions = {
        mediaType: 'photo',
        quality: 1,
      };

      switch (result) {
        case RESULTS.GRANTED:
          const response = await launchImageLibrary(options);
          if (!response.didCancel && response.assets) {
            const MyNewProfileImage = response.assets[0].uri;
            setImage(MyNewProfileImage);
          }
          break;

        case RESULTS.LIMITED:
          const Response = await launchImageLibrary(options);
          if (!Response.didCancel && Response.assets) {
            const MyNewProfileImage = Response.assets[0].uri;
            setImage(MyNewProfileImage);
          }
          break;

        case RESULTS.DENIED:
          Alert.alert('Permision Denied');
          break;

        case RESULTS.BLOCKED:
          Alert.alert('Permission is blocked and not requestable again');
          break;

        case RESULTS.UNAVAILABLE:
          Alert.alert('This feature is unavailable in this device');
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };
  return (
    <View>
      <Pressable onPress={handleProfileImage}>
        <Image
          style={ProfileImageStyles.profileImage}
          source={{
            uri:
              image ||
              'https://img.icons8.com/?size=100&id=44614&format=png&color=000000',
          }}
        />
      </Pressable>
    </View>
  );
};
