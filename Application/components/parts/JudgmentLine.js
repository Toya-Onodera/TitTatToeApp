import React, { Component } from 'react'

import {
  Platform,
  View,
  LayoutAnimation,
  Dimensions
} from 'react-native'

// StyleSheet
import Styles from '../style/StyleSheetFile'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
    	width: 0
    }
  }

  componentDidMount () {
  	LayoutAnimation.easeInEaseOut();
    //LayoutAnimation.spring();
    //setTimeout(() => {this.setState({ width: Dimensions.get('window').width - 64 })}, 1000)
  }

  render() {
    // ゲーム終了時に表示するラインの位置を指定するときに使用する配列、Styles内の値を入れる
    const judgmentLinePositionList = [
      Styles.judgmentLineForVerticalLeft,
      Styles.judgmentLineForVerticalCenter,
      Styles.judgmentLineForVerticalRight,
      Styles.judgmentLineForHorizontalCenter,
      Styles.judgmentLineForHorizontalTop,
      Styles.judgmentLineForHorizontalBottom,
      Styles.judgmentLineForSlantingRight,
      Styles.judgmentLineForSlantingLeft
    ]

  	return (this.props.isJudgmentLine)
  			? <View style={[Styles.judgmentLine, judgmentLinePositionList[this.props.index], { width: this.state.width }]}></View>
  			: null
  }
}