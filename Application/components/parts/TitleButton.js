import React, { Component } from 'react'

import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native'

// StyleSheet
import Styles from '../style/StyleSheetFile'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<TouchableOpacity
        style={this.props.style}
        onPress={this.props.action}
      >
        <Text style={Styles.buttonText}>
          { this.props.text }
        </Text>
      </TouchableOpacity>
  	)
  }
}