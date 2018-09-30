import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from '../style/StyleSheetFile'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.attackNum === this.props.myNum) {
      return <Icon name="check-circle" size={24} color="#FAFAFA" style={Styles.attackChooseCheckIcon} />
    }

    return null
  }
}