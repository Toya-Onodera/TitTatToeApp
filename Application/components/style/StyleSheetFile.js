import { StyleSheet, Dimensions } from 'react-native';

const { width, height, scale } = Dimensions.get('window');

// すべてのスタイルをまとめておく
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  /*** Title ***/
  titleBackgroundImage: {
  	width: width,
  	height: height
  },
  titleButtonsView: {
  	position: 'absolute',
  	width: width,
  	height: 60,
  	bottom: 0,
  	left: 0,
  	flexDirection: 'row',
  },
  titleButtons: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  buttonText: {
  	color: '#FAFAFA'
  },
  goSettingButton: {
  	backgroundColor: '#91aec1'
  },
  goGameButton: {
  	backgroundColor: '#c96480'
  },
});