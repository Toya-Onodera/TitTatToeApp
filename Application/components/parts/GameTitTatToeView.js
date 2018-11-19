import React, { Component } from 'react'

import {
  TouchableOpacity,
  View,
  Text,
  FlatList
} from 'react-native'

// StyleSheet
import Styles from '../style/StyleSheetFile'

// My Components
import TitTatToeButton from './TitTatToeButton'

const numColumns = 3

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    // ゲーム終了時に表示するラインの位置を指定するときに使用する配列、Styles内の値を入れる
    const judgmentLinePositionList = [
      Styles.judgmentLineForVerticalLeft,
      Styles.judgmentLineForVerticalCenter,
      Styles.judgmentLineForVerticalRight,
      Styles.judgmentLineForHorizontalTop,
      Styles.judgmentLineForHorizontalCenter,
      Styles.judgmentLineForHorizontalBottom,
      Styles.judgmentLineForSlantingRight,
      Styles.judgmentLineForSlantingLeft
    ]

    // ゲームが進行できるかのフラグ代わり、試合が決まったあとなどに記号がついていないマスをタッチできないようにするときに使用
    const isGame = (Object.keys(this.props.gameReason).length > 0 && this.props.gameReason.result > 0)
    const judgmentLine = (isGame) ? <View style={[Styles.judgmentLine, judgmentLinePositionList[this.props.gameReason.position]]}></View> : null                            

    return (
      <View style={Styles.gameTitTatToeView}>
        <View style={Styles.gameTitTatToeViewHeightStyle}>
          <FlatList
            style={Styles.gameTitTatToeTable}
            horizontal={false}
            numColumns={3}
            data={this.props.mapsData}
            extraData={this.props}
            keyExtractor={(val, ind) => `TitTatToeButton-${ind}`}
            renderItem={({item, index}) => {
              return (<TitTatToeButton isTouched={!isGame} value={item.value} index={index} onPress={this.props.onPress} />)
            }}
          />

          { judgmentLine }
        </View>
      </View>
    )
  }
}