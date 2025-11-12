import React, { useState } from 'react';
import { Image, Platform, View } from 'react-native';
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

      if (result === RESULTS.GRANTED) {
        console.log('Access granted');

        const options: ImageLibraryOptions = {
          mediaType: 'photo',
          quality: 1,
        };
        const response = await launchImageLibrary(options);

        if (!response.didCancel && response.assets) {
          const myNewImg = response.assets[0].uri;
          setImage(myNewImg);
        }
      } else if (result === RESULTS.DENIED) {
        console.log('Permission denied');
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
