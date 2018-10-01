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
      <View style={Styles.gameTitTatToeView}>

      </View>
  	)
  }
}