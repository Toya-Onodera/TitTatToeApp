import React, { Component } from 'react'

import {
  Image,
  TouchableOpacity,
  View,
  Text,
  CameraRoll,
  Alert
} from 'react-native'

import {
    Actions,
} from 'react-native-router-flux'

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
  		<TouchableOpacity
        style={this.props.style}
        onPress={() => Actions.home(this.props.action)}
      >
        <View style={Styles.saveButtonText}>
      		<Icon name={'save'} size={40} color="#ffffff" />
        	<Text style={Styles.buttonText}>保存</Text>
        </View>
      </TouchableOpacity>
  	)
  }
}