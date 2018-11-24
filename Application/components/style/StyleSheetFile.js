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
  gameChooseAttackViewLayer: {
    position: 'absolute',
    width: width,
    height: height - 80,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  gameChooseAttackView: {
    width: 280,
    height: 280,
    padding: 6,
    backgroundColor: '#FAFAFA'
  },
  gamePlayFirstButton: {
    flex: 1,
    height: 64,
    marginBottom: 3,
    paddingLeft: 24,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DFAEB4'
  },
  gameDrawFirstButton: {
    flex: 1,
    height: 64,
    marginTop: 3,
    paddingLeft: 24,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#119DA4'
  },
  gamePlayChooseButtonText: {
    marginRight: 16,
    color: '#FAFAFA',
    fontSize: 72,
    fontFamily: 'ZakkuriGothic'
  },
  gamePointView: {
    position: 'relative',
    flex: 3.5,
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
    width: width / 4,
    height: width / 4,
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    alignSelf: 'center'
  },
  gamePointText: {
    alignSelf: 'center',
    fontSize: width / 5,
    fontFamily: 'PocketCalculator'
  },
  gamePointIconCommon: {
    position: 'absolute',
    alignSelf: 'center'
  },
  gamePointIconPositionLeft: {
    transform: [{ translateX: (width / 4) * -1.5 }]
  },
  gamePointIconPositionRight: {
    transform: [{ translateX: (width / 4) * 1.5 }]
  },
  gameTitTatToeView: {
    flex: 5.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF8EF'
  },
  gameTitTatToeViewHeightStyle: {
    position: 'relative',
    width: width - 48,
    height: width - 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameTitTatToeTable: {
    flex: 1,
    margin: 16,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#BBADA0'
  },
  titTatToeButton: {
    width: (width - 112) / 3,
    height: (width - 112) / 3,
    marginBottom: 8,
    marginRight: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titTatToeButtonNone: {
    backgroundColor: '#D8DAD3'
  },
  titTatToeButtonCircle: {
    backgroundColor: '#119DA4'
  }, 
  titTatToeButtonCross: {
    backgroundColor: '#DFAEB4'
  },
  judgmentLine: {
    position: 'absolute',
    width: (width - 64),
    height: width / 10,
    backgroundColor: '#F3C969'
  },
  judgmentLineForVerticalLeft: {
    transform: [{ translateX: -(width / 4) }, { rotate: '90deg' }]
  },
  judgmentLineForVerticalCenter: {
    transform: [{ rotate: '90deg' }]
  },
  judgmentLineForVerticalRight: {
    transform: [{ translateX: (width / 4) }, { rotate: '90deg' }]
  },
  judgmentLineForHorizontalTop: {
    // わかりやすいように残しておく
  },
  judgmentLineForHorizontalCenter: {
    transform: [{ translateY: -(width / 4) }]
  },
  judgmentLineForHorizontalBottom: {
    transform: [{ translateY: (width / 4) }]
  },
  judgmentLineForSlantingRight: {
    transform: [{ rotate: '45deg' }]
  },
  judgmentLineForSlantingLeft: {
    transform: [{ rotate: '-45deg' }]
  }
});