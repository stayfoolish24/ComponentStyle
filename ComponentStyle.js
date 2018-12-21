/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { StyleSheet, Text, View, Image } from "react-native"

class ComponentStyle extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Text 컴포넌트 테스트 */}
        <Text>
          The Quick <Em>brown</Em> fox jumped over the lazy <Strong>dog</Strong>
        </Text>
        {/* Image 컴포넌트 테스트 */}
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/header_logo.png"
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    )
  }
}

// Text 컴포넌트 테스트
class Strong extends Component {
  render() {
    return <Text style={styles.bold}>{this.props.children}</Text>
  }
}

class Em extends Component {
  render() {
    return <Text style={styles.italic}>{this.props.children}</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  }
})

export default ComponentStyle
