import React, { Component } from 'react'

import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from '../style/StyleSheetFile'

import AttackChooseCheckIcon from './AttackChooseCheckIcon'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    // 設定できるとき
    if (this.props.isChecked) {
      return (
        <View style={Styles.settingChooseAttack} >

          <TouchableOpacity
            style={[Styles.settingCheckLabelChildButton, Styles.playFirstButton]}
            onPress={() => this.props.onPress(1)}
            activeOpacity={1}
          >
            <AttackChooseCheckIcon attackNum={this.props.attackNum} myNum={1} />
            <Text style={Styles.settingChooseButtonText}>先攻</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.settingCheckLabelChildButton, Styles.drawFirstButton]}
            onPress={() => this.props.onPress(2)}
            activeOpacity={1}
          >
            <AttackChooseCheckIcon attackNum={this.props.attackNum} myNum={2} />
            <Text style={Styles.settingChooseButtonText}>後攻</Text>
          </TouchableOpacity>
        </View>
    	)
    }

    // 設定できないとき、タッチできないようにする
    else {
      return (
        <View style={Styles.settingChooseAttack} >
          <View style={[Styles.settingCheckLabelChildButton, Styles.settingDontChooseButton]}>
            <Text style={Styles.settingDontChooseButtonText}>先攻</Text>
          </View>

          <View style={[Styles.settingCheckLabelChildButton, Styles.settingDontChooseButton]}>
            <Text style={Styles.settingDontChooseButtonText}>後攻</Text>
          </View>
        </View>
      )
    }
  }
}