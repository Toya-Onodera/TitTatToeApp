import React, { Component } from 'react'

import {
  TouchableOpacity,
  View,
  Text,
  FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

// StyleSheet
import Styles from '../style/StyleSheetFile'

// My Components
import TitTatToeButton from './TitTatToeButton'

const numColumns = 3

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {    
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
            renderItem={({val, ind}) => {
              return (<TitTatToeButton value={val} index={ind} onPress={this.props.onPress} />)
            }}
          />
        </View>
      </View>
    )
  }
}