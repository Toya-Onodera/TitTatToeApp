import React, { Component } from 'react'

import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from '../style/StyleSheetFile'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={Styles.gameChooseAttackViewLayer}>
        <View style={Styles.gameChooseAttackView}>

          <TouchableOpacity
            style={Styles.gamePlayFirstButton}
            onPress={() => this.props.onPress(0)}
          >
            <Icon name="clear" size={48} color="#FAFAFA" />
            <Text style={Styles.gamePlayChooseButtonText}>先攻</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.gameDrawFirstButton}
            onPress={() => this.props.onPress(1)}
          >
            <Icon name="radio-button-unchecked" size={48} color="#FAFAFA" />
            <Text style={Styles.gamePlayChooseButtonText}>後攻</Text>
          </TouchableOpacity>
        </View>
      </View>
  	)
  }
}