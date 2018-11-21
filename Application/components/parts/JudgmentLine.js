import React, { Component } from 'react'

import {
  Platform,
  View,
  Animated,
  Dimensions,
  UIManager
} from 'react-native'

// StyleSheet
import Styles from '../style/StyleSheetFile'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
    	animationWidth: new Animated.Value(0)
    }
  }

  componentWillReceiveProps (nextProps) {
  	if (nextProps.isJudgmentLine) {
			setTimeout(() => {
				Animated.spring(
				this.state.animationWidth,
					{
						toValue: (nextProps.index <= 5) ? Dimensions.get('window').width - 64 : Dimensions.get('window').width + 36
					}
				).start()
			}, 300)
  	}
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
			? <Animated.View style={[Styles.judgmentLine, judgmentLinePositionList[this.props.index], { width: this.state.animationWidth }]} />
			: null
  }
}