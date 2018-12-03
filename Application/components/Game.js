import React, { Component } from 'react'

import {
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  UIManager,
  LayoutAnimation
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

    // LayoutAnimation を使用できるようにする
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

    this.state = {
      // 選択レイヤー表示フラグ
      isUseChooseAttack: true,

      // ゲームフラグ用にも使用
      gameReason: {},

      // 先行後攻選択変数
      // false -> 先行、 true -> 後攻
      isFirstAttack: null,

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

  componentWillUpdate(nextProps, nextState) {
    if (this.state.isUseChooseAttack) {
      LayoutAnimation.easeInEaseOut()
    }
  }

  componentDidUpdate (prevProps, prevState) {
    // TODO: 敵が先行時にはじめに動作させる
    if (prevState.isUseChooseAttack && this.state.isFirstAttack && this.state.playFirstPoint === 0) {
      setTimeout(() => { this._goEmeny() }, 500)
    }
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
        <GameTitTatToeView
          mapsData={this.state.gameTitTatToeViewMaps}
          gameReason={this.state.gameReason}
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
    let gameTitTatToeViewMaps_Copy = this.state.gameTitTatToeViewMaps.slice()
    gameTitTatToeViewMaps_Copy[ind].value = ((this.state.playFirstPoint + this.state.drawFirstPoint) % 2 === 0) ? -10 : 10
    
    this.setState({
      gameTitTatToeViewMaps: gameTitTatToeViewMaps_Copy
    })

    // 得点を追加する
    this._addPoints()

    // 勝利判定を行い、試合が決まれば結果を表示
    this._winnerResult()
    
    // 敵の動作へ
    setTimeout(() => {this._goEmeny()}, 500)
  }   
    
  // 得点を追加するメソッド
  _addPoints () {
    if ((this.state.isFirstAttack + this.state.playFirstPoint + this.state.drawFirstPoint) % 2 === 0) {
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

  // 勝利判定を行うメソッド
  // ○ が勝利なら result の値が 1、 × が勝利なら 2、 試合が決まっていない or 引き分けなら 0
  // position の値が 0 -> 縦の左側、 1 -> 縦の中央、 2 -> 縦の右側、 3 -> 横の上側、 4 -> 横の中央、 5 -> 横の下側、 6 -> 斜めの左側が上、 7 -> 斜めの右側が上、 null -> 引き分け 
  _judgmentGame (_gameTitTatToeViewMaps) {
    let i, j;

    // 確認用 (計算結果を代入) の変数
    const gameTitTatToeViewMaps_Copy = Object.assign({}, _gameTitTatToeViewMaps)

    // 縦
    for (i = 0; i < 3; i++) {
      lineSum = 0

      for (j = 0; j < 3; j++) {
        lineSum += gameTitTatToeViewMaps_Copy[i + (3 * j)].value
      }

      switch (lineSum) {
        case 30:
          return { result: 1, position: i }
        case -30:
          return { result: 2, position: i }
      }
    }

    // 横
    for (i = 0; i < 3; i++) {
      lineSum = 0

      for (j = 0; j < 3; j++) {
        lineSum += gameTitTatToeViewMaps_Copy[(3 * i) + j].value
      }

      switch (lineSum) {
        case 30:
          return { result: 1, position: i + 3 }
        case -30:
          return { result: 2, position: i + 3 }
      }
    }

    // 1、5、9 の斜め
    lineSum = gameTitTatToeViewMaps_Copy[0].value + gameTitTatToeViewMaps_Copy[4].value + gameTitTatToeViewMaps_Copy[8].value
    
    switch (lineSum){
      case 30:
        return { result: 1, position: 6 }
      case -30:
        return { result: 2, position: 6 }
    }

    // 3、5、7 の斜め
    lineSum = gameTitTatToeViewMaps_Copy[2].value + gameTitTatToeViewMaps_Copy[4].value + gameTitTatToeViewMaps_Copy[6].value

    switch (lineSum){
      case 30:
        return { result: 1, position: 7 }
      case -30:
        return { result: 2, position: 7 }
    }

    // 引き分け
    if ((this.state.playFirstPoint + this.state.drawFirstPoint) === 8)
      return { result: 0, position: null }

    return { result: null, position: null }
  }

  // 勝利判定のあとの動作メソッド
  _winnerResult () {
    const judgmentResult = this._judgmentGame(this.state.gameTitTatToeViewMaps)
    
    // 試合が決まったラインを表示するために state を変更
    this.setState({
      gameReason: judgmentResult
    })
  }

  // 仮想敵が動作を行うメソッド、ミニマックス法を使用して動作する
  _goEmeny () {
    if (!(Object.keys(this.state.gameReason).length > 0 && this.state.gameReason.result > 0)) {
      /*** とりあえず適当な動作をする敵を作成 ***/
      const turn = (this.state.playFirstPoint + this.state.drawFirstPoint)
      const gameTitTatToeViewMaps_Copy = Object.assign({}, this.state.gameTitTatToeViewMaps)
      //const priorityIndex = [4, 0, 8, 2, 6, 1, 7, 3, 5]
      
      /*priorityIndex.some(e => {
        if (this.state.gameTitTatToeViewMaps[e].value === 0) {
          let gameTitTatToeViewMaps_Copy = this.state.gameTitTatToeViewMaps.slice()
          gameTitTatToeViewMaps_Copy[e].value = ((this.state.playFirstPoint + this.state.drawFirstPoint) % 2 == 0) ? -10 : 10
          
          this.setState({
            gameTitTatToeViewMaps: gameTitTatToeViewMaps_Copy
          })
          
          // 得点を追加する
          this._addPoints()

          // 勝利判定を行い、試合が決まれば結果を表示
          this._winnerResult()

          return true
        }
      })*/

      // TODO: ミニマックス法で実装する
      //this._resultMinMax(turn, gameTitTatToeViewMaps_Copy, priorityIndex.concat(), 4)
      this._resultMinMax(turn, gameTitTatToeViewMaps_Copy, 4)
      //alert(this._resultMinMax(turn, gameTitTatToeViewMaps_Copy, priorityIndex.concat(), 4))
      //minMax.resultMinMax()
      /*const a = [1, 1, 1]
      this._resultMiniMax(a.slice());*/
      //alert(a)
      // ((this.state.playFirstPoint + this.state.drawFirstPoint) % 2 == 0) ? -10 : 10
    }
  }

  // MiniMax 法で探索を行う関数
  // turn -> 計算上でのターン
  // gameVirtualStatus -> マス目の状況が格納されている変数
  // availableIndex -> まだ値が格納されていないマス目
  // putVirtualIndex -> その関数内で置いたマス番号
  //_resultMinMax (turn, gameVirtualStatus, availableIndex, putedVirtualIndex) {
    _resultMinMax (turn, gameVirtualStatus, putedVirtualIndex) {
    const priorityIndex = [4, 0, 8, 2, 6, 1, 7, 3, 5]
    
    // 試合が決まっているか確認
    const judgmentResult = this._judgmentGame(gameVirtualStatus)
    
    // 評価できる状態になったら
    if (judgmentResult.result === 0) {
      alert(gameVirtualStatus)
      return
    }

    // 格納されていないマス目の数だけループし、探索を行う
    priorityIndex.forEach((e, i) => {
      // １マス１マス確認するため再帰を使用
      if (gameVirtualStatus[e].value === 0) {
        // 置いたマスを格納する
        //alert(availableIndex)

        // 置いたマスは除外する
        //const putVirtualIndex = availableIndex.splice(i, 1)
        
        // 配列に足跡をつける
        let gameVirtualStatus_Copy = JSON.parse(JSON.stringify(gameVirtualStatus))
        gameVirtualStatus_Copy[e].value = (turn % 2 === 0) ? -10 : 10

        // 計算できなくなるまで再帰
        //this._resultMinMax(turn++, gameVirtualStatus_Copy, putVirtualIndex.concat(), e)
        this._resultMinMax(turn++, gameVirtualStatus_Copy, e)
        //
      }
    })
  }
}