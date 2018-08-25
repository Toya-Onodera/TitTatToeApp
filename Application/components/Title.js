import React, { Component } from 'react'

import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'

import {
    Actions
} from 'react-native-router-flux'

import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from './style/StyleSheetFile'

// My Components
import TitleButton from './parts/TitleButton'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this._actionSetting = this._actionSetting.bind(this)
    this._actionGame = this._actionGame.bind(this)
  }

  render() {
    return (
      <View style={Styles.container}>
        <Image
          style={Styles.titleBackgroundImage}
          source={require('./materials/image/TitleBackgroundImage.png')}
        />

        <View style={Styles.titleButtonsView}>
          <TitleButton
            style={[Styles.titleButtons, Styles.goSettingButton]}
            action={this._actionSetting}
            text={'設定画面へ'}
          />

          <TitleButton
            style={[Styles.titleButtons, Styles.goGameButton]}
            action={this._actionGame}
            text={'ゲームを開始する'}
          />
        </View>
      </View>
    )
  }

  _actionSetting () {
    Actions.Setting()
  }

  _actionGame () {
    Actions.Game()
  }
}