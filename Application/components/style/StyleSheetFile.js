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

  /*** Setting ***/
  settingContainer: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  settingBackFunctionLayer: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  settingMainView: {
    width: (width - 60),
    height: 280,
    marginTop: (height / 2) - 350,
    marginLeft: 30,
    backgroundColor: '#FAFAFA'
  },
  settingHeading: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    fontSize: 20,
    color: '#91AEC1',
    borderBottomWidth: 0.8,
    borderColor: '#91AEC1'
  },
  settingCheckLabel: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 16,
    paddingLeft: 10
  },
  settingButtonText: {
    marginLeft: 12,
    fontSize: 18,
    color: '#424242'
  },
  settingChooseAttack: {
    flexDirection: 'row'
  },
  settingCheckLabelChildButton: {
    position: 'relative',
    flex: 1,
    paddingTop: 42,
    paddingBottom: 42,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  playFirstButton: {
    backgroundColor: '#DFAEB4'
  },
  drawFirstButton: {
    backgroundColor: '#119DA4'
  },
  settingChooseButtonText: {
    fontSize: 16,
    color: '#FAFAFA',
    textAlign: 'center'
  },
  attackChooseCheckIcon: {
    position: 'absolute',
    alignSelf: 'center',
    transform: [{translateX: -45}]
  },
  settingDontChooseButton: {
    backgroundColor: '#E0E0E0'
  },
  settingDontChooseButtonText: {
    fontSize: 16,
    color: '#9E9E9E',
    textAlign: 'center'
  },

  /*** MainGame ***/
  gamePointView: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  gameLeftPointView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#DFAEB4',
    justifyContent: 'flex-end'
  },
  gameRightPointView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#119DA4',
    justifyContent: 'flex-start'
  },
  gamePoint: {
    width: height - (width + 170),
    height: height - (width + 170),
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    alignSelf: 'center'
  },
  gamePointText: {
    alignSelf: 'center',
    fontSize: 72,
    fontFamily: 'PocketCalculator'
  },
  gamePointIconCommon: {
    position: 'absolute',
    alignSelf: 'center'
  },
  gamePointIconPositionLeft: {
    transform: [{translateX: (height - (width + 170)) * -1.5}]
  },
  gamePointIconPositionRight: {
    transform: [{translateX: (height - (width + 170)) * 1.5}]
  },
  gameTitTatToeView: {
    width: width,
    height: width - 50,
    backgroundColor: '#FBF8EF'
  }
});