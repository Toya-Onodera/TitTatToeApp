import React, { Component } from 'react'

import {
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

// StyleSheet
import Styles from './style/StyleSheetFile'

// My Components
import GameChooseAttackView from './parts/GameChooseAttackView'
import GamePointView from './parts/GamePointView'
import GameTitTatToeView from './parts/GameTitTatToeView'

// Warning が出る問題を消す
// https://github.com/aksonov/react-native-router-flux/issues/3021
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      // 選択レイヤー表示フラグ
      isUseChooseAttack: true,

      // 先攻
      playFirstPoint: 0,

      //後攻
      drawFirstPoint: 0,
    }

    this._onPressChooseAttackButton = this._onPressChooseAttackButton.bind(this)
  }

  render() {
    const gameChooseAttackView = (this.state.isUseChooseAttack)
                                      ? <GameChooseAttackView isUseChooseAttack={this.state.isUseChooseAttack} onPress={this._onPressChooseAttackButton} />
                                      : null

    return (
      <View style={Styles.container}>
        {/* 上部分 */}
        <GamePointView
          playFirstPoint={this.state.playFirstPoint}
          drawFirstPoint={this.state.drawFirstPoint}
          turn={(this.state.playFirstPoint + this.state.drawFirstPoint)}
        />

        {/* 下部分 */}
        <GameTitTatToeView />
        
        {/* 先攻後攻選択レイヤー */}
        { gameChooseAttackView }
      </View>
    )
  }

  _onPressChooseAttackButton () {
    this.setState({
      isUseChooseAttack: false
    })
  }
}