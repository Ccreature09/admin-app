import { StyleSheet } from 'react-native';


import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View className='flex-1 items-center content-center'>
      <Text className='font-bold text-5xl mt-24'>Calendar</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
