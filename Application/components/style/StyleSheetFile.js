import { StyleSheet, Dimensions } from 'react-native';

const { width, height, scale } = Dimensions.get('window');

// すべてのスタイルをまとめておく
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});