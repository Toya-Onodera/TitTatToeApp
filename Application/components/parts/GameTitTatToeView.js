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
import JudgmentLine from './JudgmentLine'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    // ゲームが進行できるかのフラグ代わり、試合が決まったあとなどに記号がついていないマスをタッチできないようにするときに使用
    const isGame = (Object.keys(this.props.gameReason).length > 0 && this.props.gameReason.result > 0)

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
              return (<TitTatToeButton
                        isTouched={!isGame}
                        value={item.value}
                        index={index}
                        onPress={this.props.onPress}
                      />)
            }}
          />

          <JudgmentLine
            isJudgmentLine={isGame}
            index={this.props.gameReason.position}
          />
        </View>
      </View>
    )
  }
}