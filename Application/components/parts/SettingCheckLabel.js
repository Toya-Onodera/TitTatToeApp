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
    const checkIcon = (this.props.isChecked)
                         ? (<Icon name="check-box" size={24} color="#2196f3" />)
                         : (<Icon name="check-box-outline-blank" size={24} color="#424242" />)
    
    return (
      <TouchableOpacity
        style={Styles.settingCheckLabel}
        onPress={this.props.onPress}
      >
        {checkIcon}

        <Text style={Styles.settingButtonText}>
          { this.props.text }
        </Text>
      </TouchableOpacity>
  	)
  }
}