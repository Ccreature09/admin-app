import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center content-center'>
      <Text className='text-7xl mt-32'>Tab One</Text>
      
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}


