import React, { Component } from 'react'

import {
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from './style/StyleSheetFile'

// My Components
import SettingCheckLabel from './parts/SettingCheckLabel'
import SettingAttackCheckbox from './parts/SettingAttackCheckbox'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this._changeIsFixedAttack = this._changeIsFixedAttack.bind(this)
    this._changeIsUsedMusic = this._changeIsUsedMusic.bind(this)
    this._changeAtackNum = this._changeAtackNum.bind(this)

    this.state = {
      /* TODO: 設定を保存できるようにする */
      isFixedAttack: false,
      isUsedMusic: true,
      attackNum: 1 // 1 -> 先攻、 2 -> 後攻
    }
  }

  render() {
    return (
      <View style={[Styles.container, Styles.settingContainer]}>
        {/* タイトル画面に戻る用のレイヤー */}
        <TouchableOpacity style={Styles.settingBackFunctionLayer} onPress={Actions.pop} activeOpacity={1} ></TouchableOpacity>
        
        <View style={Styles.settingMainView}>
          <Text style={Styles.settingHeading}>設定</Text>

          <SettingCheckLabel
            isChecked={this.state.isFixedAttack}
            text={'先攻、後攻の固定'}
            onPress={this._changeIsFixedAttack}
          />
          
          <SettingAttackCheckbox
            isChecked={this.state.isFixedAttack}
            attackNum={this.state.attackNum}
            onPress={this._changeAtackNum}
          />

          <SettingCheckLabel
            isChecked={this.state.isUsedMusic}
            text={'BGMを鳴らす'}
            onPress={this._changeIsUsedMusic}
          />
        </View>
      </View>
    )
  }

  // 先攻、後攻の固定を行うか設定する
  // TODO: 以前の設定を保持できるようにする
  _changeIsFixedAttack () {
    const invertedFlag = !this.state.isFixedAttack
    this.setState({ isFixedAttack: invertedFlag })
  }

  // BGMを使用するか設定を行う
  _changeIsUsedMusic () {
    const invertedFlag = !this.state.isUsedMusic
    this.setState({ isUsedMusic: invertedFlag })
  }

  // 先攻、後攻の固定を行うとき、先攻か後攻か設定する
  _changeAtackNum (attackNum) {
    if (attackNum !== this.state.attackNum) {
      this.setState({ attackNum: attackNum })
    }
  }
}