import React from 'react'
import { StyleSheet, Text, View, WebView } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{
            // comment in/out to see how it works/doesnt work
            uri:
              'https://staging.stencil.ink/pages/gloo/step-denver?gloo_user_token=7b236037-038f-4787-aeeb-4b313214502b&appToken=60e5814d-9271-43b4-8540-157d1c743651'
            // uri: 'https://polymer-staging.gloo.us/pages/step-denver'
          }}
          style={{ width: 320, height: 100 }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
