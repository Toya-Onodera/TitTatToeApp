import React, { Component } from 'react'

import {
  Platform,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import {
    Router,
    Scene,
    Stack,
    Lightbox
} from 'react-native-router-flux'

// My Component
import Title from './components/Title'
import Game from './components/Game'
import Setting from './components/Setting'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        {/*
          画面遷移の流れ
          Title ──┬── Game
                  └── Setting
        */}

        <Stack key="root">
          <Lightbox
            hideNavBar={true}
          >
            <Scene
              key="Title"
              component={Title}
              hideNavBar={true}
            />

              <Scene
                key='Setting'
                component={Setting}
                hideNavBar={true}
              />
          </Lightbox>
            
            <Scene
              key='Game'
              component={Game}
              title='対戦画面'
              navBarButtonColor='#FAFAFA'
              navigationBarStyle={{backgroundColor: '#3F5465'}}
            />            
        </Stack>
      </Router>
    )
  }
}
