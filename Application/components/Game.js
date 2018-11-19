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
      isUseChooseAttack: true, // TODO: 開発時に邪魔だから一時的に

      // 先行後攻選択変数
      // 0 -> 先行、 1 -> 後攻
      isFirstAttack: 0,

      // 先攻
      playFirstPoint: 0,

      // 後攻
      drawFirstPoint: 0,

      // 得点管理用
      // 0 -> 記号なし、 10 -> ○ 、 -10 -> ×
      gameTitTatToeViewMaps: [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}]
    }

    this._onPressChooseAttackButton = this._onPressChooseAttackButton.bind(this)
    this._onPressTitTatToeButton = this._onPressTitTatToeButton.bind(this)
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
          turn={(this.state.isFirstAttack + this.state.playFirstPoint + this.state.drawFirstPoint)}
        />

        {/* 下部分 */}
        <GameTitTatToeView
          mapsData={this.state.gameTitTatToeViewMaps}
          onPress={this._onPressTitTatToeButton}
        />
        
        {/* 先攻後攻選択レイヤー */}
        { gameChooseAttackView }
      </View>
    )
  }

  // 先行後攻の選択
  _onPressChooseAttackButton (_isFirstAttack) {
    this.setState({
      isUseChooseAttack: false,
      isFirstAttack: _isFirstAttack
    })
  }

  // ○×の配列データを書き換える
  // setState ではインデックスを直接コピー出来ないのでこの方法を使用する
  _onPressTitTatToeButton (ind) {
    const gameTitTatToeViewMaps_Copy = this.state.gameTitTatToeViewMaps.slice()
    gameTitTatToeViewMaps_Copy[ind].value = ((this.state.isFirstAttack + this.state.playFirstPoint + this.state.drawFirstPoint) % 2 == 0) ? -10 : 10
    
    this.setState({
      gameTitTatToeViewMaps: gameTitTatToeViewMaps_Copy
    })

    this._addPoints()
  }

  // 得点を追加するメソッド
  _addPoints () {
    if ((this.state.isFirstAttack + this.state.playFirstPoint + this.state.drawFirstPoint) % 2 == 0) {
      this.setState(previousState => {
        return { playFirstPoint: previousState.playFirstPoint + 1 }
      })
    }

    else {
      this.setState(previousState => {
        return { drawFirstPoint: previousState.drawFirstPoint + 1 }
      })
    }
  }
}